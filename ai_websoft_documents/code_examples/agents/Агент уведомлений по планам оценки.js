var sLogName = "Notif_Assessment_Plans_LOG";

// ─── Плейсхолдеры — заполнить перед деплоем ───────────────────────────────
var ASSESSMENT_APPRAISE_ID	= 0;			// ID процедуры оценки
var STAGE_CODE				= 'CODE_X';		// workflow_state плана
var HR_BOSS_TYPE_CODE		= 'hrbp';			// код boss_type для HR
var NOTIF_CODE_20			= 'NOTIF_20';	// код шаблона уведомления — 20 дней
var NOTIF_CODE_45			= 'NOTIF_45';	// код шаблона уведомления — 45 дней

var FIELD_NOTIF_20			= 'notif_20_sent';		// custom_elem на assessment_plan — флаг 20 дней (хранится в custom_elems)
var FIELD_NOTIF_45			= 'notif_45_sent';		// custom_elem на assessment_plan — флаг 45 дней (хранится в custom_elems)
// ──────────────────────────────────────────────────────────────────────────


function AlertLog(sLog)
{
	var sMessage = sLog;
	if (DataType(sLog) == 'object')
		sMessage = tools.object_to_text(sLog, 'json');
	LogEvent(sLogName, sMessage);
}


/**
 * Рекурсивно ищет HR-руководителей по иерархии подразделений вверх.
 * Возвращает массив person_id найденных HR.
 * @param {integer} iSubdivisionID - ID текущего подразделения
 * @param {integer} iHRBossTypeID  - ID типа руководителя (boss_type) для HR
 * @param {integer} iDepth         - счётчик глубины рекурсии (защита от зацикливания)
 */
function GetHRForPerson(iSubdivisionID, iHRBossTypeID, iDepth)
{
	if (iDepth == undefined) iDepth = 0;
	if (iDepth > 50 || IsEmptyValue(iSubdivisionID) || iSubdivisionID == 0)
		return new Array();

	var aManagers = ArraySelectAll(XQuery(
		"for $elem in func_managers " +
		"where $elem/catalog = 'subdivision' " +
		" and $elem/boss_type_id = " + iHRBossTypeID +
		" and $elem/object_id = " + iSubdivisionID +
		" return $elem/Fields('person_id')"
	));

	if (ArrayOptFirstElem(aManagers) != undefined)
	{
		var aHRIds = new Array();
		for (oM in aManagers)
			aHRIds.push(OptInt(oM.person_id));
		return aHRIds;
	}

	var oSub = ArrayOptFirstElem(XQuery(
		"for $elem in subdivisions where $elem/id = " + iSubdivisionID +
		" return $elem/Fields('parent_object_id')"
	));

	var iParentID = oSub != undefined ? OptInt(oSub.parent_object_id) : undefined;
	if (IsEmptyValue(iParentID) || iParentID == iSubdivisionID)
		return new Array();

	return GetHRForPerson(iParentID, iHRBossTypeID, iDepth + 1);
}


function main()
{
	// 1. Получить ID типа руководителя HR
	var oHRBossType = ArrayOptFirstElem(XQuery(
		"for $elem in boss_types where $elem/code = '" + HR_BOSS_TYPE_CODE + "' return $elem"
	));
	var iHRBossTypeID = oHRBossType != undefined ? OptInt(oHRBossType.id) : undefined;
	if (IsEmptyValue(iHRBossTypeID))
	{
		AlertLog("Не найден boss_type с кодом: " + HR_BOSS_TYPE_CODE);
		return;
	}

	// 2. Получить планы по процедуре и этапу ДО
	var aPlans = ArraySelectAll(XQuery(
		"for $ap in assessment_plans " +
		"where $ap/assessment_appraise_id = " + ASSESSMENT_APPRAISE_ID +
		" and $ap/workflow_state = '" + STAGE_CODE + "' " +
		"return $ap/Fields('id', 'person_id')"
	));
	if (ArrayOptFirstElem(aPlans) == undefined)
	{
		AlertLog("Планы на этапе '" + STAGE_CODE + "' не найдены для процедуры " + ASSESSMENT_APPRAISE_ID);
		return;
	}

	// 3. Пакетно загрузить подразделения сотрудников из карточки (без XQuery в цикле)
	var sPersonIds = ArrayMerge(aPlans, "This.person_id", ", ");
	var aCollData = ArraySelectAll(XQuery(
		"for $c in collaborators where MatchSome($c/id, (" + sPersonIds + ")) " +
		"return $c/Fields('id', 'position_parent_id')"
	));

	// 4. Обработать каждый план
	var dToday = DateNewTime(Date());

	for (oPlan in aPlans)
	{
		var iPlanID		= OptInt(oPlan.id);
		var iPersonID	= OptInt(oPlan.person_id);
		var oColl		= ArrayOptFindByKey(aCollData, iPersonID, "id");
		var iSubDivID	= oColl != undefined ? OptInt(oColl.position_parent_id) : undefined;

		try
		{
			var docPlan = tools.open_doc(iPlanID);
			if (docPlan == undefined) continue;
			var tePlan = docPlan.TopElem;

			// Прочитать дату начала из кастомного поля
			var oStartElem = tePlan.custom_fields.GetOptChildByKey('start_date');
			if (IsEmptyValue(oStartElem)) continue;

			var dStartDate = DateNewTime(OptDate(oStartElem.value));
			if (IsEmptyValue(dStartDate)) continue;

			// Разница в днях (DateDiff возвращает секунды)
			var iDays = OptInt(DateDiff(dToday, dStartDate) / 86400);
			if (IsEmptyValue(iDays)) continue;

			// Прочитать флаги уже отправленных уведомлений
			var oElem20 = tePlan.custom_elems.GetOptChildByKey(FIELD_NOTIF_20);
			var oElem45 = tePlan.custom_elems.GetOptChildByKey(FIELD_NOTIF_45);
			var bFlag20 = tools_web.is_true(oElem20 != undefined ? oElem20.value : false);
			var bFlag45 = tools_web.is_true(oElem45 != undefined ? oElem45.value : false);

			var bNeedNotif20 = iDays >= 20 && !bFlag20;
			var bNeedNotif45 = iDays >= 45 && !bFlag45;

			if (!bNeedNotif20 && !bNeedNotif45) continue;

			// Найти HR через иерархию подразделений
			var aHRIds = IsEmptyValue(iSubDivID) ? new Array() : GetHRForPerson(iSubDivID, iHRBossTypeID);

			if (bNeedNotif20)
			{
				tools.create_notification(NOTIF_CODE_20, iPersonID, "", iPlanID);
				for (iHRID in aHRIds)
					tools.create_notification(NOTIF_CODE_20, iHRID, "", iPlanID);
				tePlan.custom_elems.ObtainChildByKey(FIELD_NOTIF_20).value = true;
			}

			if (bNeedNotif45)
			{
				tools.create_notification(NOTIF_CODE_45, iPersonID, "", iPlanID);
				for (iHRID in aHRIds)
					tools.create_notification(NOTIF_CODE_45, iHRID, "", iPlanID);
				tePlan.custom_elems.ObtainChildByKey(FIELD_NOTIF_45).value = true;
			}

			docPlan.Save();
		}
		catch (err)
		{
			AlertLog("Ошибка при обработке плана " + iPlanID + ": " + err);
		}
	}
}

EnableLog(sLogName, true);

try
{
	AlertLog("Агент уведомлений по планам оценки начал работу");
	main();
	AlertLog("Агент уведомлений по планам оценки завершил работу");
}
catch (e)
{
	AlertLog(e);
}

EnableLog(sLogName, false);
