## SaveComponentInComponentLibrary

Метод **SaveComponentInComponentLibrary** предназначен для сохранения компоненты в библиотеке.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libBuilder", "SaveComponentInComponentLibrary", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя два параметра:  
     _pageId_ \- ID страницы в текстовом формате (строка).  
     _componentId_ \- ID компоненты в текстовом формате (строка).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libBuilder", "SaveComponentInComponentLibrary", [pageId, componentId]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

