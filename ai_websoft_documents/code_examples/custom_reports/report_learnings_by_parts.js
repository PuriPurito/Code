// Настраиваемый отчёт: Завершённые курсы в разрезе модулей (parts)
//
// Каждая строка отчёта = один модуль (part) завершённого курса.
// Содержит:
//   — ФИО, Должность, Подразделение сотрудника
//   — Название курса
//   — Все скалярные поля модуля (кроме массивов: objectives, interactions,
//     test_learnings, logs, statements, objects)
//
// Фильтр «Сотрудник» — ID сотрудника (person_id) из каталога collaborators.
//
// bGenerateColumns    = true → сгенерировать столбцы при следующем запуске,
//                              затем вернуть в false.
// bGenerateCriterions = true → сгенерировать критерии при следующем запуске,
//                              затем вернуть в false.

var sLogName            = "report_learnings_parts";
var bGenerateColumns    = true;
var bGenerateCriterions = true;
var iPersonIdFilter     = undefined;

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
// Добавить столбец одновременно в оба источника (columns + docSelf.TopElem.columns)
// ---------------------------------------------------------------------------
function fAddColumn(aRoots, sTitle, sValue)
{
	oCol;
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
// id — глобальный, передаётся в tools.open_doc напрямую (без OptInt!).
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

		// ── Данные сотрудника и курса ──────────────────────────────────────
		fAddColumn(aRoots, "ФИО сотрудника",             "person_fullname");
		fAddColumn(aRoots, "Должность",                   "person_position_name");
		fAddColumn(aRoots, "Подразделение",               "person_subdivision_name");
		fAddColumn(aRoots, "Название курса",              "course_name");

		// ── Скалярные поля модуля (learning_part_base) ────────────────────
		fAddColumn(aRoots, "Код модуля",                  "part_code");
		fAddColumn(aRoots, "Название модуля",             "part_name");
		fAddColumn(aRoots, "Тип модуля",                  "part_type");
		fAddColumn(aRoots, "Протокол",                    "part_cl_module_protocol");
		fAddColumn(aRoots, "Код родителя",                "part_parent_part_code");
		fAddColumn(aRoots, "ID модуля курса",             "part_course_module_id");
		fAddColumn(aRoots, "ID объекта",                  "part_object_id");
		fAddColumn(aRoots, "Статус",                      "part_state_name");
		fAddColumn(aRoots, "Место в уроке",               "part_lesson_location");
		fAddColumn(aRoots, "Балл",                        "part_score");
		fAddColumn(aRoots, "Балл (строка)",               "part_score_str");
		fAddColumn(aRoots, "Макс балл за попытку",        "part_max_score_per_attempt");
		fAddColumn(aRoots, "Максимальный балл",           "part_max_score");
		fAddColumn(aRoots, "Тип подсчёта",                "part_scoring_type");
		fAddColumn(aRoots, "Дата начала",                 "part_start_usage_date");
		fAddColumn(aRoots, "Дата посл. использования",   "part_last_usage_date");
		fAddColumn(aRoots, "Время (сек)",                 "part_time");
		fAddColumn(aRoots, "Кол-во попыток",              "part_attempts_num");
		fAddColumn(aRoots, "Текущая попытка",             "part_cur_attempt_num");

		// ── learning_assessment_base ──────────────────────────────────────
		fAddColumn(aRoots, "Название теста",              "part_assessment_name");
		fAddColumn(aRoots, "Код теста",                   "part_assessment_code");
		fAddColumn(aRoots, "QTI-текст",                   "part_qti_text");
		fAddColumn(aRoots, "Дата QTI",                    "part_qti_date");
		fAddColumn(aRoots, "Экспертная оценка",           "part_expert_eval");
		fAddColumn(aRoots, "Уведомление эксперту",        "part_expert_notif");
		fAddColumn(aRoots, "Самозапись (тест)",           "part_is_self_enrolled");

		// ── Прочие скалярные поля ─────────────────────────────────────────
		fAddColumn(aRoots, "Прокторинг",                  "part_use_proctoring");
		fAddColumn(aRoots, "ID раздела курса",            "part_learning_part_id");

		// ── core_lesson_base (raw SCORM/xAPI данные) ──────────────────────
		fAddColumn(aRoots, "core_lesson",                 "part_core_lesson");
		fAddColumn(aRoots, "lesson_report",               "part_lesson_report");

		// ── data_lesson (вложенные поля core_lesson_base) ─────────────────
		fAddColumn(aRoots, "core_vendor",                 "part_data_lesson_core_vendor");
		fAddColumn(aRoots, "objectives_status",           "part_data_lesson_objectives_status");
		fAddColumn(aRoots, "evaluation",                  "part_data_lesson_evaluation");
		fAddColumn(aRoots, "student_data",                "part_data_lesson_student_data");
		fAddColumn(aRoots, "student_preferences",         "part_data_lesson_student_preferences");
		fAddColumn(aRoots, "student_demographics",        "part_data_lesson_student_demographics");
		fAddColumn(aRoots, "comments (SCORM)",            "part_data_lesson_comments");

		docSelf.Save();
		AlertLog("Столбцы успешно сгенерированы и сохранены");
	}
	catch (eGen)
	{
		AlertLog("Ошибка при генерации столбцов: " + eGen);
	}
}

