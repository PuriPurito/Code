//Настаиваю на табуляции вместо пробелов, так как так код читать гораздо, проще. Гораздо заметнее, какая группа кода к чему относится.
//Настаиваю на программировании в какой-то IDE, как минимум для сохрения разработок на будущее. Это также позволит проще ориентироваться в коде и находить синтаксические ошибки.

//Лучше флаг активации лога тоже выносить в параметры агента чтобы можно было в случае чего его отключать. 
EnableLog(Param.test_agent_results_log, true);

try {
//Советую в начале названия переменной указывать её тип, к примеру int_(целое)  bool_(булевое) arr_ doc_ te_(это TopElem документа)
//Советую оборачивать XQuery в ArraySelectAll. конкретно где это поможет не подскажу но часто это решало некоторые непонятные ошибки при обращении к массиву.
 selected_collaborator_groups = XQuery ("for $elem in group_collaborators where collaborator_id = "+Param.collaborator_id+" return $elem");
 selected_collaborator_fm_groups = XQuery ("for $elem in func_managers where person_id = "+Param.collaborator_id+"  return $elem");

 groups_list = [];

 //Лучше называть переменную элемента массива в for in полным названием. Также чтобы внутри цикла было проще ориентироваться, где обращения к элементу массива, а где к самому массиву, то добавлять приставку к примеру _elem 
 for (scg in selected_collaborator_groups) {
    //Есть более красивое и быстрое решение смотри ниже
  for (scfmg in selected_collaborator_fm_groups) {
   if (scfmg.object_id == scg.group_id) {
    continue;
   }
   else {
    groups_list.push(scg.group_id + " - " + scg.name);
   }
  }
 }
 LogEvent(Param.test_agent_results_log, groups_list.join("\n"));
}
catch(e) {
 LogEvent(Param.test_agent_results_log, e);
}

EnableLog(Param.test_agent_results_log, false);

//Пишу пример который можно дальше использовать как шаблон для более удобной реализации



//Это функция которая выводит в лог 
function AlertLog(s_text)
{
    //Переменная с названием лога была передана внутрь функции так как была объявлена до её вызова(даже если это внутри другой функции)
    LogEvent(s_log_name, s_text);
    return;
}

//main просто понятное название функции, не обязательно так её называть.
function main()
{
    //Добавил переменную с id сотрудника чтобы не обращаться к параметрам каждый раз и заодно привёл к инту
    i_collaborator_id = OptInt(Param.collaborator_id)

    a_selected_collaborator_groups = ArraySelectAll(XQuery ("for $elem in group_collaborators where collaborator_id = "+ i_collaborator_id +" return $elem"));
    a_selected_collaborator_fm_groups = ArraySelectAll(XQuery ("for $elem in func_managers where person_id = "+ i_collaborator_id +" and catalog ='group'  return $elem"));
   
    groups_list = [];
   
    for (o_selected_collaborator_groups_elem in a_selected_collaborator_groups) {

        i_group_id = OptInt(o_selected_collaborator_groups_elem.group_id)
        //Сначала Попробовал найти сотрудника как функционального руководителя в текущей группе. 
        //Первый параметр это массив в котором ведётся поиск. Второй это условие(в виде строки) по которому поиск ведётся, Где This это элемент массива.
        //Привожу This.odject_id и o_selected_collaborator_groups_elem.group_id к INT чтобы не возникло проблем при сравнении, потому что если к примеру первое будет HEX(0x614DB9A50B352DCF), а второе INT(7011464313394507215), то условие не выполнится хотя фактически одно равно другому
        //Подробнее о функции можно посмотреть на docs.datex
        o_group_fms = ArrayOptFind(a_selected_collaborator_fm_groups, "OptInt(This.object_id) == " + i_group_id)
        
        // Если не нашлось ни одного ФР(функционального руководителя) из массива, то это значит что текущий пользователь не является ФР для данной группы и нужно вывести его
        if(o_group_fms==undefined)
            groups_list.push(i_group_id + " - " + o_selected_collaborator_groups_elem.name);
        
        //Только сейчас заметил что этот цикл выводит дубликаты, то есть для каждой группы где сотрудник не руководитель он выведет в лог эту группу, столько раз сколько таких групп есть(за подробностями пиши в личку)
        /*  for (scfmg in selected_collaborator_fm_groups) {
            if (scfmg.object_id == scg.group_id) {
            continue;
            }
            else {
            groups_list.push(scg.group_id + " - " + scg.name);
            }
            } */
    }

    AlertLog(groups_list.join("\n"))
    // У каждый функции должен быть return даже если он пустой
    return;
}
//Название лога закинул в перееменную чтобы не обращаться к ней каждый раз, плюс сразу перевёл в стринг для точного определения типа переменной.
var s_log_name = String(Param.test_agent_results_log)
var b_log_active = tools_web.is_true(Param.is_log_active) // Переменная которая активирует лог
EnableLog(s_log_name, b_log_active);

try 
{
    main()
}
catch(e) {
    AlertLog(e)
}

EnableLog(s_log_name, false);