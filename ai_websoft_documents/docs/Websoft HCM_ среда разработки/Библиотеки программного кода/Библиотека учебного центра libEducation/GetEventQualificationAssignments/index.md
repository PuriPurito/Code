## GetEventQualificationAssignments

Метод предназначен для получения переченя квалификаций, назначенных сотрудникам по итогам мероприятия.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEventQualificationAssignments", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iEventID_ – ID мероприятия (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень квалификаций, связанных с мероприятием, а также ряд дополнительных атрибутов:  
\- _array_ \- массив квалификаций, связанных с мероприятием (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID квалификации (целое число);  
     _person\_fullname_ – ФИО сотрудника (строка);  
     _status_ – статус присвоения квалификации (строка);  
     _event\_name_ – название мероприятия (строка);  
     _qualification\_name_ – название квалификации (строка);  
     _assignment\_date_ – дата присвоения квалификации (дата).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEventQualificationAssignments", [OptInt (iEventID)]);_`

`_// Проверьте назначение квалификаций для участников мероприятия: Учебный центр - Карточка мероприятия - Файлы   // Если участникам мероприятия файлы не назначены, произведите назначение, нажав на кнопку "Присвоить квалификации"._`  
 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
 

_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6821181243535342454,  
        "person\_fullname": "Жирова Антонина Васильевна",  
        "status": "Присвоена",  
        "event\_name": "Делегирование",  
        "qualification\_name": "Сдал набор тестов для новичков",  
        "assignment\_date": "2020-07-15T00:00:00+00:00"  
    }, {  
        "id": 6821181243535342453,  
        "person\_fullname": "Васильева Людмила Петровна",  
        "status": "Присвоена",  
        "event\_name": "Делегирование",  
        "qualification\_name": "Сдал набор тестов для новичков",  
        "assignment\_date": "2020-07-15T00:00:00+00:00"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEventQualificationAssignments", [OptInt (iEventID)]);      // Проверьте назначение квалификаций для участников мероприятия: Учебный центр - Карточка мероприятия - Файлы   // Если участникам мероприятия файлы не назначены, произведите назначение, нажав на кнопку "Присвоить квалификации".      bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество прикрепленных файлов = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';           // * @property {bigint} id        // * @property {string} person_fullname        // * @property {date} assignment_date        // * @property {string} status        // * @property {string} qualification_name        // * @property {string} event_name           res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_person_fullname = q.person_fullname;        str = str + 'res_person_fullname = ' + res_person_fullname + '\n';        res_assignment_date = q.assignment_date;        str = str + 'res_assignment_date = ' + res_assignment_date + '\n';        res_status = q.status;        str = str + 'res_status = ' + res_status + '\n';        res_qualification_name = q.qualification_name;        str = str + 'res_qualification_name = ' + res_qualification_name + '\n';        res_event_name = q.event_name;        str = str + 'res_event_name = ' + res_event_name + '\n';_`  
  
     `_alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEducation", "GetEventQualificationAssignments", [OptInt (iEventID, curObjectID)]).array;_`

---

