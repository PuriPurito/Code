var sLogName = "Create_Preview_Resources_LOG";

// ─── Плейсхолдеры — заполнить перед деплоем ───────────────────────────────
var PREVIEW_RESOURCE_TYPE_CODE = 'preview';	// код категории ресурса-превью (resource_types.code)
var PREVIEW_WIDTH               = 300;		// ширина превью в пикселях
// ──────────────────────────────────────────────────────────────────────────

var sSuffix = "_preview";


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
	var iRepositoriumID = OptInt(Param.iRepositoriumID);
	if (IsEmptyValue(iRepositoriumID))
	{
		AlertLog("Param.iRepositoriumID не задан");
		return;
	}

	var sTypeCode = String(
		!IsEmptyValue(Param.sPreviewResourceTypeCode)
			? Param.sPreviewResourceTypeCode
			: PREVIEW_RESOURCE_TYPE_CODE
	);

	// 2. Открыть исходный репозиторий
	var docSourceRepo = tools.open_doc(iRepositoriumID);
	var teSourceRepo  = docSourceRepo.TopElem;
	var sSourceCode   = String(teSourceRepo.code);
	var sSourceName   = String(teSourceRepo.name);
	AlertLog("Источник: " + sSourceName + " (код=" + sSourceCode + ", ID=" + iRepositoriumID + ")");

	// 3. Найти категорию (тип ресурса) для превью
	var oResourceType = ArrayOptFirstElem(XQuery(
		"for $rt in resource_types " +
		"where $rt/code = '" + sTypeCode + "' " +
		"return $rt/Fields('id', 'name')"
	));
	if (oResourceType == undefined)
	{
		AlertLog("Тип ресурса не найден: " + sTypeCode);
		return;
	}
	var iPreviewTypeID = OptInt(oResourceType.id);
	if (IsEmptyValue(iPreviewTypeID))
	{
		AlertLog("Некорректный ID типа ресурса для кода: " + sTypeCode);
		return;
	}
	AlertLog("Тип превью: " + oResourceType.name + " (ID=" + iPreviewTypeID + ")");

	// 4. Найти или создать превью-репозиторий (код = <исходный>_preview)
	var sPreviewRepoCode = sSourceCode + sSuffix;

	var oFoundPreviewRepo = ArrayOptFirstElem(XQuery(
		"for $r in repositoriums " +
		"where $r/code = '" + sPreviewRepoCode + "' " +
		"return $r/Fields('id', 'code', 'name')"
	));

	var iPreviewRepoID;

	if (oFoundPreviewRepo != undefined)
	{
		iPreviewRepoID = OptInt(oFoundPreviewRepo.id);
		AlertLog("Превью-репозиторий уже существует (ID=" + iPreviewRepoID + ")");
	}
	else
	{
		var docNewRepo       = tools.new_doc_by_name('repositorium');
		docNewRepo.TopElem.code = sPreviewRepoCode;
		docNewRepo.TopElem.name = sSourceName + " Preview";
		docNewRepo.BindToDb();
		docNewRepo.Save();
		iPreviewRepoID = OptInt(docNewRepo.DocID);
		AlertLog("Создан превью-репозиторий (ID=" + iPreviewRepoID + ")");
	}

	if (IsEmptyValue(iPreviewRepoID))
	{
		AlertLog("Не удалось получить ID превью-репозитория");
		return;
	}

	// 5. Получить все ресурсы из исходного репозитория
	var aSourceLinks = ArraySelectAll(XQuery(
		"for $rr in repositorium_resources " +
		"where $rr/repositorium_id = " + iRepositoriumID + " " +
		"return $rr/Fields('resource_id')"
	));

	if (ArrayOptFirstElem(aSourceLinks) == undefined)
	{
		AlertLog("В исходном репозитории нет ресурсов");
		return;
	}
	AlertLog("Ресурсов в исходном репозитории: " + ArrayCount(aSourceLinks));

	// 6. Пакетно загрузить имена/коды исходных ресурсов
	var sSourceResIds = ArrayMerge(aSourceLinks, "This.resource_id", ", ");

	var aSourceResources = ArraySelectAll(XQuery(
		"for $r in resources " +
		"where MatchSome($r/id, (" + sSourceResIds + ")) " +
		"return $r/Fields('id', 'name', 'code')"
	));

	// 7. Сформировать список ожидаемых кодов превью и пакетно проверить существование
	var aExpectedCodes = [];
	for (oLink in aSourceLinks)
	{
		aExpectedCodes.push("'" + String(oLink.resource_id) + sSuffix + "'");
	}
	var sExpectedCodes = aExpectedCodes.join(", ");

	var aExistingPreviews = ArraySelectAll(XQuery(
		"for $r in resources " +
		"where MatchSome($r/code, (" + sExpectedCodes + ")) " +
		"return $r/Fields('id', 'code')"
	));
	AlertLog("Уже существующих превью: " + ArrayCount(aExistingPreviews));

	// 8. Открыть превью-репозиторий для добавления файлов
	var docPreviewRepo = tools.open_doc(iPreviewRepoID);

	// 9. Обработать каждый ресурс
	var iCreated  = 0;
	var iSkipped  = 0;
	var iErrors   = 0;

	for (oLink in aSourceLinks)
	{
		var iSourceResID = OptInt(oLink.resource_id);
		if (IsEmptyValue(iSourceResID)) continue;

		var sPreviewCode = String(iSourceResID) + sSuffix;

		// Защита от повторного запуска — пропустить, если превью уже создано
		var oExisting = ArrayOptFindByKey(aExistingPreviews, sPreviewCode, "code");
		if (oExisting != undefined)
		{
			iSkipped++;
			continue;
		}

		// Найти имя исходного ресурса из предзагруженного массива
		var oSourceRes = ArrayOptFindByKey(aSourceResources, iSourceResID, "id");
		var sPreviewName = (oSourceRes != undefined ? String(oSourceRes.name) : sPreviewCode) + " Preview";

		try
		{
			// Получить оригинальные размеры изображения для пропорционального расчёта высоты
			var iNewHeight;
			try
			{
				var oRespPath = ParseJson(tools.resource_pic_envelope('get_pic_path', '', '', null, null, iSourceResID));
				if (oRespPath.error != 0)
					throw "get_pic_path error: " + oRespPath.message;

				var oRespSize = ParseJson(tools.resource_pic_envelope('get_size', oRespPath.path, null, null, null, iSourceResID));
				if (oRespSize.error != 0)
					throw "get_size error: " + oRespSize.message;

				if (!IsEmptyValue(oRespSize.width) && oRespSize.width > 0)
					iNewHeight = OptInt(Math.round(PREVIEW_WIDTH * oRespSize.height / oRespSize.width));
			}
			catch (eDim)
			{
				AlertLog("Не удалось получить размеры для ресурса ID=" + iSourceResID + ": " + eDim);
			}

			if (IsEmptyValue(iNewHeight) || iNewHeight <= 0)
			{
				AlertLog("Пропущен ресурс ID=" + iSourceResID + ": не удалось определить высоту превью");
				iErrors++;
				continue;
			}

			// Создать новый ресурс-превью
			var docNewPic = tools.new_doc_by_name('resource');
			docNewPic.TopElem.code             = sPreviewCode;
			docNewPic.TopElem.name             = sPreviewName;
			docNewPic.TopElem.resource_type_id = iPreviewTypeID;
			docNewPic.BindToDb();
			docNewPic.Save();

			var iNewResID = OptInt(docNewPic.DocID);
			if (IsEmptyValue(iNewResID))
			{
				AlertLog("Не удалось получить ID нового ресурса для source ID=" + iSourceResID);
				iErrors++;
				continue;
			}

			// Изменить размер: ширина 300px, высота рассчитана пропорционально
			tools.resource_pic_envelope('resize', iNewResID, '', PREVIEW_WIDTH, iNewHeight, iSourceResID);

			// Добавить превью-ресурс в превью-репозиторий
			docPreviewRepo.TopElem.files.ObtainChildByKey(iNewResID);

			iCreated++;
			AlertLog(
				"Создано превью для ресурса ID=" + iSourceResID +
				" → новый ID=" + iNewResID +
				" (" + PREVIEW_WIDTH + "x" + iNewHeight + ")" +
				" код=" + sPreviewCode
			);
		}
		catch (eInner)
		{
			AlertLog("Ошибка при создании превью для ресурса ID=" + iSourceResID + ": " + eInner);
			iErrors++;
		}
	}

	// 10. Сохранить превью-репозиторий (каталог repositorium_resources перестроится автоматически)
	docPreviewRepo.Save();

	AlertLog("Итог: создано=" + iCreated + ", пропущено=" + iSkipped + ", ошибок=" + iErrors);
}


EnableLog(sLogName, true);

try
{
	AlertLog("Агент создания превью ресурсов начал работу");
	main();
	AlertLog("Агент создания превью ресурсов завершил работу");
}
catch (e)
{
	AlertLog(e);
}

EnableLog(sLogName, false);
