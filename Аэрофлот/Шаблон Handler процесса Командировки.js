<%
EnableLog("afl_business_trip_handler", true);

var LOG_TAG = "afl_business_trip_handler";
var ERR_SEPARATOR = "::";

// Значения ВидМестаВыплаты (см. schema.xsd, Перечисление.ВидыМестВыплатыЗарплаты), при которых
// редактирование ВидМестаВыплаты/МестоВыплаты запрещено — они пришли из 1С как факт, не как черновик.
var LOCKED_PAYMENT_PLACE_TYPES = ["Касса", "Раздатчик"];
// Полный список значений перечисления — для выпадающего списка на фронте, когда редактирование разрешено.
var PAYMENT_PLACE_TYPES = ["Касса", "ЗарплатныйПроект", "Раздатчик", "БанковскийСчет"];

// Группа категории расходов (custom_elems.expense_group), при которой строка Расходов полностью
// заблокирована — нельзя ни добавить, ни удалить, ни отредактировать.
var DAILY_EXPENSE_GROUP = "Суточные";
// Порядок сортировки групп категорий расходов в таблице "Расходы" заявления на аванс.
var EXPENSE_GROUP_SORT_ORDER = ["Билеты", "Трансфер", "Проживание", "Суточные", "Прочее", "ПрочееВнеБюджетаНаКомандировки"];
// Перечисление.ПодтверждающиеДокументыАвансовыйОтчет (см. schema.xsd) — для колонки
// "Наименование документа"/"Вид входящего документа".
var INCOMING_DOC_TYPES = [
	"Билет",
	"ДругойДокумент",
	"МаршрутнаяКвитанцияРЖД",
	"ПосадочныйТалонВозвращение",
	"ПосадочныйТалонОтправления",
	"ПрочиеРасходы",
	"РасходыГСМ",
	"РасходыНаВизу",
	"РасходыНаГостиницу",
	"РасходыНаОбщественныйТранспорт",
	"РасходыНаТакси",
	"Чек",
	"ШтампыПересеченияГраницы"
];

function AlertLog(anyData)
{
	sLog = anyData;
	if (DataType(anyData) != "string")
	{
		sLog = tools.object_to_text(anyData, "json");
	}
	LogEvent(LOG_TAG, sLog);
}

// Прерывает обработку: HTTP-код + сообщение для клиента.
function Fail(iHttpCode, sMessage)
{
	throw iHttpCode + ERR_SEPARATOR + sMessage;
}

// Унифицированный ответ сервера: { success, message, data }.
function SendResponse(iCode, bSuccess, sMessage, oData)
{
	Request.RespContentType = "application/json; charset=utf-8";
	Request.SetRespStatus(iCode, sMessage);
	Response.Write(tools.object_to_text({
		success: bSuccess,
		message: sMessage,
		data: oData == undefined ? {} : oData
	}, "json"));
}

function SendOk(sMessage, oData)
{
	SendResponse(200, true, sMessage, oData);
}

function GetQuery(sName)
{
	return Trim(String(Request.Query.GetOptProperty(sName, "")));
}

function RequireQuery(sName, sTitle)
{
	sValue = GetQuery(sName);
	if (sValue == "")
	{
		Fail(400, "Не заполнено обязательное поле: " + sTitle);
	}
	return sValue;
}

// Проверка вхождения строки в массив.
function InArray(aArray, sValue)
{
	return ArrayOptFind(aArray, "This == '" + sValue + "'") != undefined;
}

// Значения INCOMING_DOC_TYPES (и вообще многие 1С-перечисления) хранятся слитно, PascalCase
// ("ДругойДокумент") — для вывода пользователю расставляем пробелы через libAflMain.
function SplitDocTypeLabel(sValue)
{
	if (IsEmptyValue(sValue)) return sValue;
	// SplitPascalCaseWords в afl_main.js возвращает строку напрямую (не { result: ... }, как,
	// например, GetObjectIDByField) — оборачивать в .result не нужно, это и ломало вызов.
	// Если по какой-то другой причине результат всё же пуст — показываем исходное значение
	// (слитно), а не пустоту: это лучше сломанного вида списка.
	sLabel = String(tools.call_code_library_method("libAflMain", "SplitPascalCaseWords", [sValue]));
	return IsEmptyValue(sLabel) ? sValue : sLabel;
}

// Список для выпадающего списка "Наименование документа" на фронте — value остаётся как в
// перечислении (валидируется через InArray(INCOMING_DOC_TYPES, ...) при сохранении), label — с
// пробелами для читаемости.
function GetIncomingDocTypesList()
{
	aResult = [];
	iCount = ArrayCount(INCOMING_DOC_TYPES);
	i = 0;
	while (i < iCount)
	{
		sType = String(INCOMING_DOC_TYPES[i]);
		aResult.push({ value: sType, label: SplitDocTypeLabel(sType) });
		i = i + 1;
	}
	return aResult;
}

// Позиция группы категории в EXPENSE_GROUP_SORT_ORDER (неизвестные/пустые группы — в конец).
function GetExpenseGroupSortWeight(sGroup)
{
	iCount = ArrayCount(EXPENSE_GROUP_SORT_ORDER);
	i = 0;
	while (i < iCount)
	{
		if (EXPENSE_GROUP_SORT_ORDER[i] == sGroup) return i;
		i = i + 1;
	}
	return iCount;
}

// ==================== Заявление на аванс ====================

// Находит cc_advance_statement для сотрудника+командировки. Одновременно и поиск, и проверка доступа —
// если запись не найдена ИЛИ найдена, но принадлежит другому сотруднику, доступ не даём.
function FindAdvanceStatement(iBusinessTripID, iPersonID)
{
	oRow = ArrayOptFirstElem(XQuery(
		"for $elem in cc_advance_statements where $elem/business_trip_id = " + iBusinessTripID +
		" and $elem/person_id = " + iPersonID + " return $elem/Fields('id')"
	));
	if (oRow == undefined)
	{
		Fail(404, "Заявление на аванс для этой командировки не найдено");
	}

	docStatement = tools.open_doc(OptInt(oRow.id));
	if (docStatement == undefined)
	{
		Fail(404, "Не удалось открыть заявление на аванс");
	}

	// Повторная проверка доступа уже на открытом документе (XQuery мог отдать чужую запись
	// при некорректном индексе — перестраховка не помешает).
	if (OptInt(docStatement.TopElem.person_id) != iPersonID)
	{
		Fail(403, "Нет доступа к этому заявлению на аванс");
	}

	return docStatement;
}

