## AddResponseContinuousFeedbackCollaboratorOrProjectParticipant

Метод **AddResponseContinuousFeedbackCollaboratorOrProjectParticipant** предназначен для передачи обратной связи сотруднику или участнику проекта.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libContinuousFeedback", "AddResponseContinuousFeedbackCollaboratorOrProjectParticipant", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя шесть параметров:  
     _iPersonID_ \- ID респондента (целое число).  
     _iResponseTypeID_ \- ID типа отзыва (целое число).  
     _iObjectID_ \- ID оцениваемого сотрудника/ ID оцениваемого участника проекта (целое число).  
     _arrCustomFields_ \- массив значений настраиваемых полей (массив объектов). Каждый объект массива может включать в себя следующие данные: name – название поля (строка); value – значение поля (строка).  
     _sNotifyResponse_ \- режим уведомления (строка).  
     _iNotifyResponseType_ \- ID типа уведомления (целое число).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- response\_id – ID отзыва (целое число).  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libContinuousFeedback", "AddResponseContinuousFeedbackCollaboratorOrProjectParticipant", [iPersonID, iResponseTypeID, iObjectID, arrCustomFields, sNotifyResponse, iNotifyResponseType]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

