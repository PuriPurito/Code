function AlertLog(log) {
	var sLog = log;
	logType = ObjectType(log);
	if (DataType(log) == "object" && (logType == "JsObject" || logType == "JsArray" || logType == "XmElem"))
		sLog = tools.object_to_text(log, "json");
	LogEvent(sLogName, sLog);
}

function ExportCustomReportToFile(iReportID, iUserID, sOutType) {
	var sFileUrl;
	try {
		docReport = tools.open_doc(iReportID);
		if (docReport == undefined) {
			AlertLog("Не найден документ отчёта id=" + iReportID);
			return undefined;
		}

		docReport.TopElem.initiator_person_id = iUserID;
		if (tools.build_report_remote(iReportID, docReport.TopElem, null) == null) {
			AlertLog("Не удалось построить отчёт id=" + iReportID);
			return undefined;
		}

		sFileUrl = tools_report.custom_report_export_to_file(iReportID, iUserID, sOutType, undefined);
	} catch (err) {
		AlertLog("Ошибка при экспорте отчёта id=" + iReportID + " (" + sOutType + "): " + err);
	}
	return sFileUrl;
}

/**
 * Уникальные ID сотрудников - участников группы
 */
function GetGroupCollaboratorIDs(iGroupID) {
	var aResult = [];

	iGroupID = OptInt(iGroupID);
	if (iGroupID == undefined) {
		return aResult;
	}

	aMembers = ArraySelectAll(XQuery(
		"for $gc in group_collaborators where $gc/group_id = " + iGroupID + " return $gc/Fields('collaborator_id')"
	));

	for (oMember in aMembers) {
		iMemberID = OptInt(oMember.collaborator_id);
		if (iMemberID != undefined && ArrayOptFind(aResult, "OptInt(This) == " + iMemberID) == undefined) {
			aResult.push(iMemberID);
		}
	}

	return aResult;
}

/**
 * Список специалистов ОКА - участники группы ТОП-ОК
 * (параметр iTopHRGroup библиотеки libAflDocuments)
 */
function GetOkaSpecialistIDs() {
	iGroupID = OptInt(tools.get_params_code_library("libAflDocuments").GetOptProperty("iTopHRGroup"), 0);
	if (iGroupID == undefined || iGroupID == 0) {
		AlertLog("Не задан параметр iTopHRGroup в libAflDocuments - список специалистов ОКА не получен");
		return [];
	}

	return GetGroupCollaboratorIDs(iGroupID);
}

function SendReportByEmail(iReportID, aRecipientUserIDs, sSubject, sBody, sAttachName) {
	if (ArrayOptFirstElem(aRecipientUserIDs) == undefined) {
		AlertLog("Не заданы получатели письма с отчётом id=" + iReportID);
		return false;
	}

	// Инициатор построения отчёта - первый получатель из списка
	iInitiatorUserID = OptInt(ArrayOptFirstElem(aRecipientUserIDs));

	sFileUrl = ExportCustomReportToFile(iReportID, iInitiatorUserID, "xls");
	if (sFileUrl == undefined) {
		AlertLog("Не удалось сформировать xlsx файл для отчёта id=" + iReportID);
		return false;
	}

	// Файл формируется один раз, дальше рассылается всем получателям
	oFileData = LoadFileData(UrlToFilePath(sFileUrl));

	bAllSent = true;
	for (iRecipientUserID in aRecipientUserIDs) {
		teNotif = OpenNewDoc("x-local://wtv/wtv_dlg_notification_template.xml").TopElem;
		teNotif.recipients.AddChild().recipient_type = "in_doc";

		oAttach = teNotif.attachments.AddChild();
		oAttach.name = sAttachName + ".xlsx";
		oAttach.data = oFileData;

		teNotif.subject = sSubject;
		teNotif.body_type = "text";
		teNotif.body = sBody;

		bSent = tools.create_notification("0", OptInt(iRecipientUserID), "", null, null, null, teNotif);
		if (bSent != true) {
			AlertLog("Не удалось отправить письмо с отчётом id=" + iReportID + " получателю " + iRecipientUserID);
			bAllSent = false;
		}
	}

	DeleteUrl(sFileUrl);

	return bAllSent;
}

function main() {
	iReportID = OptInt(Param.sReportID);
	if (iReportID == undefined) {
		AlertLog("Не найден настраиваемый отчёт с ID: " + Param.sReportID);
		return;
	}

	// Получатели: заданная в параметрах группа, иначе - специалисты ОКА (группа ТОП-ОК)
	iRecipientGroupID = OptInt(Param.iRecipientGroupID);
	if (iRecipientGroupID != undefined) {
		aRecipients = GetGroupCollaboratorIDs(iRecipientGroupID);
		if (ArrayOptFirstElem(aRecipients) == undefined) {
			AlertLog("В группе получателей id=" + iRecipientGroupID + " нет сотрудников - отчёт не отправлен");
			return;
		}
	} else {
		aRecipients = GetOkaSpecialistIDs();
		if (ArrayOptFirstElem(aRecipients) == undefined) {
			AlertLog("Список специалистов ОКА пуст - отчёт не отправлен");
			return;
		}
	}

	SendReportByEmail(
		iReportID,
		aRecipients,
		"Отчёт",
		"Во вложении сформированный отчёт о работниках, подтвердивших плановый отпуск",
		"report"
	);
}

var sLogName = "afl_vacation_confirmed_agent";
EnableLog(sLogName, true);
try {
	AlertLog("Агент Отправки отчета о подтвержденных плановых отпусках начал работу");
	main();
	AlertLog("Агент Отправки отчета о подтвержденных плановых отпусках завершил работу");
} catch (err) {
	AlertLog(err);
}
EnableLog(sLogName, false);