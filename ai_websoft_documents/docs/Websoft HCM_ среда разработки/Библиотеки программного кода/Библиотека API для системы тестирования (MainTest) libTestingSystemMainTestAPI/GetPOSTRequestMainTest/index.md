## GetPOSTRequestMainTest

Метод **GetPOSTRequestMainTest** предназначен для обработки POST-запроса по окончанию тестирования в MainTest.  
Это точка вызова api, которая передается стороннему серверу тестирования. После этого сторонний сервер тестирования по этому адресу передаёт результаты.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTestingSystemMainTestAPI", "GetPOSTRequestMainTest", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя восемь параметров:  
     _Passed_ \- признак завершения сессии (сеанса) (целое число).  
     _ExternalSessionGuid_ – внешний идентификатор сессии в текстовом формате (строка).  
     _SessionCreatedTime_ \- дата и время создания сессии (строка).  
     _SessionModifiedTime_ \- дата и время завершения сессии (строка).  
     _SessionTime_ \- время прохождения (строка).  
     _SessionState_ \- статус прохождения (строка).  
     _SessionProgressPercent_ \- процент прохождения (строка).  
     _TestName_ \- имя теста MainTest (строка).

_Возвращаемое значение:_  
      Тип: **Объект**.Содержит следующие атрибуты:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTestingSystemMainTestAPI", "GetPOSTRequestMainTest", [Passed, ExternalSessionGuid, SessionCreatedTime, SessionModifiedTime, SessionTime, SessionState, SessionProgressPercent, TestName]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

