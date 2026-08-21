## UpdateProctoringSession

Метод **UpdateProctoringSession** предназначен для обновления прокторинговых сессий.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libProctor", "UpdateProctoringSession", \[\])**

_Аргументы:_  
     Метод вызывается без указания аргументов.

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _message_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libProctor", "UpdateProctoringSession", []);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

