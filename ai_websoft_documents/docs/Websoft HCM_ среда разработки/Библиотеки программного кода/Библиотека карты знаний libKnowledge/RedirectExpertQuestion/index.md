## RedirectExpertQuestion

Метод **RedirectExpertQuestion** предназначен для перенаправления вопросов эксперту.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libKnowledge", "RedirectExpertQuestion", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя два параметра:  
     _arrExpertQuestionIDs_ \- массив ID вопросов эксперту, подлежащих перенаправлению (массив целых чисел).  
     _iExpertID_ \- ID эксперта, на которого перенаправляются вопросы (целое число).

_Возвращаемое значение:_  
      Тип:  **Объект**. Содержит ряд атрибутов:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libKnowledge", "RedirectExpertQuestion", [arrExpertQuestionIDs, iExpertID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

