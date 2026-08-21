## GetWidgetLmsCourseMostPopularData

Метод **GetWidgetLmsCourseMostPopularData** предназначен для получения данных для виджета "Самые популярные курсы" (LMS/course).

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libAnalytics", "GetWidgetLmsCourseMostPopularData", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _start\_date_ \- начало диапазона (дата).   
     _finish\_date_ \- конец диапазона (дата).   
     _structure\_items_ \- массив данных о подразделениях и сотрудниках (массив объектов). Атрибуты объектов: id - ID объекта в строковом выражении (строка); type - тип элемента ('position', 'org', 'subdivision') (строка); include\_children - учитывать дочерние подразделения вниз по иерархии (булево). 

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит данные для виджета "Самые популярные курсы" (LMS/course), а также ряд дополнительных атрибутов:  
\- data - данные для виджета "Самые популярные курсы" (объект).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libAnalytics", "GetWidgetLmsCourseMostPopularData", [start_date, finish_date, structure_items]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

