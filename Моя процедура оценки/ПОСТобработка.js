tePA = docPA.TopElem;

iTasksAmount = ArrayCount(tePA.tasks);
iMaxTasks = 5;
iMinTasks = 3;

iWeight = 0;

aErrors = []

for (oTask in tePA.tasks)
{
    iWeight = iWeight + oTask.weight;
}

if (iTasksAmount > iMaxTasks)
{
    aErrors.push("Текущее количество Ваших целей: " + iTasksAmount + ". Максимальное количество целей на текущий период: " + iMaxTasks + ".") ;
}
if (iTasksAmount < iMinTasks)
{
    aErrors.push("Текущее количество Ваших целей: " + iTasksAmount + ". Минимальное количество целей на текущий период: " + iMinTasks + ".");
}
if (iWeight != 100)
{
    aErrors.push("Суммарный вес целей должен равняться 100. Текущий суммарный вес созданных целей: " + iWeight + ".");
}

/* docPlan =tools.open_doc(tePA.assessment_plan_id);
if(docPlan!=undefined) 
{
    if (docPlan.TopElem.workflow_state == "4")
    {
        for (oTask in tePA.tasks)
        {
            docTask = tools.open_doc(oTask.task_id);
            if(docTask!=undefined)
            {
                if (IsEmptyValue(docTask.TopElem.fact))
                {
                    aErrors.push("Пожалуйста, укажите фактический результат у всех целей.");
                    break;
                }
            }
        }
    }
} */

if(ArrayOptFirstElem(aErrors)!=undefined)
{
    sErrors = aErrors.join('\n');
    oData.data.msg = sErrors;
    tePA.custom_elems.ObtainChildByKey('wf_errors').value = sErrors;
}
else
{
    tePA.custom_elems.ObtainChildByKey('wf_errors').value.Clear();
}