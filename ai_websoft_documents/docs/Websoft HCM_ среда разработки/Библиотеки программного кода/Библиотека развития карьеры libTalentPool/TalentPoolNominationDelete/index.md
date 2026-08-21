## TalentPoolNominationDelete

Метод **TalentPoolNominationDelete** предназначен для удаления способов выдвижения в резерв (talent\_pool\_nomination).

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "TalentPoolNominationDelete", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     _arrRequestIDs_ \- Массив ID способов выдвижения в резерв, подлежащих удалению (массив целых чисел).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _ObjectDeletedCount_ – количество удаленных записей (целое число).  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "TalentPoolNominationDelete", [arrObjectIDs]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

