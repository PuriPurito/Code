## add_person_to_event

Добавляет участника в мероприятие.

_Синтаксис:_  
      **tools.add\_person\_to\_event (<iPersonIDParam>, <iEventIDParam>\[, <tePersonParam>\]\[, <docEventParam>\]\[, <iEducationPlanIDParam>\]\[, <iRequestPersonIDParam>\]\[, <iRequestIDParam>\])**

_Аргументы:_  
      _<iPersonIDParam> (обязательный)_  
      Тип: **Целое число**. ID сотрудника, добавляемого в мероприятие.  
      _<iEventIDParam> (обязательный)_  
      Тип: **Целое число**. ID мероприятия, в которое добавляется сотрудник.  
      _<tePersonParam> (необязательный)_  
      Тип: **TopElem**. TopElem сотрудника.  
      _<docEventParam> (необязательный)_  
      Тип: **Объект XmlDoc**. Документ мероприятия.  
      _<iEducationPlanIDParam> (необязательный)_  
      Тип: **Целое число**. ID плана обучения добавляемого сотрудника. Если аргумент указан, то ссылка на план сохранится в результатах мероприятия сотрудника.  
      _<iRequestPersonIDParam> (необязательный)_  
      Тип: **Целое число**. ID лица, подавшего заявку на добавление сотрудника в мероприятие. Если аргумент указан, то ссылка на лицо, подавшее заявку, сохранится в результатах мероприятия сотрудника.  
      _<iRequestIDParam> (необязательный)_  
      Тип: **Целое число**. ID заявки на включение сотрудника в состав участников мероприятия. Если аргумент указан, то ссылка на заявку сохранится в результате мероприятия сотрудника.

_Возвращаемое значение:_  
      Тип: **Объект XmlDoc**. Документ мероприятия, к которому добавлялся сотрудник (если сотрудник ранее не был добавлен в данное мероприятие), или null (если сотрудник ранее уже был добавлен).

_Пример 1:_      

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна    // и мероприятие «Делегирование» (__модуль «Учебный центр»__), в котором Л.П.Васильева еще не участвует_`

`_// Находим сотрудника Васильеву Л.П.   try {        _query_str = "for $elem in collaborators where contains($elem/fullname, 'Васильева') return $elem";        personArray = XQuery(_query_str);        // personArray является массивом объектов Сотрудник, отобранных запросом. Запрос отбирает всех сотрудников, в состав ФИО которых входит подстрока 'Васильева'        A1 = ArrayFirstElem ( personArray ); // функция возвращает первый элемент массива сотрудников personArray        alert ('Найден сотрудник: ' + A1.fullname); // на экран выводится полное имя отобранного сотрудника   }    catch (err){        alert ('Сотрудник не найден!');   }_`

`_// Находим мероприятие «Делегирование»   try {        _query_str = "for $elem in events where contains($elem/name, 'Делегирование') return $elem";        eventArray = XQuery(_query_str);        // eventArray является массивом объектов Мероприятие, отобранных запросом. Запрос отбирает все мероприятия, в состав названий которых входит подстрока 'Делегирование'        A2 = ArrayFirstElem ( eventArray ); // функция возвращает первый элемент массива мероприятий eventArray        alert ('Найдено мероприятие: ' + A2.name); // на экран выводится название отобранного мероприятия   }    catch (err){        alert ('Мероприятие не найдено!');   }_`

`_// Добавляем сотрудника в мероприятие    A3 = tools.add_person_to_event ( Int(A1.id), Int(A2.id) );   if (A3 != null)      alert ('Сотруднику ' + A1.fullname + ' добавлен в мероприятие ' + A3.TopElem.name );   else          alert ('Назначение не выполнено (возможно данный сотрудник уже был добавлен ранее)');_`

_Пример 2:_      

`_docEvent = tools.add_person_to_event ( Int(sUserId), Int(sRoomId) );   tools.add_person_to_event ( _source.TopElem.person_id, _source.TopElem.object_id, null, docObject );   tools.add_person_to_event ( fldPersonElem.PrimaryKey, docEvent.DocID, null, docEvent, null, catRequest.PrimaryKey );_`

`_if ( tools.add_person_to_event ( iPersonID, iObjectID, tePerson, docObject, null, iRequestID ) != null )       iCounterAct++;_`

---

