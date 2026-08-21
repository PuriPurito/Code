## GetRequestContinuousFeedbackCollaborator

Метод **GetRequestContinuousFeedbackCollaborator** предназначен для запроса обратной связи по сотруднику/сотрудникам.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libContinuousFeedback", "GetRequestContinuousFeedbackCollaborator", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя семь параметров:  
     _iCurUserID_ \- ID текущего пользователя (целое число).  
     _iObjectCollID_ \- сотрудник, для кого запрашивается обратная связь по сотрудникам (целое число).  
     _arrResponsePersonIDs_ \- массив ID сотрудников, у которых запрашивается обратная связь (массив целых чисел).  
     _iResponseTypeID_ \- ID типа отзыва (целое число).  
     _dtPlanDate_ \- плановая дата заполнения (дата).   
     _sNotifyResponse_ – режим отправки уведомления (строка). Допустимые значения: "send" (отправлять уведомления), "not\_send" (не отправлять уведомления), "default" (в соответствии с параметрами приложения). Значение по умолчанию - "default".  
     _iNotifyResponseType_ \- ID типа уведомления (целое число).

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит данные запроса обратной связи по сотруднику/сотрудникам, а также ряд дополнительных атрибутов:  
\- oRes - данные о запросе обратной связи по сотруднику/сотрудникам (объект).  
     Атрибуты объекта:  
     count – количество запросов обратной связи (целое число).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libContinuousFeedback", "GetRequestContinuousFeedbackCollaborator", [iCurUserID, iObjectCollID, arrResponsePersonIDs, iResponseTypeID, dtPlanDate, sNotifyResponse, iNotifyResponseType]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

