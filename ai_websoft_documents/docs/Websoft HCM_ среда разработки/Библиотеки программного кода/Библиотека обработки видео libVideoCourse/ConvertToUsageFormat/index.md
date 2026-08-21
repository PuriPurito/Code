## ConvertToUsageFormat

Метод **ConvertToUsageFormat** предназначен для форматирования видеозаписи в формат MP4 для последующего использования в системе Websoft HCM.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libVideoCourse", "ConvertToUsageFormat", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя четыре параметра:  
     _sInputVideo_ \- путь до видеофайла (строка), который преобразуется в формат .mp4, с видеокодеком h.264 и аудиокодеком AAC.  
     _sSuffix_ \- формат для преобразования (строка).  
     _iThreadCount_ \- количество потоков в строковом выражении (строка).  
     _sPriority_ \- приоритет процесса (строка).

_Возвращаемое значение:_  
     _result_ \- путь выходного видеофайла (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libVideoCourse", "ConvertToUsageFormat", [sInputVideo, sSuffix, iThreadCount, sPriority]);_`   
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

