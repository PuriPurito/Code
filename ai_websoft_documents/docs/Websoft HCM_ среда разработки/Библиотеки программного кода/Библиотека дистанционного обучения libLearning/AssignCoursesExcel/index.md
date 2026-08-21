## AssignCoursesExcel

Метод **AssignCoursesExcel** предназначен для назначения курсов с помощью данных, содержащихся в файле Excel.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libLearning", "AssignCoursesExcel", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя следующие параметры:  
     _sFileUrl_ \- URL файла Excel (строка).  
     _bSkipHeader_ \- пропускать ли первую строку файла Excel (булево).  
     _sKeyCollaborator_ \- ключ выбора сотрудников (строка).  
     _sColumnCollaborator_ \- буква столбца Excel, содержащего ключ выбора сотрудников (строка).  
     _sKeyCourse_ \- ключ выбора курсов (строка).  
     _sColumnCourse_ \- буква столбца Excel, содержащего ключ выбора курсов (строка).  
     _sCourseIDs_ \- ID курсов для назначения (идентификаторы перечисляются через точку с запятой) (строка).   
     _numColumnAction_ \- буква столбца Excel, содержащего тип действия (строка).  
     _sTypeDelete_ \- тип действия при удалении (строка) (необязательный). Допустимые значения: 'delete' (удалить); 'finish' (завершить). Значение по умолчанию - 'finish'.  
     _bSendNotificationAssign_ \- требуется ли рассылка уведомлений при назначении (булево) (необязательный). Значение по умолчанию - false.  
     _bSendNotificationDelete_ \- требуется ли рассылка уведомлений при удалении/завершении (булево) (необязательный). Значение по умолчанию - false.

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит атрибут:  
\- _count_ – количество выполненных назначений (целое число).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libLearning", "AssignCoursesExcel", [sFileUrl, bSkipHeader, sKeyCollaborator, sColumnCollaborator, sKeyCourse, sColumnCourse, sCourseIDs, numColumnAction, sTypeDelete, bSendNotificationAssign, bSendNotificationDelete]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

