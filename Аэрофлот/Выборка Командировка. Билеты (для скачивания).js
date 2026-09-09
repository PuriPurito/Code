// TODO: сделать страницу скачивания файлов по ссылке из КАСУД (сейчас — временная ссылка
// на стандартный /download_file.html?file_id=).

try {
	curObjectID;
} catch (e) {
	var curObjectID;
}

ERROR = 0;
MESSAGE = "";
RESULT = [];

var sLogName = "cc_business_trip_tickets_collection_log";

function AlertLog(log) {
	var sLog = log;
	var logType = ObjectType(log);
	if (DataType(log) == "object" && (logType == "JsObject" || logType == "JsArray" || logType == "XmElem")) sLog = tools.object_to_text(log, "json");
	LogEvent(sLogName, sLog);
}

function GetTicketName(oTicketRow) {
	oTicket = oTicketRow.id_ticket.OptForeignElem;
	if (oTicket != undefined) {
		sName = String(oTicket.name);
		if (sName != "") return sName;
	}

	sFrom = String(oTicketRow.departure_city_name);
	sTo = String(oTicketRow.arrival_city_name);
	if (sFrom != "" && sTo != "") return sFrom + " → " + sTo;
	if (sFrom != "") return sFrom;
	if (sTo != "") return sTo;

	return "Билет";
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
	sTripGuid = String(teTrip.code);

	sFindQuery =
		"SELECT rs.id, rs.name, " +
		"(xpath('//custom_elems/custom_elem[name=''line_id_1c'']/value/text()', r.data))[1]::text AS line_id_1c " +
		"FROM dbo.resources rs JOIN dbo.resource r ON r.id = rs.id WHERE " +
		"(xpath('//custom_elems/custom_elem[name=''owner'']/value/text()', r.data))[1]::text = " + SqlLiteral(sTripGuid) +
		" ORDER BY rs.id DESC";
	aTripResources = ArraySelectAll(XQuery("sql:" + sFindQuery));

	for (oTicketRow in teTrip.tickets) {
		if (OptInt(oTicketRow.person_id) != OptInt(curUserID)) continue;

		sLineCode = String(oTicketRow.line_code_1c);
		if (sLineCode == "") continue;

		oFoundResource = ArrayOptFind(aTripResources, "String(This.line_id_1c) == '" + sLineCode + "'");
		if (oFoundResource == undefined) continue;

		iResourceID = OptInt(oFoundResource.id);
		if (iResourceID == undefined) continue;
		aResult.push({
			id: iResourceID,
			name: GetTicketName(oTicketRow),
			// TODO: сделать страницу скачивания файлов по ссылке из КАСУД
			download_url: "/download_file.html?file_id=" + iResourceID
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