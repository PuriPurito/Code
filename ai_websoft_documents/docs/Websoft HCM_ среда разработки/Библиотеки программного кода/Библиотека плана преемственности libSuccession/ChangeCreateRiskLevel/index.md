## ChangeCreateRiskLevel

Метод **ChangeCreateRiskLevel** предназначен для создания/изменения фактора риска.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libSuccession", "ChangeCreateRiskLevel", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _iObjectID_ \- ID фактора риска (целое число).  
     _sCodeValue_ \- код фактора риска (строка).  
     _sNameValue_ \- название фактора риска (строка).

_Возвращаемые значения:_  
      Тип:  **_Объект_**. Содержит следующие атрибуты:  
\- _result_ – результат вызова метода (строка).  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libSuccession", "ChangeCreateRiskLevel", [iObjectID, sCodeValue, sNameValue]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

