EnableLog('ca_log_tamplates',true);
LogEvent('ca_log_tamplates',"curPa : "+curPA.id);

oData.data.config = new Object();
oData.data.config.btn_users = true;
oData.data.config.btn_objectives = false;
oData.data.config.btn_logs = true;
oData.data.config.btn_iframe = true;
oData.data.config.wf_btn_position = "bottom";

_curAP = curPA.assessment_plan_id.OptForeignElem;
_phase = _curAP.workflow_state.Value;
_phase_global = String(_phase).split("_")[0];
_phase_owner = (String(_phase).split("_")[1] != undefined) ? String(_phase).split("_")[1] : 'none';

try {
    aa_doc = tools.open_doc(OptInt(curPA.assessment_appraise_id,0));
    goal_setting_start = DateNewTime(OptDate(aa_doc.TopElem.custom_elems.ObtainChildByKey("goal_setting_start").value,null));        
    goal_setting_end = DateNewTime(OptDate(aa_doc.TopElem.custom_elems.ObtainChildByKey("goal_setting_end").value,null));
    goal_adjustment_start = DateNewTime(OptDate(aa_doc.TopElem.custom_elems.ObtainChildByKey("goal_adjustment_start").value,null));
    goal_adjustment_end = DateNewTime(OptDate(aa_doc.TopElem.custom_elems.ObtainChildByKey("goal_adjustment_end").value,null));
    goal_assessment_start = DateNewTime(OptDate(aa_doc.TopElem.custom_elems.ObtainChildByKey("goal_assessment_start").value,null));
    goal_assessment_end = DateNewTime(OptDate(aa_doc.TopElem.custom_elems.ObtainChildByKey("goal_assessment_end").value,null));

    switch (_phase_global) {
        case '1':
            oData.data.config.assessment_start_date = goal_setting_start;
            oData.data.config.assessment_end_date = goal_setting_end;
            break;

        case '2':
            oData.data.config.assessment_start_date = goal_adjustment_start;
            oData.data.config.assessment_end_date = goal_adjustment_end;
            break;

        case '3':
            oData.data.config.assessment_start_date = goal_assessment_start;
            oData.data.config.assessment_end_date = goal_assessment_end;
            break;

            default:
        break;
    }

} catch (error) {
    
}




_isPerson = (curPersonID == curPA.person_id);
_isBoss = (curPersonID == _curAP.boss_id);
_isExpert = (ArrayOptFind(curPA.custom_experts, "This.person_id == " + curPersonID) != undefined);
_isComment = (_phase_owner == 'person' && _isPerson) || (_phase_owner == 'boss' && _isBoss);

curWorkflow = obtainTEFromCache(curPA.workflow_id, "workflow"); //получем документооборот

oData.data.dataset = new Object();  
oData.data.dataset.workflow = ({"states":[]});

for (_state in curWorkflow.states)
{
    _state_global = String(_state.code).split("_")[0];
    _state_owner = (String(_state.code).split("_")[1] != undefined) ? String(_state.code).split("_")[1] : 'none';

    if(_phase_global==_state_global) 
    {
        if(ArrayOptFirstElem(curPA.custom_experts) != undefined || _state_owner != 'expert')
        {
            oData.data.dataset.workflow.states.push({
                id:_state.code.Value,
                name: _state.name.Value,
                title: _state.name.Value
            });
        }
    }
}


if (!oData.data.HasProperty("wfparameters") || IsEmptyValue(oData.data.wfparameters)) 
{
    oData.data.wfparameters = new Object();
    oData.data.wfparameters.buttons = [];
} 
else 
{    
    oData.data.wfparameters.buttons = [];
}

var comment_button_name = "Комментарий";
if (ArrayOptFind(curPA.custom_comments,"This.person_id == " + curPersonID + " && This.workflow_state == '" + _phase + "'") == undefined)
{
    comment_button_name = "Оставить комментарий";
} 
else
{
    comment_button_name = "Редактировать комментарий";
}
if (_phase_global == '3')
{
    comment_button_name = StrReplace(comment_button_name,"комментарий", "итоговый комментарий")
}
    
oData.data.wfparameters.buttons.push({action:"comment", title:comment_button_name, position:"footer", visible: _isComment, class:"no-icon"});

