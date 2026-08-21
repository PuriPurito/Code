var sLogName = "KD_KPI_CLEARING_LOG";

function AlertLog(sText) {
    LogEvent(sLogName, sText);
    return;
}

function main() {
    arAllActiveCollaborators = ArraySelectAll(XQuery("for $elem in collaborators where is_dismiss = false() return $elem"));
    for (oActiveCollaborator in arAllActiveCollaborators) {
        docPosition = tools.open_doc(oActiveCollaborator.position_id);
        if (docPosition != undefined) {
            docPosition.TopElem.kpi_profiles.Clear();
            docPosition.Save();
        }
    }

    return;
}


EnableLog(sLogName, true);

try {
    AlertLog("Агент Очищения поля профилей KPI у должностей начал работу");
    main();
    AlertLog("Агент Очищения поля профилей KPI у должностей закончил работу");
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);