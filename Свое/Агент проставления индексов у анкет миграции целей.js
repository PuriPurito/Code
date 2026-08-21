var iAssessmentAppraiseID = OptInt(Param.iAssessmentAppraiseID, 0);
var sLogName = "KD_MIGRATION_INDEX";

function AlertLog(sText) {
    LogEvent(sLogName, sText);
    return;
}

function main() {
    arPasStaffrating = ArraySelectAll(XQuery("for $elem in pas where assessment_appraise_id = " + iAssessmentAppraiseID + " and assessment_appraise_type = 'staffrating' return $elem"));
    for (oPaStaffrating in arPasStaffrating) {
        docPaStaffrating = tools.open_doc(oPaStaffrating.id);
        if (docPaStaffrating != undefined) {
            docPaStaffrating.TopElem.index = 10;
            docPaStaffrating.Save();
        }
    }
    arPasDevelopmentPlan = ArraySelectAll(XQuery("for $elem in pas where assessment_appraise_id = " + iAssessmentAppraiseID + " and assessment_appraise_type = 'development_plan' return $elem"));
    for (oPaDevelopmentPlan in arPasDevelopmentPlan) {
        docDevelopmentPlan = tools.open_doc(oPaDevelopmentPlan.id);
        if (docDevelopmentPlan != undefined) {
            docDevelopmentPlan.TopElem.index = 20;
            docDevelopmentPlan.Save();
        }
    }

    return;
}


EnableLog(sLogName, true);

try {
    AlertLog("Агент Проставления индексов у анкет миграции целей начал работу");
    main();
    AlertLog("Агент Проставления индексов у анкет миграции целей закончил работу");
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);