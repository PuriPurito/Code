// Настраиваемый отчёт: некоробочные и изменённые коробочные объекты системы
//
// Логика включения объекта в отчёт:
//
//   Каталоги С полем is_std:
//     1. is_std = false ИЛИ is_std отсутствует  И  is_from_integration != true
//     2. is_std = true  И  changed = true  (коробочный, но кем-то изменён)
//
//   Каталоги БЕЗ поля is_std (операционные данные):
//     3. is_from_integration != true  (только те, что созданы вручную, не интеграцией)
//
// Поля is_std/changed — SQL-колонки только в каталогах из aCatIsStd.
// doc_info и custom_elems — только в документе (tools.open_doc).
//
// bGenerateColumns   = true  → сгенерировать столбцы при следующем запуске, затем сбросить в false.
// bGenerateCriterions = true  → сгенерировать фильтры при следующем запуске, затем сбросить в false.
//
// Фильтры создаются через generateCriterions() и читаются через ReadCriterions().
// Идентификация критерия — по column_title (поиск в GetCriterionValue).
// Деактивированный критерий полностью исчезает из массива, поэтому поиск только по заголовку.
//
//   column_title = "Дата изменения (от)" — минимальная дата изменения; пусто — без ограничения.
//   column_title = "Логин изменившего"   — точный логин пользователя; пусто — без фильтра.
//   column_title = "Поиск по ID"         — поиск по ID объекта (подстрока); пусто — без фильтра.
//   column_title = "Поиск по названию"   — поиск по названию объекта (подстрока); пусто — без фильтра.
//   column_title = "Тип (каталог)"       — фильтр по типу объекта (точное имя каталога); пусто — без фильтра.

var sLogName            = "report_non_std_objects";
var bGenerateColumns    = false;
var bGenerateCriterions = false;

// Диагностика: проверить взаимное вхождение ID двух объектов.
// Установить true, запустить отчёт, результат смотреть в логе sLogName.
// После проверки вернуть в false.
var bDiagnoseCacheIds   = false;
var sDiagId1            = "7043267038344475736";
var sDiagId2            = "7208591075678549032";
var sMinModDate = "";  // заполняется из criterions в точке входа
var sModLogin   = "";
var sSearchId   = "";
var sSearchName = "";
var sObjType    = "";

// Каталоги, которые полностью пропускаются в обоих проходах.
// Добавьте имена каталогов в массив, чтобы исключить их из отчёта.
var aCatExclude = [
	// например: "collaborators", "subdivisions"
	"absence_reserves",
	"accounts",
	"acquaint_assigns", "acquaints",
	"active_learnings", "active_notifications", "active_test_learnings",
	"action_reports",
	"activitys", "activity_states", "assessment_appraise_matrixs",
	"application_instances",
	"assessment_plans",
	"blog_entry_comments", "blog_entrys",
	"certificates",
	"career_reserves",
	"cl_courses",
	"cl_modules",
	"cl_slides",
	"collaborators", "collaborator_schedules",
	"committee_members",
	"connections",
	"courses","course_modules",
	"changes",
	"device_regs",
	"education_plans",
	"document_collaborators", "document_comment_entrys",
	"download_packages",
	"digital_signatures",
	"events", "event_results",
	"event_collaborators", "event_lectors", "event_room_collaborators",
	"event_room_lectors",
	"forum_entrys", "forum_theme_read_by_collaborators",
	"func_managers",
	"group_collaborators",
	"good_types",
	"hosts",
	"key_position_threats",
	"key_positions",
	"knowledge_parts", "knowledges", "knowledge_acquaints",
	"library_materials",
	"library_material_viewings",
	"learning_records", "learning_parts", "learning_task_results",
	"learning_tasks", "learnings",
	"lectors",
	"likes",
	"object_claims",
	"object_experts", "object_links", "object_versions",
	"pa_competences", "participants", "pas",
	"personnel_reserves",
	"person_hierarchys", "person_object_link_objects", "person_object_links",
	"personal_chats",
	"polls", "poll_results",
	"positions", "position_commons",
	"profiles",
	"profiling_records",
	"project_participants", "project_participant_roles",
	"qualifications", "qualification_assignments",
	"object_params",
	"recommender_algorithm_applyings", "recommender_select_collaborators",
	"responses",
	"resumes",
	"repositoriums",
	"requests",
	// resources исключены намеренно — обрабатываются через XML-сканирование в проходе 4
	"resources",
	"selected_resumes", "selected_vacancys",
	"social_entrys",
	"staff_position_finishs", "staff_position_moves", "staff_position_starts",
	"staff_subs",
	"statements","statement_actors", "statement_additionals", "statement_attachments",
	"statement_components", "statement_objects",
	"statistic_datas",
	"subscriptions",
	"subs",
	"successors",
	"tagged_objects",
	"talent_pool_func_managers", "talent_pool_nominations",
	"tasks",
	"test_learnings",
	"transactions",
	"typical_development_programs",
	"upload_packages",
	"user_assignments", "user_recommendations",
	"vacancy_responses", "vacancy_subscriptions",
	"vacation_days",
	"walkthroughs",
	"wiki_article_communications"
];

// Коды doc_types (doc_types.code = имя динамического каталога), которые включаются в отчёт.
// Если массив пуст — динамические каталоги doc_types не обрабатываются.
var aDocTypeCodes = [
	// например: "my_doc_type_code"
];

// Коды типов (object_data_types.code), записи object_datas с которыми исключаются из отчёта.
// Если массив пуст — object_datas не фильтруется по типу (включаются все записи).
var aObjectDataTypeCodeFilter = [
	// например: "some_type_code", "another_type_code"
	"integration_systems",
	"requests_to_receive_data",
	"requests_for_send_data",
	"fcache",
	"person_education",
];

// Логины пользователей, изменения которых не включаются в отчёт.
// Объект пропускается, если modification_login совпадает с любым логином из массива.
var aModLoginExclude = [
	// например: "admin", "integration_user"
	"user1",
	"user21",
	"mfv",
	"iii",
	"bmv",
	"ag",
	"admin",
	"sur_a",
	"ap",
	"ln",
	"DPG",
	"spec"
];

EnableLog(sLogName, true);

function AlertLog(log)
{
	var sLog    = log;
	var logType = ObjectType(log);
	if (DataType(log) == "object" && (logType == "JsObject" || logType == "JsArray" || logType == "XmElem"))
		sLog = tools.object_to_text(log, "json");
	LogEvent(sLogName, sLog);
}

// ---------------------------------------------------------------------------
// Добавить столбец одновременно в оба источника
// ---------------------------------------------------------------------------
function AddColumn(aRoots, sTitle, sValue)
{
	var oCol;
	for (oRoot in aRoots)
	{
		oCol               = oRoot.AddChild();
		oCol.flag_formula  = true;
		oCol.column_title  = sTitle;
		oCol.column_value  = "ListElem." + sValue;
		oCol.datatype      = "string";
	}
}

// ---------------------------------------------------------------------------
// Генерация столбцов (разовая операция, bGenerateColumns = true).
// id — глобальный, передаётся в tools.open_doc напрямую (без OptInt).
// ---------------------------------------------------------------------------
function generateColumns()
{
	try
	{
		var docSelf = tools.open_doc(id);
		if (docSelf == null || docSelf == undefined)
		{
			AlertLog("generateColumns: tools.open_doc(id) вернул null");
			return;
		}

		columns.Clear();
		docSelf.TopElem.columns.Clear();

		var aRoots = [columns, docSelf.TopElem.columns];

		AddColumn(aRoots, "ID",               "id");
		AddColumn(aRoots, "Название",         "obj_name");
		AddColumn(aRoots, "Тип (каталог)",    "obj_type");
		AddColumn(aRoots, "Коробочный",       "is_std");
		AddColumn(aRoots, "Дата создания",    "creation_date");
		AddColumn(aRoots, "Кто создал",       "creation_login");
		AddColumn(aRoots, "Дата изменения",   "modification_date");
		AddColumn(aRoots, "Кто изменил",      "modification_login");
		AddColumn(aRoots, "Источник (объект)", "ref_object_id");
		AddColumn(aRoots, "Связанные объекты",  "ref_object_name");
		AddColumn(aRoots, "Код",               "obj_code");

		docSelf.Save();
		AlertLog("Столбцы успешно сгенерированы и сохранены");
	}
	catch (eGen)
	{
		AlertLog("Ошибка при генерации столбцов: " + eGen);
	}
}

