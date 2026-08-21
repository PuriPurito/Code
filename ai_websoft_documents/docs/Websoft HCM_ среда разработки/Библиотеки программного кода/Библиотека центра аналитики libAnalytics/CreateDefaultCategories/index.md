## CreateDefaultCategories

Метод **CreateDefaultCategories** предназначен для создания категории по умолчанию для пользователя.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libAnalytics", "CreateDefaultCategories", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Метод вызывается без аргументов.

_Возвращаемые значения:_  
     Выполняется удаленное действие. Выходные данные отсутствуют.

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libAnalytics", "CreateDefaultCategories", []);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

