## ActivateEducationProgramToPersonBase

Метод предназначен для назначения сотруднику курсов, которые указаны в учебных программах (с типом **"Электронный курс"**), перечисленных в наборе программ (аналогично функции tools.activate\_education\_program\_to\_person).

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "ActivateEducationProgramToPersonBase", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя два параметра:  
     _iEducationProgramIDParam_ – ID набора программ (целое число).    
     _iPersonIDParam_ – ID сотрудника (целое число). 

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит ряд атрибутов:  
\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).  
\- _count_ – количество назначенных наборов программ (целое число).  
 

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется набор учебных программ «Наставничество и делегирование»   // Находим набор учебных программ «Наставничество и делегирование»_` _с помощью функции_ _tools.get\_doc\_by\_key_  
`_oEdPr = tools.get_doc_by_key ( 'education_program', 'name', 'Наставничество и делегирование' );   alert ( 'Найден набор учебных программ ' + oEdPr.TopElem.name + ' с идентификационным номером ' + oEdPr.DocID ); // на экран выводится информация об отобранном наборе учебных программ_`

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции tools.get_doc_by_key   oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_iEdPrID = oEdPr.DocID;   iCurUserID = oCollab.DocID;_`

`_// Вызов метода_ _с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "ActivateEducationProgramToPersonBase", [OptInt (iEdPrID), OptInt (iCurUserID)]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": "",  
    "count": 1,  
    "result": true  
}

_Пример 2:_       

`_// Пусть в системе имеется набор учебных программ «Наставничество и делегирование»   // Находим набор учебных программ «Наставничество и делегирование»_` _с помощью функции_ _tools.get\_doc\_by\_key_  
`_oEdPr = tools.get_doc_by_key ( 'education_program', 'name', 'Наставничество и делегирование' );   alert ( 'Найден набор учебных программ ' + oEdPr.TopElem.name + ' с идентификационным номером ' + oEdPr.DocID ); // на экран выводится информация об отобранном наборе учебных программ_`

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции tools.get_doc_by_key   oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_iEdPrID = oEdPr.DocID;   iCurUserID = oCollab.DocID;_`

`_// Вызов метода_ _с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "ActivateEducationProgramToPersonBase", [OptInt (iEdPrID), OptInt (iCurUserID)]);_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_   `

---

