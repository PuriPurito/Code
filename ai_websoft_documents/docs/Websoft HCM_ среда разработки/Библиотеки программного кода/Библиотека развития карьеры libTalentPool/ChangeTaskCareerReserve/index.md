## ChangeTaskCareerReserve

Метод **ChangeTaskCareerReserve** предназначен для изменения задачи плана деятельности в этапе развития карьеры.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "ChangeTaskCareerReserve", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя двенадцать параметров:  
     _iCareerReserveIDParam_ \- ID этапа развития карьеры (целое число).  
     _sTaskID_ \- ID задачи плана деятельности (строка).  
     _sCommand_ \- текущий режим удаленного действия (строка).  
     _sFormFields_ \- JSON-строка, сформированная на основании данных формы удаленного действия (строка).  
     _iCurUserID_ \- ID текущего пользователя (целое число).  
     _bCheckAccessByTaskTutor_ \- проверять права доступа по наставнику в данной задаче, а не по наставникам всего этапа развития карьеры (булево).  
     _sChangeCareerReserveTask_ \- изменение списка заданий программы развития (строка).  
     _iNotificationIDTutor_ \- идентификатор уведомления преподавателя (целое число).  
     _bChangeTaskSendNotificationCollaborator_ \- уведомлять ли сотрудника в случае изменения плана деятельности (булево) (необязательный). По умолчанию – _false_.  
     _iNotificationIDCollaborator_ \- идентификатор уведомления преподавателя (целое число).  
     _bCanChangeAutoTask_ – возможно ли автоматическое изменение плана деятельности (булево) (необязательный). По умолчанию – _false_.  
     _oScopeWvars_ \- переменные удаленного действия (объект). 

_Возвращаемые значения:_

      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _result_ – результат вызова метода (объект). В случае успешного завершения выполнения метода в данный объект включается выражение _"Задача плана деятельности этапа развития карьеры успешно обновлена"_.  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "ChangeTaskCareerReserve", [iCareerReserveIDParam, sTaskID, sCommand, sFormFields, iCurUserID, bCheckAccessByTaskTutor, sChangeCareerReserveTask, iNotificationIDTutor, bChangeTaskSendNotificationCollaborator, iNotificationIDCollaborator, bCanChangeAutoTask, oScopeWvars]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

