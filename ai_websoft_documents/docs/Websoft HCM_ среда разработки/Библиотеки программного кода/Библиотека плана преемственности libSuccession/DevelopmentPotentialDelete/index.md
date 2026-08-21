## DevelopmentPotentialDelete

Метод **DevelopmentPotentialDelete** предназначен для удаления потенциалов развития.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libSuccession", "DevelopmentPotentialDelete", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     _arrDevelopmentPotentialIDs_ \- массив ID потенциалов развития (массив целых чисел).

_Возвращаемые значения:_  
      Тип:  **_Объект_**. Содержит следующие атрибуты:  
\- _DevelopmentPotentialDeletedCount_ – количество удаленных потенциалов развития (целое число).

_\- error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libSuccession", "DevelopmentPotentialDelete", [arrDevelopmentPotentialIDs]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

