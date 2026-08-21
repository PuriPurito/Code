## OpenlibVideoCourse

Метод **OpenlibVideoCourse** предназначен для обращения к библиотеке _WebsoftVideoEdit.dll_ и для получения объекта класса _WebsoftVideoEdit.Editor_ из указанной библиотеки.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libVideoCourse", "OpenlibVideoCourse", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя два параметра:  
     _iThreadCount_ \- количество потоков в строковом выражении (строка).  
     _sPriority_ \- приоритет процесса (строка).

_Возвращаемое значение:_  
     _oLib_ \- объект класса WebsoftVideoEdit.Editor из библиотеки WebsoftVideoEdit.dll (объект).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libVideoCourse", "OpenlibVideoCourse", [iThreadCount, sPriority]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

