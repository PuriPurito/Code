## ProcessWorkflowActions

Метод **ProcessWorkflowActions** предназначен для выполнения действий документооборота.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libWorkspace", "ProcessWorkflowActions", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя четыре параметра:   
     _iTaskID_ \- ID задачи в текстовом формате (строка).  
     _sActionID_ \- ID действия в текстовом формате (строка).  
     _docTask_ \- документ задачи (объект XmlDoc).  
     _oRemoteActionParam_ \- параметры удаленного действия документооборота (объект).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _result_ – результат вызова метода (true – если операция завершилась успешно, false – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _error\_string_ – текст ошибки (строка).

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWorkspace", "ProcessWorkflowActions", [iTaskID, sActionID, docTask, oRemoteActionParam]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

