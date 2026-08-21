var iAssessmentAppraise = OptInt("{PARAM1}", 0);
var arPAs = ArraySelectAll(XQuery("for $elem in pas where assessment_appraise_id = " + iAssessmentAppraise + " return $elem"));
var arResult = [];

var docAssessmentAppraise = tools.open_doc(iAssessmentAppraise);
if (docAssessmentAppraise != undefined) {
    var sAssessmentAppraiseName = docAssessmentAppraise.TopElem.name;
    var oListElem;
    for (oPA in arPAs) {
        docPA = tools.open_doc(oPA.id);
        if (docPA != undefined) {
            for (oTask in docPA.TopElem.tasks) {
                oListElem = new Object();

                oListElem.PrimaryKey = OptInt(oPA.id);
                oListElem.assessmentAppraiseName = String(sAssessmentAppraiseName);
                docCollaborator = tools.open_doc(docPA.TopElem.person_id);
                if (docCollaborator != undefined) {
                    oListElem.personPositionParentName = String(docCollaborator.TopElem.position_parent_name);
                }
                oListElem.personPositionName = String(oPA.person_position_name);
                oListElem.personFullname = String(oPA.person_fullname);
                oListElem.expertDepartmentName = String(oPA.department_name);
                oListElem.expertPositionName = String(oPA.expert_person_position_name);
                oListElem.expertFullname = String(oPA.expert_person_fullname);
                docAssessmentPlan = tools.open_doc(oPA.assessment_plan_id);
                if (docAssessmentPlan != undefined) {
                    oListElem.workflowStateName = String(docAssessmentPlan.TopElem.workflow_state_name);
                }
                docTask = tools.open_doc(oTask.task_id);
                if (docTask != undefined) {
                    oListElem.taskName = String(docTask.TopElem.name);
                    oListElem.weight = OptInt(oTask.weight);
                    oListElem.plan = String(docTask.TopElem.plan);
                    oListElem.fact = String(docTask.TopElem.fact);
                    arResult.push(oListElem);
                }
            }
        }
    }
}

alert(tools.object_to_text(arResult, "json"));

return arResult;