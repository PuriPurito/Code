## GetCertificates

Метод предназначен для получения списка сертификатов, выданных сотруднику как участнику мероприятия.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libMain", "GetCertificates", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя два параметра:  
     _iPersonID_ – ID пользователя (целое число).   
     _iEventID_ – ID мероприятия (целое число). 

_Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень Содержит перечень сертификатов, выданных сотруднику как участнику мероприятия, а также ряд дополнительных атрибутов:  
\- _array_ \- массив сертификатов  (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID сертификата (целое число);  
     _person\_fullname_ – ФИО сотрудника, которому был выдан сертификат (строка);  
     _type\_name_ \- название типа сертификата (строка);  
     _serial_ – серийный номер (серия) сертификата (строка);  
     _number_ – порядковый номер сертификата (строка);  
     _event\_name_ – название мероприятия (строка);  
     _expire\_date_ – дата завершения срока действия сертфиката (дата).  
  
\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции_ _tools.get_doc_by_key_   _oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции tools.get_doc_by_key   oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iCollabID = oCollab.DocID;   iEventID = oEv.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetCertificates", [OptInt (iCollabID), OptInt (iEventID)]);_`  
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6821181243535342447,  
        "person\_fullname": "Васильева Людмила Петровна",  
        "type\_name": "Сертификат Корпоративного университета",  
        "serial": "",  
        "number": "0000000000000000001",  
        "event\_name": "Делегирование",  
        "expire\_date": "2030-07-13T14:01:00+00:00"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции_ _tools.get_doc_by_key_   _oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции tools.get_doc_by_key   oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iCollabID = oCollab.DocID;   iEventID = oEv.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetCertificates", [OptInt (iCollabID), OptInt (iEventID)]);_`  
 

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество сертификатов = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_person_fullname = q.person_fullname;        str = str + 'res_person_fullname = ' + res_person_fullname + '\n';         res_type_name = q.type_name;        str = str + 'res_type_name = ' + res_type_name + '\n';        res_serial = q.serial;        str = str + 'res_serial = ' + res_serial + '\n';        res_number = q.number;        str = str + 'res_number = ' + res_number + '\n';        res_event_name = q.event_name;        str = str + 'res_event_name = ' + res_event_name + '\n';        res_expire_date = q.expire_date;        str = str + 'res_expire_date = ' + res_expire_date + '\n';_`

     `_alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

---