// ---------------------------------------------------------------------------
// Генерация критериев (разовая операция, bGenerateCriterions = true).
// Критерий «Сотрудник» — person_id (ID сотрудника).
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

		oCrit                   = docSelf.TopElem.criterions.AddChild();
		oCrit.column_title      = "Сотрудник";
		oCrit.type              = "integer";
		oCrit.flag_is_parameter = true;
		oCritChain              = oCrit.catalog_chains.AddChild();
		oCritChain.catalog_name = "collaborators";
		oCritChain.field        = "id";

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
// Деактивированные критерии полностью отсутствуют в массиве.
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
// var внутри функции — намеренно: перезаписывает глобальные значения по умолчанию.
// ---------------------------------------------------------------------------
function ReadCriterions()
{
	try { _CRITERIONS; } catch (e) { _CRITERIONS = []; }
	aCrits     = ArraySelectAll(_CRITERIONS);
	sPersonVal = GetCriterionValue(aCrits, "Сотрудник");
	if (!IsEmptyValue(sPersonVal))
	{
		iPersonIdFilter = OptInt(sPersonVal);
		AlertLog("Фильтр по сотруднику: " + iPersonIdFilter);
	}
	else
	{
		AlertLog("Фильтр по сотруднику не задан — выборка по всем сотрудникам");
	}
}

