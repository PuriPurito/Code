try {
	curObjectID;
} catch (e) {
	var curObjectID;
}

ERROR = 0;
MESSAGE = "";
RESULT = [];

var sLogName = "cc_business_trip_daily_allowances_collection_log";

function AlertLog(log) {
	var sLog = log;
	var logType = ObjectType(log);
	if (DataType(log) == "object" && (logType == "JsObject" || logType == "JsArray" || logType == "XmElem")) sLog = tools.object_to_text(log, "json");
	LogEvent(sLogName, sLog);
}

// Имя элемента object_data (Категория расходов, Валюта) по его id.
// Сначала пробуем связанный элемент напрямую, потом — предзагруженный справочник aRefNames.
function GetRefName(oField, aRefNames) {
	oForeign = oField.OptForeignElem;
	if (oForeign != undefined) {
		sName = String(oForeign.name);
		if (sName != "") return sName;
	}
	iID = OptInt(oField);
	if (iID != undefined) {
		oRef = ArrayOptFind(aRefNames, "OptInt(This.id) == " + iID);
		if (oRef != undefined) return String(oRef.name);
	}
	return "";
}

function main() {
	var aResult = [];

	iBusinessTripID = OptInt(curObjectID);
	if (iBusinessTripID == undefined) {
		AlertLog("Не передан ID командировки (curObjectID)");
		return aResult;
	}

	docTrip = tools.open_doc(iBusinessTripID);
	if (docTrip == undefined) {
		AlertLog("Не удалось открыть командировку с ID " + iBusinessTripID);
		return aResult;
	}

	iCurUserID = OptInt(curUserID);

	// Отобранные строки суточных (фильтр по сотруднику — мягкий: применяется только когда
	// у строки заполнен person_id и известен текущий пользователь).
	aRows = [];
	for (oDaily in docTrip.TopElem.daily_allowances) {
		iPersonID = OptInt(oDaily.person_id);
		if (iPersonID != undefined && iCurUserID != undefined && iPersonID != iCurUserID) continue;
		aRows[ArrayCount(aRows)] = oDaily;
	}

	// Пакетно резолвим имена справочников (Категория расходов / Валюта) одним запросом до цикла.
	aRefIDs = [];
	for (oRow in aRows) {
		iCatID = OptInt(oRow.expenses_category_id);
		if (iCatID != undefined) aRefIDs[ArrayCount(aRefIDs)] = iCatID;
		iCurID = OptInt(oRow.currency_id);
		if (iCurID != undefined) aRefIDs[ArrayCount(aRefIDs)] = iCurID;
	}
	aRefNames = [];
	if (ArrayOptFirstElem(aRefIDs) != undefined) {
		sRefIDs = ArrayMerge(aRefIDs, "This", ", ");
		aRefNames = ArraySelectAll(XQuery("for $o in object_data where MatchSome($o/id, (" + sRefIDs + ")) return $o/Fields('id', 'name')"));
	}

	iRowNum = 0;
	for (oDaily in aRows) {
		iRowNum++;
		aResult.push({
			id: iRowNum,
			expenses_category: GetRefName(oDaily.expenses_category_id, aRefNames),
			sum: OptReal(oDaily.sum, 0),
			currency: GetRefName(oDaily.currency_id, aRefNames),
			daily_expenses: OptInt(oDaily.daily_expenses)
		});
	}
	return aResult;
}

EnableLog(sLogName, true);
try {
	RESULT = main();
} catch (e) {
	ERROR = 1;
	MESSAGE = String(e);
	AlertLog(e);
}
EnableLog(sLogName, false);