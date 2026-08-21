var sLogName = "acino_report_log";
var iAssessmentAppraise = OptInt("{PARAM1}", 0);
var arPlans = ArraySelectAll(XQuery("for $elem in assessment_plans where assessment_appraise_id = " + iAssessmentAppraise + " return $elem"));
var arPAs = ArraySelectAll(XQuery("for $elem in pas where assessment_appraise_id = " + iAssessmentAppraise + " and assessment_appraise_type = 'staffrating' return $elem"));
var arActiveCollaborators = ArraySelectAll(XQuery("for $elem in collaborators where is_dismiss = false() return $elem"));
var arResult = [];


function AlertLog(log) {
	var sLog = log

	var logType = ObjectType(log)
	if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem'))
		sLog = tools.object_to_text(log, 'json')

	LogEvent(sLogName, sLog);
}

var aCache = [];
var aPerfomanceGroups = ArraySelectAll(XQuery("for $elem in groups where contains(code, 'performance') return $elem"));
var aCollaborators = ArraySelectAll(XQuery("for $elem in collaborators return $elem"));

function fGetDocFromCache(iID, sCatalogName) {
	oDoc = undefined
	oCatalogCache = ArrayOptFindByKey(aCache, sCatalogName, 'catalog_name')
	if (oCatalogCache == undefined) {
		oCatalogCache = { "catalog_name": sCatalogName, "docs": [] }
		aCache.push(oCatalogCache)
	}
	oDocInCache = ArrayOptFindByKey(oCatalogCache.docs, OptInt(iID), 'id')
	if (oDocInCache == undefined) {
		oDoc = tools.open_doc(iID)
		oCatalogCache.docs.push({ "id": OptInt(iID), "doc": oDoc })
	}
	else {
		oDoc = oDocInCache.doc
	}
	return oDoc
}

function fGetManagerFromHyerarhy(iSubdivisionID) {
	iRes = undefined;
	if (IsEmptyValue(iSubdivisionID)) {
		return undefined;
	}
	docSubdivision = fGetDocFromCache(iSubdivisionID, 'subdivisions');
	if (docSubdivision != undefined) {
		oFirstManager = ArrayOptFirstElem(docSubdivision.TopElem.func_managers);
		if (oFirstManager != undefined) {
			return OptInt(oFirstManager.person_id);
		} else {
			return fGetManagerFromHyerarhy(OptInt(docSubdivision.TopElem.parent_object_id));
		}
	}
	return iRes;
}

function fGetCollaboratorManager(iCollaboratorID, aGroups, bGetNextManager) {
	iManagerID = undefined;
	if (IsEmptyValue(iCollaboratorID)) {
		return undefined;
	}
	docCollaborator = tools.open_doc(iCollaboratorID);
	if (docCollaborator != undefined) {
		teCollaborator = docCollaborator.TopElem;
		oGroupFuncManager = undefined;
		//Ищем в группах
        if (!bGetNextManager) {
            for (oGroup in aGroups) {
                docGroup = tools.open_doc(oGroup.id);
                if (docGroup != undefined && ArrayOptFindByKey(docGroup.TopElem.collaborators, iCollaboratorID, "collaborator_id") != undefined) {
                    oGroupFuncManager = ArrayOptFirstElem(docGroup.TopElem.func_managers);
                }
            }
            if (oGroupFuncManager != undefined) {
                iManagerID = OptInt(oGroupFuncManager.person_id);
            }
        }
        else {
            if (iManagerID == undefined) {
                //Ищем в подразделениях
                iManagerID = fGetManagerFromHyerarhy(OptInt(teCollaborator.position_parent_id));
            }
            //Ищем в организации
            if (iManagerID == undefined) {
                docOrg = tools.open_doc(teCollaborator.org_id);
                if (docOrg != undefined) {
                    oOrgFuncManager = ArrayOptFirstElem(docOrg.TopElem.func_managers);
                    if (oOrgFuncManager != undefined) {
                        iManagerID = OptInt(oOrgFuncManager.person_id);
                    }
                }
            }
        }
	}
	return iManagerID;
}

function GetHierarchy(docCollaborator, oListElem) {
	teCollaborator = docCollaborator.TopElem;
	oListElem.personCode = String(teCollaborator.code);
	oListElem.personFullname = String(teCollaborator.lastname + ' ' + teCollaborator.firstname + ' ' + teCollaborator.middlename);
	oListElem.position = String(teCollaborator.position_name);
	docSubdivision = tools.open_doc(teCollaborator.position_parent_id);
    oFuncManager = ArrayOptFindByKey(aCollaborators, OptInt(fGetCollaboratorManager(teCollaborator.id, aPerfomanceGroups, false)), 'id')
    if (oFuncManager != undefined) {
        oListElem.funcManager = String(oFuncManager.fullname);
    }
    iNextFuncManager = fGetCollaboratorManager(teCollaborator.id, aPerfomanceGroups, true)
    oNextFuncManager = ArrayOptFindByKey(aCollaborators, OptInt(fGetCollaboratorManager(teCollaborator.id, aPerfomanceGroups, true)), 'id')
    if (oNextFuncManager != undefined) {
        oListElem.parentFuncManager = String(oNextFuncManager.fullname);
    }
	if (docSubdivision != undefined) {
		teSubdivision = docSubdivision.TopElem;
		oListElem.subdivision = String(teSubdivision.name);	
	}
	return oListElem;
}