// ---------------------------------------------------------------------------
// Генерация фильтров (разовая операция, bGenerateCriterions = true).
// flag_is_parameter = true — критерий отображается пользователю как редактируемый параметр
//                            и его значение сохраняется между запусками отчёта.
// ---------------------------------------------------------------------------
function generateCriterions()
{
	try
	{
		docSelf = tools.open_doc(id);
		if (docSelf == null || docSelf == undefined)
		{
			AlertLog("generateCriterions: tools.open_doc(id) вернул null");
			return;
		}

		docSelf.TopElem.criterions.Clear();

		// field в catalog_chains — технический идентификатор для GetCriterionValue.
		// column_title — отображаемый заголовок в UI.
		oCrit                   = docSelf.TopElem.criterions.AddChild();
		oCrit.column_title      = "Дата изменения (от)";
		oCrit.type              = "date";
		oCrit.flag_is_parameter = true;
		oCritChain              = oCrit.catalog_chains.AddChild();
		oCritChain.catalog_name = "collaborator";
		oCritChain.field        = "hire_date";

		oCrit                   = docSelf.TopElem.criterions.AddChild();
		oCrit.column_title      = "Логин изменившего";
		oCrit.type              = "string";
		oCrit.flag_is_parameter = true;
		oCritChain              = oCrit.catalog_chains.AddChild();
		oCritChain.catalog_name = "collaborator";
		oCritChain.field        = "login";

		oCrit                   = docSelf.TopElem.criterions.AddChild();
		oCrit.column_title      = "Поиск по ID";
		oCrit.type              = "string";
		oCrit.flag_is_parameter = true;
		oCritChain              = oCrit.catalog_chains.AddChild();
		oCritChain.catalog_name = "collaborator";
		oCritChain.field        = "fullname";

		oCrit                   = docSelf.TopElem.criterions.AddChild();
		oCrit.column_title      = "Поиск по названию";
		oCrit.type              = "string";
		oCrit.flag_is_parameter = true;
		oCritChain              = oCrit.catalog_chains.AddChild();
		oCritChain.catalog_name = "collaborator";
		oCritChain.field        = "fullname";

		oCrit                   = docSelf.TopElem.criterions.AddChild();
		oCrit.column_title      = "Тип (каталог)";
		oCrit.type              = "string";
		oCrit.flag_is_parameter = true;
		oCritChain              = oCrit.catalog_chains.AddChild();
		oCritChain.catalog_name = "collaborator";
		oCritChain.field        = "fullname";

		docSelf.Save();
		AlertLog("Критерии успешно сгенерированы и сохранены");
	}
	catch (eCrit)
	{
		AlertLog("Ошибка при генерации критериев: " + eCrit);
	}
}

// ---------------------------------------------------------------------------
// Найти значение критерия по column_title. Возвращает "" если не найден.
// Деактивированные критерии полностью отсутствуют в массиве — проверка flag_active не нужна.
// ---------------------------------------------------------------------------
function GetCriterionValue(aCriterions, sTitle)
{
	oCrit = ArrayOptFind(aCriterions, "String(This.column_title) == '" + sTitle + "'");
	if (oCrit == undefined)
		return "";
	return String(oCrit.value);
}

// ---------------------------------------------------------------------------
// Прочитать параметры отчёта из глобальной переменной _CRITERIONS.
// _CRITERIONS заполняется платформой до запуска скрипта и содержит актуальные
// значения фильтров, введённые пользователем в текущем сеансе запуска отчёта.
// var внутри функции — намеренно: в Websoft HCM var создаёт глобальную переменную,
// что перезаписывает значения по умолчанию, объявленные в начале скрипта.
// ---------------------------------------------------------------------------
function ReadCriterions()
{
	try { _CRITERIONS; } catch(e) { _CRITERIONS = []; }
	aCrits = ArraySelectAll(_CRITERIONS);
	AlertLog("ReadCriterions: критериев в _CRITERIONS: " + ArrayCount(aCrits));
	sMinModDate = GetCriterionValue(aCrits, "Дата изменения (от)");
	sModLogin   = GetCriterionValue(aCrits, "Логин изменившего");
	sSearchId   = GetCriterionValue(aCrits, "Поиск по ID");
	sSearchName = GetCriterionValue(aCrits, "Поиск по названию");
	sObjType    = GetCriterionValue(aCrits, "Тип (каталог)");
	AlertLog("Параметры отчёта: sMinModDate=[" + sMinModDate + "] sModLogin=[" + sModLogin + "] sSearchId=[" + sSearchId + "] sSearchName=[" + sSearchName + "] sObjType=[" + sObjType + "]");
}

// ---------------------------------------------------------------------------
// Предикат: проверить, что объект прошёл фильтр по дате и логину изменения.
// Возвращает false если:
//   - modification_date пустая
//   - modification_date < sMinModDate (только если sMinModDate != "")
//   - modification_login пустой
//   - sModLogin задан и modification_login != sModLogin
// ---------------------------------------------------------------------------
function PassModFilter(oInfo)
{
	if (oInfo.modification_date == "" || oInfo.modification_login == "")
		return false;
	if (!IsEmptyValue(sModLogin) && oInfo.modification_login != sModLogin)
		return false;
	var dModDate = DateNewTime(OptDate(oInfo.modification_date));
	if (IsEmptyValue(dModDate))
		return false;
	if (!IsEmptyValue(sMinModDate))
	{
		var dMinDate = DateNewTime(OptDate(sMinModDate));
		if (IsEmptyValue(dMinDate))
			return false;
		// DateDiff(a, b) > 0 означает a > b; >= 0 означает a >= b
		if (DateDiff(dModDate, dMinDate) < 0)
			return false;
	}
	return true;
}

// ---------------------------------------------------------------------------
// Проверить, входит ли каталог в список исключений.
// ---------------------------------------------------------------------------
function IsExcluded(sName, aExclude)
{
	return ArrayOptFind(aExclude, "This == '" + sName + "'") != undefined;
}

// ---------------------------------------------------------------------------
// Вспомогательная функция: прочитать doc_info и is_from_integration из документа.
// Возвращает объект {creation_date, creation_login, modification_date,
//                    modification_login, bFromIntegration}.
// ---------------------------------------------------------------------------
function ReadDocInfo(iDocId)
{
	var oInfo = {
		creation_date:      "",
		creation_login:     "",
		modification_date:  "",
		modification_login: "",
		bFromIntegration:   false
	};
	var docObj, teObj, oFromIntElem, sVal;

	docObj = tools.open_doc(iDocId);
	if (docObj == null || docObj == undefined)
		return oInfo;

	teObj = docObj.TopElem;

	try
	{
		oFromIntElem = teObj.custom_elems.GetOptChildByKey("is_from_integration", "code");
		if (oFromIntElem != null && oFromIntElem != undefined)
		{
			sVal                   = String(oFromIntElem.value);
			oInfo.bFromIntegration = sVal == "1" || StrLowerCase(sVal) == "true";
		}
	}
	catch (eCustom) {}

	try
	{
		oInfo.creation_date      = String(teObj.doc_info.creation.date);
		oInfo.creation_login     = String(teObj.doc_info.creation.user_login);
		oInfo.modification_date  = String(teObj.doc_info.modification.date);
		oInfo.modification_login = String(teObj.doc_info.modification.user_login);
	}
	catch (eDocInfo) {}

	return oInfo;
}