// Список Касс (object_data, тип Kassy) — источник выбора Места выплаты, когда разрешено редактирование.
function GetKassyList()
{
	aRows = ArraySelectAll(XQuery(
		"for $o in object_datas where $o/object_data_type_id = " + iKassyTypeID +
		" return $o/Fields('id', 'name')"
	));

	aResult = [];
	for (oRow in aRows)
	{
		aResult.push({ id: oRow.id.Value, name: String(oRow.name.Value) });
	}
	return aResult;
}

// Читает "Расходы" (табличная часть заявления на аванс) для отображения таблицей — только для
// понимания состава суммы, поле не редактируется на этой странице.
function GetAdvanceExpensesList(teStatement, aCategories)
{
	aResult = [];
	iRowNum = 0;
	for (oExpense in teStatement.expenses)
	{
		iRowNum++;
		sCategoryName = "";
		oCategory = oExpense.expenses_category_id.OptForeignElem;
		if (oCategory != undefined) sCategoryName = String(oCategory.name);

		sCurrencyName = "";
		oCurrency = oExpense.currency_id.OptForeignElem;
		if (oCurrency != undefined) sCurrencyName = String(oCurrency.name);

		oCat = FindCategory(OptInt(oExpense.expenses_category_id), aCategories);
		sGroup = oCat != undefined ? oCat.group : "";
		iGroupSortWeight = GetExpenseGroupSortWeight(sGroup);

		aResult.push({
			id: iRowNum,
			category_name: sCategoryName,
			sum: OptReal(oExpense.sum, 0),
			currency_name: sCurrencyName,
			sum_rub: OptReal(oExpense.sum_rub, 0),
			period_in_days: OptInt(oExpense.period_in_days),
			daily_expenses: OptInt(oExpense.daily_expenses),
			group_sort_weight: iGroupSortWeight
		});
	}
	return ArraySort(aResult, "This.group_sort_weight", "+");
}

function ActionGetAdvanceData()
{
	iPersonID = OptInt(curUserID);
	if (iPersonID == undefined)
	{
		Fail(400, "Не определён текущий сотрудник");
	}

	docStatement = FindAdvanceStatement(iBusinessTripID, iPersonID);
	teStatement = docStatement.TopElem;

	sPaymentPlaceType = String(teStatement.payment_place_type);
	// Блокировка — по исходному значению от 1С, а не по текущему (текущее мог поменять сам
	// сотрудник, выбрав Кассу/Раздатчик самостоятельно — это не должно залочивать поле).
	bLocked = InArray(LOCKED_PAYMENT_PLACE_TYPES, String(teStatement.payment_place_type_source));

	SendOk("Данные успешно получены", {
		id: OptInt(teStatement.id),
		need_advance: tools_web.is_true(teStatement.need_advance),
		payment_place_type: sPaymentPlaceType,
		payment_place_text: String(teStatement.payment_place_text),
		payment_place_locked: bLocked,
		is_sent: tools_web.is_true(teStatement.is_sent),
		payment_place_types: PAYMENT_PLACE_TYPES,
		kassy: GetKassyList(),
		expenses: GetAdvanceExpensesList(teStatement, GetCategoriesList())
	});
}

// Читает из запроса Нужен аванс / Вид места выплаты / Место выплаты и проставляет их в
// teStatement. Вид/Место выплаты пишутся, только если ТЕКУЩЕЕ (до правки) значение вида —
// не Касса/Раздатчик; "Нужен аванс" этим не ограничен — его можно менять всегда, пока
// заявление ещё не отправлено (это отдельно проверяется вызывающей функцией через is_sent).
function ApplyAdvanceFieldsFromRequest(teStatement)
{
	// Блокировка — по исходному значению от 1С (payment_place_type_source), не по текущему
	// payment_place_type: его мог выставить сам сотрудник, выбрав Кассу/Раздатчик самостоятельно.
	bPaymentPlaceLocked = InArray(LOCKED_PAYMENT_PLACE_TYPES, String(teStatement.payment_place_type_source));

	sNeedAdvance = RequireQuery("need_advance", "Нужен аванс");
	teStatement.need_advance = tools_web.is_true(sNeedAdvance);

	if (!bPaymentPlaceLocked)
	{
		sPaymentPlaceType = RequireQuery("payment_place_type", "Вид места выплаты");
		if (!InArray(PAYMENT_PLACE_TYPES, sPaymentPlaceType))
		{
			Fail(400, "Недопустимое значение Вида места выплаты: " + sPaymentPlaceType);
		}
		sPaymentPlaceValue = GetQuery("payment_place_value");

		teStatement.payment_place_type = sPaymentPlaceType;

		if (InArray(LOCKED_PAYMENT_PLACE_TYPES, sPaymentPlaceType))
		{
			// Выбрана Касса/Раздатчик — payment_place_value это ID записи справочника Касс,
			// сохраняем как текст (см. HandleZajavlenieNaAvans — 1С тоже принимает МестоВыплаты текстом).
			iKassaID = OptInt(sPaymentPlaceValue);
			if (iKassaID == undefined)
			{
				Fail(400, "Не выбрана касса для места выплаты");
			}
			docKassa = tools.open_doc(iKassaID);
			if (docKassa == undefined)
			{
				Fail(400, "Касса не найдена");
			}
			teStatement.cashier_id = iKassaID;
			teStatement.payment_place_text = String(docKassa.TopElem.name);
		}
	}
}

