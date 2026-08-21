1 counter++;

if (Trim('{[1]}')=="" ) {
    continueFlag=true;
}



2 counter++;

if (Trim('{[1]}')=="") {
    continueFlag=true;
}
else {
    if (Trim("{[2]}")=="") {
        alert("Этап 2 Строка "+counter+": Отсутствует обязательное поле 'Фамилия'.");
    }
    if (Trim("{[3]}")=="") {
        alert("Этап 2 Строка "+counter+": Отсутствует обязательное поле 'Имя'.");
    }
    if (Trim("{[7]}")=="") {
        alert("Этап 2 Строка "+counter+": Отсутствует обязательное поле 'E-mail'.");
    }
    if (Trim("{[9]}")=="") {
        alert("Этап 2 Строка "+counter+": Отсутствует обязательное поле 'Дата приема'.");
    }
    if (Trim("{[12]}")=="") {
        alert("Этап 2 Строка "+counter+": Отсутствует обязательное поле 'Логин'.");
    }
    var sStateID = "";
    switch (StrLowerCase(Trim("{[13]}"))) {
        case 'отпускпоуходузаребенком':
        case 'отпуск по уходу за ребенком':
            sStateID = 'child_care_leave';
            break;
        case 'отпускпобеременностииродам':
        case 'отпуск по беременности и родам':
            sStateID = 'maternity_leave';
            break;
        case 'трудовойдоговорприостановлен':
        case 'трудовой договор приостановлен':
            sStateID = 'contract_suspended';
            break;
        case 'увольнение':
            sStateID = 'dismissal';
            break;
    }
    if (sStateID != "") {
        if(OptDate(Trim('{[14]}')) != undefined) {
            oHistoryState = ArrayOptFind(curObject.history_states,"This.state_id=='" + sStateID + "' && DateDiff(OptDate(This.start_date),OptDate('" + Trim('{[14]}') + "')) == 0");
            if(oHistoryState == undefined)
            {
                oHistoryState = curObject.history_states.Add();
            }
            oHistoryState.state_id = sStateID;
            oHistoryState.start_date = OptDate(Trim('{[14]}'));
            if (DateDiff(Date(), OptDate(Trim('{[14]}'))) >= 0) {
                curObject.access.web_banned = true;
            }
            else {
                curObject.access.web_banned = false;
            }
            if (OptDate(Trim('{[15]}')) != undefined) {
                oHistoryState.finish_date = OptDate(Trim('{[15]}'));
                if ((DateDiff(Date(), OptDate(Trim('{[14]}'))) >= 0) && (DateDiff(Date(), OptDate(Trim('{[15]}'))) <= 0)) {
                    curObject.access.web_banned = true;
                }
                else {
                    curObject.access.web_banned = false;
                }
            }
        }
    }
    curObject.custom_elems.ObtainChildByKey("is_from_integration").value = true;  
}




3 counter++;

if (Trim('{[1]}')=="" ) {
    continueFlag=true;
}



4 counter++;

if (Trim('{[1]}')=="" ) {
    continueFlag=true;
}
else {
    if (Trim("{[2]}")=="") {
        alert("Этап 4 Строка "+counter+": Отсутствует обязательное поле 'Полное название организации'.");
    }
    if (Trim("{[4]}") != "") {
        oFuncManager = ArrayOptFirstElem(XQuery("for $elem in collaborators where $elem/code = '"+ Trim("{[4]}") +"' return $elem"));
        if (oFuncManager != undefined) {
            curObject.func_managers.ObtainChildByKey(OptInt(oFuncManager.id), "person_id").person_id = OptInt(oFuncManager.id);
            curObject.func_managers.ObtainChildByKey(OptInt(oFuncManager.id), "person_id").person_fullname = oFuncManager.fullname;
        }
    }
    else {
        curObject.func_managers.Clear();
    }
}
curObject.custom_elems.ObtainChildByKey("is_from_integration").value = true;



5 counter++;

