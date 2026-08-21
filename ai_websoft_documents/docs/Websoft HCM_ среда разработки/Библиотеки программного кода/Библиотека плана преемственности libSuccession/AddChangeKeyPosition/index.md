## AddChangeKeyPosition

Метод **AddChangeKeyPosition** предназначен для добавления/изменения ключевой должности.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libSuccession", "AddChangeKeyPosition", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя девять параметров:  
     _sFormCommand_ \- текущий режим удаленного действия (строка).  
     _sFormFields_ \- JSON-строка с возвратом из формы удаленного действия (строка).  
     _iKeyPositionIDParam_ \- ID ключевой должности (целое число).  
     _bSendBossNotification_ \- отправлять уведомления при изменении ключевой должности (булево).  
     _iCurUserID_ \- ID текущего пользователя (целое число).   
     _iCurCareerReserveTypeID_ \- ID (контекстное значение) типа карьерного резерва (целое число).  
     _sStateCreate_ \- статус при создании ключевой должности (целое число).  
     _iAppLevel_ \- уровень приложения (целое число).  
     _iManagerTypeID_ \- ID типа менеджера (целое число).

_Возвращаемые значения:_

\- result – результат вызова метода (объект).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _message_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libSuccession", "AddChangeKeyPosition", [sFormCommand, sFormFields, iKeyPositionIDParam, bSendBossNotification, iCurUserID, iCurCareerReserveTypeID, sStateCreate, iAppLevel, iManagerTypeID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

