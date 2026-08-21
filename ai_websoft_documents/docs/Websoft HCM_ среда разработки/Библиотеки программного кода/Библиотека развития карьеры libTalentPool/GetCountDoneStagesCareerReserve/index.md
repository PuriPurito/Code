## GetCountDoneStagesCareerReserve

Метод предназначен для получения информации о количестве пройденных корневых этапов в этапе развития карьеры.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "GetCountDoneStagesCareerReserve", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя три параметра:  
     _iCareerReserveIDParam_ \- ID этапа развития карьеры (целое число).  
     _iPersonID_ \- ID сотрудника, по которому ищется запись этапа развития карьеры (целое число).  
     _sCareerReserveType_ \- тип цели этапа развития карьеры (строка). Значение по умолчанию - _"adaptation"_. 

_Возвращаемое значение:_  
      Тип: **Целое число**. Количество пройденных корневых этапов.

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "GetCountDoneStagesCareerReserve", [ iCareerReserveIDParam, iPersonID, sCareerReserveType ]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

