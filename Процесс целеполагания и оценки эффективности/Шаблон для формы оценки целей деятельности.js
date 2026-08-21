//////////////////////////////////////////////////////////////////
// Основные настройки формы

oData.data.view_type = "table";
oData.data.view_type_level = 1;
oData.data.config.wf_btn_position = "both";
oData.data.config.obj_filter = {value: [{"id": "collapse", "state":"", "title":"Свернуть всё", "pressed": false},
{"id": "expand", "state":"", "title":"Развернуть всё", "pressed": true},
{"id": "tasks", "state": "none"} ]};

oData.data.config.form_tabs = { 
  aHeader: ["wfbuttons","wfcomment","totals"], 
  aBody: ["filter", "pos-control", "objectives", "add_objective", "editsets","comments","iframe"], 
  aFooter: ["totals","wfbuttons"]};

if (!oData.data.HasProperty("wfparameters")) 
{
    oData.data.wfparameters = new Object();
    oData.data.wfparameters.buttons = [];
} 
if (_phase_global == '1' || _phase_global == '2')
{
  oData.data.wfparameters.dialog_buttons = [{"action": "draft", "title": "Сохранить черновик"},{"action": "save", "title": "Сохранить"},{"action": "cancel", "title": "Закрыть"}];
}
else
{
  oData.data.wfparameters.dialog_buttons = [{"action": "save", "title": "Сохранить"},{"action": "cancel", "title": "Закрыть"}];
}

if (!oData.data.wfparameters.HasProperty("objective"))
  oData.data.wfparameters.objective = new Object();

_wf_obj = oData.data.wfparameters.objective;


