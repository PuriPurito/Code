// Выборка: список всех заявок на командировку (cc_business_trip), где текущий сотрудник
// (curUserID) — участник (collaborators) либо инициатор (initiator).
//
// ВАЖНО про производительность: participant (collaborators) — табличная часть с in_catalog=0,
// в XQuery-каталоге cc_business_trips её не видно, поэтому проверить участие можно только через
// open_doc. Инициатора можно было бы отфильтровать через XQuery отдельно, но тогда пришлось бы
// сливать два разных набора id — вместо этого делаем один проход: берём ВСЕ командировки (только
// Fields('id')) и на каждой open_doc проверяем и participant, и initiator разом.
// Это открытие документов в цикле — ДОПУСТИМО только пока общее число командировок в системе
// небольшое. Если объём вырастет — нужно добавить отсекающий фильтр в XQuery (например, по
// start_date за последний год) или завести отдельную индексируемую связь сотрудник-командировка.

try {
	curObjectID;
} catch (e) {
	var curObjectID;
}

ERROR = 0;
MESSAGE = "";
RESULT = [];

var sLogName = "cc_business_trip_list_for_person_collection_log";

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

	iPersonID = OptInt(curUserID);
	if (iPersonID == undefined) {
		AlertLog("Не удалось определить текущего пользователя (curUserID)");
		return aResult;
	}

	aTripIds = ArraySelectAll(XQuery("for $elem in cc_business_trips return $elem/Fields('id')"));

	for (oTripId in aTripIds) {
		iTripID = OptInt(oTripId.id);
		if (iTripID == undefined) continue;

		docTrip = tools.open_doc(iTripID);
		if (docTrip == undefined) continue;
		teTrip = docTrip.TopElem;

		bIsInvolved = OptInt(teTrip.initiator) == iPersonID;
		if (!bIsInvolved) {
			oMember = ArrayOptFind(teTrip.collaborators, "OptInt(This.person_id) == " + iPersonID);
			bIsInvolved = oMember != undefined;
		}
		if (!bIsInvolved) continue;

		aResult.push({
			id: iTripID,
			code: String(teTrip.code),
			purpose: String(teTrip.purpose),
			direction: String(teTrip.direction),
			start_date: GetStrDate(teTrip.start_date),
			finish_date: GetStrDate(teTrip.finish_date),
			status: String(teTrip.status),
			link: "/business_trip/" + iTripID
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