// Типы объектов, чьи XML-параметры сканируются на предмет ссылок на resources.
// Это объекты, в конфигурации которых могут быть произвольно указаны ID ресурсов
// (в параметрах агентов, шаблонах, выборках и т.д.).
// override_web_templates добавлены для контейнеров (mode=""):
// они не имеют прямой страницы, но ссылаются на них другие элементы шаблонов.
// Шаг 4 найдёт их ID в XML родительских элементов и проставит ref_object_id.
// Элементы с mode != "" пропускаются — у них ref_object_id уже заполнен в Проходе 1.
var aLinkableTypes = ["remote_collections", "remote_actions", "statistic_recs", "custom_web_templates", "override_web_templates"];

// web_modes убраны из сканирования: их XML содержит произвольные числа,
// которые ложно совпадают с ID других объектов. Связка Показатель → Тип страницы
// работает через ref_object_id override_web_templates, а не через XML web_mode.
var aDangerousTypesForResourceScan = [
	"server_agents", "remote_collections", "remote_actions",
	"custom_templates", "notification_templates", "workflows",
	"documents", "view_configurations", "custom_web_templates",
	"override_web_templates", "print_forms", "web_designs",
	"form_inst_packs", "sites"
];

// ---------------------------------------------------------------------------
// Проверить, входит ли тип объекта в список для XML-сканирования ресурсов.
// ---------------------------------------------------------------------------
function IsDangerousTypeForResourceScan(sType)
{
	return ArrayOptFind(aDangerousTypesForResourceScan, "This == '" + sType + "'") != undefined;
}

// ---------------------------------------------------------------------------
// Проверить, является ли строка десятичным целым числом (только цифры).
// Используются платформенные функции: StrLen, StrRangePos.
// ---------------------------------------------------------------------------
function IsDecStr(s)
{
	iLen = StrLen(s);
	if (iLen < 1)
		return false;
	for (n = 0; n < iLen; n++)
	{
		c = StrRangePos(s, n, n + 1);
		if (c < "0" || c > "9")
			return false;
	}
	return true;
}

// ---------------------------------------------------------------------------
// Проверить, является ли строка шестнадцатеричным числом с префиксом 0x/0X.
// Используются платформенные функции: StrLen, StrRangePos, StrLowerCase.
// ---------------------------------------------------------------------------
function IsHexPfxStr(s)
{
	iLen = StrLen(s);
	if (iLen < 4)                         // "0x" + минимум 2 символа
		return false;
	if (StrRangePos(s, 0, 1) != "0")
		return false;
	c = StrRangePos(s, 1, 2);
	if (c != "x" && c != "X")
		return false;
	for (n = 2; n < iLen; n++)
	{
		c = StrLowerCase(StrRangePos(s, n, n + 1));
		if (!((c >= "0" && c <= "9") || (c >= "a" && c <= "f")))
			return false;
	}
	return true;
}

// ---------------------------------------------------------------------------
// Вспомогательная функция: если sToken — корректный ID (hex или decimal),
// нормализует через OptInt и добавляет в aIds (без дублей).
// ---------------------------------------------------------------------------
function TryAddId(sToken, aIds)
{
	iLen = StrLen(sToken);

	if (iLen >= 4 && iLen <= 18 && IsHexPfxStr(sToken))
		iVal = OptInt(sToken);
	else if (iLen >= 10 && iLen <= 20 && IsDecStr(sToken))
		iVal = OptInt(sToken);
	else
		return;

	if (iVal == undefined)
		return;

	sVal = String(iVal);
	if (ArrayOptFind(aIds, "This == '" + sVal + "'") == undefined)
		aIds.push(sVal);
}

// ---------------------------------------------------------------------------
// Убрать содержимое XML-тега, оставив только открывающий и закрывающий теги.
// Используется для исключения кэш-тегов перед поиском ID — в них могут быть
// неточные/случайные числа которые ложно совпадают с ID объектов.
// ---------------------------------------------------------------------------
function StripTagContent(sXml, sTagName)
{
	// Используем ТОЛЬКО JS-метод split() для обеих границ тега.
	// Это принципиально важно: indexOf() возвращает позицию в символах,
	// а Websoft-функции (StrRightRangePos и т.п.) работают с байтами.
	// Кириллица в кэше — 2 байта/символ, поэтому смешение методов
	// приводило к неверным позициям и неудалённому содержимому.
	sOpen  = "<" + sTagName + ">";
	sClose = "</" + sTagName + ">";

	aOpenParts  = sXml.split(sOpen);
	sResult     = "";
	bFirstOpen  = true;

	for (sAfterOpen in aOpenParts)
	{
		if (bFirstOpen)
		{
			sResult    = sAfterOpen;
			bFirstOpen = false;
			continue;
		}
		// Всё что идёт после открывающего тега — делим по закрывающему
		sResult    += sOpen;
		aCloseParts = sAfterOpen.split(sClose);
		bFirstClose = true;
		for (sAfterClose in aCloseParts)
		{
			if (bFirstClose)
			{
				// Содержимое между тегами — пропускаем
				bFirstClose = false;
				continue;
			}
			// Добавляем закрывающий тег и остаток после него
			sResult += sClose + sAfterClose;
			break;
		}
	}
	return sResult;
}

// ---------------------------------------------------------------------------
// Извлечь потенциальные ID из XML-строки объекта.
// Возвращает JS-массив уникальных строк — десятичное представление найденных ID.
//
// Алгоритм (два прохода):
//   1. Разбить по `"` — извлекает JSON-значения ("image_link":"ID") и значения
//      HTML-атрибутов (wt-id="ID") внутри кешированного HTML.
//   2. Разбить по `>`, из каждого куска взять текст до `<` — извлекает
//      текстовые узлы XML (<id>, <custom_web_template_id> и т.д.).
//   Каждый токен проверяется через TryAddId.
//
// Форматы ID в TopElem.Xml:
//   - 16-ричный с префиксом: "0x6690DEC12EE8B504" — стандартный формат документа
//   - Десятичный:             "7390651909812040964" — JSON-поля (image_link и т.п.)
// ---------------------------------------------------------------------------
function ExtractIdsFromXml(sXml)
{
	aIds = [];

	// Проход 1: по кавычкам — JSON-значения и HTML-атрибуты
	aTokens = sXml.split('"');
	for (sToken in aTokens)
		TryAddId(sToken, aIds);

	// Проход 2: по тегам — текстовые узлы XML
	aParts = sXml.split(">");
	for (sPart in aParts)
	{
		iPosLt   = sPart.indexOf("<");
		sContent = iPosLt >= 0 ? StrLeftRange(sPart, iPosLt) : sPart;
		TryAddId(sContent, aIds);
	}

	return aIds;
}

