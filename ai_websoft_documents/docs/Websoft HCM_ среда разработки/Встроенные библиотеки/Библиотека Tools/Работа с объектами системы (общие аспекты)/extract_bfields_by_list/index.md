## extract_bfields_by_list

Возвращает объект, составленный из списка полей указанного объекта-источника. Список полей передаётся как аргумент функции.

_Синтаксис:_  
      **tools.extract\_bfields\_by\_list (<fldSPXML>, <sFieldList>\[, <bNoValidation>\])**

_Аргументы:_  
     <fldSPXML> (обязательный)  
     Тип: **Объект или TopElem**. Ссылка на объект или его TopElem.  
     <sFieldList> (обязательный)  
     Тип: **Строка**. Строка из названий полей объекта-источника, которые нужно получить (названия полей в строке разделяются символом «точка с запятой» (;)).  
     <bNoValidation> (необязательный)  
     Тип: **Булево**. Аргумент, определяющий необходимость выполнения проверки в списке полей, преданных в аргумент _sFieldList_, наличия ведущих или заключительных знаков (_true_ – выполнять проверку, _false_ – не проверять). По умолчанию _true_. 

_Возвращаемое значение:_  
      Тип: **Объект**. Объект со значениями выбранных полей (название свойства – название поля в исходном объекте-источнике, значение свойства – значение поля в исходном объекте-источнике).

_Пример 1:_      

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна_` 

`_// Находим программно сотрудника Васильеву Л.П.   try {        _query_str = "for $elem in collaborators where $elem/fullname = 'Васильева Людмила Петровна' return $elem";        objArray = XQuery(_query_str);        // objArray является массивом объектов Сотрудник, отобранных запросом. Запрос отбирает всех сотрудников, ФИО которых имеет значение 'Васильева Людмила Петровна'        A1 = ArrayOptFirstElem ( objArray ); // функция возвращает первый элемент массива сотрудников objArray (в данном случае массив состоит из одного элемента)        alert ('Найден сотрудник: ' + A1.fullname); // на экран выводится полное имя отобранного сотрудника   }    catch (err){        alert ('Сотрудник не найден!');   }_`

`_obj = tools.extract_bfields_by_list (A1, 'id;fullname;login;email', false);   for (p in obj) {         alert( p + '=' + obj.GetProperty(p) ); // вывод на экран всех свойств объекта obj (свойства в данном случае выводятся по их названиям в порядке алфавита)   }   _`

_Пример 2:_  
      `_obj1 = tools.extract_bfields_by_list(Child(0).Parent.id.Value, 'code;title;status;passing_score;sections/section/code;sections/section/title', false);         obj2 = tools.extract_bfields_by_list(Child(0).Parent, 'name;type_id;event_type_id;start_date;finish_date;collaborators/collaborator/collaborator_id;collaborators/collaborator/person_fullname', false);_`

---

