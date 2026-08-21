## GetEventCertificates

Метод предназначен для получения списка сертификатов, выданных по итогам проведения мероприятия.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEventCertificates", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iEventID_ – ID мероприятия (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень сертификатов, которые были назначены участникам мероприятия, а также ряд дополнительных атрибутов:  
\- _array_ \- массив сертификатов, которые были назначены участникам в рамках мероприятия (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID сертификата (целое число);  
     _person\_fullname_ – ФИО сотрудника, которому в рамках мероприятия был выдан сертификат (строка);  
     _type\_name_ – название выданного сертификата (строка);  
     _serial_ – номер сертификата (строка);  
     number – порядковый номер сертификата в данном мероприятии (строка);  
     event\_name – название мероприятия (строка);  
     _expire\_date_ – дата завершения срока действия выданного сертификата (дата).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetEventCertificates", [OptInt (iEventID)]);      // Проверьте назначение выдачи сертификатов участникам мероприятия: Учебный центр - Карточка мероприятия - Сертификаты   // Если участникам мероприятия не назначена выдача сертификатов, произведите назначение, нажав на кнопку "Выдать сертификаты участникам".      // Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6821181243535342448,  
        "person\_fullname": "Жирова Антонина Васильевна",  
        "type\_name": "Сертификат Корпоративного университета",  
        "serial": "",  
        "number": "0000000000000000002",  
        "event\_name": "Делегирование",  
        "expire\_date": "2030-07-13T14:01:00+00:00"  
    }, {  
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

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`

`_oRes = tools.call_code_library_method ("libEducation", "GetEventCertificates", [OptInt (iEventID)]);_`

`_// Проверьте назначение выдачи сертификатов участникам мероприятия: Учебный центр - Карточка мероприятия - Сертификаты   // Если участникам мероприятия не назначена выдача сертификатов, произведите назначение, нажав на кнопку "Выдать сертификаты участникам"._`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);_`

`_RESULT = oRes.array;   alert ("Количество выданных сертификатов = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_// * @property {bigint} id        // * @property {string} person_fullname        // * @property {date} expire_date        // * @property {string} type_name        // * @property {string} serial        // * @property {string} number        // * @property {string} event_name_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_person_fullname = q.person_fullname;        str = str + 'res_person_fullname = ' + res_person_fullname + '\n';         res_expire_date = q.expire_date;        str = str + 'res_expire_date = ' + res_expire_date + '\n';         res_type_name = q.type_name;        str = str + 'res_type_name = ' + res_type_name + '\n';         res_number = q.number;        str = str + 'res_number = ' + res_number + '\n';         res_event_name = q.event_name;        str = str + 'res_event_name = ' + res_event_name + '\n';         alert ( str );   }_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEducation", "GetEventCertificates", [OptInt(iEventID, curObjectID)]).array;_`

---

