## GetObjectMetricCareerPlan

Метод **GetObjectMetricCareerPlan** предназначен для получения объектной метрики карьерного плана сотрудника по его ID.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "GetObjectMetricCareerPlan", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя четыре параметра:  
     _iCareerPlanIDParam_ \- ID карьерного плана (целое число).  
     _iPersonIDParam_ \- ID сотрудника, для которого проверяются требования (целое число).  
     _arrCaclulateParam_ \- перечень атрибутов, которые будут учитываться при расчете (массив).  
     _bStrongObligatory_ \- проверять ли только обязательные параметры (булево).

_Возвращаемое значение:_  
      Тип: **Объект**. Объектная метрика карьерного плана.  
     _PercentActiveTasks_ \- процент пройденных задач в карьерном плане (действительное число).  
     _bHasRequirements_ \- имеются ли требования (true - набор требований не пуст) (булево).  
     _bRequirementsIsChecked_ \- соответствует ли сотрудник всем требованиям карьерного плана (булево).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "GetObjectMetricCareerPlan", [iCareerPlanIDParam, iPersonIDParam, arrCaclulateParam, bStrongObligatory]);_`   
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

