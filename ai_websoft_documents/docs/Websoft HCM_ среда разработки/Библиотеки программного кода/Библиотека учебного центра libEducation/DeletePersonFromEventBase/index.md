## DeletePersonFromEventBase

Метод предназначен для удаления сотрудника из мероприятия (аналогично функции tools.del\_person\_from\_event).

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "DeletePersonFromEventBase", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя два параметра:  
     _iPersonIDParam_ – ID сотрудника (целое число).   
     _iEventIDParam_ – ID мероприятия (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит ряд атрибутов:  
\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

Если сотрудник не был ранее включен в состав участников мероприятия, метод возвращает результат _false_. 

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции_` _tools.get\_doc\_by\_key_  
`_oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции tools.get_doc_by_key   oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iPersonIDParam = oCollab.DocID;   iEventIDParam = oEv.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "DeletePersonFromEventBase", [OptInt (iPersonIDParam), OptInt (iEventIDParam)]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": "",  
    "result": true  
}

_Пример 2:_       

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции_` _tools.get\_doc\_by\_key_  
`_oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции tools.get_doc_by_key   oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iPersonIDParam = oCollab.DocID;   iEventIDParam = oEv.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "DeletePersonFromEventBase", [OptInt (iPersonIDParam), OptInt (iEventIDParam)]);_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_      `

---

