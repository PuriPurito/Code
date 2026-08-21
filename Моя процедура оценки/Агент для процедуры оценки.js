var sLogName = String(Param.sLogName);
var bLogActive = tools_web.is_true(Param.isLogActive);


function AlertLog(sText) {
    LogEvent(sLogName, sText);
    return;
}

function CreatePlan (iCollaboratorID, oFuncManagerID, docAssessment) {
    var docPlan = OpenNewDoc("x-local://wtv/wtv_assessment_plan.xmd");
    docPlan.BindToDb();
    docPlan.TopElem.person_id = iCollaboratorID;
    docPlan.TopElem.boss_id = oFuncManagerID.person_id;
    docPlan.TopElem.assessment_appraise_id = docAssessment.TopElem.id;
    docPlan.TopElem.workflow_id = docAssessment.TopElem.workflow_id;
    docPlan.Save();

    var docPA = OpenNewDoc("x-local://wtv/wtv_pa.xmd");
    docPA.BindToDb();
    docPA.TopElem.person_id = iCollaboratorID;
    docPA.TopElem.expert_person_id = oFuncManagerID.person_id;
    docPA.TopElem.assessment_appraise_id = docAssessment.TopElem.id;
    docPA.TopElem.workflow_id = docAssessment.TopElem.workflow_id;
    docPA.TopElem.assessment_appraise_type = "staffrating";
    docPA.Save();

    AlertLog("Для Сотрудника с ID " + iCollaboratorID + " план успешно создан.");

    return;
}

function CreatePlanCheck(iCollaboratorID, docAssessment, arCreatedPlans) {
    if(ArrayOptFindByKey(arCreatedPlans, iCollaboratorID, "person_id") == undefined) {
        var docCollaborator = tools.open_doc(iCollaboratorID);
        if (docCollaborator != undefined) {
            if (ArrayOptFirstElem(docCollaborator.TopElem.func_managers) != undefined) {
                CreatePlan(iCollaboratorID, ArrayOptFirstElem(docCollaborator.TopElem.func_managers), docAssessment);
            }
            else {
                var docSubdivision = tools.open_doc(docCollaborator.TopElem.position_parent_id);
                if ((docSubdivision != undefined) && (ArrayOptFirstElem(docSubdivision.TopElem.func_managers) != undefined)) {
                    CreatePlan(iCollaboratorID, ArrayOptFirstElem(docSubdivision.TopElem.func_managers), docAssessment);
                }
                else {
                    AlertLog("У Сотрудника с ID " + iCollaboratorID + " отсутствуют функциональные руководители. План не будет создан.");
                }
            }
        }
    }
    else {
        AlertLog("План для Сотрудника с ID " + iCollaboratorID + " уже существует. Новый план создан не будет.");
    }

    return;
}

function main() {
    var iGroup = OptInt(Param.sGroup, 0);
    var arCollaborators = [];

    if (!IsEmptyValue(Param.sCollaborators)) {
        arCollaborators = tools.read_object(Param.sCollaborators);
    }
    if (!IsArray(arCollaborators)) {
        arCollaborators = [{__value: Param.sCollaborators}];
    }

    var iAssessment = OptInt(Param.sAssessment);
    var arCreatedPlans = ArraySelectAll(XQuery("for $elem in assessment_plans where assessment_appraise_id = " + iAssessment + " return $elem"));
    var docAssessment = tools.open_doc(iAssessment);

    if (docAssessment != undefined) {
        if (ArrayOptFirstElem(arCollaborators) != undefined) {
            for (oCollaborator in arCollaborators) {
                CreatePlanCheck(OptInt(oCollaborator.__value), docAssessment, arCreatedPlans);
            }
        }
        else {
            var arAllCollaborators = ArraySelectAll(XQuery ("for $elem in collaborators return $elem"));
            var docGroup = tools.open_doc(iGroup);
            if (docGroup != undefined) {
                for (oCurCollaborator in arAllCollaborators) {
                    if (ArrayOptFindByKey(docGroup.TopElem.collaborators, oCurCollaborator.id, "collaborator_id") == undefined) {
                        CreatePlanCheck(OptInt(oCurCollaborator.id), docAssessment, arCreatedPlans);
                    }
                }
            }
        }
    }

    return;
}


EnableLog(sLogName, bLogActive);

try {
    main();
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);