_is_done = true;
_alert_txt = "";
_info_txt = "";
_total =0;
_task_id_problem = "";
//текущий этап
_phase = curPA.assessment_plan_id.OptForeignElem.workflow_state.Value;
//даты действия процедуры
aa_start_date = curPA.assessment_appraise_id.OptForeignElem.start_date;
aa_end_date = curPA.assessment_appraise_id.OptForeignElem.end_date;
function HtmlToPlainTextCustom(sText)
{
    sRes =''
    sText = String(sText)
    if(sText!=undefined && sText!='')
    {
        sRes = StrReplace(HtmlToPlainText(StrReplace(String(sText),'\n','\\n')),'\\n','\n')
    }
    return sRes
}
if (oData.data.HasProperty("objectives"))
{
	for (_o in oData.data.objectives)
	{
        if (OptDate(_o.date_plan.value) == undefined)
        {
            _is_done = false;
            _info_txt += "<li>Для цели &#171;"+_o.name.value+"&#187; не установлен срок исполнения. Необходимо указать дату в текущем году.</li>";
            _alert_txt += "<li>Для цели &#171;"+_o.name.value+"&#187; не установлен срок исполнения. Необходимо указать дату в текущем году.</li>";
            _task_id_problem = _o.id;
        }
        else if (Year(OptDate(_o.date_plan.value)) != Year(OptDate(aa_start_date)) )
        {
            _is_done = false;
            _info_txt += "<li>Для цели &#171;"+_o.name.value+"&#187; установлен срок исполнения <b>"+DateNewTime(OptDate(_o.date_plan.value))+"</b>. Необходимо указать дату в текущем году.</li>";
            _alert_txt += "<li>Для цели &#171;"+_o.name.value+"&#187; установлен срок исполнения <b>"+DateNewTime(OptDate(_o.date_plan.value))+"</b>. Необходимо указать дату в текущем году.</li>";
            _task_id_problem = _o.id;
        }

        if (!IsEmptyValue(_o.is_deleted.value))
        {
            if (OptInt(_o.weight.value) != 0)
            {
                _o.weight.value = 0;
                LogEvent('ca_log_tamplates','Вес удаленной цели \"'+_o.name.value+'\" ('+_o.id+') был приведен к 0.');        
            }            
        }
        else if (OptInt(_o.weight.value) == 0)
        {
            _is_done = false;
            _info_txt += "<li>Необходимо установить вес для цели &#171;"+_o.name.value+"&#187;</li>";
            _alert_txt += "<li>Необходимо установить вес для цели &#171;"+_o.name.value+"&#187;</li>";
            _task_id_problem = _o.id;
            _o.weight.value = null;
        }
        // проверка на соответствие шагу в 5%
        if (OptInt(_o.weight.value,0) % 5 !=0)
        {
            //_is_done = false;
            //_alert_txt += "<li>Вес цели &#171;"+_o.name.value+"&#187; = <b>"+_o.weight.value+"</b>. Значение должно быть кратным 5%. Необходимо скорректировать веса.</li>";
            if (OptInt(_o.weight.value,0) < 5)
            {
                new_value = 5;
            }
            else
            {
                new_value = OptInt(_o.weight.value,0) - (OptInt(_o.weight.value,0) % 5); 
            }
            _info_txt += "<li>Вес цели &#171;"+_o.name.value+"&#187; был округлен до значения <b>"+new_value+"</b>, т.к. значение должно быть кратным 5%.</li>";
            _o.weight.value = new_value;
            docPA.TopElem.tasks.ObtainChildByKey(OptInt(_o.id)).weight = new_value;
        }
        _total += OptInt(_o.weight.value,0);
        //_alert_txt += "<li>_is_done = "+_is_done+"</li>";

        if (_phase == '3_person' && IsEmptyValue(_o.task_mrk_person.value) && IsEmptyValue(_o.is_deleted.value) )
        {
            _is_done = false;
            _alert_txt += "<li>Не заполнена оценка по цели «"+_o.name.value+"»</li>";
        }
        if (_phase == '3_boss' && IsEmptyValue(_o.task_mrk_manager.value) && IsEmptyValue(_o.is_deleted.value) )
        {
            _is_done = false;
            _alert_txt += "<li>Не заполнена оценка по цели «"+_o.name.value+"»</li>";
        }

        _t_doc = tools.open_doc(OptInt(_o.id,0));
        _t_need_save = false;

        /* if (!IsEmptyValue(_o.set_name.value)) 
        {
            _o.set_name.value = HtmlToPlainTextCustom(_o.set_name.value);
            _t_doc.TopElem.custom_fields.ObtainChildByKey("set_name").value = HtmlToPlainTextCustom(_o.set_name.value);
            _t_need_save = true;            
        }
 */
        if (!IsEmptyValue(_o.name.value)) 
        {
            _o.name.value = HtmlToPlainTextCustom(_o.name.value);
            _t_doc.TopElem.name = HtmlToPlainTextCustom(_o.name.value);
            _t_need_save = true;            
        }

        /* if (!IsEmptyValue(_o.set_desc.value)) 
        {
            _o.set_desc.value = HtmlToPlainTextCustom(_o.set_desc.value);
            _t_doc.TopElem.custom_fields.ObtainChildByKey("set_desc").value = HtmlToPlainTextCustom(_o.set_desc.value);
            _t_need_save = true;            
        } */

        if (!IsEmptyValue(_o.desc.value)) 
        {
            _o.desc.value = HtmlToPlainTextCustom(_o.desc.value);
            _t_doc.TopElem.desc = HtmlToPlainTextCustom(_o.desc.value);
            _t_need_save = true;            
        }

        if (!IsEmptyValue(_o.task_comment_person.value)) 
        {
            _o.task_comment_person.value = HtmlToPlainTextCustom(_o.task_comment_person.value);
            _t_doc.TopElem.custom_fields.ObtainChildByKey("task_comment_person").value = HtmlToPlainTextCustom(_o.task_comment_person.value);
            _t_need_save = true;            
        }

        if (!IsEmptyValue(_o.task_comment_boss.value)) 
        {
            _o.task_comment_boss.value = HtmlToPlainTextCustom(_o.task_comment_boss.value);
            _t_doc.TopElem.custom_fields.ObtainChildByKey("task_comment_boss").value = HtmlToPlainTextCustom(_o.task_comment_boss.value);
            _t_need_save = true;            
        }

        if (_t_need_save) _t_doc.Save();
          
	}
}

