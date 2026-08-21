var sLogName = "Find_Subdivision_Cycles_LOG";


function AlertLog(oLog)
{
	var sMessage = oLog;
	if (DataType(oLog) == 'object')
		sMessage = tools.object_to_text(oLog, 'json');
	LogEvent(sLogName, sMessage);
}


function main()
{
	var aSubs = ArraySelectAll(XQuery(
		"for $s in subdivisions " +
		" return $s/Fields('id', 'name', 'parent_object_id', 'org_id', 'status', 'is_disbanded')"
	));
	if (ArrayOptFirstElem(aSubs) == undefined)
	{
		AlertLog("Каталог subdivisions пуст или недоступен.");
		return;
	}

	var aChecked = new Array(); // [{id: int}]
	var aCycles = new Array();  // [{ cycle_num, org_id, ids, names, path_text }]

	var iCycleNum = 0;
	var bDebug = true;         // поставь false, если логов слишком много
	var iDebugStartCount = 0; // ограничение логов на старте обходов
	var iDebugSteps = 0;
	var iDebugStepsLimit = 20000;

	/**
	 * Рекурсивно поднимается по иерархии подразделений от iCurId вверх,
	 * накапливая путь в aPath и помечая проверенные ID в aChecked.
	 * При обнаружении цикла добавляет его описание в aCycles.
	 */
	function TraverseSubdivision(iCurId, aPath, iDepth)
	{
		if (iDepth == undefined) iDepth = 0;
		iDebugSteps = iDebugSteps + 1;
		if (bDebug && iDebugSteps > iDebugStepsLimit)
		{
			AlertLog("Превышен лимит шагов отладки, прерываю обход. StepsLimit=" + iDebugStepsLimit);
			return;
		}

		if (IsEmptyValue(iCurId) || iCurId == 0)
			return;

		// Проверка: этот ID уже есть в текущем пути → цикл
		var oFoundInPath = ArrayOptFind(aPath, "OptInt(This.id) == " + iCurId);
		if (oFoundInPath != undefined)
		{
			if (bDebug)
				AlertLog("Цикл найден по повтору в пути. iCurId=" + iCurId + ", depth=" + iDepth + ", from_pos=" + OptInt(oFoundInPath.pos));

			iCycleNum = iCycleNum + 1;

			var iFromPos = OptInt(oFoundInPath.pos);
			var aCycleIds = new Array();
			var aCycleNames = new Array();

			for (oPathItem in aPath)
			{
				if (OptInt(oPathItem.pos) >= iFromPos)
				{
					aCycleIds.push(OptInt(oPathItem.id));
					aCycleNames.push(String(oPathItem.name));

					if (ArrayOptFind(aChecked, "OptInt(This.id) == " + OptInt(oPathItem.id)) == undefined)
						aChecked.push({ id: OptInt(oPathItem.id) });
				}
			}

			var sPathText = ArrayMerge(aCycleNames, "This", " -> ");
			var oCycleFirst = ArrayOptFirstElem(aPath);
			var iOrgId = oCycleFirst != undefined ? OptInt(oCycleFirst.org_id) : undefined;

			aCycles.push({
				cycle_num: iCycleNum,
				org_id: iOrgId,
				ids: aCycleIds,
				names: aCycleNames,
				path_text: sPathText
			});

			return;
		}

		// Если уже полностью проверяли этот ID в другом обходе — выходим
		if (ArrayOptFind(aChecked, "OptInt(This.id) == " + iCurId) != undefined)
		{
			if (bDebug)
				AlertLog("Пропуск: id уже есть в aChecked. iCurId=" + iCurId + ", depth=" + iDepth);
			return;
		}

		var oCurSub = ArrayOptFind(aSubs, "OptInt(This.id) == " + iCurId);
		if (oCurSub == undefined)
		{
			if (ArrayOptFind(aChecked, "OptInt(This.id) == " + iCurId) == undefined)
				aChecked.push({ id: iCurId });

			if (bDebug)
				AlertLog("Узел отсутствует в каталоге subdivisions. iCurId=" + iCurId + ", depth=" + iDepth);
			return;
		}

		var iPos = ArrayCount(aPath) + 1;
		aPath.push({
			id: OptInt(oCurSub.id),
			pos: iPos,
			name: oCurSub.name,
			parent_object_id: OptInt(oCurSub.parent_object_id),
			org_id: OptInt(oCurSub.org_id)
		});

		if (ArrayOptFind(aChecked, "OptInt(This.id) == " + iCurId) == undefined)
			aChecked.push({ id: iCurId });

		var iParentId = OptInt(oCurSub.parent_object_id);

		// self-loop: parent_object_id == id
		if (!IsEmptyValue(iParentId) && iParentId == iCurId)
		{
			if (bDebug)
				AlertLog("Self-loop обнаружен. iCurId=" + iCurId + ", depth=" + iDepth);

			iCycleNum = iCycleNum + 1;
			aCycles.push({
				cycle_num: iCycleNum,
				org_id: OptInt(oCurSub.org_id),
				ids: [iCurId],
				names: [String(oCurSub.name)],
				path_text: String(oCurSub.name) + " -> " + String(oCurSub.name)
			});
			return;
		}

		TraverseSubdivision(iParentId, aPath, iDepth + 1);
	}

	for (oStartSub in aSubs)
	{
		iStartId = OptInt(oStartSub.id);
		if (IsEmptyValue(iStartId) || iStartId == 0)
			continue;

		if (ArrayOptFind(aChecked, "OptInt(This.id) == " + iStartId) != undefined)
			continue;

		aPath = new Array(); // [{id, pos, name, parent_object_id, org_id}]
		if (bDebug && iDebugStartCount < 30)
		{
			AlertLog("Старт обхода цикла: start_id=" + iStartId + ", aPath_len=0");
			iDebugStartCount = iDebugStartCount + 1;
		}
		TraverseSubdivision(iStartId, aPath, 0);
	}

	AlertLog("Найдено циклов: " + ArrayCount(aCycles));
	for (oCycle in aCycles)
	{
		AlertLog("Цикл #" + oCycle.cycle_num + (IsEmptyValue(oCycle.org_id) ? "" : (" (org_id=" + oCycle.org_id + ")")) + ": " + oCycle.path_text);
		AlertLog(oCycle);
	}
}


EnableLog(sLogName, true);
try
{
	AlertLog("Агент поиска циклов подразделений начал работу");
	main();
	AlertLog("Агент поиска циклов подразделений завершил работу");
}
catch (e)
{
	AlertLog(e);
}
EnableLog(sLogName, false);

