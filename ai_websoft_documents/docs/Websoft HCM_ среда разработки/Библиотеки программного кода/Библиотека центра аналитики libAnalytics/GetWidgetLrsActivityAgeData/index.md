## GetWidgetLrsActivityAgeData

Метод **GetWidgetLrsActivityAgeData** предназначен для получения данных для виджета "Возраст" (LRS/activity).

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libAnalytics", "GetWidgetLrsActivityAgeData", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя шесть параметров:  
     _object\_items_ \- ID объектов (массив строк).  
     _start\_date_ \- начало диапазона (дата).   
     _finish\_date_ \- конец диапазона (дата).   
     _structure\_items_ \- массив данных о подразделениях и сотрудниках (массив объектов). Атрибуты объектов: id - ID объекта в строковом выражении (строка); type - тип элемента ('position', 'org', 'subdivision') (строка); include\_children - учитывать дочерние подразделения вниз по иерархии (булево).  
     _age\_scale_ \- шкала возрастов (массив целых чисел).  
     _object\_code\_parts_ \- массив строк, одну из которых должен включать в себя код активности (массив строк). 

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит данные для виджета "Возраст" (LRS/activity), а также ряд дополнительных атрибутов:  
\- data - данные для виджета "Возраст" (объект).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libAnalytics", "GetWidgetLrsActivityAgeData", [object_items, start_date, finish_date, structure_items, age_scale, object_code_parts]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

