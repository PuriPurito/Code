var sLogName = "IS_FROM_INTEGRATION_DELETE_AGENT_LOG";

function AlertLog(log) {
    var sLog = log;

    var logType = ObjectType(log);
    if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem')) {
        sLog = tools.object_to_text(log, 'json');
    }
    LogEvent(sLogName, sLog);
}

function main() {
    docDL = tools.open_doc(7163996457020047670); 
    if (docDL != undefined) {
        docDL.TopElem.custom_elems.DeleteChildByKey("is_from_integration");
        docDL.Save();
    }


    return;
}

EnableLog(sLogName, true);

try {
    AlertLog("Агент удаления флага 'Из интеграции' начал работу");
    main();
    AlertLog("Агент удаления флага 'Из интеграции' закончил работу");
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);