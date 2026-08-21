## PersonnelReserveAddTutor

Метод **PersonnelReserveAddTutor** предназначен для добавления наставника в кадровый резерв.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "PersonnelReserveAddTutor", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя пять параметров:  
     _arrPersonnelReserveIDs_ \- массив ID кадровых резервов (массив целых чисел).  
     _iTutorIDParam_ \- ID наставника (целое число).  
     _iTutorTypeIDParam_ \- ID типа наставника (целое число).  
     _bSendMessage_ \- производится ли отправка уведомлений сотруднику при изменении плана (булево).   
     _oSendParam_ - параметры отправки уведомлений (объект). В состав объекта могут входить следующие параметры: send\_type, body\_type, subject, body, recipients, bSendNotificationCollaborator, iTypeNotificationCollaborator, iCollaboratorNotificationID, bSendNotificationTutor, iTypeNotificationTutor, iOldTutorNotificationID, iNewTutorNotificationID, custom\_text и др.

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _count_ – количество сформированных объектов (целое число).  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "PersonnelReserveAddTutor", [arrPersonnelReserveIDs, iTutorIDParam, iTutorTypeIDParam, bSendMessage, oSendParam]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