if ( oData.data.HasProperty("wfbuttons") )
{
    for (_wfb in oData.data.wfbuttons)
    {
        _wfb.comment_require = false;
        _wfb.confirm_msg = "Вы переводите форму на следующий этап, она станет недоступной для Вашего редактирования. Продолжить?";
        
        if (_wfb.code != '2_start_to_person' && _wfb.code != '12_boss_to_3' && _wfb.code != 'agree_person_marks' && _wfb.code != '2_cancel' && !StrContains(_wfb.code, '_person_to_person'))
        {            
            _wfb.class = "to-right";
        }
        else
        {
            oData.data.config.wf_btn_position = "top";
        }

        if ( StrContains(_wfb.code, 'hidden') )
        {            
            _wfb.class = "element-hidden";
        }

        add_class = '';
        if ( StrContains(_wfb.code, '_person_to_boss') || StrContains(_wfb.code, '_boss_to_end') )
        {            
            add_class = 'next-btn';
            _wfb.confirm_msg = null;
        }
        else if (StrContains(_wfb.code, '_boss_to_person'))
        {
            add_class = 'back-btn';        
            if(!oData.data.HasProperty('comment') || IsEmptyValue(oData.data.comment))
            {
                _wfb.confirm_msg = null;
            } 
            else
            {
                _wfb.confirm_msg = "Вы переводите форму на этап сотрудника, она станет недоступной для Вашего редактирования. Продолжить?";
            }      
        }
        if(_wfb.HasProperty('class')) 
            _wfb.class = _wfb.class + ' ' + add_class;
        else
            _wfb.class = add_class;
        
        if ( StrContains(_wfb.code, '_person_to_') )
        {            
            if(_wfb.HasProperty('class')) 
                _wfb.class = _wfb.class + " person-btn";
        }

        switch (_wfb.code) {
            case '2_start_to_person':
                _wfb.confirm_msg = "Форма перейдет на этап «Корректировка целей». Продолжить?";
                break;  
            case 'change_boss':
                _wfb.confirm_msg = "Отправить уведомление администратору о том, что "+curPA.person_id.OptForeignElem.fullname+" не является Вашим сотрудником?";
                _wfb.class = "change-boss-btn";
                break;  
            case 'next_button':
            case 'next_button2':  
                _wfb.confirm_msg = null;
                _wfb.class = "next-btn to-right";                  
                break;  
            case '1_person_to_person':
                _wfb.confirm_msg = "Форма будет возвращена на этап «Постановка целей сотрудником». Продолжить?";
                break;
            case '2_person_to_person':
                _wfb.confirm_msg = "Форма будет возвращена на этап «Корректировка целей сотрудником». Продолжить?";
                break;  
            case '3_person_to_person':
                _wfb.confirm_msg = "Форма будет возвращена на этап «Самооценка сотрудника». Продолжить?";
                break;   
            case '2_cancel':
                _wfb.confirm_msg = "Вы отменяете корректировку целей. Внесенные изменения не будут сохранены. Продолжить?";
                break;  
            case 'agree_person_marks':
                _wfb.position = "bottom";
                _wfb.class = "agree-btn";
                _wfb.confirm_msg = "Вы принимаете оценки сотрудника. Продолжить?";                
                break;                        
            default:
                break;
        }
    }
}

 _jquery = "<script> \
 $('.wt-area .wt-pa-header-title').html('Оценочная форма'); \
 $('button.wt-a-flow-btn').click(function(){ \
    setTimeout(function() { \
        $('div[wta-comment-form=\"1\"] div.wt-appr-comment-body textarea.wt-appr-comment-textarea').focus(); \
    },0); \
 }); \
 $('.wt-a-user-info-container .wt-a-user-info-item[wt-type=\"expert\"] span[wt-role=\"string-expert\"]').html('Согласующий руководитель:'); \
 $('.wt-a-user-info-type[wt-role=\"user-type\"] span[wt-role=\"string-expert\"]').html('Согласующий руководитель:'); \
 $('.wt-a-alert-dialog.ui-dialog-content').bind('DOMSubtreeModified',function() { \
    alertModal = $(\".wt-a-alert-dialog.ui-dialog-content .wt-a-alert-text\") \
    alertHtml  = alertModal.html() \
if(alertHtml.indexOf('«')==-1 && alertHtml.indexOf('Вы не заполнили обязательн')!=-1) \
{ \
    arrAlert = alertHtml.split('<br>') \
    newArrAlert = [] \
    i=0 \
    jQuery.each(arrAlert,(i,item)=>{ \
        if(i!=0)newArrAlert.push('<br>«'+item+'»') \
        else newArrAlert.push(item) \
    }) \
    alertModal.html((newArrAlert)) \
} \
if(alertHtml.indexOf('Выбранная задача/цель')!=-1) \
{ \
    alertModal.html('Выбранная цель будет удалена без возможности восстановления. Продолжить?') \
}})  \
 </script>"; 
 oData.data.wfcomment = _jquery;
 oData.data.wfcomment_class = 'element-hidden';


// проверка доступа к редактированию форм по датам периодов, 
// указанным в карточке процедуры оценки
function checkAssessmentDates (aa_doc) 
{
    var res;

    try {

        res = false;

        if (aa_doc.TopElem != undefined)
        {            
            global_wf_state = aa_doc.TopElem.custom_elems.ObtainChildByKey("global_wf_state").value;  

            goal_setting_start = DateNewTime(OptDate(aa_doc.TopElem.custom_elems.ObtainChildByKey("goal_setting_start").value,null));        
            goal_setting_end = DateNewTime(OptDate(aa_doc.TopElem.custom_elems.ObtainChildByKey("goal_setting_end").value,null));
            goal_adjustment_start = DateNewTime(OptDate(aa_doc.TopElem.custom_elems.ObtainChildByKey("goal_adjustment_start").value,null));
            goal_adjustment_end = DateNewTime(OptDate(aa_doc.TopElem.custom_elems.ObtainChildByKey("goal_adjustment_end").value,null));
            goal_assessment_start = DateNewTime(OptDate(aa_doc.TopElem.custom_elems.ObtainChildByKey("goal_assessment_start").value,null));
            goal_assessment_end = DateNewTime(OptDate(aa_doc.TopElem.custom_elems.ObtainChildByKey("goal_assessment_end").value,null));

            if ( (DateNewTime(Date())>=goal_setting_start && DateNewTime(Date())<=goal_setting_end) ||
            (DateNewTime(Date())>=goal_adjustment_start && DateNewTime(Date())<=goal_adjustment_end) ||
            (DateNewTime(Date())>=goal_assessment_start && DateNewTime(Date())<=goal_assessment_end) )
            {
                res = true;
            } 
        }
        
    } catch (error) {
        LogEvent('ca_log_tamplates','caLibAssessment (checkAssessmentDates) error: '+error);
        res = false;
    }

    return tools_web.is_true(res);
}

if (!checkAssessmentDates (aa_doc))
{
    oData.data.editable = false;
}

LogEvent('ca_log_tamplates','Общий шаблон завершил работу');