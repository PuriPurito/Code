## GetObjectResponses

Метод предназначен для получения списка отзывов по объекту.

В качестве аргумента необходимо выбрать объект, на который в системе имеются отзывы. 

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libMain", "GetObjectResponses", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iObjectID_ – ID объекта, имеющего ссылки на значения карты знаний (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень отзывов по объекту, а также ряд дополнительных атрибутов:  
\- _array_ \- массив отзывов (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID отзыва (целое число);  
     _person\_fullname_ – ФИО сотрудника, оставившего отзыв (строка);  
     _create\_date_ – дата создания отзыва (дата);  
     _link_ – относительная ссылка на карточку отзыва (строка);  
     _type_ – тип отзыва (строка);  
     basic\_desc - описание (строка);  
     basic\_score - базовая оценка (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется мероприятие «Навыки строительства команды»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Навыки строительства команды' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetObjectResponses", [OptInt (iEventID)]);_`  
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 5373901041188231315,  
        "person\_fullname": "Калинин Михаил Михайлович",  
        "create\_date": "2009-08-26T16:52:43+00:00",  
        "link": ""  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется мероприятие «Навыки строительства команды»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Навыки строительства команды' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetObjectResponses", [OptInt (iEventID)]);_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество отзывов = " + ArrayCount (RESULT));_`

`_for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_person_fullname = q.person_fullname;        str = str + 'res_person_fullname = ' + res_person_fullname + '\n';         res_create_date = q.create_date;        str = str + 'res_create_date = ' + res_create_date + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';_`

     `_alert ( str );   }_`  
  
`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

---

