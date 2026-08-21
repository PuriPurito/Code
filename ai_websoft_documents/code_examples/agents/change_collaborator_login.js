// ----------------------------------------------------------------------------------------------------------
// создан: 09.06.2026
// ------------------------------------------------ Описание ------------------------------------------
// Агент для смены логина сотрудника.
// Параметры агента:
//   collaborator_id — ID сотрудника (обязательный)
//   new_login       — новый логин (обязательный)
// ---------------------––––––––––------------------------------------------

var sLogName = "change_collaborator_login";

function AlertLog(log)
{
	sLog = log;
	logType = ObjectType(log);
	if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem'))
		sLog = tools.object_to_text(log, 'json');
	LogEvent(sLogName, sLog);
}

function main()
{
	EnableLog(sLogName, true);

	iCollaboratorID = OptInt(Param.collaborator_id);
	sNewLogin       = Param.new_login;

	if (iCollaboratorID == undefined)
	{
		AlertLog("Ошибка: параметр collaborator_id не задан или некорректен");
		EnableLog(sLogName, false);
		return;
	}

	if (IsEmptyValue(sNewLogin))
	{
		AlertLog("Ошибка: параметр new_login не задан");
		EnableLog(sLogName, false);
		return;
	}

	docCollaborator = tools.open_doc(iCollaboratorID);
	if (docCollaborator == undefined || docCollaborator == null)
	{
		AlertLog("Ошибка: сотрудник с ID=" + iCollaboratorID + " не найден");
		EnableLog(sLogName, false);
		return;
	}

	teCollaborator = docCollaborator.TopElem;

	sOldLogin  = teCollaborator.login;
	sFullname  = teCollaborator.fullname;

	teCollaborator.login = sNewLogin;
	docCollaborator.Save();

	AlertLog(
		"Смена логина: " +
		"ID=" + iCollaboratorID + ", " +
		"ФИО=" + sFullname + ", " +
		"старый логин=[" + sOldLogin + "], " +
		"новый логин=[" + sNewLogin + "]"
	);

	EnableLog(sLogName, false);
}

main();