// ---------------------------------------------------------------------------
// Собрать ресурсы, на которые ссылаются объекты из aResult.
//
// Подход (без MatchSome):
//   1. Загрузить ВЕСЬ каталог resources в память одним XQuery.
//   2. Для объектов "опасных" типов из aResult открыть документ,
//      получить XML через docObj.TopElem.Xml, извлечь ID через ExtractIdsFromXml.
//      Накопить все уникальные ID в aAllExtractedIds.
//   3. Для каждого ресурса проверить, есть ли его десятичный ID в aAllExtractedIds
//      линейным поиском в памяти — без MatchSome.
//   4. Для найденных ресурсов прочитать doc_info и добавить в результат.
//
// Примечание: open_doc в цикле оправдан — XML-параметры объектов недоступны
// в каталоге; выборка заведомо мала (только объекты "опасных" типов из aResult).
// ---------------------------------------------------------------------------
function CollectResourceRefs(aResult)
{
	// Шаг 1: загрузить весь каталог resources
	var aAllResources = ArraySelectAll(XQuery(
		"for $r in resources return $r/Fields('id', 'name', 'file_name')"
	));
	if (ArrayOptFirstElem(aAllResources) == undefined)
	{
		AlertLog("CollectResourceRefs: каталог resources пуст");
		return [];
	}
	AlertLog("CollectResourceRefs: загружено ресурсов: " + ArrayCount(aAllResources));

	// Шаг 2: для каждого "опасного" объекта из aResult извлечь ID из XML.
	// Храним пары {sId, sSourceId}, чтобы знать из какого объекта взят каждый ID.
	// Дедупликация по паре (sId + sSourceId) — один источник не дублируется.
	var aAllExtractedPairs = [];
	var oRow, docObj, aExtracted, sExtId, sSourceId, oPair, oPairNew, sXml;

	for (oRow in aResult)
	{
		if (!IsDangerousTypeForResourceScan(oRow.obj_type))
			continue;
		try
		{
			docObj = tools.open_doc(OptInt(oRow.id));
			if (docObj == null || docObj == undefined)
				continue;

			sXml = docObj.TopElem.Xml;
			// Для override_web_templates вырезаем кэш-теги.
			// Диагностика показала: cache_static уже пустой,
			// cache_dynamic содержит JSON с hex-ID, который ложно попадает в пары.
			if (oRow.obj_type == "override_web_templates")
			{
				sXml = StripTagContent(sXml, "cache_static");
				sXml = StripTagContent(sXml, "cache_dynamic");
				sXml = StripTagContent(sXml, "cache_html");
				sXml = StripTagContent(sXml, "cache_vars");
			}
			aExtracted = ExtractIdsFromXml(sXml);
			sSourceId  = String(oRow.id);

			for (sExtId in aExtracted)
			{
				if (ArrayOptFind(aAllExtractedPairs, "This.sId == '" + sExtId + "' && This.sSourceId == '" + sSourceId + "'") == undefined)
				{
					oPairNew           = new Object();
					oPairNew.sId       = sExtId;
					oPairNew.sSourceId = sSourceId;
					aAllExtractedPairs.push(oPairNew);
				}
			}
		}
		catch (eScan)
		{
			AlertLog("CollectResourceRefs: ошибка сканирования объекта " + oRow.id + ": " + eScan);
		}
	}
	AlertLog("CollectResourceRefs: уникальных пар (id, источник): " + ArrayCount(aAllExtractedPairs));

	if (ArrayOptFirstElem(aAllExtractedPairs) == undefined)
		return [];

	// Шаг 3: для каждого ресурса собрать ID объектов-источников и добавить в результат.
	var aFoundResources = [];
	var oRes, sResId, iResId, sRefObjIds, sRefObjNames, oSrcRow, sSrcDesc, oDocInfo, r;

	for (oRes in aAllResources)
	{
		iResId = OptInt(oRes.id);
		if (iResId == undefined)
			continue;
		sResId = String(iResId);

		// Собираем ID и названия объектов, в которых встретился данный ресурс
		sRefObjIds   = "";
		sRefObjNames = "";
		for (oPair in aAllExtractedPairs)
		{
			if (oPair.sId != sResId)
				continue;
			if (sRefObjIds != "") sRefObjIds += ", ";
			sRefObjIds += oPair.sSourceId;
			oSrcRow  = ArrayOptFind(aResult, "String(This.id) == '" + oPair.sSourceId + "'");
			sSrcDesc = oSrcRow != undefined
				? String(oSrcRow.obj_name) + " [" + String(oSrcRow.obj_type) + "]"
				: oPair.sSourceId;
			if (sRefObjNames != "") sRefObjNames += "; ";
			sRefObjNames += sSrcDesc;
		}
		if (sRefObjIds == "")
			continue;

		// Ресурс найден — читаем doc_info
		oDocInfo = ReadDocInfo(iResId);

		r            = new Object();
		r.PrimaryKey = sResId;
		r.id         = sResId;
		try { r.obj_name = String(oRes.name) + " [" + String(oRes.file_name) + "]"; }
		catch (eName) { r.obj_name = ""; }
		r.obj_type           = "resources";
		r.is_std             = "Нет";
		r.ref_object_id      = sRefObjIds;
		r.ref_object_name    = sRefObjNames;
		r.obj_code           = "";
		r.creation_date      = oDocInfo.creation_date;
		r.creation_login     = oDocInfo.creation_login;
		r.modification_date  = oDocInfo.modification_date;
		r.modification_login = oDocInfo.modification_login;

		aFoundResources.push(r);
	}

	AlertLog("CollectResourceRefs: найдено ресурсов по ссылкам: " + ArrayCount(aFoundResources));

	// Шаг 4: проставить ref_object_id для remote_collections, remote_actions,
	// statistic_recs и custom_web_templates — тех объектов, чьи ID нашлись
	// в XML других объектов (шаблонов, агентов и т.д.).
	// aAllExtractedPairs уже построен — просто читаем его в обратную сторону.
	// aLinkableTypes объявлен на верхнем уровне
	// oSrcRow, sSrcDesc уже объявлены выше в шаге 3
	var oLinked, sLinkedId, sRefIds, sRefNames;

	for (oLinked in aResult)
	{
		if (ArrayOptFind(aLinkableTypes, "This == '" + oLinked.obj_type + "'") == undefined)
			continue;
		if (oLinked.ref_object_id != "")  // уже заполнено — не затираем
			continue;

		sLinkedId = String(OptInt(oLinked.id));
		sRefIds   = "";
		sRefNames = "";

		for (oPair in aAllExtractedPairs)
		{
			if (oPair.sId != sLinkedId)
				continue;
			if (oPair.sSourceId == sLinkedId)  // пропускаем самоссылку
				continue;
			if (sRefIds != "") sRefIds += ", ";
			sRefIds += oPair.sSourceId;
			oSrcRow  = ArrayOptFind(aResult, "String(This.id) == '" + oPair.sSourceId + "'");
			sSrcDesc = oSrcRow != undefined
				? String(oSrcRow.obj_name) + " [" + String(oSrcRow.obj_type) + "]"
				: oPair.sSourceId;
			if (sRefNames != "") sRefNames += "; ";
			sRefNames += sSrcDesc;
		}

		if (sRefIds != "")
		{
			oLinked.ref_object_id   = sRefIds;
			oLinked.ref_object_name = sRefNames;
		}
	}
	AlertLog("CollectResourceRefs: шаг 4 завершён (remote_collections/actions/statistic_recs/cwt)");

	return aFoundResources;
}

