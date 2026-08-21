## KeyPositionThreatDelete

Метод **KeyPositionThreatDelete** предназначен для удаления угроз ключевым должностям.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libSuccession", "KeyPositionThreatDelete", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     _arrKeyPositionThreatIDs_ \- массив ID угроз ключевым должностям (массив целых чисел).

_Возвращаемые значения:_  
      Тип:  **_Объект_**. Содержит следующие атрибуты:  
\- _KeyPositionThreatDeletedCount_ – количество удаленных угроз ключевым должностям (целое число).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libSuccession", "KeyPositionThreatDelete", [arrKeyPositionThreatIDs]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