// Сохраняет черновик — без отправки в 1С, is_sent не трогает.
function ActionSaveAdvanceDraft()
{
	iPersonID = OptInt(curUserID);
	if (iPersonID == undefined)
	{
		Fail(400, "Не определён текущий сотрудник");
	}

	docStatement = FindAdvanceStatement(iBusinessTripID, iPersonID);
	teStatement = docStatement.TopElem;

	if (tools_web.is_true(teStatement.is_sent))
	{
		Fail(403, "Заявление на аванс уже отправлено, изменения недоступны");
	}

	ApplyAdvanceFieldsFromRequest(teStatement);
	docStatement.Save();

	SendOk("Черновик заявления на аванс сохранён", { id: OptInt(teStatement.id) });
}

function ActionSendAdvance()
{
	iPersonID = OptInt(curUserID);
	if (iPersonID == undefined)
	{
		Fail(400, "Не определён текущий сотрудник");
	}

	docStatement = FindAdvanceStatement(iBusinessTripID, iPersonID);
	teStatement = docStatement.TopElem;

	// Заявление уже отправлено ранее — повторная отправка запрещена целиком,
	// независимо от того, что прислал клиент.
	if (tools_web.is_true(teStatement.is_sent))
	{
		Fail(403, "Заявление на аванс уже отправлено, изменения недоступны");
	}

	// Снимок значений ДО правки — если отправка во внешнюю систему не удастся,
	// откатываем документ, чтобы он не остался "залоченным" изменением, которое
	// на самом деле в 1С не ушло.
	bOldNeedAdvance = tools_web.is_true(teStatement.need_advance);
	sOldPaymentPlaceType = String(teStatement.payment_place_type);
	sOldPaymentPlaceText = String(teStatement.payment_place_text);

	ApplyAdvanceFieldsFromRequest(teStatement);

	teStatement.is_sent = true;
	docStatement.Save();

	oRes = tools.call_code_library_method("libAflMethodsRouter", "RouteMethod", ["SendZajavlenieNaAvansToExternal", [OptInt(teStatement.id)]]);

	if (oRes.error == 0)
	{
		SendOk("Заявление на аванс успешно отправлено", { id: OptInt(teStatement.id) });
	}
	else
	{
		// libAflMethodsRouter.BuildResultObject заполняет только oRes.errors (массив),
		// oRes.errorText остаётся пустым — реальный текст ошибки в oRes.errors.
		sRouteError = ArrayCount(oRes.errors) > 0 ? oRes.errors.join("; ") : String(oRes.errorText);
		AlertLog("Error: " + sRouteError);

		teStatement.need_advance = bOldNeedAdvance;
		teStatement.payment_place_type = sOldPaymentPlaceType;
		teStatement.payment_place_text = sOldPaymentPlaceText;
		teStatement.is_sent = false;
		docStatement.Save();

		Fail(500, "Возникла ошибка при отправке заявления на аванс");
	}
}

// ==================== Авансовый отчёт ====================

// Находит cc_expense_report для сотрудника+командировки. Одновременно и поиск, и проверка доступа.
function FindExpenseReport(iBusinessTripID, iPersonID)
{
	oRow = ArrayOptFirstElem(XQuery(
		"for $elem in cc_expense_reports where $elem/business_trip_id = " + iBusinessTripID +
		" and $elem/person_id = " + iPersonID + " return $elem/Fields('id')"
	));
	if (oRow == undefined)
	{
		Fail(404, "Авансовый отчёт для этой командировки не найден");
	}

	docReport = tools.open_doc(OptInt(oRow.id));
	if (docReport == undefined)
	{
		Fail(404, "Не удалось открыть авансовый отчёт");
	}

	if (OptInt(docReport.TopElem.person_id) != iPersonID)
	{
		Fail(403, "Нет доступа к этому авансовому отчёту");
	}

	return docReport;
}

// Категории расходов на командировку — список небольшой и ограниченный, безопасно открыть
// каждую один раз, чтобы прочитать группу (custom_elems.expense_group) — этого поля нет в XQuery.
function GetCategoriesList()
{
	aRows = ArraySelectAll(XQuery(
		"for $o in object_datas where $o/object_data_type_id = " + iCategoryTypeID +
		" return $o/Fields('id', 'name')"
	));

	aResult = [];
	for (oRow in aRows)
	{
		iCatID = OptInt(oRow.id);
		sGroup = "";
		docCat = tools.open_doc(iCatID);
		if (docCat != undefined)
		{
			sGroup = String(docCat.TopElem.custom_elems.ObtainChildByKey("expense_group").value);
		}
		// id — строкой: это 64-битные числа, JS-число в браузере их округляет при разборе JSON
		// (Number.MAX_SAFE_INTEGER далеко превышен) — на фронте id должны быть только строками.
		aResult.push({ id: String(iCatID), name: String(oRow.name.Value), group: sGroup });
	}
	return aResult;
}

function FindCategory(iCategoryID, aCategories)
{
	return ArrayOptFind(aCategories, "OptInt(This.id) == " + iCategoryID);
}

// Валюты (object_data, тип Valjuty) — источник выбора Валюты для строки расходов.
function GetCurrenciesList()
{
	aRows = ArraySelectAll(XQuery(
		"for $o in object_datas where $o/object_data_type_id = " + iCurrencyTypeID +
		" return $o/Fields('id', 'name')"
	));

	aResult = [];
	for (oRow in aRows)
	{
		// id — строкой, см. комментарий в GetCategoriesList.
		aResult.push({ id: String(OptInt(oRow.id)), name: String(oRow.name.Value) });
	}
	return aResult;
}

function FindCurrency(iCurrencyID, aCurrencies)
{
	return ArrayOptFind(aCurrencies, "OptInt(This.id) == " + iCurrencyID);
}

function GetCurrencyName(iCurrencyID, aCurrencies)
{
	oCur = FindCurrency(iCurrencyID, aCurrencies);
	return oCur != undefined ? oCur.name : "";
}

function IsDailyCategory(iCategoryID, aCategories)
{
	oCat = FindCategory(iCategoryID, aCategories);
	return oCat != undefined && oCat.group == DAILY_EXPENSE_GROUP;
}

function GetCategoryName(iCategoryID, aCategories)
{
	oCat = FindCategory(iCategoryID, aCategories);
	return oCat != undefined ? oCat.name : "";
}

