function AlertLog(log) {
	var sLog = log;
	logType = ObjectType(log);
	if (DataType(log) == "object" && (logType == "JsObject" || logType == "JsArray" || logType == "XmElem"))
		sLog = tools.object_to_text(log, "json");
	LogEvent(sLogName, sLog);
}


var sDecisionDateCriterionTitle = "Дата подтверждения отпуска";
var sHrCriterionTitle = "ID специалиста ОК";
var sRequestTypeCode = "afl_planned_vacation_request";

function GetReportDate() {
	return DateOffset(DateNewTime(Date()), -86400);
}

function GetCustomElemSqlExpr(sFieldName) {
	return "(xpath('//custom_elems/custom_elem[name=''" + sFieldName + "'']/value/text()', rq.data))[1]::text";
}

function GetSameDaySqlCondition(sValueExpr, dDate) {
	sSqlDay = SqlLiteral(DateNewTime(dDate)) + "::timestamp";
	return "(" + sValueExpr + " LIKE to_char(" + sSqlDay + ", 'DD.MM.YYYY') || '%'" +
		" OR " + sValueExpr + " LIKE to_char(" + sSqlDay + ", 'YYYY-MM-DD') || '%')";
}

function ApplyReportDateFilter(teReport, dReportDate) {
	oCrit = ArrayOptFind(ArraySelectAll(teReport.criterions), "String(This.column_title) == '" + sDecisionDateCriterionTitle + "'");
	if (oCrit == undefined) {
		oCrit = ArrayOptFind(ArraySelectAll(teReport.criterions), "String(This.type) == 'date'");
	}
	if (oCrit == undefined) {
		oCrit = teReport.criterions.AddChild();
		oCrit.column_title = sDecisionDateCriterionTitle;
		oCrit.type = "date";
	}

	oCrit.flag_active = true;
	oCrit.value = dReportDate;
}

function ApplyHrFilter(teReport, iHrPersonID) {
	oCrit = ArrayOptFind(ArraySelectAll(teReport.criterions), "String(This.column_title) == '" + sHrCriterionTitle + "'");
	if (oCrit == undefined) {
		if (iHrPersonID == undefined)
			return;
		oCrit = teReport.criterions.AddChild();
		oCrit.column_title = sHrCriterionTitle;
		oCrit.type = "string";
	}

	oCrit.flag_active = iHrPersonID != undefined;
	oCrit.value = iHrPersonID != undefined ? String(iHrPersonID) : "";
}

function ExportCustomReportToFile(iReportID, iUserID, dReportDate, iHrPersonID, sOutType) {
	var sFileUrl;
	try {
		docReport = tools.open_doc(iReportID);
		if (docReport == undefined) {
			AlertLog("Не найден документ отчёта id=" + iReportID);
			return undefined;
		}

		docReport.TopElem.initiator_person_id = iUserID;
		ApplyReportDateFilter(docReport.TopElem, dReportDate);
		ApplyHrFilter(docReport.TopElem, iHrPersonID);
		if (tools.build_report_remote(iReportID, docReport.TopElem, null) == null) {
			AlertLog("Не удалось построить отчёт id=" + iReportID);
			return undefined;
		}

		sFileUrl = tools_report.custom_report_export_to_file(iReportID, iUserID, sOutType, undefined);
	} catch (err) {
		AlertLog("Ошибка при экспорте отчёта id=" + iReportID + " (" + sOutType + "): " + err);
	}
	return sFileUrl;
}

function GetGroupCollaboratorIDs(iGroupID) {
	var aResult = [];

	iGroupID = OptInt(iGroupID);
	if (iGroupID == undefined) {
		return aResult;
	}

	aMembers = ArraySelectAll(XQuery(
		"for $gc in group_collaborators where $gc/group_id = " + iGroupID + " return $gc/Fields('collaborator_id')"
	));

	for (oMember in aMembers) {
		iMemberID = OptInt(oMember.collaborator_id);
		if (iMemberID != undefined && ArrayOptFind(aResult, "OptInt(This) == " + iMemberID) == undefined) {
			aResult.push(iMemberID);
		}
	}

	return aResult;
}

var iHrBossTypeID = OptInt(tools.get_params_code_library("libAflDocuments").GetOptProperty("iHRbossType"), 0);
var aHrIdsBySubdivision = [];