_wf_obj.is_deleted_view = { // поле Является удаленной
  label:"",
  visible: (_phase_global == '1' || _phase_global == '2'),
  visible_in: "view",
  editable: false,
  required: false,
  control_type: "text"
};
_wf_obj.name = { // поле Название цели
  label:"Цель",
  visible: true,
  visible_in: "form",
  editable: (_phase_global == '1' || _phase_global == '2'),
  required: true,
  control_type: "textarea"
};
_wf_obj.custom_name = { // поле Название цели (для таблицы)
  label:"Цель",
  visible: true,
  visible_in: "title",
  editable: false,
  control_type: "textarea"
};
_wf_obj.desc = { // поле Описание цели
  label:"Описание цели",
  visible: true,
  visible_in: "view;form",
  editable: (_phase_global == '1' || _phase_global == '2'),
  required: false,
  control_type: "textarea"
};
_wf_obj.weight = { // поле вес
  label:"Вес цели",
  visible: true,
  visible_in: "form;view;",
  editable: (_phase_global == '1' || _phase_global == '2'),
  required: true,
  control_type: "select",
  placeholder: "Выберите вес",
  scale: {value: []},
  min: 5,
  max:100
};
for (_i=20; _i>0; _i--)
{
  _val = {
    id: String(_i*5), 
    name: String(_i*5), 
    desc: (String(_i*5)+"%")
    };
  _wf_obj.weight.scale.value.push(_val);
}
_wf_obj.date_plan = { // поле Срок исполнения
  label:"Срок исполнения",
  visible: true,
  visible_in: "form;view",
  editable: (_phase_global == '1' || _phase_global == '2'),
  required: true,
  control_type: "date"
};
_wf_obj.task_mrk_person = { // поле Оценка сотрудника
  label:"Оценка сотрудника",
  visible: (_phase_global == '3'),
  visible_in: "form;view",
  editable: (_phase == '3_person' && _isPerson),
  required: true,
  control_type: "select",
  placeholder: "",
  scale: {value: [
    {id:1,name:"Цель не выполнена",desc:"Цель не выполнена"},
    {id:2,name:"Цель выполнена частично",desc:"Цель выполнена частично"},
    {id:3,name:"Цель выполнена",desc:"Цель выполнена"},
    {id:4,name:"Цель перевыполнена",desc:"Цель перевыполнена"},
    {id:5,name:"Цель существенно перевыполнена",desc:"Цель существенно перевыполнена"}
  ]}
};
_wf_obj.task_comment_person = { // поле Комментарий сотрудника
  label:"Комментарий сотрудника",
  visible: (_phase_global == '3'),
  visible_in: "form;view",
  editable: (_phase == '3_person' && _isPerson),
  required: false,
  control_type: "textarea"
};
_wf_obj.task_mrk_manager = { // поле Оценка руководителя
  label:"Оценка руководителя",
  visible: (_phase_global == '3' && _phase != '3_person'),
  visible_in: "form;view",
  editable: (_phase == '3_boss' && _isBoss),
  required: true,
  control_type: "select",
  placeholder: "",
  scale: {value: [
    {id:1,name:"Цель не выполнена",desc:"Цель не выполнена"},
    {id:2,name:"Цель выполнена частично",desc:"Цель выполнена частично"},
    {id:3,name:"Цель выполнена",desc:"Цель выполнена"},
    {id:4,name:"Цель перевыполнена",desc:"Цель перевыполнена"},
    {id:5,name:"Цель существенно перевыполнена",desc:"Цель существенно перевыполнена"}
  ]}
};
_wf_obj.task_comment_boss = { // поле Комментарий руководителя
  label:"Комментарий руководителя",
  visible: (_phase_global == '3' && _phase != '3_person'),
  visible_in: "form;view",
  editable: (_phase == '3_boss' && _isBoss),
  required: false,
  control_type: "textarea"
};
_wf_obj.is_compulsory = { // поле Является обязательной
  label:"Обязательная цель",
  visible: false,
  editable: false,
  required: false,
  control_type: "text"
};
_wf_obj.is_deleted = { // поле Является удаленной
  label:"",
  visible: (_phase_global == '2'),
  visible_in: "form",
  editable: (_phase == '2_person' && _isPerson) || (_phase == '2_boss' && _isBoss),
  required: false,
  control_type: "checkbox",
  scale: {value: [{id: 'true', name: 'Пометить как неактуальную'}]}
};
_wf_obj.doc_file = { // поле документ
  label: "Подтверждающий документ",
  visible: true,
  visible_in: "view,form", 
  editable: _isPerson || _isBoss,
  control_type: "file"
};
_wf_obj.create_wf_state = { // поле Этап, на котором создана цель
  label: "Этап создания",
  visible: false,
  editable: false,
  required: false,
  control_type: "text",
  "default": _phase
};

_phase = String(oData.data.workflow_state); // получаем текущий этап ДО
_btn = [{action:"add", visible: _isPerson && (_phase == "1_person" || _phase == "2_person") || _isBoss && (_phase == "1_boss" || _phase == "2_boss"), title:"Добавить цель", position:"header"},
  {action:"weight", visible: _isPerson && (_phase == "1_person" || _phase == "2_person") || _isBoss && (_phase == "1_boss" || _phase == "2_boss"), title:"Редактировать веса", position:"header"}];

_wf_obj.buttons = _btn;
_total =0;	
_is_done = true;
//дата окончания процедуры
aa_start_date = curPA.assessment_appraise_id.OptForeignElem.start_date;
aa_end_date = curPA.assessment_appraise_id.OptForeignElem.end_date;

