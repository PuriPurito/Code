## SetStatusCareerReserveTask

Метод **SetStatusCareerReserveTask** предназначен для установки статуса задаче в этапе развития карьеры.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "SetStatusCareerReserveTask", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя пять параметров:  
     _iCareerReserveIDParam_ – ID этапа развития карьеры (целое число).   
     _sTaskID_ \- ID задачи в этапе развития карьеры (строка).  
     _sCommand_ \- Текущий режим удаленного действия (строка).  
     _sFormFields_ \- JSON-строка, сформированная на основании данных формы удаленного действия (строка).  
     _iCurUserID_ \- ID текущего пользователя (целое число).

_Возвращаемое значение:_  
      Производит установку статуса задаче в этапе развития карьеры. Возвращаемое значение отсутствует.

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "SetStatusCareerReserveTask ", [iCareerReserveIDParam, sTaskID, sCommand, sFormFields, iCurUserID]);_`

---

