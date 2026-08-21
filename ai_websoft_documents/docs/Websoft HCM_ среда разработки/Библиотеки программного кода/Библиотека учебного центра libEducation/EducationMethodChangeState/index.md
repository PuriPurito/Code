## EducationMethodChangeState

Метод **EducationMethodChangeState** предназначен для изменения статуса учебных программ.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "EducationMethodChangeState", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя два параметра:  
     _arrEduMethodIDs_ \- массив ID учебных программ (массив целых чисел).  
     _sState_ \- устанавливаемый статус учебной программы (строка). Допустимые значения: "active" (действующая), "archive" (архивная).

_Возвращаемое значение:_  
      Тип:  **Объект** . Содержит ряд атрибутов:  
_\- error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
_\- errorText_ – текст ошибки (строка).  
 

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "EducationMethodChangeState", [arrEduMethodIDs, sState]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

