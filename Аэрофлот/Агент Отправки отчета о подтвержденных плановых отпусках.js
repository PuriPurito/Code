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

function SendReportByEmail(iReportID, iRecipientUserID, sSubject, sBody, sAttachName) {
	sFileUrl = ExportCustomReportToFile(iReportID, iRecipientUserID, "xls");
	if (sFileUrl == undefined) {
		AlertLog("Не удалось сформировать xlsx файл для отчёта id=" + iReportID);
		return false;
	}

	teNotif = OpenNewDoc("x-local://wtv/wtv_dlg_notification_template.xml").TopElem;
	teNotif.recipients.AddChild().recipient_type = "in_doc";

	oAttach = teNotif.attachments.AddChild();
	oAttach.name = sAttachName + ".xlsx";
	oAttach.data = LoadFileData(UrlToFilePath(sFileUrl));

	teNotif.subject = sSubject;
	teNotif.body_type = "text";
	teNotif.body = sBody;

	bSent = tools.create_notification("0", iRecipientUserID, "", null, null, null, teNotif);
	if (bSent != true) AlertLog("Не удалось отправить письмо с отчётом id=" + iReportID);

	DeleteUrl(sFileUrl);

	return bSent == true;
}

function main() {
	iReportID = OptInt(Param.sReportID);
	if (iReportID == undefined) {
		AlertLog("Не найден настраиваемый отчёт с ID: " + Param.sReportID);
		return;
	}

	iRecipientUserID = OptInt(Param.iRecipientUserID);
	if (iRecipientUserID == undefined) {
		AlertLog("Не задан получатель письма iRecipientUserID");
		return;
	}

	SendReportByEmail(
		iReportID,
		iRecipientUserID,
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