if (Trim('{[1]}')=="" ) {
    continueFlag=true;
}
else {
    elem_Array = ArrayOptFirstElem(XQuery ("for $elem in orgs where $elem/code = '"+ Trim("{[8]}") +"' return $elem"));
    if (elem_Array == undefined) {
        alert("Этап 5 Строка "+counter+": Не найдена организация с кодом " + Trim("{[8]}"));
    }
}



6 counter++;

if (Trim('{[1]}')=="" ) {
    continueFlag=true;
}
else {
    if (Trim("{[2]}")=="") {
        alert("Этап 6 Строка "+counter+": Отсутствует обязательное поле 'Название подразделения'.");
    }
    if (Trim("{[5]}")=="") {
        alert("Этап 6 Строка "+counter+": Отсутствует обязательное поле 'Дата формирования'.");
    }
    if (Trim("{[8]}")=="") {
        alert("Этап 6 Строка "+counter+": Отсутствует обязательное поле 'Код организации'.");
    }
    elem_Array = ArrayOptFirstElem(XQuery("for $elem in orgs where $elem/code = '"+ Trim("{[8]}") +"' and $elem/code != '' return $elem"));
    if (elem_Array == undefined) {
        alert("Этап 6 Строка "+counter+": Не найдена организация с кодом " + Trim("{[8]}"));
    }
    if (Trim("{[3]}") != "") {
        elem_Array = ArrayOptFirstElem(XQuery("for $elem in subdivisions where $elem/code = '"+ Trim("{[3]}") +"' return $elem"));
        if (elem_Array != undefined) {
            curObject.parent_object_id = elem_Array.id;
        }
    }
    else {
        curObject.parent_object_id.Clear();
    }
    if (Trim("{[7]}") != "") {
        oFuncManager = ArrayOptFirstElem(XQuery("for $elem in collaborators where $elem/code = '"+ Trim("{[7]}") +"' return $elem"));
        if (oFuncManager != undefined) {
            curObject.func_managers.ObtainChildByKey(OptInt(oFuncManager.id), "person_id").person_id = OptInt(oFuncManager.id);
            curObject.func_managers.ObtainChildByKey(OptInt(oFuncManager.id), "person_id").person_fullname = oFuncManager.fullname;
        }
    }
    else {
        curObject.func_managers.Clear();
    }
}
curObject.custom_elems.ObtainChildByKey("is_from_integration").value = true;



7 counter++;

if (Trim('{[1]}')=="" || Trim('{[3]}')=="") {
    continueFlag=true;
}
else {
    elem_Array = ArrayOptFirstElem(XQuery("for $elem in subdivisions where $elem/code = '"+ Trim("{[7]}") +"' return $elem"));
    if ( elem_Array == undefined ) {
        alert("Этап 7 Строка "+counter+": Не найдено подразделение с кодом " + Trim("{[7]}"));
    }
    elem_Array = ArrayOptFirstElem(XQuery("for $elem in orgs where $elem/code = '"+ Trim("{[8]}") +"' return $elem"));
    if (elem_Array == undefined) {
        alert("Этап 7 Строка "+counter+": Не найдена организация с кодом " + Trim("{[8]}"));
    }
}



8 counter++;

