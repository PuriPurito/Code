## CreateCourseErrorRequest

Метод **CreateCourseErrorRequest** предназначен для создания заявки "Сообщение об ошибке в электронном курсе".

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libCoursePlayer", "CreateCourseErrorRequest", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров.  
      Для реализации данного метода аргументы не предусмотрены. Используется пустой массив аргументов. 

_Возвращаемое значение:_  
      Тип:  **Объект**. Содержит ряд атрибутов:  
_\- error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
_\- errorText_ – текст ошибки (строка).  
 

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libCourse", "CreateCourseErrorRequest", []);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

