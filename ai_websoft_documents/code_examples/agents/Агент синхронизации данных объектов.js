var sLogName = "Sync_Object_Datas_LOG";

// ─── Плейсхолдеры — заполнить перед деплоем ───────────────────────────────
var OBJECT_DATA_TYPE_CODE = 'CODE_X';	// код типа данных объекта (object_data_types.code)
// ──────────────────────────────────────────────────────────────────────────


function AlertLog(sLog)
{
	var sMessage = sLog;
	if (DataType(sLog) == 'object')
		sMessage = tools.object_to_text(sLog, 'json');
	LogEvent(sLogName, sMessage);
}


function main()
{
	// 1. Получить параметры агента
	var sTypeCode = String(!IsEmptyValue(Param.sObjectDataTypeCode) ? Param.sObjectDataTypeCode : OBJECT_DATA_TYPE_CODE);

	// 2. Найти тип данных объекта по коду
	var oType = ArrayOptFirstElem(XQuery(
		"for $elem in object_data_types " +
		"where $elem/code = '" + sTypeCode + "' " +
		"return $elem/Fields('id', 'name')"
	));
	if (oType == undefined)
	{
		AlertLog("Не найден object_data_type с кодом: " + sTypeCode);
		return;
	}
	var iTypeID = OptInt(oType.id);
	if (IsEmptyValue(iTypeID))
	{
		AlertLog("Некорректный ID object_data_type для кода: " + sTypeCode);
		return;
	}
	AlertLog("Тип данных объекта: " + oType.name + " (ID=" + iTypeID + ")");

	// 3. Получить всех активных сотрудников
	var aCollaborators = ArraySelectAll(XQuery(
		"for $c in collaborators " +
		"where $c/is_dismiss = 0 " +
		"return $c/Fields('id', 'fullname')"
	));
	if (ArrayOptFirstElem(aCollaborators) == undefined)
	{
		AlertLog("Активные сотрудники не найдены");
		return;
	}
	AlertLog("Активных сотрудников: " + ArrayCount(aCollaborators));

	// 4. Пакетно получить существующие записи object_datas для данного типа
	//    Связь с сотрудником: object_type = 'collaborator', object_id = collaborator.id
	var sCollaboratorIds = ArrayMerge(aCollaborators, "This.id", ", ");
	var aExistingDatas = ArraySelectAll(XQuery(
		"for $od in object_datas " +
		"where $od/object_data_type_id = " + iTypeID +
		" and $od/object_type = 'collaborator' " +
		" and MatchSome($od/object_id, (" + sCollaboratorIds + ")) " +
		"return $od/Fields('id', 'object_id')"
	));
	AlertLog("Уже существующих записей: " + ArrayCount(aExistingDatas));

	// 5. Вычислить сотрудников, у которых записи ещё нет
	var iCreated = 0;

	for (oCollab in aCollaborators)
	{
		var iCollabID = OptInt(oCollab.id);
		if (IsEmptyValue(iCollabID)) continue;

		// Проверить наличие существующей записи по предзагруженному массиву
		var oExisting = ArrayOptFindByKey(aExistingDatas, iCollabID, "object_id");
		if (oExisting != undefined) continue;

		// 6. Создать запись-заглушку для сотрудника
		try
		{
			var docObjectData = tools.new_doc_by_name('object_data');
			docObjectData.TopElem.object_data_type_id = iTypeID;
			docObjectData.TopElem.object_type         = 'collaborator';
			docObjectData.TopElem.object_id           = iCollabID;
			docObjectData.TopElem.object_name         = String(oCollab.fullname);
			docObjectData.TopElem.name                = String(oCollab.fullname);
			docObjectData.TopElem.create_date         = Date();
			docObjectData.BindToDb();
			docObjectData.Save();

			iCreated++;
			AlertLog("Создана запись для сотрудника ID=" + iCollabID + " (" + oCollab.fullname + ")");
		}
		catch (err)
		{
			AlertLog("Ошибка создания записи для сотрудника ID=" + iCollabID + ": " + err);
		}
	}

	AlertLog("Итого создано записей: " + iCreated);
}


EnableLog(sLogName, true);

try
{
	AlertLog("Агент синхронизации данных объектов начал работу");
	main();
	AlertLog("Агент синхронизации данных объектов завершил работу");
}
catch (e)
{
	AlertLog(e);
}

EnableLog(sLogName, false);
