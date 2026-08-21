## GetPersonEvents

Метод **GetPersonEvents** предназначен для получения списка мероприятий сотрудника.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetPersonEvents", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя пять параметров:  
     _iPersonID_ – ID сотрудника (целое число).   
     _aStatus_ – массив статусов мероприятия (массив строк) (возможные значения: _'project' (проект), 'plan' (планируется), 'active' (проводится), 'close' (завершено), 'cancel' (отменено), 'undefined' (не определен)_).   
     _aEventType_ – массив ID типов мероприятия (массив целых чисел).   
     _iRoleID_ – ID роли пользователя (целое число).   
     _bOpenWebinar_ – передавать ссылку на вебинар, а не на карточку мероприятия (булево).    

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень мероприятий, которые проводит указанный преподаватель, а также ряд дополнительных атрибутов:  
\- _array_ \- массив мероприятий, проводимых преподавателем (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID мероприятия (целое число);  
     _name_ – название мероприятия (строка);  
     _link_ – относительная ссылка на мероприятие (строка);  
     _image\_url_ – относительная ссылка на изображение (строка);  
     _start\_date_ – начало мероприятия (дата);  
     _finish\_date_ – конец мероприятия (дата);  
     _status_ – название статуса мероприятия (строка);  
     _type_ – название типа мероприятия (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_`   
  
`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // // Находим программно сотрудника Васильеву Л.П. с помощью функции_ _tools.get_doc_by_key_`  
`_oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_// Пусть в системе имеется тип мероприятия 'one_time' (разовое мероприятие)   // Находим программно указанный тип мероприятия с помощью функции tools.get_doc_by_key   oEvent_type = tools.get_doc_by_key ( 'event_type', 'code', 'one_time' );   alert ( 'Найден тип мероприятия ' + oEvent_type.TopElem.name + ' с идентификационным номером ' + oEvent_type.DocID ); // на экран выводится информация о типе мероприятия_`

`_iCollabID = oCollab.DocID;   iEvent_typeID = oEvent_type.DocID;      // Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetPersonEvents", [OptInt (iCollabID), ['plan', 'active'], [iEvent_typeID], null, false]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 1820074508707346390,  
        "name": "Эффективный менеджер-наставник",  
        "start\_date": "2009-11-24T10:35:00+00:00",  
        "finish\_date": "2009-11-24T18:35:00+00:00",  
        "status": "Планируется",  
        "type": "Разовое мероприятие",  
        "link": "view\_doc.html?mode=event&object\_id=1820074508707346390",  
        "image\_url": "images/event.png"  
    }, {  
        "id": 6821181243535342460,  
        "name": "Английский язык (мероприятие)",  
        "start\_date": "2020-07-21T09:00:00+00:00",  
        "finish\_date": "2020-07-21T10:00:00+00:00",  
        "status": "Планируется",  
        "type": "Разовое мероприятие",  
        "link": "view\_doc.html?mode=event&object\_id=6821181243535342460",  
        "image\_url": "images/event.png"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции_ _tools.get_doc_by_key_`  
`_oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_// Пусть в системе имеется тип мероприятия 'one_time' (разовое мероприятие)   // Находим программно указанный тип мероприятия с помощью функции tools.get_doc_by_key   oEvent_type = tools.get_doc_by_key ( 'event_type', 'code', 'one_time' );   alert ( 'Найден тип мероприятия ' + oEvent_type.TopElem.name + ' с идентификационным номером ' + oEvent_type.DocID ); // на экран выводится информация о типе мероприятия_`

`_iCollabID = oCollab.DocID;   iEvent_typeID = oEvent_type.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetPersonEvents", [OptInt (iCollabID), ['plan', 'active'], [iEvent_typeID], null, false]);_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество мероприятий = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_start_date = q.start_date;        str = str + 'res_start_date = ' + res_start_date + '\n';        res_finish_date = q.finish_date;        str = str + 'res_finish_date = ' + res_finish_date + '\n';        res_status = q.status;        str = str + 'res_status = ' + res_status + '\n';        res_type = q.type;        str = str + 'res_type = ' + res_type + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';        res_image_url = q.image_url;        str = str + 'res_image_url = ' + res_image_url + '\n';_`

     `_alert ( str );   }_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

---

