## RunClVideoCourseAction

Метод **RunClVideoCourseAction** предназначен для запуска указанного модуля курса CourseLab.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libCLOnline ", "RunClVideoCourseAction", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     aActions - массив действий (массив объектов).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _socket\_type_ – тип сокета (строка).  
\- _actions_ – контекст мероприятия (действия) (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libCLOnline ", "RunClVideoCourseAction", [aActions]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

