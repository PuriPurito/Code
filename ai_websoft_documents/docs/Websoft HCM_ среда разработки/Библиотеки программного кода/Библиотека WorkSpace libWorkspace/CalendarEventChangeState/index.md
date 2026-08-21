## CalendarEventChangeState

Метод **CalendarEventChangeState** предназначен для изменения статуса событий календаря.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libWorkspace", "CalendarEventChangeState", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _arrCalendarEventIDs_ \- массив ID событий календаря (массив целых чисел).  
     _sNewState_ \- новый статус (строка).  
     _oParamSend_ \- параметры отправки уведомлений участникам и организаторам при отмене события (объект). В состав объект входят следующие параметры: bSentNotificationMembers - отправлять ли уведомления об отмене участникам (булево), iNotificationCancelWebinarMembers - ID типа уведомления участников о удалении вебинара (целое число), iNotificationCancelCallMembers - ID типа уведомления участников о удалении звонка (целое число), bSentNotificationCreator - отправлять ли уведомления об отмене организатору (булево), iNotificationCancelWebinarCreator - ID типа уведомления организатора о удалении вебинара (целое число), iNotificationCancelCallCreator - ID типа уведомления организатора о удалении звонка (целое число).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- count – количество измененных объектов (целое число).  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWorkspace", "CalendarEventChangeState", [arrCalendarEventIDs, sNewState, oParamSend]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

