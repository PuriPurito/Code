## ExclusionReasonCreateChange

Метод **ExclusionReasonCreateChange** предназначен для создания/изменения оснований для исключения (exclusion\_reason).

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "ExclusionReasonCreateChange", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _sObjectIDs_ \- ID оснований для исключения, подлежащих изменению (массив целых чисел).  
     _sNameValue_ \- название основания для исключения (строка).  
     _sCodeValue_ \- код основания для исключения (строка).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "ExclusionReasonCreateChange", [sObjectIDs, sNameValue, sCodeValue]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

