## GetEventTestLearnings

Метод предназначен для получения списка тестов, которые были назначены участникам мероприятия и завершены ими.  
См. также – метод **GetEventActiveTestLearnings**.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEventTestLearnings", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iEventID_ – ID мероприятия (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень завершенных тестов по мероприятию, а также ряд дополнительных атрибутов:  
\- _array_ \- массив завершенных тестов (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID завершенного теста (целое число);  
     _person\_fullname_ – ФИО сотрудника, завершившего тест (строка);  
     _score_ – набранное количество баллов (целое число);  
     _start\_usage\_date_ – начало сдачи теста (дата).  
     _status_ – статус теста (строка);  
     _event\_name_ – название мероприятия (строка);  
     _name_ – название теста (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEventTestLearnings", [OptInt (iEventID)]);      // Проверьте наличие завершенных тестов по мероприятию: Учебный центр - Карточка мероприятия - Тестирования   // Если завершенные тесты по мероприятию отсутствуют, завершите один или несколько тестов.      // Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6821181243535342450,  
        "person\_fullname": "Васильева Людмила Петровна",  
        "score": 0,  
        "start\_usage\_date": "2020-07-09T16:47:52+00:00",  
        "status": "Не пройден",  
        "event\_name": "Делегирование",  
        "name": "Занимательная география"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetEventTestLearnings", [OptInt (iEventID)]);      // Проверьте наличие завершенных тестов по мероприятию: Учебный центр - Карточка мероприятия - Тестирования   // Если завершенные тесты по мероприятию отсутствуют, завершите один или несколько тестов.      bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество завершенных тестов = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';           // * @property {bigint} id        // * @property {string} person_fullname        // * @property {int} score        // * @property {date} start_usage_date        // * @property {string} status        // * @property {string} event_name        // * @property {string} name_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_person_fullname = q.person_fullname;        str = str + 'res_person_fullname = ' + res_person_fullname + '\n';         res_score = q.score;        str = str + 'res_score = ' + res_score + '\n';        res_start_usage_date = q.start_usage_date;        str = str + 'res_start_usage_date = ' + res_start_usage_date + '\n';        res_status = q.status;        str = str + 'res_status = ' + res_status + '\n';        res_event_name = q.event_name;        str = str + 'res_event_name = ' + res_event_name + '\n';        res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';           alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`  

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEducation", "GetEventTestLearnings", [OptInt (iEventID, curObjectID)]).array;_`

---

