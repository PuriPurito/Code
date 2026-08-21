## GetAdaptationPlanTaskInfo

Метод **GetAdaptationPlanTaskInfo** предназначен для получения данных задачи плана адаптации.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "GetAdaptationPlanTaskInfo", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя два параметра:  
     _iCareerReserveID_ \- ID этапа развития карьеры (целое число).  
     _sTaskID_ \- ID новой задачи в текстовом формате (строка).

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит данные задачи плана адаптации:  
\- _context_ \- данные задачи плана адаптации (объект).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libTalentPool", "GetAdaptationPlanTaskInfo", [iCareerReserveID, sTaskID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

