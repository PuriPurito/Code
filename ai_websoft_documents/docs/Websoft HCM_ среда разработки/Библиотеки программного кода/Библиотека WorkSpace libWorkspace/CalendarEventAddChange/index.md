## CalendarEventAddChange

Метод **CalendarEventAddChange** предназначен для добавления/изменения события календаря.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libWorkspace", "CalendarEventAddChange", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _iCalendarEventID_ \- ID события для изменения (целое число).  
     _oParams_ \- параметры создания/изменения события календаря (объект). В состав объекта могут входить следующие параметры: name - название события (строка); event\_type - тип события при создании (строка); poll\_id - ID опроса (целое число); start\_date - дата начала (дата);  end\_date - дата завершения (дата); tutors - список ID организаторов (массив целых чисел); participants - список ID участников (массив целых чисел); desc - описание (строка).   
     _oParamNotification_ \- параметры отправки уведомлений участникам и организаторам при удалении события (объект). В состав объекта могут входить следующие параметры: bSentNotificationMembers - отправлять ли уведомления участникам (булево); iNotificationCreateWebinarMembers - ID типа уведомления участников о создании вебинара (целое число); iNotificationChangeWebinarMembers - ID типа уведомления участников о изменении вебинара (целое число); iNotificationCreateCallMembers - ID типа уведомления участников о создании звонка (целое число); iNotificationChangeCallMembers - ID типа уведомления участников о изменении звонка (целое число); bSentNotificationCreator - отправлять ли уведомления организатору (целое число); iNotificationCreateWebinarCreator - ID типа уведомления организатора о создании вебинара (целое число); iNotificationChangeWebinarCreator - ID типа уведомления организатора о изменении вебинара (целое число); iNotificationCreateCallCreator - ID типа уведомления организатора о создании звонка (целое число); iNotificationChangeCallCreator - ID типа уведомления организатора о изменении звонка (целое число).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWorkspace", "CalendarEventAddChange", [iCalendarEventID, oParams, oParamNotification]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

