## getReportFeedbackResult

Метод **getReportFeedbackResult** предназначен для получения отчета по результатам оценки.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libContinuousFeedback", "getReportFeedbackResult", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _oReportFeedbackResult_ \- объект отчета (объект).  
     _iCurUserID_ \- ID текущего пользователя (целое число).  
     _sApplicationID_ \- ID приложения (строка).

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит данные отчета по результатам оценки, а также ряд дополнительных атрибутов:  
\- oResult - данные отчета по результатам оценки (объект).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libContinuousFeedback", "getReportFeedbackResult", [oReportFeedbackResult, curUserID, sApplicationID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

