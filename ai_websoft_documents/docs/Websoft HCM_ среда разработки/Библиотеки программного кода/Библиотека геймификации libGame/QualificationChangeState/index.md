## QualificationChangeState

Метод **QualificationChangeState** предназначен для изменения статуса квалификаций в геймификации.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libGame", "QualificationChangeState", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя два параметра:  
     _arrQualifications_ \- массив ID квалификаций (массив целых чисел).  
     _sNewState_ \- новый статус (строка).

_Возвращаемое значение:_  
      Тип:  **Объект**. Содержит ряд атрибутов:  
\- _count_ – количество выполненных изменений (целое число).  
  
_\- error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
_\- errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libGame", "QualificationChangeState", [arrQualifications, sNewState]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

