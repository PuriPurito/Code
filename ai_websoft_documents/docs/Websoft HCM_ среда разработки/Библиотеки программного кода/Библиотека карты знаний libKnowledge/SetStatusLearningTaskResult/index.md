## SetStatusLearningTaskResult

Метод предназначен для изменение статуса выполнения задания.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libKnowledge", "SetStatusLearningTaskResult", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя два параметра:  
     _iLearningTaskResultID_ \- ID выполнения задания (целое число).  
     _sStatus_ \- новый статус задания (строка). Допустимые значения: _assign_ (Назначен), _process_ (В работе), _viewed_ (Просмотрен), _success_ (Пройден), _failed_ (Не пройден), _evaluation_ (Оценивается), _cancel_ (Отменен).

_Возвращаемые значения:_  
Тип: **Объект**. Содержит ряд атрибутов:  
\- _doc\_learning\_task\_result_ \- документ назначенного задания (объект XmlDoc).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _message_ – текст ошибки (строка).

_Пример:_

`_// Пусть в системе имеется задние для сотрудника Васильева Людмила Петровна с названием «Пройти тренинг по пожарной безопасности»   // Находим программно задание с названием «Пройти тренинг по пожарной безопасности»    _query_str = "for $elem in learning_task_results where $elem/person_fullname = 'Васильева Людмила Петровна' and $elem/learning_task_name = 'Пройти тренинг по пожарной безопасности' return $elem";   objArray = XQuery(_query_str);   // objArray является массивом объектов Выполнение задания, отобранных запросом.    oLearningTaskResult = ArrayOptFirstElem ( objArray ); // функция возвращает первый элемент массива сотрудников objArray (в данном случае массив состоит из одного элемента)   alert ('Найдено выполнение задания: ' + oLearningTaskResult.learning_task_name + ' для сотрудника: ' + oLearningTaskResult.person_fullname + ' с идентификационным номером: ' + oLearningTaskResult.id); // на экран выводится информация о найденном выполнении задания_`

`_iLearningTaskResultID = oLearningTaskResult.ID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libKnowledge", "SetStatusLearningTaskResult", [ OptInt (iLearningTaskResultID), 'success' ]);_`

---

