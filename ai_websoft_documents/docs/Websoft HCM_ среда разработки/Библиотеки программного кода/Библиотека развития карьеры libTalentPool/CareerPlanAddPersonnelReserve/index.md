## CareerPlanAddPersonnelReserve

Метод **CareerPlanAddPersonnelReserve** предназначен для создания кадровых резервов для сотрудника в карьерном плане.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "CareerPlanAddPersonnelReserve", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя пять параметров:  
     _arrCareerPlans_ \- массив ID карьерных планов (массив целых чисел).  
     _sStatus_ \- статус кадрового резерва (строка).  
     _iReserveType_ \- ID типа кадрового резерва (целое число).  
     _bSendMessage_ \- отправлять ли уведомления сотруднику при изменении плана (булево).  
     _oSendParam_ \- параметры отправки уведомлений (объект).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
_\- count_ – количество созданных кадровых резервов в карьерном плане в текстовом формате (строка).  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "CareerPlanAddPersonnelReserve", [arrCareerPlans, sStatus, iReserveType, bSendMessage, oSendParam]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