// ---------------------------------------------------------------------------
// Основная логика
// ---------------------------------------------------------------------------
function main()
{
	// ------------------------------------------------------------------
	// Каталоги С полем is_std (из schemas/catalogs/*.md с is_std)
	// ------------------------------------------------------------------
	var aCatIsStd = [
		"access_blocks", "admin_configurations", "applications",
		"auth_types", "boss_types", "channel_providers",
		"check_schedules", "cl_modules", "cl_objects",
		"code_librarys", "codings", "component_packages",
		"contact_results", "contact_types", "custom_admin_templates",
		"custom_web_templates", "development_potentials", "efficiency_estimations",
		"event_types", "file_sources", "form_inst_packs",
		"hosts", "knowledge_part_levels", "kpi_groups",
		"learning_storages", "library_material_source_types", "library_players",
		"library_systems", "notification_systems", "notification_templates",
		"notifications", "object_claims", "object_data_types",
		"object_datas", "operations", "override_web_templates",
		"personnel_event_types", "presence_states", "print_forms",
		"proctoring_systems", "professional_areas", "provider_course_types",
		"recommender_algorithms", "recruitment_systems", "remote_actions",
		"remote_applications", "remote_collections", "remote_security_profiles",
		"request_types", "script_queue_elems", "server_agents",
		"sites", "statistic_recs", "system_event_handlers",
		"system_events", "task_types", "verbs",
		"view_configurations", "web_designs", "web_modes",
		"web_rules", "webinar_systems", "workflows"
	];

	// ------------------------------------------------------------------
	// Каталоги БЕЗ поля is_std (все остальные из schemas/catalogs/)
	// ------------------------------------------------------------------
	var aCatNoIsStd = [
		"absence_reserves", "access_roles", "accounts", "acquaint_assigns",
		"acquaints", "action_reports", "active_learnings", "active_notifications",
		"active_test_learnings", "active_web_templates", "activity_states",
		"activitys", "admin_access_catalogs", "aicc_crs", "aicc_des",
		"application_instances", "appointment_types", "articles",
		"assessment_appraise_matrixs", "assessment_appraises", "assessment_plans",
		"assessment_result_recommends", "availability_plans", "banners", "baskets",
		"benefit_items", "benefit_profiles", "benefits", "blog_authors",
		"blog_entry_comments", "blog_entrys", "blogs", "bonus_items",
		"bonus_profiles", "books", "boss_type_operations", "budget_objects",
		"budget_periods", "budget_types", "budgets", "candidate_sources",
		"candidate_status_types", "career_plans", "career_reserve_tutors",
		"career_reserve_types", "career_reserves", "career_trees", "categorys",
		"certificate_types", "certificates", "changes", "cl_consts", "cl_courses",
		"cl_localizations", "cl_shapes", "cl_slides", "cl_video_courses",
		"closing_document_status", "closing_document_statuss", "closing_documents",
		"collaborator_schedules", "collaborators", "committee_members",
		"competence_blocks", "competence_profile_familys", "competence_profiles",
		"competences", "components", "compound_program_education_methods",
		"compound_programs", "connections", "contacts", "contest_marks",
		"contests", "contract_states", "contract_types", "contracts",
		"cost_centers", "course_modules", "course_parts", "courses", "covenants",
		"credentials", "custom_reports", "custom_templates",
		"custom_web_template_groups", "development_methods", "development_plans",
		"device_regs", "digital_signatures", "dimensions", "discharges",
		"disp_object_blocks", "dn_academ_debts", "dn_academ_years",
		"dn_auditoriums", "dn_block_disciplines", "dn_control_events",
		"dn_control_forms", "dn_discipl_blocks", "dn_discipline_blocks",
		"dn_disciplines", "dn_edu_conditions", "dn_educat_events",
		"dn_educat_forms", "dn_group_students", "dn_ind_educat_plans",
		"dn_lessons", "dn_prog_disc_appends", "dn_program_discipls",
		"dn_register_students", "dn_registers", "dn_schedules",
		"dn_specializations", "dn_specials", "dn_streams",
		"dn_stud_centrtest_results", "dn_stud_groups", "dn_students",
		"dn_subject_plans", "dn_terms", "dn_train_method_complexs",
		"dn_work_curriculums", "doc_types", "document_collaborators",
		"document_comment_entrys", "documents", "download_packages",
		"education_forms", "education_method_lectors", "education_methods",
		"education_modes", "education_org_lectors", "education_orgs",
		"education_plan_collaborators", "education_plans",
		"education_program_education_methods", "education_programs",
		"education_types", "efficiency_grades", "estaff_event_types",
		"estaff_events", "event_assessment_plans", "event_collaborators",
		"event_groups", "event_lectors", "event_object_resources",
		"event_phases", "event_result_types", "event_results",
		"event_room_collaborators", "event_room_lectors", "event_rooms",
		"events", "exchange_servers", "exclusion_reasons", "exercises",
		"expense_items", "expenses", "expert_questions", "experts",
		"external_systems", "fact_payments", "form_catalogs",
		"form_collaborator_access", "form_content_types", "form_func_params",
		"form_import_events", "form_list_lngs", "form_select_learning_options",
		"form_web_params", "formulas", "forum_entrys",
		"forum_theme_read_by_collaborators", "forums", "func_managers",
		"global_settings", "good_instances", "good_types", "goods", "grades",
		"group_collaborators", "groups", "indicators", "interval_schedules",
		"invoices", "key_position_threats", "key_positions",
		"knowledge_acquaints", "knowledge_classifiers", "knowledge_objects",
		"knowledge_part_types", "knowledge_parts", "knowledge_profiles",
		"knowledges", "kpi_managers", "kpi_plans", "kpi_profiles", "kpi_values",
		"kpis", "learning_parts", "learning_records", "learning_task_results",
		"learning_tasks", "learnings", "lectors", "levels",
		"library_material_comments", "library_material_formats",
		"library_material_items", "library_material_objects",
		"library_material_types", "library_material_viewings",
		"library_materials", "library_sections", "licenses", "likes", "lists",
		"local_settings", "material_liabilitys", "messenger_services",
		"mobile_app_configs", "object_experts", "object_links", "object_params",
		"object_requirements", "object_resources", "object_versions",
		"objective_translates", "order_types", "orders", "org_vendor_states",
		"orgs", "outstaff_additional_works", "outstaff_contracts",
		"outstaff_order_execution_stages", "outstaff_order_executions",
		"outstaff_orders", "outstaff_providers", "outstaff_type_materials",
		"pa_competences", "package_objects", "participants", "pas", "pay_phases",
		"pay_stages", "payment_types", "payments", "person_hierarchys",
		"person_object_link_objects", "person_object_links",
		"person_object_profiles", "personal_chats",
		"personal_data_processing_consents", "personnel_committees",
		"personnel_document_type","personnel_events", "personnel_reserves", "places", "plugins",
		"policy_types", "policys", "poll_procedures", "poll_results", "polls",
		"position_assessment_forms", "position_common_instructions",
		"position_commons", "position_familys", "position_levels", "positions",
		"potential_grades", "presentations", "prices", "profession_categorys",
		"professional_area_types", "professions", "profiles",
		"profiling_records", "project_participant_roles", "project_participants",
		"project_types", "projects", "providers", "qa_test_paramsets",
		"qa_test_results", "qa_test_sets", "qa_tests",
		"qualification_assignments", "qualifications", "ratings",
		"readiness_levels", "recommendations", "recommender_algorithm_applyings",
		"recommender_select_collaborators", "recruitment_events",
		"recruitment_methods", "recruitment_plans", "regions",
		"repositorium_authors", "repositorium_resources", "repositoriums",
		"reprimand_types", "reprimands", "request_collaborators", "requests",
		"resource_types", "resources", "response_types", "responses",
		"restricting_collaborator_schedules", "restricting_types",
		"resume_skills", "resumes", "risk_levels", "risk_perspectives",
		"salary_payment_types", "salary_survey_sources", "salary_surveys",
		"sale_contract_types", "sale_contracts", "sale_status", "sale_statuss",
		"sales", "scales", "schedule_days", "schedule_types",
		"section_instructions", "selected_resumes", "selected_vacancys",
		"site_owner_objects", "skill_types", "skills", "social_entrys",
		"staff_position_finishs", "staff_position_moves",
		"staff_position_starts", "staff_positions", "staff_subs",
		"statement_actors", "statement_additionals", "statement_attachments",
		"statement_components", "statement_objects", "statement_patterns",
		"statements", "statistic_datas", "subdivision_group_subdivisions",
		"subdivision_groups", "subdivisions", "submission_recipients",
		"submission_types", "submissions", "subs", "subscriptions",
		"substitution_types", "substitutions", "successors",
		"supplementary_questions", "tagged_objects", "tags",
		"talent_pool_func_managers", "talent_pool_nominations", "tasks",
		"test_learnings", "test_projects", "training_plans", "traning_orders",
		"transactions", "tutors", "typical_development_programs", "ui_datas",
		"ui_reports", "upload_packages", "user_assignments", "user_datas",
		"user_recommendations", "vacancy_reasons", "vacancy_responses",
		"vacancy_sources", "vacancy_subscriptions", "vacancy_types", "vacancys",
		"vacation_days", "vclass_settings", "vendor_states", "view_types",
		"wage_systems", "walkthroughs", "wiki_article_communication_types",
		"wiki_article_communications", "wiki_article_types", "wiki_articles",
		"wiki_bases", "wiki_rag_indexs", "work_conditions", "work_experiences",
		"work_forms", "work_modes", "work_schedule_types", "work_schedules",
		"working_condition_types", "working_conditions"
	];

	var aResult = [];
	var sCatalogName, aElems, oElem, r, oInfo, bIsStd, bChanged, iObjTypeId;
	var aWebModeCodes, aAllWebModeCodes, aWebModesElems, oWmElem, oWmInfo, bWmIsStd, bWmChanged, sWmCode;
	var sOwtMode, bIsOwtWithMode, oWm;
	var aDynCatalogNames, aDtRows, oDtRow, sDtCodes;
	var sOdtId, oOdt, sDocTypeId, oDt;
	var docWr, sWrUrl, oMatchedWm;
	var sNtId;
	var aAllObjectDataTypes, aAllDocTypes;
	var aResourceRefs, oResRef;
	var aAllNotifs, oNotif, oNtInResult;

	// ------------------------------------------------------------------
	// Пакетная загрузка ID типов object_data_types по кодам из aObjectDataTypeCodeFilter.
	// Результат — строка вида "1, 2, 3" для подстановки в MatchSome XQuery.
	// ------------------------------------------------------------------
	var sObjectDataTypeFilterIds = "";
	var sObjectDataTypeCodes, aObjectDataTypeRows, oOdtRow, sOdtCode, bOdtFirst, bOdtIdFirst;
	if (ArrayOptFirstElem(aObjectDataTypeCodeFilter) != undefined)
	{
		sObjectDataTypeCodes = "";
		bOdtFirst = true;
		for (sOdtCode in aObjectDataTypeCodeFilter)
		{
			if (!bOdtFirst) sObjectDataTypeCodes += ", ";
			sObjectDataTypeCodes += "'" + sOdtCode + "'";
			bOdtFirst = false;
		}
		aObjectDataTypeRows = ArraySelectAll(XQuery(
			"for $t in object_data_types where MatchSome($t/code, (" + sObjectDataTypeCodes + ")) " +
			"return $t/Fields('id')"
		));
		bOdtIdFirst = true;
		for (oOdtRow in aObjectDataTypeRows)
		{
			if (!bOdtIdFirst) sObjectDataTypeFilterIds += ", ";
			sObjectDataTypeFilterIds += String(OptInt(oOdtRow.id));
			bOdtIdFirst = false;
		}
		AlertLog("Исключение типов object_datas: коды=[" + sObjectDataTypeCodes + "], ID=[" + sObjectDataTypeFilterIds + "]");
	}

	// ------------------------------------------------------------------
	// Предварительный сбор кодов web_modes, прошедших все фильтры.
	// Нужно до основного цикла, т.к. override_web_templates идёт раньше web_modes
	// в aCatIsStd. Используется для фильтрации override_web_templates ниже.
	// ------------------------------------------------------------------
	aWebModeCodes    = [];
	aAllWebModeCodes = [];
	aWebModesElems   = ArraySelectAll(XQuery("for $e in web_modes return $e"));
	if (ArrayOptFirstElem(aWebModesElems) != undefined)
	{
		// Собираем все коды web_modes системы — нужно для проверки orphan-mode
		for (oWmElem in aWebModesElems)
		{
			sWmCode = String(oWmElem.code);
			if (sWmCode != "")
				aAllWebModeCodes.push(sWmCode);
		}

		// Отдельно — только те web_modes, что прошли фильтры и попадут в отчёт
		if (!IsExcluded("web_modes", aCatExclude))
		{
			for (oWmElem in aWebModesElems)
			{
				bWmIsStd = String(oWmElem.is_std) == "true" || String(oWmElem.is_std) == "1";
				bWmChanged = true;
				try { bWmChanged = tools_web.is_true(oWmElem.changed); } catch (eWm) {}
				if (bWmIsStd && !bWmChanged)
					continue;
				oWmInfo = ReadDocInfo(oWmElem.id);
				if (!PassModFilter(oWmInfo))
					continue;
				if (IsExcluded(oWmInfo.modification_login, aModLoginExclude))
					continue;
				sWmCode = String(oWmElem.code);
				if (sWmCode != "")
					aWebModeCodes.push(sWmCode);
			}
		}
	}
	AlertLog("Коды web_modes (все в системе): " + ArrayCount(aAllWebModeCodes) + ", для фильтра override_web_templates: " + ArrayCount(aWebModeCodes));

	// ------------------------------------------------------------------
	// Предзагрузка справочников для поля ref_object
	// ------------------------------------------------------------------
	aAllObjectDataTypes = ArraySelectAll(XQuery(
		"for $t in object_data_types return $t/Fields('id', 'name')"
	));
	aAllDocTypes = ArraySelectAll(XQuery(
		"for $t in doc_types return $t/Fields('id', 'name')"
	));
	AlertLog("Загружено object_data_types: " + ArrayCount(aAllObjectDataTypes) + ", doc_types: " + ArrayCount(aAllDocTypes));

	// ------------------------------------------------------------------
	// Загрузка имён динамических каталогов из doc_types по кодам из aDocTypeCodes.
	// ------------------------------------------------------------------
	aDynCatalogNames = [];
	if (ArrayOptFirstElem(aDocTypeCodes) != undefined)
	{
		sDtCodes = "'" + ArrayMerge(aDocTypeCodes, "This", "', '") + "'";
		aDtRows = ArraySelectAll(XQuery(
			"for $t in doc_types where MatchSome($t/code, (" + sDtCodes + ")) " +
			"return $t/Fields('id', 'code')"
		));
		for (oDtRow in aDtRows)
		{
			aDynCatalogNames.push(String(oDtRow.code));
		}
		AlertLog("Динамические каталоги doc_types: " + ArrayCount(aDynCatalogNames));
	}

	// ------------------------------------------------------------------
	// Проход 1: каталоги С is_std
	// Фильтр в XQuery: not(is_std = true()) ИЛИ changed = true()
	// ------------------------------------------------------------------
	AlertLog("Начало прохода по каталогам с is_std (" + ArrayCount(aCatIsStd) + ")");

	for (sCatalogName in aCatIsStd)
	{
		if (IsExcluded(sCatalogName, aCatExclude))
			continue;

		try
		{
			aElems = ArraySelectAll(XQuery(
				"for $elem in " + sCatalogName + " return $elem"
			));
		}
		catch (eQuery)
		{
			AlertLog("XQuery ошибка [" + sCatalogName + "]: " + eQuery);
			continue;
		}

		if (ArrayOptFirstElem(aElems) == undefined)
			continue;

		for (oElem in aElems)
		{
			bIsStd = String(oElem.is_std) == "true" || String(oElem.is_std) == "1";

			// Для object_datas — исключаем записи с типами из фильтра
			if (sCatalogName == "object_datas" && sObjectDataTypeFilterIds != "")
			{
				iObjTypeId = OptInt(oElem.object_data_type_id);
				if (iObjTypeId != undefined && ArrayOptFind(aObjectDataTypeRows, "OptInt(This.id) == " + iObjTypeId) != undefined)
					continue;
			}

			// Для override_web_templates:
			//   mode = ''
			//     → включаем с обычными фильтрами
			//   mode заполнен и совпадает с кодом web_mode из отчёта
			//     → включаем без фильтров по дате/логину (bIsOwtWithMode = true)
			//   mode заполнен, web_mode с таким кодом есть в системе, но не в отчёте
			//     → пропускаем
			//   mode заполнен, но web_mode с таким кодом вообще нет в системе
			//     → включаем с обычными фильтрами (orphan-mode)
			bIsOwtWithMode = false;
			if (sCatalogName == "override_web_templates")
			{
				sOwtMode = String(oElem.mode);
				if (sOwtMode != "")
				{
					if (ArrayOptFind(aWebModeCodes, "This == '" + sOwtMode + "'") != undefined)
					{
						// mode совпал с web_mode из отчёта — включаем без фильтров
						bIsOwtWithMode = true;
					}
					else if (ArrayOptFind(aAllWebModeCodes, "This == '" + sOwtMode + "'") != undefined)
					{
						// web_mode с таким кодом существует в системе, но не попал в отчёт — пропускаем
						continue;
					}
					// иначе: web_mode с таким кодом нет в системе совсем — включаем с обычными фильтрами
				}
			}

			oInfo  = ReadDocInfo(oElem.id);

			// Коробочный и не изменён — пропускаем.
			// override_web_templates исключены: у них changed ненадёжен (часто 0 даже после правок),
			// поэтому полагаемся только на PassModFilter ниже.
			bChanged = true;
			try
			{
				bChanged = tools_web.is_true(oElem.changed);
			}
			catch(e){}
			if (bIsStd && !bChanged && sCatalogName != "override_web_templates")
				continue;

			// Дата или логин изменения не прошли фильтр — пропускаем
			// (не применяется к override_web_templates с непустым mode)
			if (!bIsOwtWithMode && !PassModFilter(oInfo))
				continue;

			// Логин изменившего в списке исключений — пропускаем
			// (не применяется к override_web_templates с непустым mode)
			if (!bIsOwtWithMode && IsExcluded(oInfo.modification_login, aModLoginExclude))
				continue;

			r            = new Object();
			r.PrimaryKey = String(oElem.id);
			r.id         = String(oElem.id);
			try { r.obj_name = String(oElem.name); } catch (eName) { r.obj_name = ""; }
			r.obj_type   = sCatalogName;
			r.is_std     = bIsStd ? "Да" : "Нет";
			r.creation_date      = oInfo.creation_date;
			r.creation_login     = oInfo.creation_login;
			r.modification_date  = oInfo.modification_date;
			r.modification_login = oInfo.modification_login;
			r.ref_object_id   = "";
			r.ref_object_name = "";
			r.obj_code        = "";
			try { r.obj_code = String(oElem.code); } catch(eCode) {}
			if (sCatalogName == "override_web_templates" && sOwtMode != "")
			{
				oWm = ArrayOptFind(aWebModesElems, "String(This.code) == '" + sOwtMode + "'");
				if (oWm != undefined)
				{
					r.ref_object_id   = String(oWm.id);
					r.ref_object_name = String(oWm.name) + " [web_modes] (" + sOwtMode + ")";
				}
				else
				{
					r.ref_object_name = sOwtMode;
				}
			}
			else if (sCatalogName == "object_datas")
			{
				sOdtId = String(oElem.object_data_type_id);
				if (!IsEmptyValue(sOdtId) && sOdtId != "0")
				{
					r.ref_object_id   = sOdtId;
					oOdt              = ArrayOptFind(aAllObjectDataTypes, "String(This.id) == '" + sOdtId + "'");
					r.ref_object_name = oOdt != undefined
						? String(oOdt.name) + " [object_data_types]"
						: sOdtId;
				}
			}
			else if (sCatalogName == "web_rules")
			{
				// Ищем код типа страницы в redirect URL правила.
				// Код может быть в параметрах URL: mode_code=xxx, wt_mode=xxx и т.п.
				// Перебираем все известные коды web_modes как подстроки.
				docWr = tools.open_doc(OptInt(oElem.id));
				if (docWr != null && docWr != undefined)
				{
					sWrUrl = "";
					try { sWrUrl = String(docWr.TopElem.redirect_url); } catch(eWr) {}

					if (sWrUrl != "")
					{
						oMatchedWm = undefined;
						for (sWmCode in aAllWebModeCodes)
						{
							if (StrContains(sWrUrl, sWmCode))
							{
								oMatchedWm = ArrayOptFind(aWebModesElems, "String(This.code) == '" + sWmCode + "'");
								if (oMatchedWm != undefined)
									break;
							}
						}
						if (oMatchedWm != undefined)
						{
							r.ref_object_id   = String(oMatchedWm.id);
							r.ref_object_name = String(oMatchedWm.name) + " [web_modes]";
						}
					}
				}
			}

			aResult.push(r);
		}
	}

	// ------------------------------------------------------------------
	// Проход 2: каталоги БЕЗ is_std
	// Включаем только объекты, НЕ созданные интеграцией
	// ------------------------------------------------------------------
	AlertLog("Начало прохода по каталогам без is_std (" + ArrayCount(aCatNoIsStd) + ")");

	for (sCatalogName in aCatNoIsStd)
	{
		if (IsExcluded(sCatalogName, aCatExclude))
			continue;

		try
		{
			aElems = ArraySelectAll(XQuery(
				"for $elem in " + sCatalogName + " return $elem"
			));
		}
		catch (eQuery)
		{
			continue;
		}

		if (ArrayOptFirstElem(aElems) == undefined)
			continue;

		for (oElem in aElems)
		{
			oInfo = ReadDocInfo(oElem.id);

			// Объект от интеграции — пропускаем
			if (oInfo.bFromIntegration)
				continue;

			// Дата или логин изменения не прошли фильтр — пропускаем
			if (!PassModFilter(oInfo))
				continue;

			// Логин изменившего в списке исключений — пропускаем
			if (IsExcluded(oInfo.modification_login, aModLoginExclude))
				continue;

			r            = new Object();
			r.PrimaryKey = String(oElem.id);
			r.id         = String(oElem.id);
			try { r.obj_name = String(oElem.name); } catch (eName) { r.obj_name = ""; }
			r.obj_type   = sCatalogName;
			r.is_std     = "Нет";
			r.creation_date      = oInfo.creation_date;
			r.creation_login     = oInfo.creation_login;
			r.modification_date  = oInfo.modification_date;
			r.modification_login = oInfo.modification_login;
			r.ref_object_id   = "";
			r.ref_object_name = "";
			r.obj_code        = "";
			try { r.obj_code = String(oElem.code); } catch(eCode) {}

			aResult.push(r);
		}
	}

	// ------------------------------------------------------------------
	// Проход 3: динамические каталоги doc_types (белый список из aDocTypeCodes)
	// Нет полей is_std/changed — только фильтры по дате и логину.
	// ------------------------------------------------------------------
	if (ArrayOptFirstElem(aDynCatalogNames) != undefined)
	{
		AlertLog("Начало прохода по динамическим каталогам doc_types (" + ArrayCount(aDynCatalogNames) + ")");

		for (sCatalogName in aDynCatalogNames)
		{
			try
			{
				aElems = ArraySelectAll(XQuery(
					"for $elem in " + sCatalogName + " return $elem"
				));
			}
			catch (eQuery)
			{
				AlertLog("XQuery ошибка [" + sCatalogName + "]: " + eQuery);
				continue;
			}

			if (ArrayOptFirstElem(aElems) == undefined)
				continue;

			for (oElem in aElems)
			{
				oInfo = ReadDocInfo(oElem.id);

				if (!PassModFilter(oInfo))
					continue;

				if (IsExcluded(oInfo.modification_login, aModLoginExclude))
					continue;

				r            = new Object();
				r.PrimaryKey = String(oElem.id);
				r.id         = String(oElem.id);
				try { r.obj_name = String(oElem.name); } catch (eName) { r.obj_name = ""; }
				r.obj_type   = sCatalogName;
				r.is_std     = "Нет";
				r.creation_date      = oInfo.creation_date;
				r.creation_login     = oInfo.creation_login;
				r.modification_date  = oInfo.modification_date;
				r.modification_login = oInfo.modification_login;
				r.ref_object_id   = "";
				r.ref_object_name = "";
				r.obj_code        = "";
				try { r.obj_code = String(oElem.code); } catch(eCode) {}
				if (sCatalogName == "documents")
				{
					sDocTypeId = String(oElem.doc_type_id);
					if (!IsEmptyValue(sDocTypeId) && sDocTypeId != "0")
					{
						r.ref_object_id   = sDocTypeId;
						oDt               = ArrayOptFind(aAllDocTypes, "String(This.id) == '" + sDocTypeId + "'");
						r.ref_object_name = oDt != undefined
							? String(oDt.name) + " [doc_types]"
							: sDocTypeId;
					}
				}

				aResult.push(r);
			}
		}
	}

	// ------------------------------------------------------------------
	// Проход 4: ресурсы, на которые ссылаются объекты из отчёта.
	// Каталог resources исключён из проходов 1-2 (добавлен в aCatExclude),
	// поэтому здесь — единственная точка сбора ресурсов.
	// Сканируем XML объектов "опасных" типов и ищем совпадения с ID ресурсов базы.
	// ------------------------------------------------------------------
	AlertLog("Начало прохода 4: XML-сканирование ресурсов и ссылок");
	aResourceRefs = CollectResourceRefs(aResult);
	for (oResRef in aResourceRefs)
		aResult.push(oResRef);

	// ------------------------------------------------------------------
	// Проход 5: привязка шаблонов уведомлений к типам уведомлений.
	// Загружаем ВСЕ уведомления (не только кастомные) — нам нужна
	// обратная связь: какой тип уведомления использует данный шаблон.
	// ------------------------------------------------------------------
	AlertLog("Начало прохода 5: привязка notification_templates → notifications");
	aAllNotifs = ArraySelectAll(XQuery(
		"for $n in notifications return $n/Fields('id', 'name', 'notification_template_id')"
	));
	for (oNotif in aAllNotifs)
	{
		sNtId = String(oNotif.notification_template_id);
		if (IsEmptyValue(sNtId) || sNtId == "0")
			continue;
		oNtInResult = ArrayOptFind(aResult,
			"This.obj_type == 'notification_templates' && String(This.id) == '" + sNtId + "'");
		if (oNtInResult == undefined)
			continue;
		if (oNtInResult.ref_object_id != "") oNtInResult.ref_object_id += ", ";
		oNtInResult.ref_object_id += String(oNotif.id);
		if (oNtInResult.ref_object_name != "") oNtInResult.ref_object_name += "; ";
		oNtInResult.ref_object_name += String(oNotif.name) + " [notifications]";
	}
	AlertLog("Проход 5 завершён: " + ArrayCount(aAllNotifs) + " уведомлений проверено");

	AlertLog("Итого строк до пост-фильтрации: " + ArrayCount(aResult));

	// ------------------------------------------------------------------
	// Пост-фильтрация по параметрам фильтров отчёта
	// ------------------------------------------------------------------
	AlertLog(sSearchId)
	if (!IsEmptyValue(sSearchId))
		aResult = ArraySelect(aResult, "OptInt(This.id) == OptInt('" + sSearchId + "')");

	if (!IsEmptyValue(sSearchName))
		aResult = ArraySelect(aResult, "StrContains(String(This.obj_name), '" + sSearchName + "')");

	if (!IsEmptyValue(sObjType))
		aResult = ArraySelect(aResult, "This.obj_type == '" + sObjType + "'");

	AlertLog("Итого строк в отчёте: " + ArrayCount(aResult));
	return aResult;
}

