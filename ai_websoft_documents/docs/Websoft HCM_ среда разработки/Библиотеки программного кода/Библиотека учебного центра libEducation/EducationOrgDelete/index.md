## EducationOrgDelete

Метод **EducationOrgDelete** предназначен для удаления провайдеров.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "EducationOrgDelete", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     _arrEducationOrgIDs_ \- массив ID удаляемых провайдеров (массив целых чисел).

_Возвращаемое значение:_  
      Тип:  **Объект** . Содержит ряд атрибутов:  
\- EducationOrgDeletedCount – количество удаленных провайдеров (целое число).  
  
_\- error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
_\- errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "EducationOrgDelete", [arrEducationOrgIDs]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