if ( oData.data.HasProperty("objectives") )
{
  for (_o in oData.data.objectives)
  {
    if (_phase_owner == 'end')
    {
      _o.editable = false;
    }

    _o.can_add_child = false;

    if (_phase == '1_person' || _phase == "1_boss")
    {
      _o.can_delete = true;
    }
    else 
    {
      _o.can_delete = false;
    } 

    _o.wfparameters = {"objective" : ParseJson(EncodeJson(oData.data.wfparameters.objective))};
  
    if (!IsEmptyValue(_o.is_deleted.value))
    {
      _o.is_deleted_view.value = '<b>Неактуальная цель</b>';

      if (OptInt(_o.weight.value) != 0)
      {
        _o.weight.value = '0';
        curDeletedTask = docPA.TopElem.tasks.GetOptChildByKey(OptInt(_o.id));
        LogEvent('ca_log_tamplates','Вес удаленной цели \"'+_o.name.value+'\" ('+_o.id+') был приведен к 0. Вес сохраненный в анкете '+curDeletedTask.weight);
        curDeletedTask.weight = 0;
      }

      if (_phase_global == '3') _o.class = "element-hidden";
      
      _o.wfparameters.objective.name.editable = false;
      _o.wfparameters.objective.weight.editable = false;
      _o.wfparameters.objective.weight.scale.value.push({id: '0', name: '0', desc: '0%'});
      _o.wfparameters.objective.date_plan.editable = false;
      _o.wfparameters.objective.desc.editable = false;
      _o.wfparameters.objective.is_deleted.scale = {value: [{id: 'true', name: 'Неактуальная цель'}]};
    } 
    else
    {
      _o.wfparameters.objective.is_deleted_view.visible=false;
    }
    _o.custom_name.value = '<div class=\"title-title-name\">'+_o.name.value + '</div><div class=\"title-weight\">Вес: '+_o.weight.value+'%</div>';

    if (_o.is_compulsory != undefined && _o.is_compulsory.value == 'true')
    {
      _o.can_delete = false;
      if (_phase_global != '3') 
      {
        _o.editable = false;
      }
      else
      {
        _o.wfparameters.objective.dialog_buttons = [{"action": "save", "title": "Сохранить"},{"action": "cancel", "title": "Закрыть"}];
      }
      _o.wfparameters.objective.name.editable = false;
      _o.wfparameters.objective.weight.editable = false;
      _o.wfparameters.objective.date_plan.editable = false;
      _o.wfparameters.objective.desc.editable = false;
      _o.wfparameters.objective.is_deleted.visible = false;
    }

    if(_o.HasProperty("doc_file") && _o.doc_file.value != undefined && _o.doc_file.value != null && _o.doc_file.value != "") {
			fileDoc = tools.open_doc(_o.doc_file.value);
			if (fileDoc != undefined) {
				_o.doc_file.file_name = fileDoc.TopElem.file_name;
				_o.doc_file.file_type = fileDoc.TopElem.type;
				_o.doc_file.file_url = "/download_file.html?file_id="+_o.doc_file.value;
				_o.doc_file.file_size = fileDoc.TopElem.size;				
			}
      if ( !((_phase_owner == 'person' && _isPerson) || (_phase_owner == 'boss' && _isBoss)) ) {
				_o.wfparameters.objective.doc_file.visible_in = "view";
				_o.wfparameters.objective.doc_file.editable = false;
			}				
		} else {
			if ( ((_phase_owner == 'person' && _isPerson) || (_phase_owner == 'boss' && _isBoss)) && (!_o.HasProperty("editable") || _o.editable != false) ) {
				_o.wfparameters.objective.doc_file.visible_in = "form";
			} else {
				_o.wfparameters.objective.doc_file.visible = false;
			}				
		}

    if (_phase_global == '3')
    {
      _o.wfparameters.objective.dialog_buttons = [{"action": "save", "title": "Сохранить"},{"action": "cancel", "title": "Закрыть"}];
    }
  
    if (_phase == '3_person' && IsEmptyValue(_o.task_mrk_person.value) && IsEmptyValue(_o.is_deleted.value) )
    {
      _is_done = false;
      LogEvent('ca_log_tamplates',"Не заполнена оценка по цели «"+_o.name.value+"»");
    }
    if (_phase == '3_boss' && IsEmptyValue(_o.task_mrk_manager.value) && IsEmptyValue(_o.is_deleted.value) )
    {
      _is_done = false;
      LogEvent('ca_log_tamplates',"Не заполнена оценка по цели «"+_o.name.value+"»");
    }
  
    // проверка на соответствие шагу в 5% или null
    if (OptInt(_o.weight.value,0) % 5 !=0 || IsEmptyValue(_o.weight.value))
    {
      _is_done = false;
      LogEvent('ca_log_tamplates',"_o.weight.value = "+tools.object_to_text(_o.weight.value,'json'));
    }
    _total += OptInt(_o.weight.value,0);

    // проверка на 0%
    if (OptInt(_o.weight.value) == 0 && IsEmptyValue(_o.is_deleted.value))
    {
      _is_done = false;
    }
    // проверка на срок исполнения
    if (OptDate(_o.date_plan.value) == undefined || Year(OptDate(_o.date_plan.value)) != Year(OptDate(aa_start_date)) )
    {
      _is_done = false;
    }
  
  }  
}

