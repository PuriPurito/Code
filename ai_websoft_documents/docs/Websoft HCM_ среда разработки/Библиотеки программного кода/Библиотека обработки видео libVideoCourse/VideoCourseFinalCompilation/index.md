## VideoCourseFinalCompilation

Метод **VideoCourseFinalCompilation** предназначен для формирования финальной компиляции медиафайла.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libVideoCourse", "VideoCourseFinalCompilation", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     _iVideoCourseID_ \- ID видеокурса (целое число). 

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
_\- output\_path_ \- путь выходного видеофайла (строка).  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- error\_string – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libVideoCourse", "VideoCourseFinalCompilation", [iVideoCourseID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