// Загружает одним SQL-запросом все ресурсы базы, привязанные к отчёту (custom_elems.owner =
// code отчёта) — id/name/line_id_1c. У строки нет своего поля-ссылки на файл, единственная
// привязка — custom_elems ресурса, а они недоступны обычному XQuery, поэтому SQL; но запрос
// один на весь отчёт, а не на каждую строку (см. FindRowResource/GetRowFileInfo/ApplyRowFile).
// dbo.resource (ед.ч.) хранит только id/data (XML) — обычные поля вроде name есть только в
// каталожной dbo.resources (мн.ч.), поэтому join, как в GerPersonsInSubdivisionStr.
function LoadReportResources(teReport)
{
	sQuery =
		"SELECT rs.id, rs.name, " +
		"(xpath('//custom_elems/custom_elem[name=''line_id_1c'']/value/text()', r.data))[1]::text AS line_id_1c " +
		"FROM dbo.resources rs JOIN dbo.resource r ON r.id = rs.id WHERE " +
		"(xpath('//custom_elems/custom_elem[name=''owner'']/value/text()', r.data))[1]::text = " + SqlLiteral(String(teReport.code));
	return ArraySelectAll(XQuery("sql:" + sQuery));
}

// Находит в предзагруженном LoadReportResources массиве ресурс, привязанный к строке по line_code_1c.
function FindRowResource(aReportResources, sLineCode)
{
	if (sLineCode == "") return undefined;
	return ArrayOptFind(aReportResources, "String(This.line_id_1c) == '" + sLineCode + "'");
}

// Строка привязанного файла для ответа фронту (или пусто, если файла нет).
function GetRowFileInfo(oRow, aReportResources)
{
	oMatch = FindRowResource(aReportResources, String(oRow.line_code_1c));
	return oMatch == undefined ? undefined : { id: String(OptInt(oMatch.id)), name: String(oMatch.name) };
}

function GetStrDate(dValue)
{
	sDate = "";
	dValue = OptDate(dValue);
	if (dValue != undefined) sDate = StrDate(dValue, false);
	return sDate;
}

function GetReportExpensesList(teReport, aCategories, aCurrencies, aReportResources)
{
	aResult = [];
	for (oExpense in teReport.expenses)
	{
		iCatID = OptInt(oExpense.expenses_category_id);
		iCurID = OptInt(oExpense.currency_id);
		sIncomingDocDate = GetStrDate(oExpense.incoming_doc_date);
		// id — строкой, см. комментарий в GetCategoriesList. Тернарник намеренно не инлайнится в
		// объектный литерал ниже — движок Websoft на этом теряет все последующие поля через запятую.
		sCatID = iCatID == undefined ? undefined : String(iCatID);
		sCurID = iCurID == undefined ? undefined : String(iCurID);
		aResult.push({
			row_uid: String(oExpense.line_code_1c),
			category_id: sCatID,
			category_name: GetCategoryName(iCatID, aCategories),
			vendor: String(oExpense.vendor),
			incoming_doc_type: String(oExpense.incoming_doc_type),
			incoming_doc_type_label: SplitDocTypeLabel(String(oExpense.incoming_doc_type)),
			incoming_doc_number: String(oExpense.incoming_doc_number),
			incoming_doc_date: sIncomingDocDate,
			sum: OptReal(oExpense.sum, 0),
			currency_id: sCurID,
			currency_name: GetCurrencyName(iCurID, aCurrencies),
			is_from_1c: tools_web.is_true(oExpense.is_from_1c),
			is_daily: IsDailyCategory(iCatID, aCategories),
			file: GetRowFileInfo(oExpense, aReportResources)
		});
	}
	return aResult;
}

function GetReportTicketsList(teReport, aCategories, aReportResources)
{
	aResult = [];
	for (oTicket in teReport.tickets)
	{
		oTicketRef = oTicket.id_ticket.OptForeignElem;

		sVendor = "";
		sDocNumber = "";
		sDocDate = "";
		iCatID = undefined;
		if (oTicketRef != undefined)
		{
			sVendor = String(oTicketRef.vendor);
			sDocNumber = String(oTicketRef.incoming_doc_number);
			sDocDate = GetStrDate(oTicketRef.incoming_doc_date);
			iCatID = OptInt(oTicketRef.expenses_category_id);
		}
		// id — строкой, см. комментарий в GetCategoriesList.
		sCatID = iCatID == undefined ? undefined : String(iCatID);

		aResult.push({
			row_uid: String(oTicket.line_code_1c),
			id_ticket: OptInt(oTicket.id_ticket),
			vendor: sVendor,
			incoming_doc_number: sDocNumber,
			incoming_doc_date: sDocDate,
			category_id: sCatID,
			category_name: GetCategoryName(iCatID, aCategories),
			sum: OptReal(oTicket.sum, 0),
			is_from_1c: tools_web.is_true(oTicket.is_from_1c),
			file: GetRowFileInfo(oTicket, aReportResources)
		});
	}
	return aResult;
}

// Генерирует line_code_1c для новой строки — guid, пригодный и как идентификатор строки для
// фронта, и как LineID для 1С (см. GenerateLineGuid в libAflIntegration).
function GenerateRowUid(teReport)
{
	return String(tools.call_code_library_method("libAflIntegration", "GenerateLineGuid", [OptInt(teReport.id)]));
}

// Строки, попавшие в teReport.expenses/tickets не через ApplyExpenseRows/ApplyTicketRows
// (например, автосформированную "Суточные"), могли остаться без line_code_1c — без него
// сохранение черновика принимает существующую строку за новую (см. bIsNew) и падает или
// дублирует строку. Также лечит уже возникшие дубли line_code_1c. Проставляем/чиним и
// сохраняем разово при каждом чтении отчёта.
function EnsureRowUids(docReport)
{
	teReport = docReport.TopElem;
	bChanged = false;
	aSeenUids = [];

	for (oExpense in teReport.expenses)
	{
		sUid = String(oExpense.line_code_1c);
		if (IsEmptyValue(sUid) || InArray(aSeenUids, sUid))
		{
			oExpense.line_code_1c = GenerateRowUid(teReport);
			sUid = String(oExpense.line_code_1c);
			bChanged = true;
		}
		aSeenUids.push(sUid);
	}
	for (oTicket in teReport.tickets)
	{
		sUid = String(oTicket.line_code_1c);
		if (IsEmptyValue(sUid) || InArray(aSeenUids, sUid))
		{
			oTicket.line_code_1c = GenerateRowUid(teReport);
			sUid = String(oTicket.line_code_1c);
			bChanged = true;
		}
		aSeenUids.push(sUid);
	}

	if (bChanged) docReport.Save();
}

