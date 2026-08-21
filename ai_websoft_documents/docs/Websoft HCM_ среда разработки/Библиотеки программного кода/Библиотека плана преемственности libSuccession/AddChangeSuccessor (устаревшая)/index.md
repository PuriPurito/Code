## AddChangeSuccessor (устаревшая)

Метод **AddChangeSuccessor** предназначен для добавления/изменения преемника.

Примечание - Начиная с версии 2023.2, данная функция объявлена как deprecated.   
В функции реализована интерфейсная часть удаленных действий. Код перенесен в файл удаленных действий. 

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libSuccession", "AddChangeSuccessor", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя следующие параметры:  
     _sFormCommand_ \- текущий режим удаленного действия (строка).  
     _sFormFields_ \- JSON-строка с возвратом из формы удаленного действия (строка).  
     _iSuccessorIDParam_ \- ID преемника (целое число).  
     _bSendPersonNotificationOnCreate_ \- отправлять уведомления преемнику при добавлении нового преемника (булево).  
     _bSendHRNotificationOnChange_ \- отправлять уведомления сотруднику кадровой службы (HR) при изменении преемника (булево).  
     _iCurUserID_ \- ID текущего пользователя (целое число).  
     _iCurKeyPositionID_ \- ID (контекстное значение) текущей ключевой должности (целое число).  
     bSendOwnerNotificationOnChangeCreate - Отправлять владельцу ключевой должности при создании или изменении преемника (булево).  
     _iPersonNotificationID_ \- ID типа уведомления сотруднику при назначении его преемником (целое число).   
     _iHRNotificationID_ \- ID типа уведомления сотруднику службы HR при изменении преемника (целое число).  
     _iOwnerNotificationIDOnCreate_ \- ID типа уведомления владельцу ключевой должности при создании преемника (целое число).  
     _iOwnerNotificationIDOnChange_ \- ID типа уведомления владельцу ключевой должности при изменении преемника (целое число).  
     _bCheckEfficiencyCollaboratorParam_ \- Проверка параметра efficiency\_collaborator приложения websoft\_succession\_plan (булево).  
     _bCheckEfficiencyCanChangeParam_ \- Проверка параметра efficiency\_can\_change приложения websoft\_succession\_plan (булево).  
     _bCheckPotentialCollaboratorParam_ \- Проверка параметра potential\_collaborator приложения websoft\_succession\_plan (булево).  
     _bCheckPotentialCanChangeParam_ \- Проверка параметра potential\_can\_change приложения websoft\_succession\_plan (булево).  
     _iAppLevel_ \- уровень приложения (целое число).  
     _iManagerTypeID_ \- ID типа менеджера (целое число).

_Возвращаемые значения:_

\- result – результат вызова метода (объект).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _message_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libSuccession", "AddChangeSuccessor", [sFormCommand, sFormFields, iSuccessorIDParam, bSendPersonNotificationOnCreate, bSendHRNotificationOnChange, iCurUserID, iCurKeyPositionID, bSendOwnerNotificationOnChangeCreate, iPersonNotificationID, iHRNotificationID, iOwnerNotificationIDOnCreate, iOwnerNotificationIDOnChange, bCheckEfficiencyCollaboratorParam, bCheckEfficiencyCanChangeParam, bCheckPotentialCollaboratorParam, bCheckPotentialCanChangeParam, iAppLevel, iManagerTypeID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

