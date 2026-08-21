## CollaboratorQualificationAssign

Метод **CollaboratorQualificationAssign** предназначен для присваивания бейджа сотрудникам в геймификации.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libGame", "CollaboratorQualificationAssign", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя шесть параметров:  
     _arrCollabIDs_ \- массив ID сотрудников (массив целых чисел).  
     _iQualificationID_ \- ID бейджа (квалификации) (целое число).  
     _sComment_ \- комментарий (основание) (строка).  
     _iCompetenceId_ \- ID компетенции (целое число).  
     _bNeedSendNotification_ \- отправлять уведомления (булево).  
     _iNotificationId_ \- ID типа уведомления (целое число).

_Возвращаемое значение:_  
      Тип:  **Объект**. Содержит ряд атрибутов:  
_\- error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
_\- errorText_ – текст ошибки (строка).  
 

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libGame", "CollaboratorQualificationAssign", [arrCollabIDs, iQualificationID, sComment, iCompetenceId, bNeedSendNotification, iNotificationId]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

