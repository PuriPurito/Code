## AddChangePersonnelReserve (устаревшая)

Метод **AddChangePersonnelReserve** предназначен для добавления кадрового резерва и изменения его состава.

Метод помечен как **deprecated** и в следующих релизах будет удален.  
Причина: в методе реализована интерфейсная часть удаленного действия, которая не должна находиться в библиотеке.   
Исполняемая часть удаленного действия - метод **SetPersonnelReserve**  
Код метода перенесен в файл удаленного действия. 

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "AddChangePersonnelReserve", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя семь параметров:  
     _sFormCommand_ \- текущий режим удаленного действия (строка).  
     _sFormFields_ \- JSON-строка с возвратом из формы удаленного действия (строка).  
     _iPersonnelReserveIDParam_ \- ID кадрового резерва (целое число).  
     _bSendPersonNotificationOnCreate_ \- отправлять уведомления преемнику при добавлении преемника (булево).  
     _bSendHRNotificationOnChange_ \- отправлять уведомления сотруднику кадровой службы (HR) при изменении преемника (булево).  
     _iCurUserID_ \- ID текущего пользователя (целое число).  
     _iCurCareerReserveTypeID_ \- ID типа кадрового резерва (целое число).

_Возвращаемые значения:_

      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _result_ – результат вызова метода (объект). 

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "AddChangePersonnelReserve", [sFormCommand, sFormFields, iPersonnelReserveIDParam, bSendPersonNotificationOnCreate, bSendHRNotificationOnChange, iCurUserID, iCurCareerReserveTypeID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

