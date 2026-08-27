// Выборка: общая информация по заявке на командировку (cc_business_trip)
// Страница открыта в контексте конкретной командировки — ID берём из curObjectID.
// Виджет "Список параметров" — каждая строка результата = {name, value}, ссылка не используется.
//
// "Организация Назначения" берём из первого пункта назначения (destinations[0]) — само поле
// принадлежит табличной части "Пункты назначения", в шапке командировки его нет; пункты назначения
// общие на всю командировку (нет person_id), поэтому по сотруднику не фильтруются.
// "Ответственный" убран из типа документа — поля для вывода больше нет.
// "НеобходимАванс" сюда не включён — источник поля не определён (открытый вопрос).
// "Суточные, день/сумма" — считаются ТОЛЬКО по строкам "Суточные" ТЕКУЩЕГО сотрудника (curUserID):
// день = ставка (daily_expenses) первой его строки, сумма = сумма sum_rub по всем его строкам.

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

function GetForeignName(oField) {
	sName = "";
	oForeign = oField.OptForeignElem;
	if (oForeign != undefined) sName = String(oForeign.name);
	return sName;
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

	sDailyRateCurrency = "";
	sDailyRate = "";
	rDailySumRub = 0;
	bFoundDaily = false;
	for (oDaily in teTrip.daily_allowances) {
		if (OptInt(oDaily.person_id) != OptInt(curUserID)) continue;
		rDailySumRub += OptReal(oDaily.sum_rub, 0);
		if (!bFoundDaily) {
			iDailyRate = OptInt(oDaily.daily_expenses);
			if (iDailyRate != undefined) sDailyRate = String(iDailyRate);
			sDailyRateCurrency = GetForeignName(oDaily.currency_id);
			bFoundDaily = true;
		}
	}

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
	aResult.push({ id: 7, name: "Суточные, день", value: sDailyRate + " " + sDailyRateCurrency });
	aResult.push({ id: 8, name: "Суточные, всего", value: String(rDailySumRub) + " " + sDailyRateCurrency });

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