if ( oData.data.HasProperty("objectives") )
{
  var i=0;
  for (_o in ArraySort(oData.data.objectives, "This.id", "+"))
  {
    i++;
    if (!IsEmptyValue(_o.is_compulsory.value))
    {
      _o.position.value = 1000+i;
    }
    else if (!IsEmptyValue(_o.is_deleted.value))
    {
      _o.position.value = 3000+i;
    }
    else
    {
      _o.position.value = 2000+i;
    }
  }  
  oData.data.objectives = ArraySort(oData.data.objectives, "This.position.value", "+");
}


if (_total != 100)
{
  _is_done = false;
}

if (curWorkflow.code != 'ca_performance_review')
{
  // Если форма готова, то помечаем готовность
  if (_is_done) {
    docPA.TopElem.is_done = true;
    oData.data.is_done = true;
  } else {
    docPA.TopElem.is_done = false;
    oData.data.is_done = false;
  }
  docPA.Save();
}

//////////////////////////////////////////////////////////////////////////
// БАЛАНСИРОВКА ЦЕЛЕЙ ПО ВЕСАМ
//
// в интерфейсе балансировки весов убираем цели, помеченные на удаление
oData.data.obj_weight = {"obj_id": []};
for (_o in oData.data.objectives)
{
	if (IsEmptyValue(_o.is_deleted.value))
	{
		_readonly = false;
		_class = "";
 		
		if (_o.is_compulsory != undefined && _o.is_compulsory.value == 'true') 
    {
				_readonly = true;
				_class = "ui-state-disabled";
		}
		oData.data.obj_weight.obj_id.push({"id":_o.id+'', "readonly": _readonly, class: _class});
	}
}
// настройка ограничений в весах целей при балансировке
_jquery = "<script> \
$('.wt-appr-objective-weight').bind('DOMSubtreeModified',function() { \
  $(this).find('input[type=number]').attr('step',5); \
  $(this).find('input[type=number]').attr('min',5); \
  $(this).find('input[type=number]').attr('max',100); \
/*  \
  if (parseInt($(this).find('th[wt-role=\"sum-value\"]').text()) != 100) \
  { \
    $(this).find('button.wt-obj-form-btn-save').attr('disabled',true); \
    $(this).find('button.wt-obj-form-btn-save').attr('title','Итоговая сумма должна равняться 100%'); \
    $(this).find('button.wt-obj-form-btn-save').addClass('btn-disabled'); \
  } \
  else \
  { \
    $(this).find('button.wt-obj-form-btn-save').attr('disabled',false); \
    $(this).find('button.wt-obj-form-btn-save').removeAttr('title'); \
    $(this).find('button.wt-obj-form-btn-save').removeClass('btn-disabled'); \
  } \
*/ \
}); \
</script>";
oData.data.obj_weight.obj_label = "Цель развития"+_jquery;
oData.data.obj_weight.scale = [{min:100,max:100,class:"sum-weight-ok",title:"ОК"},{max:100,class:"sum-weight-bad",title:"Меньше 100%"},{min:100,class:"sum-weight-bad",title:"Больше 100%"}];