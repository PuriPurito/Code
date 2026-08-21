var sLogName = "KD_WT_TO_XLSX_AGENT_LOG";
var aColumns = ParseJson(Param.sColumns);


function AlertLog(log) {
    var sLog = log;

    var logType = ObjectType(log);
    if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem')) {
        sLog = tools.object_to_text(log, 'json');
    }
    LogEvent(sLogName, sLog);
}


function main() {
    var arAllActiveCollaborators = ArraySelectAll(XQuery("for $elem in collaborators where is_dismiss = false() return $elem"));
    

    return;
}


EnableLog(sLogName, true);

try {
    AlertLog("Агент Выгрузки сотрудников начал работу");
    main();
    AlertLog("Агент Выгрузки сотрудников закончил работу");
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);