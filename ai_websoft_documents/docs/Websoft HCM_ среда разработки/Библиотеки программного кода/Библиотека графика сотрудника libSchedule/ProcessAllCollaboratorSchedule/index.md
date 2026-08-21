## ProcessAllCollaboratorSchedule

Метод **ProcessAllCollaboratorSchedule** предназначен для выполнения массовой обработки графиков сотрудника.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libSchedule", "ProcessAllCollaboratorSchedule", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя девять параметров:  
     _sCommand_ \- тип команды (строка). Допустимые значения: _'eval', 'submit\_form'._  
     _iCurPersonID_ \- ID сотрудника (целое число).  
     _sProcessType_ \- тип обработки (строка). Допустимые значения: _'agreement'_ (график согласован), _'reject'_ (график отклонен).  
     _dStartDate_ \- дата начала периода (дата).  
     _dFinishDate_ \- дата завершения периода (дата).  
     _sCollaboratorType_ \- тип сотрудников для отбора (строка). Допустимые значения: _'my', 'all', 'org', 'colleagues', 'subordinates'._  
     _aPersonID_ \- массив ID сотрудников (массив целых чисел).  
     _aPresenceState_ \- массив ID типов присутствия/отсутствия (массив целых чисел).  
     _SCOPE\_WVARS_ \- входные параметры удаленного действия (объект). 

_Возвращаемые значения:_

      Тип:  **Объект**. Содержит следующие атрибуты:  
_\- result_ \- результат вызова метода (объект).   
     Атрибуты объекта:  
     command – команда (строка).  
     msg – сообщение (строка).  
     В ряде случаев возможны и иные атрибуты (например, title, header, form\_fields и др.)

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _message_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libSchedule", "ProcessAllCollaboratorSchedule", [sCommand, iCurPersonID, sProcessType, dStartDate, dFinishDate, sCollaboratorType, aPersonID, aPresenceState, SCOPE_WVARS]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