if (_total != 100)
{
    _is_done = false;
    _alert_txt += "<li>Суммарный вес целей <b>"+_total+"%</b>. Сумма весов должна равняться 100%. Необходимо скорректировать веса.</li>";
//    _info_txt += "<li>Суммарный вес целей <b>"+_total+"%</b>. Сумма весов должна равняться 100%. Необходимо скорректировать веса.</li>";
}

// Если форма готова и сохранена, то помечаем готовность
if (_is_done) {
	docPA.TopElem.is_done = true;
	oData.data.is_done = true;
} else {
	docPA.TopElem.is_done = false;
	oData.data.is_done = false;
}	

docPA.TopElem.is_ready = _is_done; // устанавливаем признак формы, вычисленный в коде

if(_info_txt != "") {
	// выводим сообщение с проблемами в форме
	oData.data.msg = "<ul>"+_info_txt+"</ul>";
    if (_task_id_problem != "")
    {
        oData.data.msg = {
            text: "<ul>"+_info_txt+"</ul>",
            action: {type:"objective",id:_task_id_problem}
        }
    }
}

if(_alert_txt != "") {
	// сохраняем сообщение в поле комментарий для использования в кнопках ДО
	docPA.TopElem.custom_elems.ObtainChildByKey('wf_problems').value = "<ul>"+_alert_txt+"</ul>";
}
else
{
	docPA.TopElem.custom_elems.ObtainChildByKey('wf_problems').value = "";
}