function GetSubdivisionHrIds(iSubdivisionID) {
	oCached = ArrayOptFindByKey(aHrIdsBySubdivision, iSubdivisionID, "subdivision_id");
	if (oCached != undefined)
		return oCached.hr_ids;

	aHrIds = [];
	oBossRes = tools.call_code_library_method("libAflDocuments", "GetBossByTypeID", [iSubdivisionID, iHrBossTypeID]);
	if (oBossRes != undefined && oBossRes.result != undefined)
		aHrIds = oBossRes.result;

	oCached = new Object();
	oCached.SetProperty("subdivision_id", iSubdivisionID);
	oCached.SetProperty("hr_ids", aHrIds);
	aHrIdsBySubdivision.push(oCached);

	return aHrIds;
}

function GetConfirmedPersons(dReportDate) {
	var aResult = [];

	oRequestType = ArrayOptFirstElem(XQuery(
		"for $rt in request_types where $rt/code = " + XQueryLiteral(sRequestTypeCode) + " return $rt/Fields('id')"
	));
	if (oRequestType == undefined) {
		AlertLog("Не найден тип заявки с кодом " + sRequestTypeCode);
		return aResult;
	}

	sQuery =
		"SELECT rqs.person_id, rqs.person_fullname, " + GetCustomElemSqlExpr("is_confirmed") + " AS is_confirmed " +
		"FROM dbo.requests rqs JOIN dbo.request rq ON rq.id = rqs.id " +
		"WHERE rqs.request_type_id = " + OptInt(oRequestType.id) +
		" AND " + GetSameDaySqlCondition(GetCustomElemSqlExpr("decision_date"), dReportDate);

	aRequests = ArraySelectAll(XQuery("sql:" + sQuery));

	for (oRequest in aRequests) {
		if (tools_web.is_true(oRequest.is_confirmed) != true)
			continue;

		iPersonID = OptInt(oRequest.person_id);
		if (iPersonID == undefined)
			continue;
		if (ArrayOptFindByKey(aResult, iPersonID, "person_id") != undefined)
			continue;

		oPerson = new Object();
		oPerson.SetProperty("person_id", iPersonID);
		oPerson.SetProperty("fullname", String(oRequest.person_fullname));
		aResult.push(oPerson);
	}

	if (ArrayOptFirstElem(aResult) != undefined) {
		sPersonIdsStr = "";
		for (oPerson in aResult) {
			sPersonIdsStr = sPersonIdsStr + (sPersonIdsStr == "" ? "" : ", ") + OptInt(oPerson.person_id);
		}
		aCollData = ArraySelectAll(XQuery(
			"for $c in collaborators where MatchSome($c/id, (" + sPersonIdsStr + ")) return $c/Fields('id', 'position_parent_id')"
		));
		for (oPerson in aResult) {
			oColl = ArrayOptFind(aCollData, "OptInt(This.id) == " + OptInt(oPerson.person_id));
			oPerson.SetProperty("subdivision_id", oColl != undefined ? OptInt(oColl.position_parent_id, 0) : 0);
		}
	}

	return aResult;
}

function GroupPersonsByHr(aPersons) {
	var aResult = [];

	for (oPerson in aPersons) {
		iSubdivisionID = OptInt(oPerson.subdivision_id, 0);
		aHrIds = iSubdivisionID != 0 ? GetSubdivisionHrIds(iSubdivisionID) : [];

		if (ArrayOptFirstElem(aHrIds) == undefined) {
			AlertLog("Не найден специалист ОК для сотрудника " + oPerson.fullname + " (id=" + oPerson.person_id + ", подразделение=" + iSubdivisionID + ") - отчёт по нему не отправлен");
			continue;
		}

		for (vHrID in aHrIds) {
			iHrID = OptInt(vHrID);
			if (iHrID == undefined)
				continue;

			oGroup = ArrayOptFindByKey(aResult, iHrID, "hr_id");
			if (oGroup == undefined) {
				oGroup = new Object();
				oGroup.SetProperty("hr_id", iHrID);
				oGroup.SetProperty("person_num", 0);
				aResult.push(oGroup);
			}
			oGroup.SetProperty("person_num", OptInt(oGroup.person_num, 0) + 1);
		}
	}

	return aResult;
}

