## CalendarEventCallDelete

Метод **CalendarEventCallDelete** предназначен для удаления событий календаря.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libWorkspace", "CalendarEventCallDelete", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя четыре параметра:  
     _arrObjectIDs_ \- массив ID событий календаря (массив целых чисел).  
     _aCalendarEventState_ \- типы событий, которые можно удалять (массив строк).  
     _aCalendarEventState_ \- статусы событий, которые можно удалять (массив строк).  
     _oParamSend_ \- параметры отправки уведомлений участникам и организаторам при удалении события (объект). В состав объект входят следующие параметры: bSentNotificationMembers - отправлять ли уведомления участникам (булево), iNotificationCreateWebinarMembers - ID типа уведомления участников о создании вебинара (целое число), iNotificationChangeWebinarMembers - ID типа уведомления участников о изменении вебинара (целое число), iNotificationCreateCallMembers - ID типа уведомления участников о создании звонка (целое число), iNotificationChangeCallMembers - ID типа уведомления участников о изменении звонка (целое число), bSentNotificationCreator - отправлять ли уведомления организатору (булево), iNotificationCreateWebinarCreator - ID типа уведомления организатора о создании вебинара (целое число), iNotificationChangeWebinarCreator - ID типа уведомления организатора о изменении вебинара (целое число), iNotificationCreateCallCreator - ID типа уведомления организатора о создании звонка (целое число), iNotificationChangeCallCreator - ID типа уведомления организатора о изменении звонка (целое число). 

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _count_ – количество удаленных объектов (целое число).  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWorkspace", "CalendarEventCallDelete", [arrObjectIDs, aCalendarEventType, aCalendarEventState, oParamSend]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

