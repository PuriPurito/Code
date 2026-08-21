## EditResponseContinuousFeedback

Метод **EditResponseContinuousFeedback** предназначен для редактирования обратной связи.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libContinuousFeedback", "EditResponseContinuousFeedback", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя два параметра:  
     _iResponseID_ \- ID отзыва (целое число).  
     _form\_fields_ \- поля формы (массив объектов). В состав отдельных объектов входят следующие параметры: name - название поля (строка), label – метка (строка), type – тип поля (строка), value – значение (строка), entries – входные параметры (массив объектов (name – имя объекта (строка), value – значение (строка))), validation – контрольное значение (строка), mandatory – является ли поле обязательным (булево), column – количество колонок (целое число).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- response\_id – ID отзыва (целое число).  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libContinuousFeedback", "EditResponseContinuousFeedback", [iResponseID, oFormFields]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

