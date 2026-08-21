## WorkspaceConfigDelete

Метод **WorkspaceConfigDelete** предназначен для удаления конфигураций WorkSpace.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libWorkspace", "WorkspaceConfigDelete", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     _aWorkspaceConfigID_ \- массив ID конфигураций WorkSpace (массив целых чисел).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _count_ \- количество удаленных конфигураций WorkSpace (целое число).  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWorkspace", "WorkspaceConfigDelete", [aWorkspaceConfigID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

