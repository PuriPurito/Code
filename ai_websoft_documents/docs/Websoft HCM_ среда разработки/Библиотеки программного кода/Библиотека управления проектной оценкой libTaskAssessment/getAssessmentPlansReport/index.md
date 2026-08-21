## getAssessmentPlansReport

Метод **getAssessmentPlansReport** предназначен для получения отчета по результатам оценки.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTaskAssessment", "getAssessmentPlansReport", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _oReportAssessmentPlan_ \- объект отчета (объект).  
     _iCurUserID_ \- ID текущего пользователя (целое число).  
     _sApplicationID_ \- ID приложения (целое число).

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит отчет по результатам оценки, а также ряд дополнительных атрибутов:  
\- oResult – данные отчета по результатам оценки (объект).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTaskAssessment", "getAssessmentPlansReport", [oReportAssessmentPlan, curUserID, sApplicationID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

