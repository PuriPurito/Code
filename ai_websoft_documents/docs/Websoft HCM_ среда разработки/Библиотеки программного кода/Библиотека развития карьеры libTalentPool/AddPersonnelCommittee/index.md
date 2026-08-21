## AddPersonnelCommittee

Метод **AddPersonnelCommittee** предназначен для создания и редактирования кадрового комитета.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "AddPersonnelCommittee", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя три параметра:  
     _iPersonnelCommitteeIDParam_ \- идентификатор кадрового комитета (целое число).  
     _arrFormFields_ \- массив полей формы (массив объектов).  
     _curUserID_ \- идентификатор текущего пользователя (целое число).

_Возвращаемые значения:_

      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _id_ – идентификатор кадрового комитета (целое число).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "AddPersonnelCommittee", [iPersonnelCommitteeIDParam, arrFormFieldsParam, curUserID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