// ---------------------------------------------------------------------------
// Основная логика
// ---------------------------------------------------------------------------
function main()
{
	// Предзагрузка статусов прохождения (один XQuery вне цикла)
	aStates = [];
	try
	{
		aStates = ArraySelectAll(XQuery("for $s in common.learning_states return $s/Fields('id', 'name')"));
		AlertLog("Загружено статусов: " + ArrayCount(aStates));
	}
	catch (eStates)
	{
		AlertLog("Не удалось загрузить learning_states: " + eStates);
	}

	// XQuery к каталогу learnings с опциональным фильтром по сотруднику
	sQuery = "for $l in learnings";
	if (iPersonIdFilter != undefined)
		sQuery += " where $l/person_id = " + iPersonIdFilter;
	sQuery += " return $l/Fields('id', 'person_fullname', 'person_position_name', 'person_subdivision_name', 'course_name')";

	aLearnings = ArraySelectAll(XQuery(sQuery));
	AlertLog("Найдено записей learnings: " + ArrayCount(aLearnings));

	aResult = [];

	// open_doc в цикле оправдан: поле parts (модули) недоступно в каталоге learnings
	for (oLearning in aLearnings)
	{
		iLearningId = OptInt(oLearning.id);
		if (iLearningId == undefined)
			continue;

		try
		{
			docLearning = tools.open_doc(iLearningId);
			if (docLearning == null || docLearning == undefined)
				continue;

			teLearning = docLearning.TopElem;

			for (oPart in teLearning.parts)
			{
				// Разрешение статуса по предзагруженному массиву (без XQuery в цикле)
				iStateId   = OptInt(oPart.state_id);
				oState     = iStateId != undefined
					? ArrayOptFind(aStates, "OptInt(This.id) == " + iStateId)
					: undefined;
				sStateName = oState != undefined
					? String(oState.name)
					: (iStateId != undefined ? String(iStateId) : "");

				r            = new Object();
				r.PrimaryKey = String(iLearningId) + "_" + String(oPart.code);

				// ── Данные сотрудника и курса (из каталога, без open_doc) ──
				r.person_fullname         = String(oLearning.person_fullname);
				r.person_position_name    = String(oLearning.person_position_name);
				r.person_subdivision_name = String(oLearning.person_subdivision_name);
				r.course_name             = String(oLearning.course_name);

				// ── Скалярные поля модуля (learning_part_base) ────────────
				r.part_code                   = String(oPart.code);
				r.part_name                   = String(oPart.name);
				r.part_type                   = String(oPart.type);
				r.part_cl_module_protocol     = String(oPart.cl_module_protocol);
				r.part_parent_part_code       = String(oPart.parent_part_code);
				r.part_course_module_id       = String(oPart.course_module_id);
				r.part_object_id              = String(oPart.object_id);
				r.part_state_name             = sStateName;
				r.part_lesson_location        = String(oPart.lesson_location);
				r.part_score                  = String(oPart.score);
				r.part_score_str              = String(oPart.score_str);
				r.part_max_score_per_attempt  = String(oPart.max_score_per_attempt);
				r.part_max_score              = String(oPart.max_score);
				r.part_scoring_type           = String(oPart.scoring_type);
				r.part_start_usage_date       = String(oPart.start_usage_date);
				r.part_last_usage_date        = String(oPart.last_usage_date);
				r.part_time                   = String(oPart.time);
				r.part_attempts_num           = String(oPart.attempts_num);
				r.part_cur_attempt_num        = String(oPart.cur_attempt_num);

				// ── learning_assessment_base ──────────────────────────────
				r.part_assessment_name        = String(oPart.assessment_name);
				r.part_assessment_code        = String(oPart.assessment_code);
				r.part_qti_text               = String(oPart.qti_text);
				r.part_qti_date               = String(oPart.qti_date);
				r.part_expert_eval            = String(oPart.expert_eval);
				r.part_expert_notif           = String(oPart.expert_notif);
				r.part_is_self_enrolled       = String(oPart.is_self_enrolled);

				// ── Прочие скалярные поля ─────────────────────────────────
				r.part_use_proctoring         = String(oPart.use_proctoring);
				r.part_learning_part_id       = String(oPart.learning_part_id);

				// ── core_lesson_base (raw SCORM/xAPI данные) ──────────────
				r.part_core_lesson            = String(oPart.core_lesson);
				r.part_lesson_report          = String(oPart.lesson_report);

				// ── data_lesson (вложенный объект core_lesson_base) ───────
				try
				{
					r.part_data_lesson_core_vendor          = String(oPart.data_lesson.core_vendor);
					r.part_data_lesson_objectives_status    = String(oPart.data_lesson.objectives_status);
					r.part_data_lesson_evaluation           = String(oPart.data_lesson.evaluation);
					r.part_data_lesson_student_data         = String(oPart.data_lesson.student_data);
					r.part_data_lesson_student_preferences  = String(oPart.data_lesson.student_preferences);
					r.part_data_lesson_student_demographics = String(oPart.data_lesson.student_demographics);
					r.part_data_lesson_comments             = String(oPart.data_lesson.comments);
				}
				catch (eDataLesson)
				{
					r.part_data_lesson_core_vendor          = "";
					r.part_data_lesson_objectives_status    = "";
					r.part_data_lesson_evaluation           = "";
					r.part_data_lesson_student_data         = "";
					r.part_data_lesson_student_preferences  = "";
					r.part_data_lesson_student_demographics = "";
					r.part_data_lesson_comments             = "";
				}

				aResult.push(r);
			}
		}
		catch (eLearning)
		{
			AlertLog("Ошибка при обработке learning " + iLearningId + ": " + eLearning);
		}
	}

	AlertLog("Итого строк в отчёте: " + aResult.length);
	return aResult;
}

// ---------------------------------------------------------------------------
// Точка входа
// ---------------------------------------------------------------------------
try
{
	AlertLog("Начало выполнения отчёта");

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
