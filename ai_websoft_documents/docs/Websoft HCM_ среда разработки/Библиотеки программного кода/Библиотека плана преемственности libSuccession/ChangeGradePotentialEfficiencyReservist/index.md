## ChangeGradePotentialEfficiencyReservist

Метод **ChangeGradePotentialEfficiencyReservist** предназначен для изменения оценки потенциала/эффективности резервиста.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libSuccession", "ChangeGradePotentialEfficiencyReservist", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя четыре параметра:  
     _iCurUserID_ \- ID текущего сотрудника (целое число).  
     _arrPersonnelReserveIDs_ \- массив ID резервистов для изменения оценки (массив целых чисел).  
     _iEfficiencyID_ \- ID оценки эффективности из каталога efficiency\_estimations (целое число).  
     _iPotencialID_ \- ID оценки потенциала из каталога development\_potentials (целое число).

_Возвращаемые значения:_  
      Тип:  **_Объект_**. Содержит следующие атрибуты:  
\- count – количество измененных объектов (целое число).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libSuccession", "ChangeGradePotentialEfficiencyReservist", [(iCurUserID, arrPersonnelReserveIDs, iEfficiencyID, iPotencialID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

