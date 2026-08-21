## SetParticipantStateInConversation

Метод **SetParticipantStateInConversation** предназначен для обновления статуса пользователя.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libConversationApi", "SetParticipantStateInConversation", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     _oActionParam_ \- входные параметры функции (объект). В состав объекта входят следующие параметры: conversation\_id – ID разговора (целое число); state – статус в числовом выражении (целое число); participant\_id – ID участника (целое число). 

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _message_– текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libConversationApi", "SetParticipantStateInConversation", [oActionParam]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

