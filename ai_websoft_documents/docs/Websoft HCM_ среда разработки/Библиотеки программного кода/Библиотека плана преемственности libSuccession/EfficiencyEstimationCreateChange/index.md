## EfficiencyEstimationCreateChange

Метод **EfficiencyEstimationCreateChange** предназначен для создания/изменения оценки эффективности.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libSuccession", "EfficiencyEstimationCreateChange", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _iEfficiencyEstimationID_ \- ID оценки эффективности (массив целых чисел).  
     _sName_ \- название оценки эффективности (строка).  
     _sCode_ \- код оценки эффективности (строка).

_Возвращаемые значения:_  
      Тип:  **_Объект_**. Содержит следующие атрибуты:

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libSuccession", "EfficiencyEstimationCreateChange", [iEfficiencyEstimationID, sName, sCode]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

