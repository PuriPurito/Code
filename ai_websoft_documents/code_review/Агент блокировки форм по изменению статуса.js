EnableLog('jde_log_blocking_forms',true);
LogEvent('jde_log_blocking_forms',">>> Запуск агента по блокировке форм по состоянию сотрудника");

dToday = new Date();
sNdays = Param.sNdays;

 inactive_states_array = []; 
if(!IsEmptyValue(Param.inactive_states)) inactive_states_array = String(Param.inactive_states).split(';');

 assessment_appraise_id = 0;
if(!IsEmptyValue(OptInt(Param.assessment_appraise_id,null))) assessment_appraise_id = OptInt(Param.assessment_appraise_id);

var group_exeption;
if(!IsEmptyValue(Param.group_exeption)) group_exeption = Param.group_exeption;
 gr_doc = tools.open_doc(group_exeption);

// Функция вычисления даты с вычетом рабочих дней
function subtractWorkingDays(daysCount) {
     resultDate = new Date();
     subtractedDays = 0;
    
    while (subtractedDays < daysCount) {
        resultDate = DateOffset(resultDate, -86400);
        if (WeekDay(resultDate) != 0 && WeekDay(resultDate) != 6) {
            subtractedDays++;
        }
    }
    return resultDate;
}

// Функция получения контрольной даты
function getControlDate() {
    var workDays = 5;
    if (!IsEmptyValue(sNdays)) {
        workDays = OptInt(sNdays);
    } 
    
    LogEvent('jde_log_blocking_forms', "workDays = " + workDays); 

     controlDate = subtractWorkingDays(workDays);
    LogEvent('jde_log_blocking_forms', "Контрольная дата: " + DateNewTime(controlDate) + " (" + workDays + " рабочих дней назад)");
    return controlDate;
}

// проверка на вхождение в группу исключений
function checkGroupExeption(gr_doc, person_id) {
    var res = true;
    if (gr_doc == undefined) {
        LogEvent('jde_log_blocking_forms', "checkGroupExeption: Не удалось определить группу исключения");
    } else {
         exeption_collaborators = gr_doc.TopElem.collaborators;
        if (ArrayOptFindByKey(exeption_collaborators, OptInt(person_id), 'collaborator_id') != undefined) {
            res = false;
        }
    }
    return res;
}

// проверка на состояние сотрудника
function checkPersonCurrentState(person_id, inactive_states_array, controlDate) {
    var res = true;
    try {
         coll_doc = tools.open_doc(person_id);
        
        if (ArrayOptFind(inactive_states_array, 'This == "is_dismissed"') != undefined && coll_doc.TopElem.is_dismiss) {
            if (!IsEmptyValue(coll_doc.TopElem.dismiss_date)) {
                 dismissDate = OptDate(coll_doc.TopElem.dismiss_date);
                if (DateNewTime(dismissDate) <= DateNewTime(controlDate)) {
                    res = false;
                    LogEvent('jde_log_blocking_forms', "Сотрудник " + person_id + " уволен " + dismissDate + " (контрольная дата: " + DateNewTime(controlDate) + ")");
                }
            }
        } else {
        
            for (state in coll_doc.TopElem.history_states) {
                if (ArrayOptFind(inactive_states_array, 'This == state.state_id') != undefined && 
                    (IsEmptyValue(state.start_date) || OptDate(state.start_date) <= controlDate) &&
                    (IsEmptyValue(state.finish_date) || OptDate(state.finish_date) >= dToday)) {
                    res = false;
                    LogEvent('jde_log_blocking_forms', "Сотрудник " + person_id + " в состоянии '" + state.state_id + "' на " + DateNewTime(controlDate));
                    break;
                }
            }
        }
        
        if (!res && !checkGroupExeption(gr_doc, person_id)) {
            res = true;
            LogEvent('jde_log_blocking_forms', "Сотрудник " + person_id + " в группе исключений. Не блокируем");
        }
        
    } catch (error) {
        LogEvent('jde_log_blocking_forms', "checkPersonCurrentState: " + error);
    }
    return res;
}

function createLogEntry(workflow_log_entrys, action_name, begin_state, finish_state) {
     log_entry = workflow_log_entrys.AddChild();
    log_entry.action_id = action_name;
    log_entry.create_date = Date();
    log_entry.begin_state = begin_state;
    log_entry.finish_state = finish_state;
    log_entry.person_fullname = 'Системный агент';
}

