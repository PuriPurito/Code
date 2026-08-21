//Кнопка 1_approval - Отправить на согласование
RELOAD_PA = true;

iPlanID = curObject.id;
oPa = ArrayOptFirstElem(XQuery("for $elem in pas where assessment_plan_id="+iPlanID+" and assessment_appraise_type='staffrating' return $elem"));
if(oPa!=undefined)
{
    docPa =tools.open_doc(oPa.id);
    if(docPa!=undefined)
    {
        oWfErrors = docPa.TopElem.custom_elems.GetOptChildByKey("wf_errors");
        if(oWfErrors!=undefined)
        {
            if(!IsEmptyValue(oWfErrors.value))
            {
                sError = String(oWfErrors.value);
                BRUTE_MESSAGE = "Цели не будут отправлены на согласование. Пожалуйста, проверьте корректность внесенных данных и попробуйте снова.";
                WORKFLOW_ACTION_BREAK = true;
            }
        }
        bIsDone = docPa.TopElem.is_done;
        if (!bIsDone)
        {
            BRUTE_MESSAGE = "Пожалуйста, добавьте цели!";
            WORKFLOW_ACTION_BREAK = true;
        }
    }
}

//Кнопка 2_return - Вернуть на доработку
RELOAD_PA = true;

iPlanID = curObject.id;
oPa = ArrayOptFirstElem(XQuery("for $elem in pas where assessment_plan_id="+iPlanID+" and assessment_appraise_type='staffrating' return $elem"));
if(oPa!=undefined)
{    
    docPa =tools.open_doc(oPa.id);
    if(docPa!=undefined)
    {
        if (ArrayOptFind(docPa.TopElem.custom_comments, ("(This.person_id == " + docPa.TopElem.expert_person_id + ") && (This.workflow_state == '2')")) == undefined)
        {
                BRUTE_MESSAGE = "Пожалуйста, добавьте комментарий!";
                WORKFLOW_ACTION_BREAK = true;
        }
    }
}

//Кнопка 4_approval - Отправить на согласование
RELOAD_PA = true;

iPlanID = curObject.id;
oPa = ArrayOptFirstElem(XQuery("for $elem in pas where assessment_plan_id="+iPlanID+" and assessment_appraise_type='staffrating' return $elem"));
if(oPa!=undefined)
{
    docPa =tools.open_doc(oPa.id);
    if(docPa!=undefined)
    {
        bIsDone = docPa.TopElem.is_done;
        if (!bIsDone)
        {
            BRUTE_MESSAGE = "Пожалуйста, укажите фактический результат.";
            WORKFLOW_ACTION_BREAK = true;
        }
    }
}

//Кнопка 5_return - Вернуть на доработку
RELOAD_PA = true;

iPlanID = curObject.id;
oPa = ArrayOptFirstElem(XQuery("for $elem in pas where assessment_plan_id="+iPlanID+" and assessment_appraise_type='staffrating' return $elem"));
if(oPa!=undefined)
{    
    docPa =tools.open_doc(oPa.id);
    if(docPa!=undefined)
    {
        if (ArrayOptFind(docPa.TopElem.custom_comments, ("(This.person_id == " + docPa.TopElem.expert_person_id + ") && (This.workflow_state == '5')")) == undefined)
        {
                BRUTE_MESSAGE = "Пожалуйста, добавьте комментарий!";
                WORKFLOW_ACTION_BREAK = true;
        }
    }
}