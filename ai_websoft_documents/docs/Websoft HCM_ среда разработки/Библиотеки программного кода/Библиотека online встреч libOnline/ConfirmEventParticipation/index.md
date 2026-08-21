## ConfirmEventParticipation

Метод **ConfirmEventParticipation** предназначен для подтверждения участия или отказа от участия в мероприятии.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libOnline", "ConfirmEventParticipation", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя два параметра:  
     _iEventID_ – ID мероприятия (целое число).  
     _sParticipation_ \- тип согласия на участие в мероприятии (строка). Допустимые значения: "accept" (согласен), "reject" (не согласен).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- error - код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- errorText – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libOnline", "ConfirmEventParticipation", [iEventID, sParticipation]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

