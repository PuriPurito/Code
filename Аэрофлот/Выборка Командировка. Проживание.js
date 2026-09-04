// Выборка: проживание в командировке (cc_business_trip.accommodations)
// Страница открыта в контексте конкретной командировки — ID берём из curObjectID.
// Одна строка результата = одна строка проживания. Показываются ТОЛЬКО строки текущего
// сотрудника (curUserID) — у каждой строки проживания есть свой person_id.

try {
	curObjectID;
} catch (e) {
	var curObjectID;
}

ERROR = 0;
MESSAGE = "";
RESULT = [];

var sLogName = "cc_business_trip_accommodations_collection_log";

function AlertLog(log) {
	var sLog = log;
	var logType = ObjectType(log);
	if (DataType(log) == "object" && (logType == "JsObject" || logType == "JsArray" || logType == "XmElem")) sLog = tools.object_to_text(log, "json");
	LogEvent(sLogName, sLog);
}

function GetStrDate(dDate) {
	sDate = "";
	dDate = OptDate(dDate);
	if (dDate != undefined) sDate = StrDate(dDate, false);
	return sDate;
}

// Период проживания одной строкой: "дата начала - дата окончания".
// Если заполнена только одна из дат — возвращаем её одну, если ни одной — пустую строку.
function GetDateRange(dStart, dFinish) {
	sStart = GetStrDate(dStart);
	sFinish = GetStrDate(dFinish);
	if (sStart == "") return sFinish;
	if (sFinish == "") return sStart;
	return sStart + " - " + sFinish;
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

	iRowNum = 0;
	for (oAcc in docTrip.TopElem.accommodations) {
		if (OptInt(oAcc.person_id) != OptInt(curUserID)) continue;
		iRowNum++;
		aResult.push({
			id: iRowNum,
			city_name: String(oAcc.city_name),
			hotel_name: String(oAcc.hotel_name),
			stay_period: GetDateRange(oAcc.start_date, oAcc.finish_date),
			period_in_days: OptInt(oAcc.period_in_days),
			accommodation_type: String(oAcc.accommodation_type)
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