function ActionGetReportData()
{
	iPersonID = OptInt(curUserID);
	if (iPersonID == undefined)
	{
		Fail(400, "Не определён текущий сотрудник");
	}

	docReport = FindExpenseReport(iBusinessTripID, iPersonID);
	teReport = docReport.TopElem;
	EnsureRowUids(docReport);
	aCategories = GetCategoriesList();
	aCurrencies = GetCurrenciesList();
	aReportResources = LoadReportResources(teReport);

	SendOk("Данные успешно получены", {
		id: OptInt(teReport.id),
		is_sent: tools_web.is_true(teReport.is_sent),
		expenses: GetReportExpensesList(teReport, aCategories, aCurrencies, aReportResources),
		tickets: GetReportTicketsList(teReport, aCategories, aReportResources),
		// Категории для выбора при добавлении новой строки — "Суточные" вручную не добавляются.
		categories: ArraySelect(aCategories, "This.group != '" + DAILY_EXPENSE_GROUP + "'"),
		currencies: aCurrencies,
		incoming_doc_types: GetIncomingDocTypesList()
	});
}

// Применяет присланные с фронта строки "Расходы" к teReport.expenses: обновляет существующие
// (по row_uid, хранится в line_code_1c), добавляет новые (row_uid начинается с "new_"), удаляет
// отсутствующие в списке. Суточные строки (is_daily) — исключение из добавления, удаления и
// редактирования всех полей, кроме суммы и валюты: их разрешено корректировать вручную.
function ApplyExpenseRows(teReport, aCategories, aCurrencies, iPersonID, aRequestRows, aReportResources)
{
	aExistingUids = [];
	for (oExpense in teReport.expenses)
	{
		if (IsDailyCategory(OptInt(oExpense.expenses_category_id), aCategories)) continue;
		aExistingUids.push(String(oExpense.line_code_1c));
	}

	aRequestUids = [];
	for (oReqRow in aRequestRows)
	{
		if (!IsEmptyValue(oReqRow.row_uid) && StrBegins(String(oReqRow.row_uid), "new_") == false)
		{
			aRequestUids.push(String(oReqRow.row_uid));
		}
	}

	// Удаление: существующие некасающиеся суточных строки, которых нет среди присланных.
	for (sUid in aExistingUids)
	{
		if (ArrayOptFind(aRequestUids, "This == '" + sUid + "'") == undefined)
		{
			teReport.expenses.DeleteChildren("String(This.line_code_1c) == '" + sUid + "'");
		}
	}

	for (oReqRow in aRequestRows)
	{
		bIsNew = IsEmptyValue(oReqRow.row_uid) || StrBegins(String(oReqRow.row_uid), "new_");
		oExpense = bIsNew ? undefined : ArrayOptFind(teReport.expenses, "String(This.line_code_1c) == '" + String(oReqRow.row_uid) + "'");

		iCurrencyID = OptInt(oReqRow.currency_id);
		if (iCurrencyID == undefined || FindCurrency(iCurrencyID, aCurrencies) == undefined)
		{
			Fail(400, "Не выбрана валюта для строки расхода");
		}

		if (oExpense != undefined && IsDailyCategory(OptInt(oExpense.expenses_category_id), aCategories))
		{
			oExpense.sum = OptReal(oReqRow.sum, 0);
			oExpense.currency_id = iCurrencyID;
			continue;
		}

		if (oExpense == undefined)
		{
			iNewCategoryID = OptInt(oReqRow.category_id);
			if (iNewCategoryID != undefined && IsDailyCategory(iNewCategoryID, aCategories))
			{
				Fail(400, "Нельзя добавить строку расхода с категорией \"Суточные\" вручную");
			}
			oExpense = teReport.expenses.AddChild();
			oExpense.line_code_1c = GenerateRowUid(teReport);
			oExpense.is_from_1c = false;
		}

		bFromOnec = tools_web.is_true(oExpense.is_from_1c);

		oExpense.sum = OptReal(oReqRow.sum, 0);
		oExpense.currency_id = iCurrencyID;

		// Предзаполненная из 1С строка (не суточные, это отсечено выше) — правится только Сумма
		// и Валюта. Остальные поля — только для строк, добавленных самим сотрудником.
		if (!bFromOnec)
		{
			iCategoryID = OptInt(oReqRow.category_id);
			if (iCategoryID == undefined || FindCategory(iCategoryID, aCategories) == undefined)
			{
				Fail(400, "Не выбрана категория расходов для строки");
			}
			if (IsDailyCategory(iCategoryID, aCategories))
			{
				Fail(400, "Нельзя выбрать категорию \"Суточные\" вручную");
			}
			oExpense.expenses_category_id = iCategoryID;

			sDocType = String(oReqRow.incoming_doc_type);
			if (!InArray(INCOMING_DOC_TYPES, sDocType))
			{
				Fail(400, "Недопустимый вид входящего документа");
			}
			oExpense.incoming_doc_type = sDocType;
			oExpense.incoming_doc_number = String(oReqRow.incoming_doc_number == undefined ? "" : oReqRow.incoming_doc_number);
			oExpense.vendor = String(oReqRow.vendor == undefined ? "" : oReqRow.vendor);
			dDocDate = OptDate(oReqRow.incoming_doc_date);
			if (dDocDate != undefined) oExpense.incoming_doc_date = dDocDate;

			ApplyRowFile(oExpense, oReqRow, iPersonID, teReport, aReportResources);
		}
	}
}

