## GetStartCourseLearningUrl

Метод **GetStartCourseLearningUrl** предназначен для получения ссылки на запуск электронного курса.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libLearning", "GetStartCourseLearningUrl", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя пять параметров:  
     _iPersonID_ \- ID сотрудника (целое число).  
     _iCourseID -_ ID курса (целое число).  
     _dStartLaunch_ \- запускать курс (булево).  
     _sRedirectUrl_ \- адрес переадресации (строка) (необязательный). Данный адрес возвращается, если _dStartLaunch = false_.  
     _iEducationPlanID_ \- ID плана обучения (целое число).

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит URL назначенного курса, а также ряд дополнительных атрибутов:  
\- _redirect\_url_ \- ссылка на запуск электронного курса (строка).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libLearning", "GetStartCourseLearningUrl", [ iPersonID, iCourseID, dStartLaunch, sRedirectUrl, iEducationPlanID ]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

