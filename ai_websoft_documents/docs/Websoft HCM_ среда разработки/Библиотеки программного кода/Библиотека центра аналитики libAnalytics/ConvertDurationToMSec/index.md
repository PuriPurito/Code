## ConvertDurationToMSec

Метод **ConvertDurationToMSec** предназначен для конвертации временного интервала из формата xApi duration в милисекунды.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libAnalytics", "ConvertDurationToMSec", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     _sDuration_ \- интервал в формате xApi duration (строка). 

_Возвращаемые значения:_  
      Тип:  **Целое число**. Интервал в миллисекундах. 

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libAnalytics", "ConvertDurationToMSec", [sDuration]);_`   
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

