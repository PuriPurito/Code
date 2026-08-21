## CreateResultsEventBase

Метод предназначен для создания результатов мероприятия.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "CreateResultsEventBase", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iEventIDParam_ – ID мероприятия (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит ряд атрибутов:  
\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

_// Данный агент должен быть выполнен на сервере_   
  
`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие_` _с помощью функции_ _tools.get\_doc\_by\_key_  
`_oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.TopElem.id;_`

`_// Вызов метода_ _с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "CreateResultsEventBase", [OptInt (iEventID)]);      // Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": "",  
    "result": true  
}

_Пример 2:_       

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие_` _с помощью функции_ _tools.get\_doc\_by\_key_  
`_oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.TopElem.id;_`

`_// Вызов метода_ _с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "CreateResultsEventBase", [OptInt (iEventID)]);_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_   `

---

