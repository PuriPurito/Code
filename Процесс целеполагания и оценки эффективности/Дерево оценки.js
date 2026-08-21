EnableLog('ca_log_tamplates',true);
//LogEvent('ca_log_tamplates',"curObject : "+curObject.id);

oData.config = new Object();
oData.config.bOnlyFirstPage = false;
oData.config.bPartialLoadCode = false;

oData.config.btn_users = true;
oData.config.btn_objectives =false;
oData.config.btn_logs = true;
oData.config.btn_iframe = true;
oData.config.btn_sheet_title = "Оценочная форма";
oData.config.sLogoConfirm = "";

oData.dataset = new Object();  
oData.dataset.workflow = ({"states":[]});

aa_doc = tools.open_doc(curAssessmentAppraiseID);     
_phase_global = aa_doc.TopElem.custom_elems.ObtainChildByKey("global_wf_state").value.Value.split("_")[0];

for (_state in curWorkflow.states)
{
    _state_global = String(_state.code).split("_")[0];
    _state_owner = (String(_state.code).split("_")[1] != undefined) ? String(_state.code).split("_")[1] : 'none';

    if(_phase_global==_state_global || _state.code == '1_person' || _state.code == '3_end') 
    {
        if(curObject != undefined && (ArrayOptFirstElem(curObject.custom_experts) != undefined || _state_owner != 'expert'))
        {
			oData.dataset.workflow.states.push({
				id:_state.code.Value,
				name: _state.name.Value,
				title: _state.name.Value
			});
        }
		else
		{
			oData.dataset.workflow.states.push({
				id:_state.code.Value,
				name: _state.name.Value,
				title: _state.name.Value
			});
        }
    }
	else
	{
		oData.dataset.workflow.states.push({
			id:_state.code.Value,
			name: _state.name.Value,
			title: _state.name.Value,
			hidden: true
		});
	}
}

_but_str = "<button> \
		<action>iframe</action> \
		<id>materials</id> \
		<title>Материалы по оценке</title> \
		<position>bottom</position> \
		<visible>1</visible> \
		<dialog_title>Материалы по оценке</dialog_title> \
		<url>/wiki/7250236295524232932</url> \
		<target>_blank</target>  \
		<class>wt-btn-icon-materials</class> \
		<title_close_action>none</title_close_action> \
		<hide_close_action>false</hide_close_action> \
		<dialog_buttons>none</dialog_buttons>			 \
	</button> \
";

_but = tools.read_object(" \
	<buttons> \
		<button> \
		</button> "+ _but_str + " \
	</buttons> \
");	
oData.config.buttons = _but;


//сортируем массив
oData.data = ArraySort(oData.data, "This.person.fullname", "+", "This.index", "+");