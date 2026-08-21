oData.data.view_type = "list";
oData.data.config.wf_btn_position = "both";

if (!oData.data.HasProperty("wfparameters")) 
{
    oData.data.wfparameters = new Object();
    oData.data.wfparameters.buttons = [];
}

var corp_title = '';
var model_link = '';
person_doc=tools.open_doc(curPA.person_id);
try {
	corp_title = person_doc.TopElem.custom_elems.GetOptChildByKey('corp_title');
	if (corp_title != undefined) 
		corp_title = corp_title.value;
	else 
		corp_title = '';
} catch (error) {}

LogEvent('ca_log_tamplates',"corp_title : "+corp_title);

switch (corp_title) {
	case 'Managing Director':
		model_link = UrlAppendPath( global_settings.settings.portal_base_url, 'view_play_resource.html?info=1&object_id=7275347512035683925');
		break;
	case 'Executive Director':
	case 'Director':
		model_link = UrlAppendPath( global_settings.settings.portal_base_url, 'view_play_resource.html?info=1&object_id=7275347662714099914');
		break;
	case 'Associate Director':
		model_link = UrlAppendPath( global_settings.settings.portal_base_url, 'view_play_resource.html?info=1&object_id=7275347835117540913');
		break;
	case 'Senior Associate':
	case 'Associate':
	case 'Senior Analyst':
	case 'Analyst':		
		model_link = UrlAppendPath( global_settings.settings.portal_base_url, 'view_play_resource.html?info=1&object_id=7275335912420629120');
		break;
	case '':
		model_link = UrlAppendPath( global_settings.settings.portal_base_url, 'view_play_resource.html?info=1&object_id=7275343201023246551');
		break;
	default:
		model_link = UrlAppendPath( global_settings.settings.portal_base_url, 'view_play_resource.html?info=1&object_id=7275343201023246551');
		break;
}

for (c in oData.data.competences)
{
    c.weight_view = "none";
    c.mark_self_label = "Самооценка сотрудника";
}

oData.data.config.form_tabs = { 
	aHeader: ["wfbuttons","wfcomment","totals"], 
	aBody: ["competences", "editsets","comments","iframe"], 
	aFooter: ["totals","wfbuttons"]};
	
_is_done = true;
	
// собираем массив компетенций
if (oData.data.HasProperty("competences"))
{
	for (_c in oData.data.competences)
	{
		_cPA = curPA.competences.GetOptChildByKey(OptInt(_c.id,0));
		if (_cPA!=undefined)
		{
			_c.mark = _cPA.mark.Value;

			if(_c.mark == undefined || _c.mark == null || _c.mark == ""  || _c.mark == "N") {
				// _alert_txt += "<li>Для компетенции &#171;"+ _cPA.competence_id.ForeignElem.name +"&#187; не выставлена оценка</li>";
				_is_done = false;
			} 
		}
	}
}

// Если форма готова и сохранена, то помечаем готовность
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