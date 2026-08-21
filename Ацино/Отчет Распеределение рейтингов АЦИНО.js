var sLogName = "acino_report_log";

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

function main() {
	var iAssessmentAppraise = OptInt("{PARAM1}", 0);
	var iSubdivisionID = OptInt("{PARAM2}", 0);
	var iPositionName = String("{PARAM3}");
	var iFuncManagerParamID = OptInt("{PARAM4}", 0);
	var iNextFuncManagerParamID = OptInt("{PARAM5}", 0);

	iRatingRealSupplementaryQuestionID = OptInt("6986182129816429799")
	aQueryCondition = ['is_dismiss = false()']
	if (iSubdivisionID != 0)
		aQueryCondition.push('position_parent_id = ' + iSubdivisionID)
	if (iPositionName != '')
	{
		aPositions = ArraySelectAll(XQuery('for $elem in positions where contains(name,'+iPositionName+') return $elem'))
		aQueryCondition.push('MatchSome(position_id,'+ArrayMerge(aPositions,"This.id",',')+')')

	}
	aCollaborators = ArraySelectAll(XQuery('for $elem in collaborators where ' + aQueryCondition.join(' and ') + ' return $elem'));
	aFilteredCollaborators = []
	if (iFuncManagerParamID != 0 || iNextFuncManagerParamID != 0) {
		for (oCollaborator in aCollaborators) {
			if (iFuncManagerParamID != 0 && iNextFuncManagerParamID != 0) {
				iFuncManager = fGetCollaboratorManager(oCollaborator.id, aPerfomanceGroups, false)
				iNextFuncManager = fGetCollaboratorManager(oCollaborator.id, aPerfomanceGroups, true)

				if (iFuncManager == iFuncManagerParamID && iNextFuncManager == iNextFuncManagerParamID) {
					aFilteredCollaborators.push(oCollaborator)
				}
			}
			else if (iFuncManagerParamID != 0) {
				iFuncManager = fGetCollaboratorManager(oCollaborator.id, aPerfomanceGroups, false)
				if (iFuncManager == iFuncManagerParamID) {
					aFilteredCollaborators.push(oCollaborator)
				}
			}
			else if (iNextFuncManagerParamID != 0) {
				iNextFuncManager = fGetCollaboratorManager(oCollaborator.id, aPerfomanceGroups, true)
				if (iNextFuncManager == iNextFuncManagerParamID) {
					aFilteredCollaborators.push(oCollaborator)
				}
			}
		}
	}
	else {
		aFilteredCollaborators = ArraySelectAll(aCollaborators)
	}
	var aPlans = ArraySelectAll(XQuery('for $elem in assessment_plans where MatchSome(person_id,' + ArrayMerge(aFilteredCollaborators, "OptInt(This.id)", ',') + ') and assessment_appraise_id = ' + iAssessmentAppraise + ' return $elem'));
	var arPAs = ArraySelectAll(XQuery("for $elem in pas where assessment_appraise_id = " + iAssessmentAppraise + " and assessment_appraise_type = 'staffrating' return $elem"));
	arResult = []
/* 	arResult = [
		{ PrimaryKey: 1, rating: 1, coll_count: 0, rating_percent: 0 },
		{ PrimaryKey: 2, rating: 2, coll_count: 0, rating_percent: 0 },
		{ PrimaryKey: 3, rating: 3, coll_count: 0, rating_percent: 0 },
		{ PrimaryKey: 4, rating: 4, coll_count: 0, rating_percent: 0 },
		{ PrimaryKey: 5, rating: 5, coll_count: 0, rating_percent: 0 }
	] */

	/* for (oPlan in aPlans) {
		oPA = ArrayOptFindByKey(arPAs, oPlan.person_id, "person_id");
		if (oPA != undefined) {
			docPA = tools.open_doc(oPA.id);
			oRatingReal = ArrayOptFindByKey(docPA.TopElem.supplementary_questions, iRatingRealSupplementaryQuestionID, 'supplementary_question_id')
			if (oRatingReal != undefined) {
				if (OptReal(oRatingReal.supplementary_question_mark) != undefined) {
					oCurRatingElem = ArrayOptFindByKey(arResult, Math.round(OptReal(oRatingReal.supplementary_question_mark)), "rating");
					if (oCurRatingElem != undefined) {
						oCurRatingElem.coll_count++;
					}
				}
			}

		}
	}
	for (oResult in arResult) {
		if (oResult.coll_count != 0) {
			oResult.rating_percent = (OptInt(oResult.coll_count) / ArrayCount(aPlans)) * 100;
		}
	} */
	iPlanCounts = ArrayCount(aPlans)
	j=0
	for (oPlan in aPlans) {
		oListElem = new Object()
		oPA = ArrayOptFindByKey(arPAs, oPlan.person_id, "person_id");
		if (oPA != undefined) {
			docPA = tools.open_doc(oPA.id);
			oListElem.PrimaryKey = OptInt(oPA.id)
			oRatingReal = ArrayOptFindByKey(docPA.TopElem.supplementary_questions, iRatingRealSupplementaryQuestionID, 'supplementary_question_id')
			if (oRatingReal != undefined) {
				if (OptReal(oRatingReal.supplementary_question_mark) != undefined) {
					oListElem.rating = Math.round(OptReal(oRatingReal.supplementary_question_mark))
					oListElem.coll_count = 1
					oListElem.rating_percent = (OptReal(1) / OptReal(iPlanCounts)) * 100;
					arResult.push(oListElem)
				}
				else
				{
					oListElem.rating = 'Без рейтинга'
					oListElem.coll_count = 0
					oListElem.rating_percent = (OptReal(1) / OptReal(iPlanCounts)) * 100;
					arResult.push(oListElem)
					j++
				}
			}
			else
			{
				oListElem.rating = 'Без рейтинга'
				oListElem.coll_count = 0
				oListElem.rating_percent = (OptReal(1) / OptReal(iPlanCounts)) * 100;
				arResult.push(oListElem)
				j++
			}

		}
	}
	for(oRes in arResult)
	{
		if(oRes.rating=='Без рейтинга')
			oRes.coll_count = j
	}
	for(var i=1;i<6;i++)
	{
		if(ArrayOptFindByKey(arResult,i,'rating')==undefined)
		{
			oListElem = new Object()
			oListElem.PrimaryKey = i
			oListElem.rating = i
			oListElem.coll_count = 0
			oListElem.rating_percent = 0
			arResult.push(oListElem)
		}
	}
	ArraySort(arResult,"This.rating",'+')
	return arResult;
}


EnableLog(sLogName, true);

try {
	AlertLog("Формирование Отчета Ацино Распределение рейтингов начато");
	arRes = main();
	AlertLog("Формирование Отчета Ацино Распределение рейтингов завершено");
}
catch (e) {
	AlertLog(e);
	arRes = [];
}

EnableLog(sLogName, false);

return arRes;