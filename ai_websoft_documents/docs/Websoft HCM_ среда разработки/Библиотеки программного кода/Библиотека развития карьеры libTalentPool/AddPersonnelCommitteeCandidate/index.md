## AddPersonnelCommitteeCandidate

Метод **AddPersonnelCommitteeCandidate** предназначен для добавления кандидатов в состав кадрового комитета.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "AddPersonnelCommitteeCandidate", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя два параметра:  
     _iPersonnelCommitteeIDParam_ \- идентификатор кадрового комитета (целое число).  
     _arrFormFields_ – массив полей формы (массив объектов).

_Возвращаемые значения:_

      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _result_ – результат вызова метода (объект).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "AddPersonnelCommitteeCandidate", [iPersonnelCommitteeIDParam, arrFormFieldsParam]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

