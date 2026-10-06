var sDecisionDateCriterionTitle = "Дата подтверждения отпуска";
var sHrCriterionTitle = "ID специалиста ОК";

var sRequestTypeCode = "afl_planned_vacation_request";

function GetOptCriterionValue(sCriterionTitle, sFallbackType) {
	aCrits = [];
	try {
		aCrits = ArraySelectAll(_CRITERIONS);
	} catch (e) {
		return undefined;
	}

	oCrit = ArrayOptFind(aCrits, "String(This.column_title) == '" + sCriterionTitle + "'");
	if (oCrit == undefined && sFallbackType != undefined)
		oCrit = ArrayOptFind(aCrits, "String(This.type) == '" + sFallbackType + "'");
	if (oCrit == undefined || oCrit.flag_active != true || oCrit.value.HasValue != true)
		return undefined;

	return oCrit.value.Value;
}

function GetCustomElemSqlExpr(sFieldName) {
	return "(xpath('//custom_elems/custom_elem[name=''" + sFieldName + "'']/value/text()', rq.data))[1]::text";
}

function GetSameDaySqlCondition(sValueExpr, dDate) {
	sSqlDay = SqlLiteral(DateNewTime(dDate)) + "::timestamp";
	return "(" + sValueExpr + " LIKE to_char(" + sSqlDay + ", 'DD.MM.YYYY') || '%'" +
		" OR " + sValueExpr + " LIKE to_char(" + sSqlDay + ", 'YYYY-MM-DD') || '%')";
}

function GetRequestsData(dDecisionDate) {
	oRequestType = ArrayOptFirstElem(XQuery(
		"for $rt in request_types where $rt/code = " + XQueryLiteral(sRequestTypeCode) + " return $rt/Fields('id')"
	));
	if (oRequestType == undefined)
		return [];

	sQuery =
		"SELECT rqs.id, rqs.person_id, rqs.person_fullname, rqs.person_subdivision_name, rqs.create_date, " +
		GetCustomElemSqlExpr("is_confirmed") + " AS is_confirmed, " +
		GetCustomElemSqlExpr("vacation_start_date") + " AS vacation_start_date, " +
		GetCustomElemSqlExpr("vacation_end_date") + " AS vacation_end_date, " +
		GetCustomElemSqlExpr("vacation_days_number") + " AS vacation_days_number " +
		"FROM dbo.requests rqs JOIN dbo.request rq ON rq.id = rqs.id " +
		"WHERE rqs.request_type_id = " + OptInt(oRequestType.id);
	if (dDecisionDate != undefined)
		sQuery = sQuery + " AND " + GetSameDaySqlCondition(GetCustomElemSqlExpr("decision_date"), dDecisionDate);

	return ArraySelectAll(XQuery("sql:" + sQuery));
}

function GetCollaboratorsData(aReqArr) {
	aCollDataResult = [];
	if (ArrayOptFirstElem(aReqArr) != undefined) {
		sPersonIdsStr = ArrayMerge(aReqArr, "This.person_id", ", ");
		aCollDataResult = ArraySelectAll(XQuery(
			"for $c in collaborators where MatchSome($c/id, (" + sPersonIdsStr + ")) return $c/Fields('id', 'position_id', 'position_parent_id')"
		));
	}
	return aCollDataResult;
}

function GetPositionsData(aCollArr) {
	aPositionsResult = [];
	if (ArrayOptFirstElem(aCollArr) != undefined) {
		aPositionIdsFound = ArrayExtract(ArraySelect(aCollArr, "OptInt(This.position_id) != undefined"), "This.position_id");
		if (ArrayOptFirstElem(aPositionIdsFound) != undefined) {
			sPositionIdsStr = ArrayMerge(aPositionIdsFound, "This", ", ");
			aPositionsResult = ArraySelectAll(XQuery(
				"for $p in positions where MatchSome($p/id, (" + sPositionIdsStr + ")) return $p/Fields('id', 'name')"
			));
		}
	}
	return aPositionsResult;
}

