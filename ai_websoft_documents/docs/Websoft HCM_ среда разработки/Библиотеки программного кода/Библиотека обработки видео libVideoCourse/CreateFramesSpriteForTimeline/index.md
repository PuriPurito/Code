## CreateFramesSpriteForTimeline

Метод **CreateFramesSpriteForTimeline** предназначен для создания фреймов спрайта для таймлайна.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libVideoCourse", "CreateFramesSpriteForTimeline", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя два параметра:  
     _sInputVideo_ \- путь до видеофайла (строка).  
     _sOutputPath_ \- путь для сохранения выходного файла (строка).

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит следующие атрибуты:  
\- _result_ – результат выполнения удаленного действия (объект).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _error\_string_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libVideoCourse", "CreateFramesSpriteForTimeline", [sInputVideo, sOutputPath]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