function SendReportByEmail(iReportID, dReportDate, iHrPersonID, aRecipientUserIDs, sSubject, sBody, sAttachName) {
	if (ArrayOptFirstElem(aRecipientUserIDs) == undefined) {
		AlertLog("Не заданы получатели письма с отчётом id=" + iReportID);
		return false;
	}

	// Инициатор построения отчёта - первый получатель из списка
	iInitiatorUserID = OptInt(ArrayOptFirstElem(aRecipientUserIDs));

	sFileUrl = ExportCustomReportToFile(iReportID, iInitiatorUserID, dReportDate, iHrPersonID, "xls");
	if (sFileUrl == undefined) {
		AlertLog("Не удалось сформировать xlsx файл для отчёта id=" + iReportID);
		return false;
	}

	oFileData = LoadFileData(UrlToFilePath(sFileUrl));

	bAllSent = true;
	for (iRecipientUserID in aRecipientUserIDs) {
		teNotif = OpenNewDoc("x-local://wtv/wtv_dlg_notification_template.xml").TopElem;
		teNotif.recipients.AddChild().recipient_type = "in_doc";

		oAttach = teNotif.attachments.AddChild();
		oAttach.name = sAttachName + ".xlsx";
		oAttach.data = oFileData;

		teNotif.subject = sSubject;
		teNotif.body_type = "text";
		teNotif.body = sBody;

		bSent = tools.create_notification("0", OptInt(iRecipientUserID), "", null, null, null, teNotif);
		if (bSent != true) {
			AlertLog("Не удалось отправить письмо с отчётом id=" + iReportID + " получателю " + iRecipientUserID);
			bAllSent = false;
		}
	}

	DeleteUrl(sFileUrl);

	return bAllSent;
}

function main() {
	iReportID = OptInt(Param.sReportID);
	if (iReportID == undefined) {
		AlertLog("Не найден настраиваемый отчёт с ID: " + Param.sReportID);
		return;
	}

	dReportDate = GetReportDate();
	sReportDate = StrDate(dReportDate);
	sSubject = "Отчёт о подтверждённых плановых отпусках за " + sReportDate;
	sBody = "Во вложении отчёт о работниках, подтвердивших плановый отпуск " + sReportDate + ".";

	// Ручной режим: отчёт целиком (без отбора по специалисту ОК) уходит участникам заданной группы.
	iRecipientGroupID = OptInt(Param.iRecipientGroupID);
	if (iRecipientGroupID != undefined) {
		aRecipients = GetGroupCollaboratorIDs(iRecipientGroupID);
		if (ArrayOptFirstElem(aRecipients) == undefined) {
			AlertLog("В группе получателей id=" + iRecipientGroupID + " нет сотрудников - отчёт не отправлен");
			return;
		}

		AlertLog("Задана группа получателей id=" + iRecipientGroupID + " - полный отчёт за " + sReportDate + " отправляется её участникам (" + ArrayCount(aRecipients) + ")");
		SendReportByEmail(iReportID, dReportDate, undefined, aRecipients, sSubject, sBody, "report");
		return;
	}

	if (iHrBossTypeID == 0) {
		AlertLog("Не задан параметр iHRbossType библиотеки libAflDocuments - специалистов ОК определить нельзя, отчёт не отправлен");
		return;
	}

	aPersons = GetConfirmedPersons(dReportDate);
	if (ArrayOptFirstElem(aPersons) == undefined) {
		AlertLog("За " + sReportDate + " нет сотрудников, подтвердивших плановый отпуск - отчёт не отправлен");
		return;
	}

	aHrGroups = GroupPersonsByHr(aPersons);
	if (ArrayOptFirstElem(aHrGroups) == undefined) {
		AlertLog("Для сотрудников, подтвердивших отпуск " + sReportDate + " (" + ArrayCount(aPersons) + "), не найден ни один специалист ОК - отчёт не отправлен");
		return;
	}

	AlertLog("За " + sReportDate + " подтвердили отпуск " + ArrayCount(aPersons) + " сотрудников, отчёт уходит " + ArrayCount(aHrGroups) + " специалистам ОК");

	for (oHrGroup in aHrGroups) {
		AlertLog("Отправка отчёта специалисту ОК id=" + oHrGroup.hr_id + " (сотрудников в отчёте: " + oHrGroup.person_num + ")");
		SendReportByEmail(iReportID, dReportDate, OptInt(oHrGroup.hr_id), [OptInt(oHrGroup.hr_id)], sSubject, sBody, "report");
	}
}

var sLogName = "afl_vacation_confirmed_agent";
EnableLog(sLogName, true);
try {
	AlertLog("Агент Отправки отчета о подтвержденных плановых отпусках начал работу");
	main();
	AlertLog("Агент Отправки отчета о подтвержденных плановых отпусках завершил работу");
} catch (err) {
	AlertLog(err);
}
EnableLog(sLogName, false);