// Агент: Формирование схемы пакета на основе Excel-файла
//
// Назначение: читает Excel-файл из ресурса базы (report_non_std_objects),
// и создаёт новую схему пакета в wtv_package_objects.xml.
// После работы агента откройте интерфейс Администратора → Пакеты объектов
// и нажмите кнопку «Создать пакет» для выгрузки zip.
//
// Параметры агента (Param):
//   iResourceId        (integer, обязательный) — ID ресурса базы с Excel-файлом.
//   sPackageName       (string,  необязательный) — название создаваемой схемы пакета.
//                      По умолчанию: "Пакет из Excel <текущая дата>".
//   bAddCustomTemplates (bool,   необязательный) — добавить все настраиваемые поля в пакет.
//                      По умолчанию: false.
//
// Столбцы Excel (порядок как в report_non_std_objects):
//   [0] ID        — идентификатор объекта
//   [1] Название  — имя объекта
//   [2] Тип       — имя документа (например: remote_action, course и т.д.)
//   Строка 0 — заголовок, пропускается автоматически.

var sLogName = "Agent_Package_From_Excel_LOG";

var iResourceId         = OptInt(Param.iResourceId);
var sPackageName        = IsEmptyValue(Param.sPackageName)
	? ("Пакет из Excel " + tools.date_str(Date()))
	: Param.sPackageName;
var bAddCustomTemplates = tools_web.is_true(Param.bAddCustomTemplates);


function AlertLog(sLog)
{
	sMessage = sLog;
	sLogType = ObjectType(sLog);
	if (DataType(sLog) == "object" && (sLogType == "JsObject" || sLogType == "JsArray" || sLogType == "XmElem"))
		sMessage = tools.object_to_text(sLog, "json");
	LogEvent(sLogName, sMessage);
}


