## GetApplicationInstances

Метод **GetApplicationInstances** предназначен для получения массива ID процессов приложения (и ID приложения) в числовом формате.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libAssessment", "GetApplicationInstances", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     _iApplicationID_ \- ID приложения (целое число).

_Возвращаемое значение:_  
      Тип: **Массив целых чисел**. Содержит перечень ID процессов приложения (+ ID приложения) в числовом формате:  
\- _arrApplicationInstances_ \- массив ID процессов приложения (+ ID приложения) в числовом формате (массив целых чисел).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libAssessment", "GetApplicationInstances", [iApplicationID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

