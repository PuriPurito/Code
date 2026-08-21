## TalentPoolNominationCreateChange

Метод **TalentPoolNominationCreateChange** предназначен для создания/изменения способа выдвижения в резерв.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "TalentPoolNominationCreateChange", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _sObjectIDs_ \- ID способов выдвижения в резерв, подлежащих изменению (массив целых чисел).  
     _sNameValue_ \- название способа выдвижения в резерв (строка).  
     _sCodeValue_ \- код способа выдвижения в резерв (строка).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "TalentPoolNominationCreateChange", [sObjectIDs, sNameValue, sCodeValue]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

