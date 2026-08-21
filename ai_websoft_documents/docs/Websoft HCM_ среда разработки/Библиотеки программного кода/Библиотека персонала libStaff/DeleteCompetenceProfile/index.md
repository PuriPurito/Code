## DeleteCompetenceProfile

Метод **DeleteCompetenceProfile** предназначен для удаления профилей компетенций.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libStaff", "DeleteCompetenceProfile", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     _arrCompetenceProfileIDs_ \- массив ID профилей компетенций, подлежащих удалению (массив целых чисел).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- count – количество удаленных объектов (целое число).  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libStaff", "DeleteCompetenceProfile", [arrCompetenceProfileIDs]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