// Аналогично ApplyExpenseRows, но для "Билеты": новая строка от сотрудника создаёт полноценный
// cc_ticket (не только строку в табличной части) — см. решение по архитектуре Билетов.
function ApplyTicketRows(teReport, aCategories, iPersonID, aRequestRows, aReportResources)
{
	aExistingUids = [];
	for (oTicket in teReport.tickets)
	{
		aExistingUids.push(String(oTicket.line_code_1c));
	}

	aRequestUids = [];
	for (oReqRow in aRequestRows)
	{
		if (!IsEmptyValue(oReqRow.row_uid) && StrBegins(String(oReqRow.row_uid), "new_") == false)
		{
			aRequestUids.push(String(oReqRow.row_uid));
		}
	}

	for (sUid in aExistingUids)
	{
		oExistingTicket = ArrayOptFind(teReport.tickets, "String(This.line_code_1c) == '" + sUid + "'");
		if (oExistingTicket != undefined && tools_web.is_true(oExistingTicket.is_from_1c)) continue;
		if (ArrayOptFind(aRequestUids, "This == '" + sUid + "'") == undefined)
		{
			teReport.tickets.DeleteChildren("String(This.line_code_1c) == '" + sUid + "'");
		}
	}

	for (oReqRow in aRequestRows)
	{
		bIsNew = IsEmptyValue(oReqRow.row_uid) || StrBegins(String(oReqRow.row_uid), "new_");
		oTicketRow = bIsNew ? undefined : ArrayOptFind(teReport.tickets, "String(This.line_code_1c) == '" + String(oReqRow.row_uid) + "'");

		if (oTicketRow != undefined && tools_web.is_true(oTicketRow.is_from_1c))
		{
			continue;
		}

		iCategoryID = OptInt(oReqRow.category_id);
		if (iCategoryID == undefined || FindCategory(iCategoryID, aCategories) == undefined)
		{
			Fail(400, "Не выбрана категория расходов для строки билета");
		}
		rSum = OptReal(oReqRow.sum, 0);
		sVendor = String(oReqRow.vendor == undefined ? "" : oReqRow.vendor);
		sDocNumber = String(oReqRow.incoming_doc_number == undefined ? "" : oReqRow.incoming_doc_number);
		dDocDate = OptDate(oReqRow.incoming_doc_date);

		docTicket = undefined;
		if (oTicketRow != undefined)
		{
			docTicket = tools.open_doc(OptInt(oTicketRow.id_ticket));
		}
		if (docTicket == undefined)
		{
			docTicket = tools.new_doc_by_name("cc_ticket");
			docTicket.TopElem.name = "Билет (командировка)";
			docTicket.TopElem.person_id = iPersonID;
			docTicket.BindToDb();
		}
		docTicket.TopElem.vendor = sVendor;
		docTicket.TopElem.incoming_doc_number = sDocNumber;
		if (dDocDate != undefined) docTicket.TopElem.incoming_doc_date = dDocDate;
		docTicket.TopElem.expenses_category_id = iCategoryID;
		docTicket.TopElem.price = rSum;
		docTicket.Save();

		if (oTicketRow == undefined)
		{
			oTicketRow = teReport.tickets.AddChild();
			oTicketRow.line_code_1c = GenerateRowUid(teReport);
			oTicketRow.is_from_1c = false;
		}
		oTicketRow.id_ticket = OptInt(docTicket.TopElem.id);
		oTicketRow.sum = rSum;

		ApplyRowFile(oTicketRow, oReqRow, iPersonID, teReport, aReportResources);
	}
}

function ActionSaveReportDraft()
{
	iPersonID = OptInt(curUserID);
	if (iPersonID == undefined)
	{
		Fail(400, "Не определён текущий сотрудник");
	}

	docReport = FindExpenseReport(iBusinessTripID, iPersonID);
	teReport = docReport.TopElem;

	if (tools_web.is_true(teReport.is_sent))
	{
		Fail(403, "Авансовый отчёт уже отправлен, изменения недоступны");
	}

	aCategories = GetCategoriesList();
	aCurrencies = GetCurrenciesList();
	aExpenseRows = ParseJson(RequireQuery("expenses_json", "Расходы"));
	aTicketRows = ParseJson(RequireQuery("tickets_json", "Билеты"));
	aReportResources = LoadReportResources(teReport);

	ApplyExpenseRows(teReport, aCategories, aCurrencies, iPersonID, aExpenseRows, aReportResources);
	ApplyTicketRows(teReport, aCategories, iPersonID, aTicketRows, aReportResources);
	docReport.Save();

	SendOk("Черновик авансового отчёта сохранён", { id: OptInt(teReport.id) });
}

function ActionSendReport()
{
	iPersonID = OptInt(curUserID);
	if (iPersonID == undefined)
	{
		Fail(400, "Не определён текущий сотрудник");
	}

	docReport = FindExpenseReport(iBusinessTripID, iPersonID);
	teReport = docReport.TopElem;

	if (tools_web.is_true(teReport.is_sent))
	{
		Fail(403, "Авансовый отчёт уже отправлен, изменения недоступны");
	}

	aCategories = GetCategoriesList();
	aCurrencies = GetCurrenciesList();
	aExpenseRows = ParseJson(RequireQuery("expenses_json", "Расходы"));
	aTicketRows = ParseJson(RequireQuery("tickets_json", "Билеты"));
	aReportResources = LoadReportResources(teReport);

	ApplyExpenseRows(teReport, aCategories, aCurrencies, iPersonID, aExpenseRows, aReportResources);
	ApplyTicketRows(teReport, aCategories, iPersonID, aTicketRows, aReportResources);

	teReport.is_sent = true;
	docReport.Save();

	oRes = tools.call_code_library_method("libAflMethodsRouter", "RouteMethod", ["SendAvansovyjOtchetToExternal", [OptInt(teReport.id)]]);

	if (oRes.error == 0)
	{
		SendOk("Авансовый отчёт успешно отправлен", { id: OptInt(teReport.id) });
	}
	else
	{
		sRouteError = ArrayCount(oRes.errors) > 0 ? oRes.errors.join("; ") : String(oRes.errorText);
		AlertLog("Error: " + sRouteError);

		teReport.is_sent = false;
		docReport.Save();

		Fail(500, "Возникла ошибка при отправке авансового отчёта");
	}
}

