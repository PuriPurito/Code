## GetActivityController

Метод **GetActivityController** предназначен для создания контроллера активности.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTelemetry", "GetActivityController", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров.  
Данный метод вызывается без аргументов. Для вызова метода используется пустой массив аргументов.

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит экземпляр контроллера активности, а также ряд дополнительных атрибутов:  
\- _oActivityController_ \- экземпляр класса Websoft.OpenTelemetry.ActivityController (объект).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTelemetry", "GetActivityController", []);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