if (Trim('{[1]}')=="" || Trim('{[3]}')=="") {
    continueFlag=true;
}
else {
    if (Trim("{[2]}")=="") {
        alert("Этап 8 Строка "+counter+": Отсутствует обязательное поле 'Название должности'.");
    }
    if (Trim("{[4]}")=="") {
        alert("Этап 8 Строка "+counter+": Отсутствует обязательное поле 'Основная должность'.");
    }
    if (Trim("{[5]}")=="") {
        alert("Этап 8 Строка "+counter+": Отсутствует обязательное поле 'Дата начала действия'.");
    }
    if (Trim("{[7]}")=="") {
        alert("Этап 8 Строка "+counter+": Отсутствует обязательное поле 'Код подразделения'.");
    }
    if (Trim("{[8]}")=="") {
        alert("Этап 8 Строка "+counter+": Отсутствует обязательное поле 'Код организации'.");
    }
    /* oPosition = ArrayOptFirstElem(XQuery("for $elem in positions where $elem/code = '"+ Trim("{[1]}") +"' return $elem"));
    if (oPosition == undefined) {
        continueFlag=true;
    } */
    oSubdivision = ArrayOptFirstElem(XQuery("for $elem in subdivisions where $elem/code = '"+ Trim("{[7]}") +"' and $elem/code != '' return $elem"));
    if (oSubdivision == undefined) {
        alert("Этап 8 Строка "+counter+": Не найдено подразделение с кодом " + Trim("{[7]}"));
    }
    oOrg = ArrayOptFirstElem( XQuery("for $elem in orgs where $elem/code = '"+ Trim("{[8]}") +"' and $elem/code != '' return $elem"));
    if (oOrg == undefined) {
        alert("Этап 8 Строка "+counter+": Не найдена организация с кодом " + Trim("{[8]}"));
    }
    if (StrLowerCase(Trim("{[4]}")) == 'да') {
        oCollaborator = ArrayOptFirstElem(XQuery("for $elem in collaborators where $elem/code = '"+ Trim("{[3]}") +"' and $elem/code != '' return $elem"));
        if (oCollaborator != undefined) {
            docCollaborator = tools.open_doc(oCollaborator.id);
            if (docCollaborator != undefined) {
                docCollaboratorTE = docCollaborator.TopElem;
                docCollaboratorTE.position_id = curObject.id;
                docCollaboratorTE.position_name = Trim("{[2]}");
                docCollaboratorTE.position_date = ((OptDate(Trim('{[5]}')) != undefined) ? OptDate(Trim('{[5]}')) : "");
                docCollaboratorTE.position_parent_id = oSubdivision.id;
                docCollaboratorTE.position_parent_name = oSubdivision.name;
                docCollaboratorTE.org_id = oOrg.id;
                docCollaboratorTE.org_name = oOrg.name;
                docCollaborator.Save();
            }
        }
    }
}
curObject.custom_elems.ObtainChildByKey("is_from_integration").value = true;



9 

counter++;

if (Trim('{[1]}')=="" || Trim('{[3]}')=="") {
    continueFlag=true;
}
else {
    elem_Array = ArrayOptFirstElem(XQuery("for $elem in subdivisions where $elem/code = '"+ Trim("{[7]}") +"' return $elem"));
    if ( elem_Array == undefined ) {
        alert("Этап 7 Строка "+counter+": Не найдено подразделение с кодом " + Trim("{[7]}"));
    }
    elem_Array = ArrayOptFirstElem(XQuery("for $elem in orgs where $elem/code = '"+ Trim("{[8]}") +"' return $elem"));
    if (elem_Array == undefined) {
        alert("Этап 7 Строка "+counter+": Не найдена организация с кодом " + Trim("{[8]}"));
    }
    docCollaborator = tools.open_doc(curObject.basic_collaborator_id);
    if (docCollaborator != undefined) {
        sBossPositionCode = Trim("{[9]}")
        iBossTypeID = 7577754918678206799 // Непосредственный руководитель (из интеграции)
        if (!IsEmptyValue(sBossPositionCode)) {
            aBossPosition = ArraySelectAll(XQuery("for $elem in positions where contains($elem/code, '"+ sBossPositionCode +"') return $elem"));
            oBossPosition = undefined;
            for (oBossPos in aBossPosition) {
                docCollBoss = tools.open_doc(oBossPos.basic_collaborator_id);
                if (docCollBoss != undefined && !tools_web.is_true(docCollBoss.TopElem.is_dismiss)) {
                    oBossPosition = oBossPos;
                    break;
                }
            }
            if (oBossPosition != undefined) {
                oCurManager = docCollaborator.TopElem.func_managers.ObtainChildByKey(OptInt(iBossTypeID), "boss_type_id")
                oCurManager.boss_type_id = iBossTypeID;
                oCurManager.person_id = OptInt(oBossPosition.basic_collaborator_id);
                oCurManager.person_fullname = String(oBossPosition.basic_collaborator_fullname);
                docCollaborator.Save();
            }
            else
            {
                alert("Этап 7 Строка "+counter+": Не удалось найти руководителя с кодом '"+sBossPositionCode+"'.");
            }
        }
        else {
            docCollaborator.TopElem.func_managers.DeleteOptChildByKey(OptInt(iBossTypeID), "boss_type_id")
            docCollaborator.Save();
        }
    }
}


