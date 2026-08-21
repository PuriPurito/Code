## EducationProgramDelete

Метод **EducationProgramDelete** предназначен для удаления наборов программ.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "EducationProgramDelete", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     _arrEduProgramIDs_ \- массив ID удаляемых наборов программ (массив целых чисел).

_Возвращаемое значение:_  
      Тип:  **Объект** . Содержит ряд атрибутов:  
\- _EducationProgramDeletedCount_ – количество удаленных наборов программ (целое число).  
  
_\- error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
_\- errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "EducationProgramDelete", [arrEduProgramIDs]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

