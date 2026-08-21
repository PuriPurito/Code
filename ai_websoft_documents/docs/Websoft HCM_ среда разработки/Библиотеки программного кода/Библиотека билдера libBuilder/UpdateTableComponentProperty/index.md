## UpdateTableComponentProperty

Метод **UpdateTableComponentProperty** предназначен для обновления свойства компоненты.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libBuilder", "UpdateTableComponentProperty", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _tableId_ \- ID таблицы в текстовом формате (строка).  
     _propertyId_ \- ID свойства в текстовом формате (строка).  
     _value_ \- значение свойства в текстовом формате (строка).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libBuilder", "UpdateTableComponentProperty", [tableId, propertyId, value]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

