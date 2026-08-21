// Кнопка показывается ТОЛЬКО если для ТЕКУЩЕГО сотрудника (curUserID) уже существует
// соответствующий документ (cc_advance_statement / cc_expense_report) по этой командировке —
// это переход к уже существующему документу, а не создание нового.

try {
	curObjectID;
} catch (e) {
	var curObjectID;
}

ERROR = 0;
MESSAGE = "";
RESULT = [];

var sLogName = "cc_business_trip_buttons_collection_log";

function AlertLog(log) {
	var sLog = log;
	var logType = ObjectType(log);
	if (DataType(log) == "object" && (logType == "JsObject" || logType == "JsArray" || logType == "XmElem")) sLog = tools.object_to_text(log, "json");
	LogEvent(sLogName, sLog);
}

function main() {
	var aResult = [];

	iBusinessTripID = OptInt(curObjectID);
	if (iBusinessTripID == undefined) {
		AlertLog("Не передан ID командировки (curObjectID)");
		return aResult;
	}
	iPersonID = OptInt(curUserID);

	oAdvanceStatement = ArrayOptFirstElem(
		XQuery(
			"for $elem in cc_advance_statements where $elem/business_trip_id = " +
				iBusinessTripID +
				" and $elem/person_id = " +
				iPersonID +
				" return $elem/Fields('id')"
		)
	);
	if (oAdvanceStatement != undefined) {
		aResult.push({
			id: 1,
			name: "Заявление на аванс",
			value: "Подать",
			link: "/advance_statement/" + OptInt(iBusinessTripID)
		});
	}

	oExpenseReport = ArrayOptFirstElem(
		XQuery(
			"for $elem in cc_expense_reports where $elem/business_trip_id = " +
				iBusinessTripID +
				" and $elem/person_id = " +
				iPersonID +
				" return $elem/Fields('id')"
		)
	);
	if (oExpenseReport != undefined) {
		aResult.push({
			id: 2,
			name: "Авансовый отчёт",
			value: "Заполнить",
			link: "/advance_report/" + OptInt(iBusinessTripID)
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