// Блокировка формы
function setPlanBlocked(ass_plan_id) {
    try {
         ap_doc = tools.open_doc(ass_plan_id);
        if (ap_doc == undefined) {
            LogEvent('jde_log_blocking_forms', "Не удалось открыть план " + ass_plan_id);
            return;
        }
        
         begin_state = ap_doc.TopElem.workflow_state.Value;
        ap_doc.TopElem.workflow_state = '6_end';
        createLogEntry(ap_doc.TopElem.workflow_log_entrys, "form_blocking", begin_state, '6_end');
        ap_doc.Save();
        
        LogEvent('jde_log_blocking_forms', "Форма " + ass_plan_id + " заблокирована");
        
    } catch (error) {
        LogEvent('jde_log_blocking_forms', "Ошибка блокировки: " + error);
    }
}

// Обновление ФИО
function updatePersonFIO(itemDoc, personTE, fieldName) {
    try {
        switch (fieldName) {
            case "person_id":
                if (String(itemDoc.TopElem.person_id.sd.fullname) != String(personTE.fullname)) {
                    itemDoc.TopElem.person_id.sd.fullname = String(personTE.fullname);
                    itemDoc.Save();
                }
                break;
            case "expert_person_id":
                if (String(itemDoc.TopElem.expert_person_id.sd.fullname) != String(personTE.fullname)) {
                    itemDoc.TopElem.expert_person_id.sd.fullname = String(personTE.fullname);
                    itemDoc.Save();
                }
                break;
        }
    } catch (err) {
        LogEvent('jde_log_blocking_forms', "updatePersonFIO: " + err);
    }
}

// Получаем планы оценки
 assessment_plan_array = ArraySelectAll(tools.xquery(tools.create_xquery("assessment_plan", "$elem/assessment_appraise_id = " + assessment_appraise_id, "$elem/workflow_state != '6_end'")));
LogEvent('jde_log_blocking_forms', "Найдено активных планов оценки: " + ArrayCount(assessment_plan_array));

// Получаем контрольную дату ОДИН раз до цикла
 controlDate = getControlDate();

// Пакетная загрузка всех анкет (PAS) по процедуре оценки — вне цикла
 aPasAll = ArraySelectAll(XQuery("for $elem in pas where $elem/assessment_appraise_id = " + assessment_appraise_id + " return $elem"));
LogEvent('jde_log_blocking_forms', "Найдено анкет (PAS) для обработки: " + ArrayCount(aPasAll));

for (plan in assessment_plan_array) {
    // Актуализация ФИО
     assasmentPlanDoc = tools.open_doc(plan.id);
     planPersonDoc = tools.open_doc(assasmentPlanDoc.TopElem.person_id);
    if (planPersonDoc != undefined) {
        updatePersonFIO(assasmentPlanDoc, planPersonDoc.TopElem, 'person_id');
        LogEvent('jde_log_blocking_forms', "Найдена форма сотрудника " + plan.person_fullname);
    } else {
        LogEvent('jde_log_blocking_forms', "Не удалось открыть карточку сотрудника " + plan.person_fullname);
        continue;
    }

    // Обновление ФИО в анкетах (фильтрация из предзагруженного массива)
    pasArr = ArraySelect(aPasAll, "OptInt(This.assessment_plan_id) == " + OptInt(plan.id));
    for (elem in pasArr) {
         elemDoc = tools.open_doc(elem.id);
        if (elemDoc != undefined) {
             personDoc = tools.open_doc(elemDoc.TopElem.person_id);
            if (personDoc != undefined) {
                updatePersonFIO(elemDoc, personDoc.TopElem, 'person_id');
                if (OptInt(elemDoc.TopElem.person_id) != OptInt(elemDoc.TopElem.expert_person_id)) {
                     expertDoc = tools.open_doc(elemDoc.TopElem.expert_person_id);
                    if (expertDoc != undefined) updatePersonFIO(elemDoc, expertDoc.TopElem, 'expert_person_id');
                } else {
                    updatePersonFIO(elemDoc, personDoc.TopElem, 'expert_person_id');
                }
            }
        }
    }

    // Проверка и блокировка
    if (!checkPersonCurrentState(plan.person_id, inactive_states_array, controlDate)) {
        setPlanBlocked(plan.id);
        LogEvent('jde_log_blocking_forms', "Форма сотрудника " + plan.person_fullname + " заблокирована");
    }
}

LogEvent('jde_log_blocking_forms', ">>> Завершена работа агента по блокировке форм по состоянию сотрудника");