## GetTestLearnings

Метод предназначен для получения списка результатов тестирования, полученных сотрудником в процессе участия в мероприятии.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libMain", "GetTestLearnings", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя три параметра:  
     _iPersonID_ – ID сотрудника (целое число).   
     _iAssessmentID_ – ID теста (целое число).  
     _iEventID_ – ID мероприятия (целое число).

_Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень результатов тестирования, полученных сотрудником в процессе участия в мероприятии, а также ряд дополнительных атрибутов:  
\- _array_ \- массив результатов тестирования (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID результата тестирования (целое число);  
     _person\_fullname_ – ФИО сотрудника, проходящего тестирование, связанное с мероприятием (строка);  
     _score_ – набранное количество баллов (целое число);  
     _start\_usage\_date_ – начало действия, связанного с тестированием (например, назначения теста, сдачи теста и т.д.) (дата);  
     _status_ – статус теста (например, _"Назначен", "Пройден", "Не пройден"_ и т.д.) (строка);  
     _event\_name_ – название мероприятия (строка);  
     _name_ – название теста (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции_ _tools.get_doc_by_key_   _oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_// Пусть в системе имеется тест с названием «Знаете ли Вы литературу»   // Находим программно указанный тест с помощью функции tools.get_doc_by_key   oTest = tools.get_doc_by_key ( 'assessment', 'title', 'Знаете ли Вы литературу' );   alert ( 'Найден тест ' + oTest.TopElem.title + ' с идентификационным номером ' + oTest.DocID ); // на экран выводится информация об отобранном тесте_`

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции tools.get_doc_by_key   oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.DocID); // на экран выводится информация об отобранном мероприятии_`

`_iCollabID = oCollab.DocID;   iTestID = oTest.DocID;   iEventID = oEv.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetTestLearnings", [OptInt (iCollabID), OptInt (iTestID), OptInt (iEventID)]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6821181243535342484,  
        "person\_fullname": "Васильева Людмила Петровна",  
        "score": 0,  
        "start\_usage\_date": "2020-08-10T11:38:42+00:00",  
        "status": "Назначен",  
        "event\_name": "Делегирование",  
        "name": "Знаете ли Вы литературу"  
    }, {  
        "id": 6821181243535342483,  
        "person\_fullname": "Васильева Людмила Петровна",  
        "score": 0,  
        "start\_usage\_date": "2020-08-10T11:19:07+00:00",  
        "status": "Не пройден",  
        "event\_name": "Делегирование",  
        "name": "Знаете ли Вы литературу"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции_ _tools.get_doc_by_key_   _oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_// Пусть в системе имеется тест с названием «Знаете ли Вы литературу»   // Находим программно указанный тест с помощью функции tools.get_doc_by_key   oTest = tools.get_doc_by_key ( 'assessment', 'title', 'Знаете ли Вы литературу' );   alert ( 'Найден тест ' + oTest.TopElem.title + ' с идентификационным номером ' + oTest.DocID ); // на экран выводится информация об отобранном тесте_`

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции tools.get_doc_by_key   oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.DocID); // на экран выводится информация об отобранном мероприятии_`

`_iCollabID = oCollab.DocID;   iTestID = oTest.DocID;   iEventID = oEv.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetTestLearnings", [OptInt (iCollabID), OptInt (iTestID), OptInt (iEventID)]);_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество результатов тестирования = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_person_fullname = q.person_fullname;        str = str + 'res_person_fullname = ' + res_person_fullname + '\n';        res_score = q.score;        str = str + 'res_score = ' + res_score + '\n';        res_start_usage_date = q.start_usage_date;        str = str + 'res_start_usage_date = ' + res_start_usage_date + '\n';        res_status = q.status;        str = str + 'res_status = ' + res_status + '\n';        res_event_name = q.event_name;        str = str + 'res_event_name = ' + res_event_name + '\n';        res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';_`

     `_alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

---

