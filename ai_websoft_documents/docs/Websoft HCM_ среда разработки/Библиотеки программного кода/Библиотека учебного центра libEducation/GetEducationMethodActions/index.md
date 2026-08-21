## GetEducationMethodActions

Метод предназначен для получения списка действий с учебной программой.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEducationMethodActions", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя два параметра:   
     _iEventID_ – ID мероприятия (целое число).    
     _iCurUserID_ \- ID пользователя (сотрудника), относительно подразделения которого извлекаются данные (целое число). 

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень действий с учебной программой, а также ряд дополнительных атрибутов:  
\- _array_ \- массив действий с учебной программой (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID действия, связанного с учебной программой (целое число);  
     _name_ – название действия (строка);  
     _action\_type_ – тип действия (строка);  
     _action\_id_ – идентификатор действия (строка);  
     _method_ – название метода выполнения действия (строка);  
     _url_ – URL страницы действия (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется учебная программа «Английский язык»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Английский язык' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе_`  
  
`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, подразделение которой принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции tools.get_doc_by_key   oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_iEduMethodID = oEdMeth.TopElem.id;   iCurUserID = oCollab.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetEducationMethodActions", [OptInt (iEduMethodID), OptInt (iCurUserID)]);_`

`_// Проверьте наличие действий, связанных с мероприятием.    // Если действия, связанные с мероприятием, отсутствуют, добавьте одно или несколько таких действий._`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_  
{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 55639663,  
        "name": "Заявка на прохождение учебной программы",  
        "action\_type": "remote\_action",  
        "action\_id": "lp\_event\_action",  
        "method": "open\_url",  
        "url": "view\_doc.html?mode=request\_create&doc\_id=&type=education\_method& request\_object\_id=182862116452969502&request\_type\_id=768614336404564682&new=1"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется учебная программа «Английский язык»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Английский язык' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе_`  
  
`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, подразделение которой принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции tools.get_doc_by_key   oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_iEduMethodID = oEdMeth.TopElem.id;   iCurUserID = oCollab.DocID;      // Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEducationMethodActions", [OptInt (iEduMethodID), OptInt (iCurUserID)]);_`

`_// Проверьте наличие действий, связанных с мероприятием.    // Если действия, связанные с мероприятием, отсутствуют, добавьте одно или несколько таких действий._`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество действий = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_// * @property {bigint} id        // * @property {string} name        // * @property {string} action_type        // * @property {string} action_id        // * @property {string} method        // * @property {string} url_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';         res_action_type = q.action_type;        str = str + 'res_action_type = ' + res_action_type + '\n';        res_action_id = q.action_id;        str = str + 'res_action_id = ' + res_action_id + '\n';        res_method = q.method;        str = str + 'res_method = ' + res_method + '\n';        res_url = q.url;        str = str + 'res_url = ' + res_url + '\n';_`

     `_alert ( str );   }_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEducation", "GetEducationMethodActions", [OptInt (iEduMethodID, curObjectID), OptInt (iCurUserID, curUserID)]).array;_`

---

