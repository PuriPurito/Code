## ChangeParticipantsConversation

Метод предназначен для изменения состава участников разговора. 

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libChat", "ChangeParticipantsConversation", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя шесть параметров:  
     _iConversationID_ \- ID разговора (целое число).  
     _sAction_ \- действие с участниками (строка) (примеры значений параметра: _'add', 'del', 'change', 'send\_to\_chatbot', 'event', 'request'_).  
     _iParticipantID_ \- ID сотрудника для добавления/удаления (целое число).  
     _arrParticipants_ \- массив участников (параметр используется при _sAction = 'change'_) (массив целых чисел).  
     _iChatbotID_ \- ID чат-бота (целое число).  
     _iConversationTypeID_ - ID типа разговора (целое число) (необязательный; используется, если создается новый разговор).

_Возвращаемое значение:_  
     Тип: **Объект**. Результат выполнения действия, включающий в себя следующие параметры:  
     _error_ – код ошибки (целое число).  
     _message_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libChat", "ChangeParticipantsConversation", [ iConversationID, sAction, iParticipantID, arrParticipants, iChatbotID, iConversationTypeID ]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

