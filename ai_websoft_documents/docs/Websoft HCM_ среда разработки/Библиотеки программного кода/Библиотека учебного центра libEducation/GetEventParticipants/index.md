## GetEventParticipants

Метод предназначен для получения списка объектов результатов участия в мероприятии.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEventParticipants", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя четыре параметра:  
     _iEventID_ – ID мероприятия (целое число).    
     _iCurUserID_ – ID пользователя (сотрудника), относительно подразделения которого извлекаются данные (целое число).   
     _bShowAllSub_ – Включает/выключает отображение всех участников мероприятия (булево). Если параметр равен _false_, то отображаются только участники из подразделения текущего пользователя. По умолчанию - _false_.  
     _bShowDismiss_ – Включает/выключает отображение уволенных участников (булево). Если параметр равен _false_, то уволенные сотрудники не отображаются. По умолчанию - _false_.

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень объектов результатов участия в мероприятии, а также ряд дополнительных атрибутов:  
\- _array_ \- массив результатов участия сотрудников в мероприятии (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID объекта результата участия в мероприятии (целое число);  
     _person\_id_ – ID сотрудника, участвующего в мероприятии (целое число);  
     _person\_fullname_ – ФИО сотрудника, участвующего в мероприятии (строка);  
     _person\_position\_name_ – должность сотрудника (строка);  
     _is\_confirm_ – признак принятия приглашения на участие в мероприятии (будево);  
     _is\_assist_ – признак присутствия на мероприятии (булево);  
     _link_ – относительная ссылка на страницу участника мероприятия(строка);  
     _pict\_url_ – относительная ссылка на фотографию участника мероприятия (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии      // Пусть в системе имеется сотрудник Васильева Людмила Петровна, подразделение которой принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции tools.get_doc_by_key   oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике      iEventID = oEv.TopElem.id;   iCurUserID = oCollab.DocID;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetEventParticipants", [OptInt (iEventID), OptInt (iCurUserID), false, false]);_`

`_// Проверьте состав участников мероприятия: Учебный центр - Карточка мероприятия - Сотрудники   // Если в мероприятии участники отсутствуют, произведите добавление сотрудников в мероприятие, нажав на кнопки "Выбрать сотрудников" или "Выбрать из числа подавших заявку"._`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
 

_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 5371650452201307044,  
        "person\_id": 3050438886317795229,  
        "person\_fullname": "Васильева Людмила Петровна",  
        "person\_position\_name": "Ведущий специалист",  
        "is\_confirm": false,  
        "is\_assist": true,  
        "link": "view\_doc.html?mode=collaborator&object\_id=3050438886317795229",  
        "pict\_url": "/person\_icon.html?id=3050438886317795229"  
    }, {  
        "id": 5371650452201307045,  
        "person\_id": 5293675553778464355,  
        "person\_fullname": "Жирова Антонина Васильевна",  
        "person\_position\_name": "Руководитель отдела",  
        "is\_confirm": false,  
        "is\_assist": true,  
        "link": "view\_doc.html?mode=collaborator&object\_id=5293675553778464355",  
        "pict\_url": "/person\_icon.html?id=5293675553778464355"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии      // Пусть в системе имеется сотрудник Васильева Людмила Петровна, подразделение которой принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции tools.get_doc_by_key   oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике      iEventID = oEv.TopElem.id;   iCurUserID = oCollab.DocID;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEventParticipants", [OptInt (iEventID), OptInt (iCurUserID), false, false]);      // Проверьте состав участников мероприятия: Учебный центр - Карточка мероприятия – Сотрудники   // Если в мероприятии участники отсутствуют, произведите добавление сотрудников в мероприятие, нажав на кнопки "Выбрать сотрудников" или "Выбрать из числа подавших заявку".      bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество результатов участников мероприятия = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';        res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';        res_person_id = q.person_id;        str = str + 'res_person_id = ' + res_person_id + '\n';        res_person_fullname = q.person_fullname;        str = str + 'res_person_fullname = ' + res_person_fullname + '\n';         res_person_position_name = q.person_position_name;        str = str + 'res_person_position_name = ' + res_person_position_name + '\n';         res_is_confirm = q.is_confirm;        str = str + 'res_is_confirm = ' + res_is_confirm + '\n';         res_is_assist = q.is_assist;        str = str + 'res_is_assist = ' + res_is_assist + '\n';         res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';         res_pict_url = q.pict_url;        str = str + 'res_pict_url = ' + res_pict_url + '\n';        alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEducation", "GetEventParticipants", [OptInt (iEventID, curObjectID), OptInt (iCurUserID, curUserID), bShowAllSub, bShowDismiss]).array;_`

---