function main()
{
	// 1. Проверка обязательного параметра
	if (iResourceId == undefined)
	{
		AlertLog("Ошибка: не передан параметр iResourceId. Укажите ID ресурса с Excel-файлом.");
		return;
	}

	// 2. Открываем документ ресурса для получения file_url
	docResource = tools.open_doc(iResourceId);
	if (docResource == undefined)
	{
		AlertLog("Ошибка: ресурс с ID=" + iResourceId + " не найден.");
		return;
	}
	sFilePath = String(docResource.TopElem.file_url);
	if (IsEmptyValue(sFilePath))
	{
		AlertLog("Ошибка: у ресурса ID=" + iResourceId + " поле file_url пустое.");
		return;
	}

	// 3. Открываем Excel-файл
	// open_excel внутри вызывает PutFileData по пути из UrlToFilePath(url).
	// Папка attachments физически не существует на диске — PutFileData падает.
	// Поэтому сначала копируем файл во временную папку, затем открываем оттуда.
	sTempUrl  = "x-local://wt_data/temp/pkg_excel_" + tools.random_string(8) + ".xlsx";
	sTempPath = UrlToFilePath(sTempUrl);
	ObtainDirectory(UrlToFilePath("x-local://wt_data/temp/"), true);
	PutFileData(sTempPath, LoadUrlData(sFilePath));
	AlertLog("Открываем Excel из temp: " + sTempUrl);
	oWorksheet = tools.open_excel(sTempUrl).worksheet;
	DeleteUrl(sTempUrl);
	if (oWorksheet == undefined)
	{
		AlertLog("Ошибка: не удалось открыть Excel-файл: " + sFilePath);
		return;
	}

	// 4. Открываем список схем пакетов
	sPackageListUrl = "x-local://" + DefaultDb + "/lists/wtv_package_objects.xml";
	AlertLog("Открываем список пакетов: " + sPackageListUrl);
	docPackageList = OpenDoc(sPackageListUrl);
	if (docPackageList == undefined)
	{
		AlertLog("Ошибка: не удалось открыть " + sPackageListUrl);
		return;
	}

	// 5. Создаём новую схему пакета
	tePackageList    = docPackageList.TopElem;
	oNewPackage      = tePackageList.AddChild();
	oNewPackage.id   = tools.random_string(4);
	oNewPackage.name = sPackageName;

	// 6. Обходим строки листа и добавляем объекты в схему
	bFirstRow = true;
	iAdded    = 0;
	iSkipped  = 0;
	iRowNum   = 0;

	for (oRow in oWorksheet)
	{
		iRowNum++;

		// Пропускаем строку заголовка (первая строка)
		if (bFirstRow)
		{
			bFirstRow = false;
			continue;
		}

		sCellId   = String(oRow[0].Value);
		sCellName = String(oRow[1].Value);
		sCellType = String(oRow[2].Value);

		// В Excel обычно приходит имя каталога во мн. числе (remote_actions),
		// а в схеме пакета ожидается тип документа (remote_action).
		iTypeLen = StrLen(sCellType);
		if (iTypeLen > 1 && StrRightRangePos(sCellType, iTypeLen - 1) == "s")
			sCellType = StrLeftRange(sCellType, iTypeLen - 1);

		// Пропускаем полностью пустые строки
		if (IsEmptyValue(sCellId) && IsEmptyValue(sCellType))
		{
			iSkipped++;
			continue;
		}

		iObjId = OptInt(sCellId);
		if (iObjId == undefined)
		{
			AlertLog("Строка " + iRowNum + ": не удалось разобрать ID='" + sCellId + "', пропуск");
			iSkipped++;
			continue;
		}

		if (IsEmptyValue(sCellType))
		{
			AlertLog("Строка " + iRowNum + ": пустой тип при ID=" + iObjId + ", пропуск");
			iSkipped++;
			continue;
		}

		oNewObj        = oNewPackage.objects.AddChild();
		oNewObj.id     = iObjId;
		oNewObj.eid    = iObjId;
		oNewObj.name   = sCellName;
		oNewObj.type   = sCellType;
		oNewObj.modify = true;

		iAdded++;
	}

	if (iAdded == 0)
	{
		AlertLog("Предупреждение: не найдено ни одного объекта. Схема не сохранена.");
		oNewPackage.Delete();
		return;
	}

	// 6б. Настраиваемые поля — только если bAddCustomTemplates = true.
	// custom_templates — файловый каталог без SQL-таблицы, XQuery на него не работает.
	// Читаем через тот же API, что использует форма пакетов.
	iCtAdded = 0;
	if (bAddCustomTemplates)
	{
		teAllCt = OpenNewDoc("x-local://wtv/wtv_custom_templates.xmd").TopElem;
		for (oCt in teAllCt)
		{
			try
			{
				if (IsEmptyValue(String(oCt.title)))
					continue;
				oNewPackage.custom_templates.ObtainChildByKey(String(oCt.Name));
				iCtAdded++;
			}
			catch (eCtItem) {}
		}
		if (iCtAdded > 0)
			oNewPackage.process_custom_templates = true;
		AlertLog("Добавлено настраиваемых полей (custom_templates): " + iCtAdded);
	}

	// 7. Сохраняем файл схем пакетов
	docPackageList.Save();

	AlertLog(
		"Схема пакета '" + sPackageName + "' успешно создана." +
		" Добавлено объектов: " + iAdded + ", настраиваемых полей: " + iCtAdded + "." +
		" Пропущено строк: " + iSkipped + "." +
		" Откройте Администратор → Пакеты объектов и нажмите «Создать пакет»."
	);
}


EnableLog(sLogName, true);

try
{
	AlertLog("Агент формирования пакета из Excel начал работу. Ресурс ID: " + iResourceId);
	main();
	AlertLog("Агент формирования пакета из Excel завершил работу.");
}
catch (e)
{
	AlertLog(e);
}

EnableLog(sLogName, false);
