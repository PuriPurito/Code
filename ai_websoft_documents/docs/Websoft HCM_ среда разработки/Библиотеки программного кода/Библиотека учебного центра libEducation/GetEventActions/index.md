## GetEventActions

Метод предназначен для получения списка действий, связанных с мероприятием.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEventActions", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя два параметра:  
     _iEventID_ – ID мероприятия (целое число).    
     _iCurUserID_ \- ID пользователя (сотрудника), относительно которого извлекаются данные (целое число). 

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень действий, связанных с мероприятием, а также ряд дополнительных атрибутов:  
\- _array_ \- массив действий, связанных с мероприятием (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID действия, связанного с мероприятием (целое число);  
     _name_ – название действия (строка);  
     _action\_type_ – тип действия (строка);  
     _action\_id_ – идентификатор действия (строка);  
     _method_ – название метода выполнения действия (строка);  
     _url_ – относительная ссылка на действие (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна   // Находим программно сотрудника Васильеву Л.П. с помощью функции tools.get_doc_by_key   oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике   iEventID = oEv.TopElem.id;   iCollabID = oCollab.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEventActions", [OptInt (iEventID), OptInt (iCollabID)]);      // Проверьте наличие действий, связанных с мероприятием.    // Если действия, связанные с мероприятием, отсутствуют, добавьте одно или несколько таких действий.      // Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_  
{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 82144252,  
        "name": "Написать комментарий",  
        "action\_type": "remote\_action",  
        "action\_id": "lp\_event\_action",  
        "method": "edit\_comment"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна   // Находим программно сотрудника Васильеву Л.П. с помощью функции tools.get_doc_by_key   oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике   iEventID = oEv.TopElem.id;   iCollabID = oCollab.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_      _oRes = tools.call_code_library_method ("libEducation", "GetEventActions", [OptInt (iEventID), OptInt (iCollabID)]);   // Проверьте наличие действий, связанных с мероприятием.    // Если действия, связанные с мероприятием, отсутствуют, добавьте одно или несколько таких действий.   bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество действий = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';        // * @property {bigint} id        // * @property {string} name        // * @property {string} action_type        // * @property {string} action_id        // * @property {string} method        res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';         res_action_type = q.action_type;        str = str + 'res_action_type = ' + res_action_type + '\n';        res_action_id = q.action_id;        str = str + 'res_action_id = ' + res_action_id + '\n';        res_method = q.method;        str = str + 'res_method = ' + res_method + '\n';        alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`  

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEducation", "GetEventActions", [OptInt (iEventID, curObjectID), OptInt (iCurUserID, curUserID)]).array;_`

---

