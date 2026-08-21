## AssignAssessmentExcel

Метод **AssignAssessmentExcel** может быть использован для назначения тестов из файла Excel.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTest", "AssignAssessmentExcel", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя одиннадцать параметров:  
     _sFileUrl_ \- путь к файлу Excel (URL) (строка).  
     _bSkipHeader_ \- нужно ли пропускать первую строку файла Excel (булево).  
     _sKeyCollaborator_ \- ключ для отбора сотрудников (ID/code/email/ФИО) (строка).  
     _sColumnCollaborator_ \- буква столбца Excel, содержащего ключ для отбора сотрудника (строка).  
     _sKeyTest_ \- ключ для отбора тестов (ID/code/название) (строка).  
     _sColumnTest_ \- буква столбца Excel, содержащего ключ для отбора тестов (строка).  
     _sTestIDs_ \- ID тестов для назначения через, перечисленные через точку с запятой (строка).  
     _numColumnAction_ \- буква столбца Excel, содержащего тип действия (строка).  
     _sTypeDelete_ \- тип действия при удалении (строка). Допустимые значения - "Удалить", "Завершить".  
     _bSendNotificationAssign_ \- необходима ли рассылка уведомлений при назначении теста (булево).  
     _bSendNotificationDelete_ \- необходима ли рассылка уведомлений при удалении/завершении теста (булево).  

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- count – количество объектов (количество обрабатываемых тестов) (целое число).  
\- finish\_count – окончательное количество объектов (количество обработанных тестов) (целое число).  
  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTest", "AssignAssessmentExcel", [sFileUrl, bSkipHeader, sKeyCollaborator, sColumnCollaborator, sKeyTest, sColumnTest, sTestIDs, numColumnAction, sTypeDelete, bSendNotificationAssign, bSendNotificationDelete]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

