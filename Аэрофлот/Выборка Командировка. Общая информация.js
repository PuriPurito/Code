try {
	curObjectID;
} catch (e) {
	var curObjectID;
}

ERROR = 0;
MESSAGE = "";
RESULT = [];

var sLogName = "cc_business_trip_general_info_collection_log";

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
	teTrip = docTrip.TopElem;

	sDestinationOrgName = "";
	oFirstDestination = ArrayOptFirstElem(teTrip.destinations);
	if (oFirstDestination != undefined) sDestinationOrgName = String(oFirstDestination.org_name);

	sDaysOnRoute = "";
	iDaysOnRoute = OptInt(teTrip.days_on_route);
	if (iDaysOnRoute != undefined) sDaysOnRoute = String(iDaysOnRoute);

	sTripDays = "";
	dStartDate = OptDate(teTrip.start_date);
	dFinishDate = OptDate(teTrip.finish_date);
	if (dStartDate != undefined && dFinishDate != undefined) {
		sTripDays = String(OptInt(DateDiff(dFinishDate, dStartDate) / 86400));
	}

	aResult.push({ id: 1, name: "Цель командировки", value: String(teTrip.purpose) });
	aResult.push({ id: 2, name: "Организация Назначения", value: sDestinationOrgName });
	aResult.push({ id: 3, name: "Дата начала командировки", value: GetStrDate(teTrip.start_date) });
	aResult.push({ id: 4, name: "Дата окончания командировки", value: GetStrDate(teTrip.finish_date) });
	aResult.push({ id: 5, name: "Дней в командировке", value: sTripDays });
	aResult.push({ id: 6, name: "Дней в пути", value: sDaysOnRoute });

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