// Применяет отложенное вложение файла к строке (Расходы или Билеты) — вызывается из
// ApplyExpenseRows/ApplyTicketRows при Сохранении/Отправке, а не отдельным запросом: файл до этого
// момента хранится только на фронте (см. file_name/file_data/remove_file во входящей строке).
// Вызывающая сторона уже отвечает за проверку прав на редактирование строки (is_from_1c/Суточные).
function ApplyRowFile(oRow, oReqRow, iPersonID, teReport, aReportResources)
{
	// file_name/file_data/remove_file присутствуют в присланной строке не всегда (только когда
	// реально нужны) — в отличие от обычных полей, обращение к отсутствующему свойству через точку
	// на этой платформе выбрасывает ошибку, поэтому тут обязательно GetOptProperty.
	sFileName = String(oReqRow.GetOptProperty("file_name", ""));
	sFileData = String(oReqRow.GetOptProperty("file_data", ""));

	sLineCode = String(oRow.line_code_1c);

	if (sFileName != "" && sFileData != "")
	{
		sTempUrl = ObtainTempFile(".bin");
		PutUrlData(sTempUrl, Base64Decode(sFileData));

		sReportGuid = String(teReport.code);
		aNameParts = sFileName.split(".");
		sExtension = ArrayCount(aNameParts) > 1 ? aNameParts[ArrayCount(aNameParts) - 1] : "";

		oExistingResource = FindRowResource(aReportResources, sLineCode);
		docResource = oExistingResource != undefined ? tools.open_doc(OptInt(oExistingResource.id)) : undefined;

		bIsNewResource = docResource == undefined;
		if (bIsNewResource)
		{
			docResource = OpenNewDoc("x-local://wtv/wtv_resource.xmd");
			docResource.BindToDb();
		}
		else
		{
			docResource.TopElem.file_url = "";
			docResource.TopElem.links.DeleteChildren("This.object_id != 0");
		}

		docResource.TopElem.name = sFileName;
		docResource.TopElem.put_data(sTempUrl);
		docResource.TopElem.file_name = sFileName;
		docResource.TopElem.person_id = iPersonID;

		newLink = docResource.TopElem.links.AddChild();
		newLink.object_id = OptInt(teReport.id, 0);
		newLink.object_catalog = "cc_expense_report";

		try
		{
			docResource.TopElem.custom_elems.ObtainChildByKey("line_id_1c").value = sLineCode;
			docResource.TopElem.custom_elems.ObtainChildByKey("owner").value = sReportGuid;
			docResource.TopElem.custom_elems.ObtainChildByKey("owner_type").value = "Документ.АвансовыйОтчет";
			docResource.TopElem.custom_elems.ObtainChildByKey("extension").value = sExtension;
		}
		catch (err)
		{
			AlertLog("Ошибка при попытке записать значение в кастомное поле ресурса базы: " + err);
		}

		docResource.Save();

		if (bIsNewResource)
		{
			sResourceGuid = String(tools.call_code_library_method("libAflIntegration", "wsIdToGuid", [OptInt(docResource.TopElem.id)]));
			docResource.TopElem.code = sResourceGuid;
			docResource.Save();
		}
	}
	else if (tools_web.is_true(oReqRow.GetOptProperty("remove_file", false)))
	{
		oExistingResource = FindRowResource(aReportResources, sLineCode);
		if (oExistingResource != undefined)
		{
			DeleteDoc(UrlFromDocID(OptInt(oExistingResource.id)));
		}
	}
}

// ==================== Список командировок ====================

// Список командировок текущего сотрудника (участник либо инициатор) — та же логика, что и в
// "Выборка Командировка. Список заявок на командировку (сотрудник).js" (используется встроенным
// виджетом), здесь то же самое отдаётся фронту через fetch. Открытие документов в цикле —
// см. предупреждение о производительности в этой Выборке.
function GetTripsListForPerson(iPersonID)
{
	aResult = [];
	aTripIds = ArraySelectAll(XQuery("for $elem in cc_business_trips return $elem/Fields('id')"));

	for (oTripId in aTripIds)
	{
		iTripID = OptInt(oTripId.id);
		if (iTripID == undefined) continue;

		docTrip = tools.open_doc(iTripID);
		if (docTrip == undefined) continue;
		teTrip = docTrip.TopElem;

		bIsInvolved = OptInt(teTrip.initiator) == iPersonID;
		if (!bIsInvolved)
		{
			oMember = ArrayOptFind(teTrip.collaborators, "OptInt(This.person_id) == " + iPersonID);
			bIsInvolved = oMember != undefined;
		}
		if (!bIsInvolved) continue;

		aResult.push({
			id: iTripID,
			code: String(teTrip.code),
			type: String(teTrip.type),
			direction: String(teTrip.direction),
			start_date: GetStrDate(teTrip.start_date),
			finish_date: GetStrDate(teTrip.finish_date),
			days: GetTripDurationDays(teTrip)
		});
	}

	return aResult;
}

// Продолжительность командировки в днях (см. также аналогичный расчёт в "Выборка Командировка.
// Общая информация.js") — undefined, если не заполнена хотя бы одна из дат.
function GetTripDurationDays(teTrip)
{
	dStart = OptDate(teTrip.start_date);
	dFinish = OptDate(teTrip.finish_date);
	if (dStart == undefined || dFinish == undefined) return undefined;
	return OptInt(DateDiff(dFinish, dStart) / 86400);
}

function ActionGetTripsList()
{
	iPersonID = OptInt(curUserID);
	if (iPersonID == undefined)
	{
		Fail(400, "Не определён текущий сотрудник");
	}

	SendOk("Список командировок получен", {
		trips: GetTripsListForPerson(iPersonID)
	});
}

// Сводка по командировке (номер, направление, даты, продолжительность) — общая для списков
// заявлений на аванс и авансовых отчётов, у которых своих полей направления/дат нет, только
// ссылка на командировку (business_trip_id).
function GetTripSummary(iTripID)
{
	if (iTripID == undefined) return undefined;

	docTrip = tools.open_doc(iTripID);
	if (docTrip == undefined) return undefined;
	teTrip = docTrip.TopElem;

	return {
		code: String(teTrip.code),
		direction: String(teTrip.direction),
		start_date: GetStrDate(teTrip.start_date),
		finish_date: GetStrDate(teTrip.finish_date),
		days: GetTripDurationDays(teTrip)
	};
}

