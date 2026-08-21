var sLogName = "ACINO_PASSWORD_SET_AND_CHANGE_AGENT_LOG";
var sNotificationCode = "acino_password_set_and_change";

function AlertLog(log) {
    var sLog = log;

    var logType = ObjectType(log);
    if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem')) {
        sLog = tools.object_to_text(log, 'json');
    }
    LogEvent(sLogName, sLog);
}

function main() {
    var aAllCollaborators = ArraySelectAll(XQuery("for $elem in collaborators return $elem"));
    for (oCollaborator in aAllCollaborators) {
        docCollaborator = tools.open_doc(oCollaborator.id);
        if (docCollaborator != undefined) {
            if (tools_web.is_true(docCollaborator.TopElem.custom_elems.ObtainChildByKey("is_from_integration").value)) {
                docCollaborator.TopElem.password = String(tools.random_string(10));
                docCollaborator.TopElem.change_password = true;
                docCollaborator.Save();
                tools.create_notification(sNotificationCode, docCollaborator.TopElem.id, docCollaborator.TopElem.password);
            }
        }
    }

    return;
}

EnableLog(sLogName, true);

try {
    AlertLog("Агент Генерации рандомных паролей и отправления уведомления о смене начал работу");
    main();
    AlertLog("Агент Генерации рандомных паролей и отправления уведомления о смене закончил работу");
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);