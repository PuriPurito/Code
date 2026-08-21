var sLogName = "Add_Email_Underscore_LOG";

// ─── Параметры ─────────────────────────────────────────────────────────────
var iGroupID = OptInt(Param.iGroupID);	// ID группы сотрудников
// ────────────────────────────────────────────────────────────────────────────


function AlertLog(sLog)
{
	var sMessage = sLog;
	if (DataType(sLog) == 'object')
		sMessage = tools.object_to_text(sLog, 'json');
	LogEvent(sLogName, sMessage);
}


function main()
{
	if (IsEmptyValue(iGroupID))
	{
		AlertLog("Параметр iGroupID не задан или некорректен");
		return;
	}

	// 1. Получить ID сотрудников, состоящих в группе (один запрос до цикла)
	var aGroupMembers = ArraySelectAll(XQuery(
		"for $gc in group_collaborators " +
		"where $gc/group_id = " + iGroupID +
		" return $gc/Fields('collaborator_id')"
	));
	AlertLog("Участников в группе: " + ArrayCount(aGroupMembers));

	// 2. Получить всех сотрудников из каталога (один запрос до цикла)
	var aAllCollaborators = ArraySelectAll(XQuery(
		"for $c in collaborators " +
		"return $c/Fields('id', 'email')"
	));
	AlertLog("Всего сотрудников: " + ArrayCount(aAllCollaborators));

	var iUpdated = 0;
	var iSkippedInGroup = 0;

	// 3. Обработать каждого сотрудника, которого нет в группе
	for (oCollab in aAllCollaborators)
	{
		var iCollabId = OptInt(oCollab.id);
		if (iCollabId == undefined) continue;

		// Проверить принадлежность к группе через предзагруженный массив
		var oInGroup = ArrayOptFind(aGroupMembers, "OptInt(This.collaborator_id) == " + iCollabId);
		if (oInGroup != undefined)
		{
			iSkippedInGroup++;
			continue;
		}

		// Открыть документ сотрудника и дописать "_" к полю email
		try
		{
			var docCollab = tools.open_doc(iCollabId);
			if (docCollab == null || docCollab == undefined) continue;

			docCollab.TopElem.email = String(docCollab.TopElem.email) + "_";
			docCollab.Save();
			iUpdated++;
		}
		catch (err)
		{
			AlertLog("Ошибка при обработке сотрудника " + iCollabId + ": " + err);
		}
	}

	AlertLog("Обновлено: " + iUpdated + ". Пропущено (в группе): " + iSkippedInGroup);
}


EnableLog(sLogName, true);

try
{
	AlertLog("Агент добавления подчёркивания в email начал работу");
	main();
	AlertLog("Агент добавления подчёркивания в email завершил работу");
}
catch (e)
{
	AlertLog(e);
}

EnableLog(sLogName, false);