function main() {
    var docAssessmentAppraise = tools.open_doc(iAssessmentAppraise);
	iRatingRealSupplementaryQuestionID = OptInt("6986182129816429799")
	iRatingTextSupplementaryQuestionID = OptInt("6986171561644247927")
	docRatingText = tools.open_doc(iRatingTextSupplementaryQuestionID)
	if(docRatingText!=undefined)
	{
		aRatingScale = ArraySelectAll(docRatingText.TopElem.scales)
	}
	else
	{
		aRatingScale = [
			{id:1,name:"Не соответствует ожиданиям / Significantly below",desc:"Не соответствует ожиданиям / Significantly below",percent:1},
			{id:2,name:"Частично соответствует ожиданиям / Below",desc:"Частично соответствует ожиданиям / Below",percent:2},
			{id:3,name:"Соответствует ожиданиям / On target",desc:"Соответствует ожиданиям / On target",percent:3},
			{id:4,name:"Превосходит ожидания / Above",desc:"Превосходит ожидания / Above",percent:4},
			{id:5,name:"Существенно превосходит ожидания / Significantly above",desc:"Существенно превосходит ожидания / Significantly above",percent:5}
		]
	}
    if (docAssessmentAppraise != undefined) {
        var oListElem;
        for (oPlan in arPlans) {
            oPA = ArrayOptFindByKey(arPAs, oPlan.person_id, "person_id");
            if(oPA != undefined) {
                docPA = tools.open_doc(oPA.id);
                if (docPA != undefined) { 
                    tePA = docPA.TopElem;
                    oListElem = new Object();

                    oListElem.PrimaryKey = OptInt(oPA.id);
                    docCollaborator = tools.open_doc(tePA.person_id);
                    if (docCollaborator != undefined) {
                        oListElem = GetHierarchy(docCollaborator, oListElem);
                    }
					iTasksWeight = 0
					iTasksRatingPerson = 0
					for(oTaskInPa in docPA.TopElem.tasks)
					{
						iTasksWeight+=OptInt(oTaskInPa.weight,0)
						docTask =tools.open_doc(oTaskInPa.task_id)
						if(docTask!=undefined)
						{
							teTask = docTask.TopElem
							aTaskCustomFields = teTask.custom_fields

							sTaskRatingPerson = aTaskCustomFields.GetOptChildByKey('rating_person') != undefined ? String(aTaskCustomFields.GetOptChildByKey('rating_person').value) : ''
							if(OptInt(oTaskInPa.weight) != undefined)
							{
								if(OptInt(sTaskRatingPerson) != undefined)
								{
									iTasksRatingPerson += (OptReal(sTaskRatingPerson)*OptReal(oTaskInPa.weight))/(100.0)
								}
							}
						}
					}
					if(Math.round(iTasksRatingPerson)>=1 && Math.round(iTasksRatingPerson)<=5)
					{
						oListElem.tasksRatingPerson = iTasksRatingPerson
						oScale = ArrayOptFindByKey(aRatingScale,Math.round(iTasksRatingPerson),'percent')
						if(oScale!=undefined)
							oListElem.tasksRatingPersonText = oScale.name
					}

					oRatingReal = ArrayOptFindByKey(docPA.TopElem.supplementary_questions,iRatingRealSupplementaryQuestionID,'supplementary_question_id')
					if(oRatingReal!=undefined)
					{
						oListElem.tasksRatingBoss = oRatingReal.supplementary_question_mark
					}
					oRatingText = ArrayOptFindByKey(docPA.TopElem.supplementary_questions,iRatingTextSupplementaryQuestionID,'supplementary_question_id')
					if(oRatingText!=undefined)
					{
						oScale = ArrayOptFindByKey(aRatingScale,oRatingText.supplementary_question_mark,'id')
						if(oScale!=undefined)
						{
							oListElem.tasksRatingBossText = oScale.name
						}
					}

                    docPlan = tools.open_doc(oPlan.id);
                    if (docPlan != undefined) {

						
                        oLogBossToEnd = ArrayOptFind(docPlan.TopElem.workflow_log_entrys, "This.begin_state == '3_end' && This.finish_state == '4_end'"); 
                        if (oLogBossToEnd != undefined) {
                            oListElem.bossToEndDate = oLogBossToEnd.create_date;
                        }
                        else {
                            oListElem.bossToEndDate = "";
                        }
                    }

                    arResult.push(oListElem);
                }
            }
        }
    }
    
    return arResult;
}


EnableLog(sLogName, true);

try {
    AlertLog("Формирование Отчета Ацино Рейтинги начато");
    arRes = main();
    AlertLog("Формирование Отчета Ацино Рейтинги завершено");
}
catch(e) {
    AlertLog(e);
    arRes = [];
}

EnableLog(sLogName, false);

return arRes;