var sLogName = "KD_PAS_AND_PLANS_CREATION_LOG";
var iAssessmentAppraise = OptInt(Param.sAssessmentAppraise);
var aPerfomanceGroups = ArraySelectAll(XQuery("for $elem in groups where contains(code, 'performance') return $elem"));

function AlertLog(log) {
    var sLog = log;

    var logType = ObjectType(log);
    if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem')) {
        sLog = tools.object_to_text(log, 'json');
    }
    LogEvent(sLogName, sLog);
}

function fGetManagerFromHyerarhy(iSubdivisionID) {
    iRes = undefined;
    if(IsEmptyValue(iSubdivisionID)) {
        return undefined;
    }
    docSubdivision= tools.open_doc(iSubdivisionID);
    if(docSubdivision!=undefined) {
        oFirstManager = ArrayOptFirstElem(docSubdivision.TopElem.func_managers);
        if(oFirstManager!=undefined) {
            return OptInt(oFirstManager.person_id);
        }
        else {
            return fGetManagerFromHyerarhy(OptInt(docSubdivision.TopElem.parent_object_id));
        }
    }
    return iRes;
}

function fGetCollaboratorManager(iCollaboratorID, aGroups) {
    iManagerID = undefined;
    if(IsEmptyValue(iCollaboratorID)) {
        return undefined;
    }
    docCollaborator = tools.open_doc(iCollaboratorID);
    if(docCollaborator!=undefined) {
        oGroupFuncManager = undefined;
        for (oGroup in aGroups) {
            docGroup = tools.open_doc(oGroup.id);
            if (docGroup != undefined && ArrayOptFindByKey(docGroup.TopElem.collaborators, iCollaboratorID, "collaborator_id") != undefined) {
                oGroupFuncManager = ArrayOptFirstElem(docGroup.TopElem.func_managers);
            }
        }
        if (oGroupFuncManager != undefined) {
            iManagerID = OptInt(oGroupFuncManager.person_id);
        }
        else {
            oCollaboratorFuncManager = ArrayOptFirstElem(docCollaborator.TopElem.func_managers);
            if(oCollaboratorFuncManager!=undefined) {
                iManagerID = OptInt(oCollaboratorFuncManager.person_id);
            }
            else {
                iManagerID = fGetManagerFromHyerarhy(OptInt(docCollaborator.TopElem.position_parent_id));
            }
        }
    }
    return iManagerID;
}

function CreatePlan (iCollaboratorID, iFuncManager) {
    docAssessmentAppraise = tools.open_doc(iAssessmentAppraise);
    if (docAssessmentAppraise != undefined) {
        var docPlan = OpenNewDoc("x-local://wtv/wtv_assessment_plan.xmd");
        docPlan.BindToDb();
        docPlan.TopElem.person_id = iCollaboratorID;
        docPlan.TopElem.boss_id = iFuncManager;
        docPlan.TopElem.assessment_appraise_id = iAssessmentAppraise;
        docPlan.TopElem.workflow_id = docAssessmentAppraise.TopElem.workflow_id;
        AlertLog(docAssessmentAppraise.TopElem.workflow_id);
        docPlan.Save();

        var docTask = OpenNewDoc("x-local://wtv/wtv_task.xmd");
        docTask.BindToDb();
        docTask.TopElem.executor_type = "collaborator";
        docTask.TopElem.executor_id = iCollaboratorID;
        docTask.TopElem.source_object_type = "assessment_appraise";
        docTask.TopElem.source_object_id = iAssessmentAppraise;
        docTask.TopElem.name = "Цель по поведенческим компетенциям";
        docTask.TopElem.date_plan = docAssessmentAppraise.TopElem.end_date;
        docTask.TopElem.custom_fields.ObtainChildByKey("is_competence").value = true;
        docTask.Save();

        var docPA = OpenNewDoc("x-local://wtv/wtv_pa.xmd");
        docPA.BindToDb();
        docPA.TopElem.person_id = iCollaboratorID;
        docPA.TopElem.expert_person_id = iFuncManager;
        docPA.TopElem.assessment_plan_id = docPlan.TopElem.id;
        docPA.TopElem.assessment_appraise_id = iAssessmentAppraise;
        docPA.TopElem.workflow_id = docAssessmentAppraise.TopElem.workflow_id;
        docPA.TopElem.status = "manager";
        docPA.TopElem.assessment_appraise_type = "staffrating";
        docPA.TopElem.tasks.ObtainChildByKey(docTask.TopElem.id).weight = 30;
        docPA.Save();

        AlertLog("Для Сотрудника с ID " + iCollaboratorID + " план успешно создан.");
    }

    return;
}

function main() {
    var aActiveCollaborators = ArraySelectAll(XQuery("for $elem in collaborators where is_dismiss = false() return $elem"));
    var aCreatedPlans = ArraySelectAll(XQuery("for $elem in assessment_plans where assessment_appraise_id = " + iAssessmentAppraise + " return $elem"));
    for (oCollaborator in aActiveCollaborators) {
        docCollaborator = tools.open_doc(oCollaborator.id);
        if (docCollaborator != undefined) {
            if (tools_web.is_true(docCollaborator.TopElem.custom_elems.ObtainChildByKey("is_from_integration").value) && !tools_web.is_true(docCollaborator.TopElem.access.web_banned)) {
                if (ArrayOptFindByKey(aCreatedPlans, OptInt(docCollaborator.TopElem.id), "person_id") == undefined) {
                    docSubdivision = tools.open_doc(docCollaborator.TopElem.position_parent_id);
                    iFuncManager = fGetCollaboratorManager(OptInt(docCollaborator.TopElem.id), aPerfomanceGroups);
                    if ((docSubdivision != undefined) && iFuncManager != undefined) {
                        CreatePlan(OptInt(docCollaborator.TopElem.id), iFuncManager);
                    }
                    else {
                        AlertLog("У Сотрудника с ID " + OptInt(docCollaborator.TopElem.id) + " отсутствуют функциональные руководители. План не будет создан.");
                    }
                } 
                else {
                    AlertLog("У Сотрудника с ID " + OptInt(docCollaborator.TopElem.id) + " уже есть план. Новый план создан не будет.");
                }  
            }
        }
    }

    return;
}


EnableLog(sLogName, true);

try {
    AlertLog("Агент Генерации планов и анкет АЦИНО начал работу");
    main();
    AlertLog("Агент Генерации планов и анкет АЦИНО закончил работу");
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);