// ---------------------------------------------------------------------------
// Точка входа
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Диагностика взаимного вхождения ID двух объектов в XML
// ---------------------------------------------------------------------------
function DiagnoseIds(sId1, sId2)
{
	var doc1, doc2, sXml1, sXml2;

	doc1 = tools.open_doc(OptInt(sId1));
	doc2 = tools.open_doc(OptInt(sId2));

	if (doc1 == null || doc1 == undefined)
	{
		AlertLog("DIAG: объект " + sId1 + " не найден");
		return;
	}
	if (doc2 == null || doc2 == undefined)
	{
		AlertLog("DIAG: объект " + sId2 + " не найден");
		return;
	}

	AlertLog("DIAG: объект 1 — " + String(doc1.TopElem.name) + " [" + String(doc1.TopElem.Name) + "]");
	AlertLog("DIAG: объект 2 — " + String(doc2.TopElem.name) + " [" + String(doc2.TopElem.Name) + "]");

	sXml1 = doc1.TopElem.Xml;
	sXml2 = doc2.TopElem.Xml;

	// Вхождения ID
	AlertLog("DIAG: ID2 (" + sId2 + ") в XML1: " + (StrContains(sXml1, sId2) ? "ДА" : "НЕТ"));
	AlertLog("DIAG: ID1 (" + sId1 + ") в XML2: " + (StrContains(sXml2, sId1) ? "ДА" : "НЕТ"));

	// Есть ли кэш-теги
	AlertLog("DIAG: XML1 содержит <cache_static>: " + (StrContains(sXml1, "<cache_static>") ? "ДА" : "НЕТ"));
	AlertLog("DIAG: XML2 содержит <cache_static>: " + (StrContains(sXml2, "<cache_static>") ? "ДА" : "НЕТ"));

	// Вхождения ПОСЛЕ очистки кэша (включая cache_dynamic — JSON с hex-ID)
	sXml1 = StripTagContent(sXml1, "cache_static");
	sXml1 = StripTagContent(sXml1, "cache_dynamic");
	sXml1 = StripTagContent(sXml1, "cache_html");
	sXml1 = StripTagContent(sXml1, "cache_vars");
	sXml2 = StripTagContent(sXml2, "cache_static");
	sXml2 = StripTagContent(sXml2, "cache_dynamic");
	sXml2 = StripTagContent(sXml2, "cache_html");
	sXml2 = StripTagContent(sXml2, "cache_vars");

	AlertLog("DIAG после StripTagContent: ID2 в XML1: " + (StrContains(sXml1, sId2) ? "ДА" : "НЕТ"));
	AlertLog("DIAG после StripTagContent: ID1 в XML2: " + (StrContains(sXml2, sId1) ? "ДА" : "НЕТ"));

	// Первые 500 символов XML для визуальной проверки тегов
	AlertLog("DIAG XML1 (первые 500): " + StrLeftRange(sXml1, 500));
	AlertLog("DIAG XML2 (первые 500): " + StrLeftRange(sXml2, 500));
}

try
{
	AlertLog("Начало выполнения отчета");

	if (bDiagnoseCacheIds)
	{
		AlertLog("=== ДИАГНОСТИКА ОБЪЕКТОВ ===");
		DiagnoseIds(sDiagId1, sDiagId2);
		AlertLog("=== ДИАГНОСТИКА ЗАВЕРШЕНА ===");
		EnableLog(sLogName, false);
		return [];
	}

	if (bGenerateCriterions)
		generateCriterions();

	if (bGenerateColumns)
		generateColumns();

	ReadCriterions();

	aResMain = main();
	EnableLog(sLogName, false);
	return aResMain;
}
catch (e)
{
	AlertLog(e);
	EnableLog(sLogName, false);
	return [];
}
