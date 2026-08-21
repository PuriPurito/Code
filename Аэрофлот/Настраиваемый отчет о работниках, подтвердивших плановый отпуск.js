/*
	Код для поля "Свой поиск" (custom_x) настраиваемого отчёта (Настройки -> Отчёты -> Создать, режим "Свой поиск")
	Источник данных: заявки (requests) с типом afl_planned_vacation_request, у которых custom_elems.is_confirmed == true

	После вставки кода в отчёт добавить колонки (Формула, тип "Строка") в порядке шаблона:
		ФИО                     -> ListElem.fullname
		Дата заявки             -> ListElem.create_date
		Подразделение           -> ListElem.subdivision
		Должность               -> ListElem.position
		Дата начала отпуска     -> ListElem.vacation_start_date
		Дата окончания отпуска  -> ListElem.vacation_end_date
		Количество дней отпуска -> ListElem.days_count
*/

function GetCustomElemValue(teObj, sKey) {
	oCustomElem = teObj.custom_elems.GetOptChildByKey(sKey);
	return oCustomElem != undefined ? oCustomElem.value.Value : undefined;
}

function GetCollaboratorsData(aReqArr) {
	aCollDataResult = [];
	if (ArrayOptFirstElem(aReqArr) != undefined) {
		sPersonIdsStr = ArrayMerge(aReqArr, "This.person_id", ", ");
		aCollDataResult = ArraySelectAll(XQuery(
			"for $c in collaborators where MatchSome($c/id, (" + sPersonIdsStr + ")) return $c/Fields('id', 'position_id')"
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

var aResult = [];

var aRequests = ArraySelectAll(XQuery(
	"for $r in requests, $rt in request_types where $r/request_type_id = $rt/id and $rt/code = " + XQueryLiteral("afl_planned_vacation_request") +
	" return $r/Fields('id', 'person_id', 'person_fullname', 'person_subdivision_name', 'create_date')"
));

var aCollData = GetCollaboratorsData(aRequests);
var aPositions = GetPositionsData(aCollData);

var oRequest, docRequest, teRequest, oColl, oPosition, oResultItem;
var bIsConfirmed, dVacationStart, dVacationEnd, sDaysCount, sPositionName, iPositionID;

for (oRequest in aRequests) {
	docRequest = tools.open_doc(OptInt(oRequest.id));
	if (docRequest == undefined)
		continue;

	teRequest = docRequest.TopElem;
	bIsConfirmed = tools_web.is_true(GetCustomElemValue(teRequest, "is_confirmed"));
	if (bIsConfirmed != true)
		continue;

	dVacationStart = OptDate(GetCustomElemValue(teRequest, "vacation_start_date"));
	dVacationEnd = OptDate(GetCustomElemValue(teRequest, "vacation_end_date"));
	sDaysCount = GetCustomElemValue(teRequest, "vacation_days_number");
	if (sDaysCount == undefined)
		sDaysCount = "";

	sPositionName = "";
	oColl = ArrayOptFind(aCollData, "OptInt(This.id) == " + OptInt(oRequest.person_id));
	if (oColl != undefined) {
		iPositionID = OptInt(oColl.position_id);
		if (iPositionID != undefined) {
			oPosition = ArrayOptFind(aPositions, "OptInt(This.id) == " + iPositionID);
			if (oPosition != undefined)
				sPositionName = oPosition.name;
		}
	}

	oResultItem = new Object();
	oResultItem.SetProperty("PrimaryKey", OptInt(oRequest.id));
	oResultItem.SetProperty("fullname", oRequest.person_fullname);
	oResultItem.SetProperty("create_date", StrDate(OptDate(oRequest.create_date)));
	oResultItem.SetProperty("subdivision", oRequest.person_subdivision_name);
	oResultItem.SetProperty("position", sPositionName);
	oResultItem.SetProperty("vacation_start_date", dVacationStart != undefined ? StrDate(dVacationStart) : "");
	oResultItem.SetProperty("vacation_end_date", dVacationEnd != undefined ? StrDate(dVacationEnd) : "");
	oResultItem.SetProperty("days_count", sDaysCount);

	aResult.push(oResultItem);
}

return aResult;