## ProcessKnowledgeAcquaint

Метод **ProcessKnowledgeAcquaint** предназначен для подтверждения уровня знаний указанного сотрудника.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libKnowledge", "ProcessKnowledgeAcquaint", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя девять параметров:  
     _sAction_ \- действие (строка). Допустимые значения: _"start"; "finish"; "cancel"_.  
     _iUserID_ \- ID текущего сотрудника (целое число).  
     _iPersonID_ \- ID проверяемого сотрудника (целое число).  
     _iKnowledgePartID_ \- ID значение карты знаний (целое число).  
     _iKnowledgeAcquaintID_ \- ID подтверждения знаний (целое число) (необязательный).  
     _bSendNotification_ \- включить/отключить отправку уведомлений сотрудникам (булево) (необязательный). Значение по умолчанию - _false_.  
     _bSendBossNotification_ \- включить/отключить отправку уведомлений руководителям сотрудников (булево) (необязательный). Значение по умолчанию - _false._  
     _bSendExpertNotification_ \- включить/отключить отправку уведомлений экспертам (булево) (необязательный). Значение по умолчанию - _false._  
     _bSendEvaluationExpertNotification_ \- включить/отключить отправку уведомлений оценивающим экспертам (булево) (необязательный). Значение по умолчанию - _false._ 

_Возвращаемое значение:_  
      Тип:  **Объект**. Содержит ряд атрибутов:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libKnowledge", "ProcessKnowledgeAcquaint", [sAction, iUserID, iPersonID, iKnowledgePartID, iKnowledgeAcquaintID, bSendNotification, bSendBossNotification, bSendExpertNotification, bSendEvaluationExpertNotification]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

