var sLogName = "COMPULSORY_TASK_DATE_PLAN_CHANGE_AGENT_LOG";


function AlertLog(log) {
    var sLog = log;

    var logType = ObjectType(log);
    if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem')) {
        sLog = tools.object_to_text(log, 'json');
    }
    LogEvent(sLogName, sLog);
}


function main() {
    var iAssessmentAppraise = OptInt(Param.sAssessmentAppraise); 
    var dNewDate = Date(Param.dNewDate);
    var aAllCompulsoryTasks = ArraySelectAll(XQuery("for $elem in tasks where source_object_id = " + iAssessmentAppraise + " and target_object_id != null() return $elem"));

    for (oTask in aAllCompulsoryTasks) {
        docTask = tools.open_doc(oTask.id);
        if (docTask != undefined) {
            docTask.TopElem.date_plan = dNewDate;
            docTask.Save();
        }
    }

    return;
}


EnableLog(sLogName, true);

try {
    AlertLog("Агент Изменения срока исполнения обязательной цели начал работу");
    main();
    AlertLog("Агент Изменения срока исполнения обязательной цели закончил работу");
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);