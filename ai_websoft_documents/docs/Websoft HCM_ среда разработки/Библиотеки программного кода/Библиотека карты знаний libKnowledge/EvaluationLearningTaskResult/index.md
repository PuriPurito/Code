## EvaluationLearningTaskResult

Метод **EvaluationLearningTaskResult** предназначен для формирования процесса оценки задания экспертом.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libKnowledge", "EvaluationLearningTaskResult", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя одиннадцать параметров:  
     _sCommand_ \- режим выполнения удаленного действия (_"eval"_ (создание и показ формы); _"submit\_form"_ (обработка формы)) (строка).  
     _iLearningTaskResultID_ \- ID результата выполнения задания (целое число).  
     _iPersonID_ \- ID сотрудника (целое число).  
     _teLearningTaskResult_ \- TopElem выполнения задания (объект XmlElem).  
     _bHasExpertComment_ \- обязательность заполнения комментария (булево).  
     _bHasResultFiles_ \- обязательность добавления файла (булево).  
     _bHasScore_ \- обязательность проставления оценки (булево).  
     _iMinScore_ \- минимальный балл (целое число).  
     _iMaxScore_ \- максимальный балл (целое число).  
     _arrStatuses_ \- массив возможных статусов (массив строк).  
     _SCOPE\_WVARS_ – JSON-объект с параметрами удаленного действия (объект).

_Возвращаемое значение:_  
      Тип:  **Объект**. Содержит ряд атрибутов:  
\- _result_ – результат вызова метода (true – если операция завершилась успешно, false – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libKnowledge", "EvaluationLearningTaskResult", [sCommand, iLearningTaskResultID, iPersonID, teLearningTaskResult, bHasExpertComment, bHasResultFiles, bHasScore, iMinScore, iMaxScore, arrStatuses, SCOPE_WVARS]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