// ==================== Список заявлений на аванс ====================

function GetAdvanceStatementsListForPerson(iPersonID)
{
	aResult = [];
	aRows = ArraySelectAll(XQuery(
		"for $elem in cc_advance_statements where $elem/person_id = " + iPersonID +
		" return $elem/Fields('id')"
	));

	for (oRow in aRows)
	{
		iStatementID = OptInt(oRow.id);
		if (iStatementID == undefined) continue;

		docStatement = tools.open_doc(iStatementID);
		if (docStatement == undefined) continue;
		teStatement = docStatement.TopElem;

		oTrip = GetTripSummary(OptInt(teStatement.business_trip_id));
		if (oTrip == undefined) continue;

		sStatus = tools_web.is_true(teStatement.is_sent) ? "Отправлено" : "Черновик";

		aResult.push({
			id: iStatementID,
			trip_id: OptInt(teStatement.business_trip_id),
			trip_code: oTrip.code,
			direction: oTrip.direction,
			start_date: oTrip.start_date,
			finish_date: oTrip.finish_date,
			days: oTrip.days,
			code: String(teStatement.code),
			status: sStatus
		});
	}

	return aResult;
}

function ActionGetAdvanceStatementsList()
{
	iPersonID = OptInt(curUserID);
	if (iPersonID == undefined)
	{
		Fail(400, "Не определён текущий сотрудник");
	}

	SendOk("Список заявлений на аванс получен", {
		items: GetAdvanceStatementsListForPerson(iPersonID)
	});
}

// ==================== Список авансовых отчётов ====================

function GetExpenseReportsListForPerson(iPersonID)
{
	aResult = [];
	aRows = ArraySelectAll(XQuery(
		"for $elem in cc_expense_reports where $elem/person_id = " + iPersonID +
		" return $elem/Fields('id')"
	));

	for (oRow in aRows)
	{
		iReportID = OptInt(oRow.id);
		if (iReportID == undefined) continue;

		docReport = tools.open_doc(iReportID);
		if (docReport == undefined) continue;
		teReport = docReport.TopElem;

		oTrip = GetTripSummary(OptInt(teReport.business_trip_id));
		if (oTrip == undefined) continue;

		sStatus = tools_web.is_true(teReport.is_sent) ? "Отправлено" : "Черновик";

		aResult.push({
			id: iReportID,
			trip_id: OptInt(teReport.business_trip_id),
			trip_code: oTrip.code,
			direction: oTrip.direction,
			start_date: oTrip.start_date,
			finish_date: oTrip.finish_date,
			days: oTrip.days,
			code: String(teReport.code),
			status: sStatus
		});
	}

	return aResult;
}

function ActionGetExpenseReportsList()
{
	iPersonID = OptInt(curUserID);
	if (iPersonID == undefined)
	{
		Fail(400, "Не определён текущий сотрудник");
	}

	SendOk("Список авансовых отчётов получен", {
		items: GetExpenseReportsListForPerson(iPersonID)
	});
}

// --- Роутер ---

function HandleRequest()
{
	sAction = GetQuery("action");

	if (sAction == "get_advance_data")
	{
		ActionGetAdvanceData();
	}
	else if (sAction == "save_advance_draft")
	{
		ActionSaveAdvanceDraft();
	}
	else if (sAction == "send_advance")
	{
		ActionSendAdvance();
	}
	else if (sAction == "get_report_data")
	{
		ActionGetReportData();
	}
	else if (sAction == "save_report_draft")
	{
		ActionSaveReportDraft();
	}
	else if (sAction == "send_report")
	{
		ActionSendReport();
	}
	else if (sAction == "get_trips_list")
	{
		ActionGetTripsList();
	}
	else if (sAction == "get_advance_statements_list")
	{
		ActionGetAdvanceStatementsList();
	}
	else if (sAction == "get_expense_reports_list")
	{
		ActionGetExpenseReportsList();
	}
	else
	{
		Fail(400, "Неизвестное действие: " + sAction);
	}
}

// --- Точка входа ---
try
{
	var sEntryAction = GetQuery("action");
	// Действия-списки по сотруднику (не по одной командировке) — business_trip_id им не нужен.
	var LIST_ACTIONS = ["get_trips_list", "get_advance_statements_list", "get_expense_reports_list"];
	var iBusinessTripID;
	if (!InArray(LIST_ACTIONS, sEntryAction))
	{
		iBusinessTripID = OptInt(GetQuery("business_trip_id"));
		if (iBusinessTripID == undefined)
		{
			Fail(400, "Не передан параметр business_trip_id");
		}
	}

	var iKassyTypeID = OptInt(tools.call_code_library_method("libAfl1CZup", "GetObjectIDByField", ["Kassy", "object_data_type", ""]).result);
	if (iKassyTypeID == undefined)
	{
		Fail(500, "Не найден тип объекта данных 'Kassy'");
	}

	var iCategoryTypeID = OptInt(tools.call_code_library_method("libAfl1CZup", "GetObjectIDByField", ["KategoriiRashodovNaKomandirovki", "object_data_type", ""]).result);
	if (iCategoryTypeID == undefined)
	{
		Fail(500, "Не найден тип объекта данных 'KategoriiRashodovNaKomandirovki'");
	}

	var iCurrencyTypeID = OptInt(tools.call_code_library_method("libAfl1CZup", "GetObjectIDByField", ["Valjuty", "object_data_type", ""]).result);
	if (iCurrencyTypeID == undefined)
	{
		Fail(500, "Не найден тип объекта данных 'Valjuty'");
	}

	HandleRequest();
}
catch (e)
{
	sError = String(e.message == undefined ? e : e.message);
	aParts = sError.split(ERR_SEPARATOR);

	if (ArrayCount(aParts) == 2 && OptInt(aParts[0]) != undefined)
	{
		SendResponse(OptInt(aParts[0]), false, aParts[1], {});
	}
	else
	{
		AlertLog("Unexpected error: " + sError);
		SendResponse(500, false, "Внутренняя ошибка сервера", {});
	}
}
EnableLog(LOG_TAG, false);
%>