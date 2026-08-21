## TaskAssessmentAppraiseChangeState

Метод **TaskAssessmentAppraiseChangeState** предназначен для измения статуса процедуры проектной оценки.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTaskAssessment", "TaskAssessmentAppraiseChangeState", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя два параметра:  
     _arrAssessmentAppraiseIDs_ \- массив ID процедур оценки (массов целых чисел).   
     _sState_ \- статус процедуры оценки (строка). 

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTaskAssessment", "TaskAssessmentAppraiseChangeState", [arrAssessmentAppraiseIDs, sState]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

