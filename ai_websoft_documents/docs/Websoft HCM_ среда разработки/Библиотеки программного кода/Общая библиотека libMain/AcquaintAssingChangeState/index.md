## AcquaintAssingChangeState

Метод  **AcquaintAssingChangeState** предназначен для изменения статуса назначенных ознакомлений.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libMain", " AcquaintAssingChangeState", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя десять параметров:  
\- _arrAcquaintAssingIDs_ \- массив ID назначенных ознакомлений (массив целых чисел).  
\- _dNormativeDate_ \- требуемая дата ознакомления (дата).  
\- _strStateParam_ \- статус, который должен быть установлен назначенному ознакомлению (строка). Допустимые значения: _"assign"(Назначен); "active"(В процессе); "familiar"(Ознакомлен)_.  
\- _strSendNotificationParam_ \- отправлять ли уведомление (строка). Допустимые значения: _"yes"(Отправлять); "no"(Не отправлять)_.  
\- _strNotificationType_ \- тип уведомления (строка). Допустимые значения: _"template"(По шаблону); "template\_additional\_text"(По шаблону с дополнительным текстом); "no\_template"(Без шаблона)_.  
\- _strAdditionalText_ \- дополнительный текст в уведомление (строка).  
\- _strSubject_ \- тема уведомления (строка).  
\- _strFormat_ \- формат уведомления (строка). Допустимые значения: _"plain"(текст); "html"(HTML)_.  
\- _strNotificationText_ \- текст уведомления (строка).   
\- _iNotificationID_ \- ID типа уведомления (целое число).

_Возвращаемое значение:_  
      Тип:  **Объект**. Содержит ряд атрибутов:  
_\- error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
_\- errorText_ – текст ошибки (строка).  
 

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", " AcquaintAssingChangeState", [arrAcquaintAssingIDs, dNormativeDate, strStateParam, strSendNotificationParam, strNotificationType, strAdditionalText, strSubject, strFormat, strNotificationText, iNotificationID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

