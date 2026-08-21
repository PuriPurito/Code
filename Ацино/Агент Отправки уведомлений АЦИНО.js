var sLogName = "KD_ACINO_NOTIFICATIONS_LOG";
var iAssessmentAppraise = OptInt(Param.sAssessmentAppraise);
var iDaysFromStart = OptInt(Param.iDaysFromStart, 21);
var iDaysTillEnd = -1*(OptInt(Param.iDaysTillEnd, 5));

function AlertLog(log) {
    var sLog = log;

    var logType = ObjectType(log);
    if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem')) {
        sLog = tools.object_to_text(log, 'json');
    }
    LogEvent(sLogName, sLog);
}

function DateCheck (dDiffDate, iAmountOfDays) {
    dCurrentDate = DateNewTime(Date(), 0, 0, 0);
    dCheckingDate = DateOffset(DateNewTime(dDiffDate, 0, 0, 0), iAmountOfDays*24*60*60);
    if (DateDiff(dCheckingDate, dCurrentDate) == 0) {
        return true;
    }

    return false;
}

function main() {
    var docAssessmentAppraise = tools.open_doc(iAssessmentAppraise);
    var arPlans = ArraySelectAll(XQuery('for $elem in assessment_plans where assessment_appraise_id = ' + iAssessmentAppraise + ' return $elem'));
    if (docAssessmentAppraise != undefined) {
        dGoalSettingStartDate = OptDate(docAssessmentAppraise.TopElem.custom_elems.ObtainChildByKey("goal_setting_start").value)
        dGoalSettingEndDate = OptDate(docAssessmentAppraise.TopElem.custom_elems.ObtainChildByKey("goal_setting_end").value)
        dGoalAdjustmentStartDate = OptDate(docAssessmentAppraise.TopElem.custom_elems.ObtainChildByKey("goal_adjustment_start").value)
        dGoalAdjustmentEndDate = OptDate(docAssessmentAppraise.TopElem.custom_elems.ObtainChildByKey("goal_adjustment_end").value)
        dGoalAssessmentStartDate = OptDate(docAssessmentAppraise.TopElem.custom_elems.ObtainChildByKey("goal_assessment_start").value)
        dGoalAssessmentEndDate = OptDate(docAssessmentAppraise.TopElem.custom_elems.ObtainChildByKey("goal_assessment_end").value)
        dAssessmentAppraiseEndDate = OptDate(docAssessmentAppraise.TopElem.end_date);

        AlertLog(DateCheck(dGoalSettingStartDate, iDaysFromStart));

        if (DateCheck(dGoalSettingStartDate, iDaysFromStart)) {
            arNeededPlans = ArraySelect(arPlans, "This.workflow_state == '1_person'");
            AlertLog(arNeededPlans);

            if (ArrayOptFirstElem(arNeededPlans) != undefined) {
                for (oPlan in arNeededPlans) {
                    
                    AlertLog(tools.create_notification("acino_assessment_0_start_1_person_21", oPlan.id));
                }
            }
        }
        if (DateCheck(dGoalSettingEndDate, iDaysTillEnd)) {
            arNeededPlans = ArraySelect(arPlans, "This.workflow_state == '1_person'");
            if (ArrayOptFirstElem(arNeededPlans) != undefined) {
                for (oPlan in arNeededPlans) {
                    tools.create_notification("acino_assessment_0_start_1_person_5", oPlan.id);
                }
            }
        }
        if (DateCheck(dGoalAdjustmentStartDate, iDaysFromStart)) {
            arNeededPlans = ArraySelect(arPlans, "This.workflow_state == '2_person'");
            if (ArrayOptFirstElem(arNeededPlans) != undefined) {
                for (oPlan in arNeededPlans) {
                    tools.create_notification("acino_assessment_1_end_2_person_21", oPlan.id);
                }
            }
        }
        if (DateCheck(dGoalAdjustmentEndDate, iDaysTillEnd)) {
            arNeededPlans = ArraySelect(arPlans, "This.workflow_state == '2_person'");
            if (ArrayOptFirstElem(arNeededPlans) != undefined) {
                for (oPlan in arNeededPlans) {
                    tools.create_notification("acino_assessment_1_end_2_person_5", oPlan.id);
                }
            }
        }
        if (DateCheck(dGoalAssessmentStartDate, iDaysFromStart)) {
            arNeededPlans = ArraySelect(arPlans, "This.workflow_state == '3_person'");
            if (ArrayOptFirstElem(arNeededPlans) != undefined) {
                for (oPlan in arNeededPlans) {
                    tools.create_notification("acino_assessment_2_end_3_person_21", oPlan.id);
                }
            }
        }
        if (DateCheck(dGoalAssessmentEndDate, iDaysTillEnd)) {
            arNeededPlans = ArraySelect(arPlans, "This.workflow_state == '3_person'");
            if (ArrayOptFirstElem(arNeededPlans) != undefined) {
                for (oPlan in arNeededPlans) {
                    tools.create_notification("acino_assessment_2_end_3_person_5", oPlan.id);
                }
            }
        }
        if (DateCheck(dAssessmentAppraiseEndDate, iDaysTillEnd)) {
            arNeededPlans = ArraySelect(arPlans, "This.workflow_state == '3_end'");
            if (ArrayOptFirstElem(arNeededPlans) != undefined) {
                for (oPlan in arNeededPlans) {
                    tools.create_notification("acino_assessment_3_end_5", oPlan.boss_id, "", oPlan.id);
                }
            }
        }
    }
    
    return;
}


EnableLog(sLogName, true);

try {
    AlertLog("Агент Отправки уведомлений АЦИНО начал работу");
    main();
    AlertLog("Агент Отправки уведомлений АЦИНО закончил работу");
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);