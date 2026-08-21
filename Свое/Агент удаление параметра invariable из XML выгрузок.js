var sLogName = "KD_XML_INVARIABLE_DELETE";

function AlertLog(sText) {
    LogEvent(sLogName, sText);
    return;
}

function main() {
    docActivityDischarge = tools.open_doc("7293855863482725281");
    if (docActivityDischarge != undefined) {
        docActivityDischarge.TopElem.doc_info.invariable = 0;
        docActivityDischarge.Save();
    }

    docDevelopmentDischarge = tools.open_doc("7294584173920766616");
    if (docDevelopmentDischarge != undefined) {
        docDevelopmentDischarge.TopElem.doc_info.invariable = 0;
        docDevelopmentDischarge.Save();
    }

    return;
}


EnableLog(sLogName, true);

try {
    AlertLog("Агент замещения возможности редактирования начал работу");
    main();
    AlertLog("Агент замещения возможности редактирования закончил работу");
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);