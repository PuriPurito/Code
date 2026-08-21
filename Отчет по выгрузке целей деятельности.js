var iAssessmentAppraise = OptInt("{PARAM1}", 0);
var arPlans = ArraySelectAll(XQuery("for $elem in assessment_plans where assessment_appraise_id = " + iAssessmentAppraise + " return $elem"));
var arPAs = ArraySelectAll(XQuery("for $elem in pas where assessment_appraise_id = " + iAssessmentAppraise + " and assessment_appraise_type = 'staffrating' return $elem"));
var arResult = [];

var docAssessmentAppraise = tools.open_doc(iAssessmentAppraise);
if (docAssessmentAppraise != undefined) {
    var sAssessmentAppraiseCode = docAssessmentAppraise.TopElem.code;
    var oListElem;
    for (oPlan in arPlans) {
        oPA = ArrayOptFindByKey(arPAs, oPlan.person_id, "person_id");
        if(oPA != undefined) {
            docPA = tools.open_doc(oPA.id);
            if (docPA != undefined) {
                for (oTask in docPA.TopElem.tasks) {
                    oListElem = new Object();

                    oListElem.PrimaryKey = OptInt(oPA.id);
                    oListElem.assessmentAppraiseCode = String(sAssessmentAppraiseCode);
                    oListElem.PlanCode = String(oPlan.code);
                    docCollaborator = tools.open_doc(docPA.TopElem.person_id);
                    if (docCollaborator != undefined) {
                        oListElem.personCode = String(docCollaborator.TopElem.code);
                    }
                    oListElem.personFullname = String(oPA.person_fullname);
                    docBoss = tools.open_doc(docPA.TopElem.expert_person_id);
                    if (docBoss != undefined) {
                        oListElem.bossCode = String(docBoss.TopElem.code);
                    }
                    oListElem.bossFullname = String(oPA.expert_person_fullname);
                    oCustomExpert = ArrayOptFirstElem(oPA.custom_experts);
                    if (oCustomExpert != undefined) {
                        docExpert = tools.open_doc(oCustomExpert.person_id);
                        if (docExpert != undefined) {
                            oListElem.expertCode = String(docExpert.TopElem.code);
                            oListElem.expertFullname = String(docExpert.TopElem.lastname + docExpert.TopElem.firstname + docExpert.TopElem.middlename);
                        }
                    }
                    docTask = tools.open_doc(oTask.task_id);
                    if (docTask != undefined) {
                        oListElem.taskCode = String(docTask.TopElem.code);
                        oListElem.taskName = String(docTask.TopElem.name);
                        oListElem.weight = OptInt(oTask.weight);
                        oListElem.desc = String(docTask.TopElem.desc);
                        oIsCompulsory = ArrayOptFindByKey(docTask.TopElem.custom_fields, "is_compulsory", "name");
                        if (oIsCompulsory != undefined) {
                            oListElem.isCompulsory = tools_web.is_true(oIsCompulsory.value)? 'Да' : '';
                        }
                        oListElem.datePlan = OptDate(docTask.TopElem.date_plan);
                        arResult.push(oListElem);
                    }
                }
            }
        }
    }
}

return arResult;