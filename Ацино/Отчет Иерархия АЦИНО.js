var sLogName = "acino_report_log";
var iAssessmentAppraise = OptInt("{PARAM1}", 0);
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
	if (docSubdivision != undefined) {
		teSubdivision = docSubdivision.TopElem;
		oListElem.subdivision = String(teSubdivision.name);
	}
	oFuncManager = ArrayOptFindByKey(aCollaborators, OptInt(fGetCollaboratorManager(teCollaborator.id, aPerfomanceGroups, false)), 'id')
	if (oFuncManager != undefined) {
		oListElem.funcManager = String(oFuncManager.fullname);
	}
	iNextFuncManager = fGetCollaboratorManager(teCollaborator.id, aPerfomanceGroups, true)
	oNextFuncManager = ArrayOptFindByKey(aCollaborators, OptInt(fGetCollaboratorManager(teCollaborator.id, aPerfomanceGroups, true)), 'id')
	if (oNextFuncManager != undefined) {
		oListElem.parentFuncManager = String(oNextFuncManager.fullname);
	}
	return oListElem;
}


function main() {
    var docAssessmentAppraise = tools.open_doc(iAssessmentAppraise);
        if (docAssessmentAppraise != undefined) {
            var oListElem;
            for (oPA in arPAs) {
                docPA = tools.open_doc(oPA.id);
                if (docPA != undefined) { 
                    tePA = docPA.TopElem;
                    oListElem = new Object();

                    oListElem.PrimaryKey = OptInt(oPA.id);
                    docCollaborator = tools.open_doc(tePA.person_id);
                    if (docCollaborator != undefined) {
                        oListElem = GetHierarchy(docCollaborator, oListElem);
						oListElem.hireDate = OptDate(docCollaborator.TopElem.hire_date)!=undefined ? OptDate(docCollaborator.TopElem.hire_date) : ''
                    }
                    arResult.push(oListElem);
                }
            }
        }
    
    return arResult;
}


EnableLog(sLogName, true);

try {
    AlertLog("Формирование Отчета Ацино Иерархия начато");
    arRes = main();
    AlertLog("Формирование Отчета Ацино Иерархия завершено");
}
catch(e) {
    AlertLog(e);
    arRes = [];
}

EnableLog(sLogName, false);

return arRes;