var sLogName = String(Param.sLogName);
var bLogActive = tools_web.is_true(Param.isLogActive);

function AlertLog(sText) {
    LogEvent(sLogName, sText);
    return;
}

function gettingFullSubdivisionsTree (iSubdivisionId) {
        var docCurSubdivision = tools.open_doc(iSubdivisionId);
        if (docCurSubdivision!=undefined) {
            if (OptInt(docCurSubdivision.TopElem.parent_object_id)!=undefined) {
                gettingFullSubdivisionsTree(docCurSubdivision.TopElem.parent_object_id);
            }
            var arCurSubdivisionFM = docCurSubdivision.TopElem.func_managers;
            for (funcManager in arCurUserFM) {
                if (ArrayOptFind(arCurSubdivisionFM, (("OptInt(This.person_id) == " + OptInt(funcManager.person_id)) + " && OptInt(This.boss_type_id) == " + OptInt(funcManager.boss_type_id))) == undefined) {
                    newFuncManager = arCurSubdivisionFM.InsertChild(0);
                    newFuncManager.person_id = funcManager.person_id;
                    newFuncManager.boss_type_id = sHyerarhyBossTypeId;
                    newFuncManager.person_fullname = String(funcManager.person_fullname);
                }
            }
            arSubdivisionsTree.push(docCurSubdivision.TopElem.id + " - " + docCurSubdivision.TopElem.name);
            docCurSubdivision.Save();
        }
        return; 
    }

function main() {
    var iCurUserId = OptInt(Param.sCurUserId);
    var docCurUser = tools.open_doc(iCurUserId);
    var arCurUserFM = docCurUser.TopElem.func_managers;
    var sHyerarhyBossTypeId = OptInt(Param.sHyerarhyBossTypeID);
    var arSubdivisionsTree = [];

    var arCurUserPosition = ArrayOptFirstElem(XQuery("for $elem in positions where basic_collaborator_id = " + iCurUserId + " return $elem"));
    
    gettingFullSubdivisionsTree(OptInt(arCurUserPosition.parent_object_id));
    
    AlertLog(arSubdivisionsTree.join("\n"));
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