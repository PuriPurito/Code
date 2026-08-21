## GetObjectRequests

Метод предназначен для получения списка заявок по объекту.

В качестве аргумента необходимо выбрать объект, имеющий ссылки на заявки.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libMain", "GetObjectRequests", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iObjectID_ – ID объекта, имеющего ссылки на заявки (целое число). 

_Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень заявок по объекту, а также ряд дополнительных атрибутов:  
\- _array_ \- массив заявок (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID заявки (целое число);  
     _person\_fullname_ – ФИО сотрудника, подавшего заявку (строка);  
     _create\_date_ – дата формирования заявки (дата);  
     _status_ – статус заявки (строка);  
     _link_ – относительная ссылка на карточку заявки (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии      iEventID = oEv.DocID;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetObjectRequests", [OptInt (iEventID)]);_`  
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6821181243535342458,  
        "person\_fullname": "Иванов Иван Иванович",  
        "create\_date": "2020-07-15T16:25:26+00:00",  
        "status": "Активная",  
        "link": "view\_doc.html?mode=request&object\_id=6821181243535342458"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии      iEventID = oEv.DocID;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`

`_oRes = tools.call_code_library_method ("libMain", "GetObjectRequests", [OptInt (iEventID)]);_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество заявок = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_person_fullname = q.person_fullname;        str = str + 'res_person_fullname = ' + res_person_fullname + '\n';         res_create_date = q.create_date;        str = str + 'res_create_date = ' + res_create_date + '\n';         res_status = q.status;        str = str + 'res_status = ' + res_status + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';_`

     `_alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

---

