## AddDevelopmentProgramsToActionPlanCareerReserve

Метод **AddDevelopmentProgramsToActionPlanCareerReserve** предназначен для добавления типовых программ развития в план деятельности этапов развития карьеры.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "AddDevelopmentProgramsToActionPlanCareerReserve", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _arrCareerReserveIDs_ \- массив ID этапов развития карьеры (массив целых чисел).  
     _arrTypicalProgramIDs_ \- массив ID типовых программ развития (массив целых чисел).  
     _oParam_ \- Параметры формирования этапа развития карьеры (объект). 

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "AddDevelopmentProgramsToActionPlanCareerReserve", [arrCareerReserveIDs, arrTypicalProgramIDs, oParam]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

