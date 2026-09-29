try {
	curObjectID;
} catch (e) {
	var curObjectID;
}

ERROR = 0;
MESSAGE = "";
RESULT = [];

var sLogName = "cc_business_trip_destinations_collection_log";

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
	for (oDestination in docTrip.TopElem.destinations) {
		iRowNum++;
		aResult.push({
			id: iRowNum,
			org_name: String(oDestination.org_name),
			city_name: String(oDestination.city_name),
			start_date: GetStrDate(oDestination.start_date),
			finish_date: GetStrDate(oDestination.finish_date)
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