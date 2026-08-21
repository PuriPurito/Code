## DeleteLearningTaskResultFile

Метод **DeleteLearningTaskResultFile** предназначен для удаления файла из карточки выполнения учебного задания.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libKnowledge", "DeleteLearningTaskResultFile", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя пять параметров:  
     _sCommand_ \- режим выполнения удаленного действия ("_eval_" (создание и показ формы); "_submit\_form_" (обработка формы)) (строка).   
     _iLearningTaskResultID_ \- ID результата выполнения задания (целое число).  
     _iFileID_ \- ID файла (целое число).  
     _iPersonID_ \- ID сотрудника (целое число).  
     _bGetExpertByResult_ \- брать ли эксперта из результата задания (булево). 

_Возвращаемое значение:_  
      Тип:  **Объект**. Содержит ряд атрибутов:  
\- _result_ – результат вызова метода (true – если операция завершилась успешно, false – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libKnowledge", "DeleteLearningTaskResultFile", [sCommand, iLearningTaskResultID, iFileID, iPersonID, bGetExpertByResult]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

