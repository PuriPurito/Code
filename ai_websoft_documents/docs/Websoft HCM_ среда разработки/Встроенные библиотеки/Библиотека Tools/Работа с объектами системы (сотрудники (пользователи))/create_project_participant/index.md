## create_project_participant

Создает объект **Участник проекта** для указанного проекта и указанного сотрудника. Перечень проектов находится в разделе **Персонал – Управление проектами - Проекты**.

_Синтаксис:_  
      **tools.create\_project\_participant (<iProjectParticipantIDParam>, \[<tePersonParam>\], <iProjectIDParam>)**     или  
     **tools.create\_project\_participant (\[<iProjectParticipantIDParam>\], <tePersonParam>, <iProjectIDParam>)**

_Аргументы:_  
     <iProjectParticipantIDParam> (обязательный; необязательный, если передан аргумент <tePersonParam>)  
     Тип: **Целое число**. ID сотрудника.  
     <tePersonParam> (необязательный, если передан атрибут <iProjectParticipantIDParam>)  
     Тип: **TopElem**. TopElem документа Сотрудник.  
     <iProjectIDParam> (обязательный)  
     Тип: **Целое число**. ID проекта.

_Возвращаемое значение:_  
      Тип: **Объект XmlDoc**. Документ созданного объекта **Участник проекта** (см. **Персонал – Управление проектами – Участники проектов**).

_Пример 1:_      

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна    // и проект Текущий рабочий проект_`

`_// Находим сотрудника Васильеву Л.П.   try {        _query_str = "for $elem in collaborators where $elem/fullname = 'Васильева Людмила Петровна' return $elem";        objArray = XQuery(_query_str);        // objArray является массивом объектов Сотрудник, отобранных запросом. Запрос отбирает всех сотрудников, ФИО которых имеет значение 'Васильева Людмила Петровна'        A1 = ArrayOptFirstElem ( objArray ); // функция возвращает первый элемент массива сотрудников objArray (в данном случае массив состоит из одного элемента)        alert ('Найден сотрудник: ' + A1.fullname); // на экран выводится полное имя отобранного сотрудника   }    catch (err){        alert ('Сотрудник не найден!');   }_`

`_// Находим проект Текущий рабочий проект   try {        _query_str = "for $elem in projects where $elem/name = 'Текущий рабочий проект' return $elem";        objArray = XQuery(_query_str);        // objArray является массивом объектов Проект, отобранных запросом. Запрос отбирает все проекты с названием 'Текущий рабочий проект'        A2 = ArrayOptFirstElem ( objArray ); // функция возвращает первый элемент массива objArray (в данном случае массив состоит из одного элемента)        alert ('Найден проект: ' + A2.name); // на экран выводится название проекта   }    catch (err){        alert ('Проект не найден!');   }_`

`_// Включаем сотрудника в состав участников проекта   docRez = tools.create_project_participant (A1.id, null, A2.id);   alert ('Сотрудник ' + A1.fullname + ' включен в проект ' + docRez.TopElem.project_id );_`

_Пример 2:_  
      `_tools.create_project_participant(_value.key, null, TopElem.Doc.DocID);_`

---

