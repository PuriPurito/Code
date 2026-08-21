## GetPersonContinuousFeedbackContext

Метод **GetPersonContinuousFeedbackContext** предназначен для получения контекста непрерывной обратной связи.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libContinuousFeedback", "GetPersonContinuousFeedbackContext", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
Метод вызывается без аргументов. Для данного метода используется пустой массив аргументов.

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит данные о контексте непрерывной обратной связи, а также ряд дополнительных атрибутов:  
\- result – объект результата (объект).  
     Атрибуты объекта:  
     _bCanResponse_ – значение параметра can\_response приложения websoft\_continuous\_feedback (булево).   
     _bCanRequestResponse_ – значение параметра can\_request\_response приложения websoft\_continuous\_feedback (булево).  
     _bCanRequestResponseOther_ – значение параметра can\_request\_response\_other приложения websoft\_continuous\_feedback (булево).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libContinuousFeedback", "GetPersonContinuousFeedbackContext", []);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

