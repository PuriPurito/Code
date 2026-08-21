## KeyPositionChangeState

Метод **KeyPositionChangeState** предназначен для изменения статуса ключевых должностей и преемников.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libSuccession", "KeyPositionChangeState", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _arrKeyPositionIDs_ \- массив ID ключевых должностей (массив целых чисел).  
     _sState_ \- статус ключевых должностей / преемников для установки (строка).  
     _bChangeSuccessorsState_ – нужно ли устанавливать/изменять статус у преемника (булево).

_Возвращаемые значения:_  
      Тип:  **_Объект_**. Содержит следующие атрибуты:  
\- _key\_positions\_changed\_num_ – количество удаленных ключевых должностей (целое число).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libSuccession", "KeyPositionChangeState", [arrKeyPositionIDs, sState, bChangeSuccessorsState]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