9 ПОСТ

_REPORT += "ID сотрудников, которые должны быть удалены вручную:\n";
aAllCollaborators = ArraySelectAll(XQuery("for $elem in collaborators return $elem"));
if (ArrayOptFirstElem(aAllCollaborators) != undefined) {
    for (oCollaborator in aAllCollaborators) {
        docCollaborator = tools.open_doc(oCollaborator.id);
        if (docCollaborator != undefined) {
            isFromIntegration = docCollaborator.TopElem.custom_elems.ObtainChildByKey("is_from_integration").value;
            if (tools_web.is_true(isFromIntegration)) {
                if (ArrayOptFind(aIntegrationCollaborators, "This == '" + String(docCollaborator.TopElem.code) + "'") == undefined) {
                    _REPORT += " " + oCollaborator.id + "\n";
                }
            }
        }
    }
}



10 

if (Trim('{[1]}')=="" ) {
    continueFlag=true;
}
else {
    aIntegrationOrgs.push(Trim('{[1]}'));
}


10 ПОСТ

_REPORT += "ID организаций, которые должны быть удалены вручную:\n";
aAllOrgs = ArraySelectAll(XQuery("for $elem in orgs return $elem"));
if (ArrayOptFirstElem(aAllOrgs) != undefined) {
    for (oOrg in aAllOrgs) {
        docOrg = tools.open_doc(oOrg.id);
        if (docOrg != undefined) {
            isFromIntegration = docOrg.TopElem.custom_elems.ObtainChildByKey("is_from_integration").value;
            if (tools_web.is_true(isFromIntegration)) {
                if (ArrayOptFind(aIntegrationOrgs, "This == '" + String(docOrg.TopElem.code) + "'") == undefined) {
                    _REPORT += " " + oOrg.id + "\n";
                }
            }
        }
    }
}



11 

if (Trim('{[1]}')=="" ) {
    continueFlag=true;
}
else {
    aIntegrationSubdivisions.push(Trim('{[1]}'));
}


11 ПОСТ

_REPORT += "ID подразделений, которые должны быть удалены вручную:\n";
aAllSubdivisions = ArraySelectAll(XQuery("for $elem in subdivisions return $elem"));
if (ArrayOptFirstElem(aAllSubdivisions) != undefined) {
    for (oSubdivision in aAllSubdivisions) {
        docSubdivision = tools.open_doc(oSubdivision.id);
        if (docSubdivision != undefined) {
            isFromIntegration = docSubdivision.TopElem.custom_elems.ObtainChildByKey("is_from_integration").value;
            if (tools_web.is_true(isFromIntegration)) {
                if (ArrayOptFind(aIntegrationSubdivisions, "This == '" + String(docSubdivision.TopElem.code) + "'") == undefined) {
                    _REPORT += " " + oSubdivision.id + "\n";
                }
            }
        }
    }
}



12 

if (Trim('{[1]}')=="" ) {
    continueFlag=true;
}
else {
    aIntegrationPositions.push(Trim('{[1]}'));
}


12 ПОСТ

_REPORT += "ID должностей, которые должны быть удалены вручную:\n";
aAllPositions = ArraySelectAll(XQuery("for $elem in positions return $elem"));
if (ArrayOptFirstElem(aAllPositions) != undefined) {
    for (oPosition in aAllPositions) {
        docPosition = tools.open_doc(oPosition.id);
        if (docPosition != undefined) {
            isFromIntegration = docPosition.TopElem.custom_elems.ObtainChildByKey("is_from_integration").value;
            if (tools_web.is_true(isFromIntegration)) {
                if (ArrayOptFind(aIntegrationPositions, "This == '" + String(docPosition.TopElem.code) + "'") == undefined) {
                    _REPORT += " " + oPosition.id + "\n";
                }
            }
        }
    }
}