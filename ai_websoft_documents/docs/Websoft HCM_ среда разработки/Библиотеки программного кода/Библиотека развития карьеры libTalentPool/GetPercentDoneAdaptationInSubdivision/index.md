## GetPercentDoneAdaptationInSubdivision

Метод **GetPercentDoneAdaptationInSubdivision** предназначен для определения процента завершенных адаптаций в подразделениях сотрудника.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "GetPercentDoneAdaptationInSubdivision", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iPersonIDParam_ \- ID сотрудника подразделения (целое число). 

_Возвращаемое значение:_  
      Тип: **Действительное число**. Процент завершенных адаптаций в подразделениях сотрудника.

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "GetPercentDoneAdaptationInSubdivision", [iPersonIDParam]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

