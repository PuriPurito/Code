## AccountChangeBalance

Метод **AccountChangeBalance** предназначен для изменения баланса счета в геймификации.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libGame", "AccountChangeBalance", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя восемь параметров:  
     _iAccountID_ \-  ID счета (целое число).  
     _sOperationType_ \- тип операции: (строка). Допустимые значения – "add" (добавить), "withdraw" (снять).  
     _rSum_ \- сумма операции (действительное число).   
     _sComment_ \- комментарий (строка).  
     _bTeamRating_ \- вести учет рейтинга в команде (булево).  
     _arrTeamsIDs_ \- массив ID команд (подразделений) (массив целых чисел). Командный учет ведется только в случае, если команда пользователя включена в массив arrTeamsIDs.  
     _bNeedSendNotification_ \- отправлять уведомление (булево).  
     _iNotificationId_ \- ID типа уведомления (целое число).

_Возвращаемое значение:_  
      Тип:  **Объект**. Содержит ряд атрибутов:  
_\- error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
_\- errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libGame", "AccountChangeBalance", [iAccountID, sOperationType, rSum, sComment, bTeamRating, arrTeamsIDs, bNeedSendNotification, iNotificationId]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