var iHrBossTypeID = OptInt(tools.get_params_code_library("libAflDocuments").GetOptProperty("iHRbossType"), 0);
var aHrIdsBySubdivision = [];

function GetSubdivisionHrIds(iSubdivisionID) {
	oCached = ArrayOptFindByKey(aHrIdsBySubdivision, iSubdivisionID, "subdivision_id");
	if (oCached != undefined)
		return oCached.hr_ids;

	aHrIds = [];
	if (iHrBossTypeID != 0) {
		oBossRes = tools.call_code_library_method("libAflDocuments", "GetBossByTypeID", [iSubdivisionID, iHrBossTypeID]);
		if (oBossRes != undefined && oBossRes.result != undefined)
			aHrIds = oBossRes.result;
	}

	oCached = new Object();
	oCached.SetProperty("subdivision_id", iSubdivisionID);
	oCached.SetProperty("hr_ids", aHrIds);
	aHrIdsBySubdivision.push(oCached);

	return aHrIds;
}

var aResult = [];

var vDecisionDateRaw = GetOptCriterionValue(sDecisionDateCriterionTitle, "date");
var dRawDate = vDecisionDateRaw != undefined ? OptDate(vDecisionDateRaw) : undefined;
var dDecisionDateFilter = dRawDate != undefined ? DateNewTime(dRawDate) : undefined;

var iHrFilter = OptInt(GetOptCriterionValue(sHrCriterionTitle));

var aRequests = GetRequestsData(dDecisionDateFilter);
var aCollData = GetCollaboratorsData(aRequests);
var aPositions = GetPositionsData(aCollData);

var oRequest, oColl, oPosition, oResultItem;
var dVacationStart, dVacationEnd, sDaysCount, sPositionName, iPositionID, iSubdivisionID;

for (oRequest in aRequests) {
	if (tools_web.is_true(oRequest.is_confirmed) != true)
		continue;

	sPositionName = "";
	iSubdivisionID = undefined;
	oColl = ArrayOptFind(aCollData, "OptInt(This.id) == " + OptInt(oRequest.person_id));
	if (oColl != undefined) {
		iSubdivisionID = OptInt(oColl.position_parent_id);
		iPositionID = OptInt(oColl.position_id);
		if (iPositionID != undefined) {
			oPosition = ArrayOptFind(aPositions, "OptInt(This.id) == " + iPositionID);
			if (oPosition != undefined)
				sPositionName = oPosition.name;
		}
	}

	if (iHrFilter != undefined) {
		if (iSubdivisionID == undefined)
			continue;
		if (ArrayOptFind(GetSubdivisionHrIds(iSubdivisionID), "OptInt(This) == " + iHrFilter) == undefined)
			continue;
	}

	dVacationStart = OptDate(oRequest.vacation_start_date);
	dVacationEnd = OptDate(oRequest.vacation_end_date);
	sDaysCount = IsEmptyValue(oRequest.vacation_days_number) ? "" : String(oRequest.vacation_days_number);

	oResultItem = new Object();
	oResultItem.SetProperty("PrimaryKey", OptInt(oRequest.id));
	oResultItem.SetProperty("fullname", oRequest.person_fullname);
	oResultItem.SetProperty("create_date", StrDate(OptDate(oRequest.create_date), false));
	oResultItem.SetProperty("subdivision", oRequest.person_subdivision_name);
	oResultItem.SetProperty("position", sPositionName);
	oResultItem.SetProperty("vacation_start_date", dVacationStart != undefined ? StrDate(dVacationStart, false) : "");
	oResultItem.SetProperty("vacation_end_date", dVacationEnd != undefined ? StrDate(dVacationEnd, false) : "");
	oResultItem.SetProperty("days_count", sDaysCount);

	aResult.push(oResultItem);
}

return aResult;