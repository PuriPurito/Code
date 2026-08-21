//Вывод трех кнопок, как у Протасова (не работает :с)
//wf_obj = oData.data.wfparameters.objective;
//btn = [{action: "add", visible: true, title: "Добавить цель"}, {action: "comment", visible: true, title: "Добавить комментарий"}, {action: "weight", visible: true, title: "Редактировать веса"}];
//wf_obj.buttons = btn;
//oData.data.wfparameters.button = btn;

oData.data.wfparameters.buttons = [{ action: "add", visible: true}];

docPlan =tools.open_doc(docPA.TopElem.assessment_plan_id);
if(docPlan!=undefined)
{
  if (docPlan.TopElem.workflow_state == "4")
    {
      oData.data.wfparameters.buttons = [];
    }
    if (((docPlan.TopElem.workflow_state == "1") || (docPlan.TopElem.workflow_state == "4")) && (curPersonID == docPA.TopElem.person_id)) //Видимость комментария для сотрудника
    {
        oData.data.wfparameters.buttons.push({ action: "comment", visible: true, title: "Добавить комментарий" }); 
    }
   if (((docPlan.TopElem.workflow_state == "2") || (docPlan.TopElem.workflow_state == "5")) && (curPersonID == docPA.TopElem.expert_person_id)) //Видимость комментария для руководителя
    {
        oData.data.wfparameters.buttons.push({ action: "comment", visible: true, title: "Добавить комментарий" });
    }
}

if (oData.data.HasProperty("wfbuttons"))
{  
    for (wfb in oData.data.wfbuttons)
    {
    switch (wfb.code)
    {
      case "1_approval":
        wfb.confirm_msg = "<span style=font-weight:bold;’>Вы уверены?</span>"; //Подтверждение перехода на следующий этап
        break;
      case "2_return":
        if (wfb.title == "Вернуть на доработку") //Проверка на наличие комментария при отправке на доработку
        {
          wfb.comment_require = true;
        }
        break;
    }
  }
}