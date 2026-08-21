## common_filling

Функция заполняет некоторые поля (дополнительную информацию) в карточке объекта-приемника данных на основе значений из объекта-источника данных. В качестве источника данных используется _TopElem_ соответствующего документа. Приемником может быть элемент любого уровня в xml-структуре, содержащий нужные поля. В зависимости от типа источника заполняются разные поля в приемнике.

Примечание - Функция  не предназначена для копирования однотипных объектов. Она может быть использована для заполнения некоторого набора стандартных полей объекта одного типа в зависимости от полей объекта другого типа, **на основе которого** создан первый объект (например, для заполнения дополнительной информации объекта **Незаконченный электронный курс** из полей объекта **Электронный курс**).

 

Для типа источника **_subdivision_** заполняется поле _subdivision\_name._  
Для типа источника _**event**_ заполняются поля _event\_name, event\_start\_date, event\_result\_type\_id (если в мероприятии задан default\_event\_result\_type\_id)._  
Для типа источника **_course_** заполняются поля _course\_name, course\_code, duration, no\_encoding\_core\_lesson._  
Для типа источника **_assessment_** заполняются поля _assessment\_name, assessment\_code, duration, attempts\_num._  
Для типа источника **_request\_type_** заполняются поля _request\_type\_id, type, workflow\_id, is\_group._  
Для типа источника **_response\_type_** заполняются поля _response\_type\_id, type._  
Для типа источника **_education\_method_** заполняются поля _duration\_plan, duration\_fact, duration\_days\_plan, duration\_days\_fact, max\_person\_num, name, default\_response\_type\_id, mandatory\_fill\_response, cost, currency, cost\_type, education\_org\_id, event\_form, lectors (массив), prev\_testing.assessments (массив), post\_testing (массив), expense\_items (массив)_.  
Для типа источника **_education\_org_** заполняется поле _education\_org\_name._  
Для типа источника **_collaborator_** заполняются поля _person\_fullname, collaborator\_fullname, person\_name, person\_position\_name, position\_name, person\_org\_name, person\_instance\_id, person\_current\_state, person\_code._  
Для типа источника **_item_** заполняются поля _title, question\_text, type\_id, question\_points._  
Для типа источника **_submission\_type_** заполняется поле _submission\_type\_name_.  
Для типа источника **_activity_** заполняются поля _activity\_code, activity\_name_.  
Для типа источника _**verb**_ заполняются поля _verb\_code, verb\_name_.  
Для типа источника _**object**_ заполняются поля _object\_type, object\_name, object\_code, object\_start\_date_.  
Для типа источника **_tag_** заполняется поле _tag\_name_.

_Синтаксис:_  
      **tools.common\_filling (<type>, <source>, <object\_id>\[, <object\_doc>\]\[, <custom\_flag>\])**

_Аргументы:_  
     <type> (обязательный)  
     Тип: **Строка**. Строка, содержащая название типа источника объекта.  
     <source> (обязательный)  
     Тип: **Объект XmlElem (TopElem)**. TopElem документа-приемника данных (документа, которому передаются данные).  
     <object\_id> (обязательный)  
     Тип: **Целое число**. ID документа-источника данных.  
     <object\_doc> (необязательный)  
     Тип: **Объект XmlElem (TopElem)**. TopElem документа-источника данных.  
     <custom\_flag> (необязательный)  
     Тип: **Булево**. Если значение данного атрибута равно _true_ и значение атрибута _type_ равно _'event'_, то в интерфейс администратора выводится сообщение о количестве преподавателей в мероприятии.

_Возвращаемое значение:_  
      Тип: **Булево**. Возвращает значение **true**, если операция завершилась успешно и при заполнении не было выявлено ошибок, или _false_ \- если заполнение произошло с ошибкой. Если в приемнике данных не было полей для заполнения или в источнике данных не было необходимых данных, функция вернет значение _true_.

_Пример 1:_  
     _oActiveLearning\_receiver = OpenNewDoc ('x-local://wtv/wtv\_active\_learning.xmd');_ 

     `_oCollab_source = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Вилкова Ольга Николаевна' );        alert ( 'Найден сотрудник ' + oCollab_source.TopElem.name + ' с идентификационным номером ' + oCollab_source.DocID ); // на экран выводится информация об отобранном сотруднике-источнике         oActiveLearning_receiver.TopElem.person_id = oCollab_source.DocID; // заполнение основной информации о сотруднике        tools.common_filling( 'collaborator', oActiveLearning_receiver.TopElem, oCollab_source.DocID ); // заполнение дополнительной информации о сотруднике_`

     `_oCourse_source = tools.get_doc_by_key ( 'course', 'name', 'Эффективное совещание' );        alert ( 'Найден курс ' + oCourse_source.TopElem.name + ' с идентификационным номером ' + oCourse_source.DocID ); // на экран выводится информация об отобранном курсе-источнике         oActiveLearning_receiver.TopElem.course_id = oCourse_source.DocID; // заполнение основной информации о курсе        tools.common_filling( 'course', oActiveLearning_receiver.TopElem, oCourse_source.DocID ); // заполнение дополнительной информации о курсе_`

     `_oActiveLearning_receiver.BindToDb(); // связывание нового сформированного объекта с базой данных        oActiveLearning_receiver.Save(); // сохранение нового объекта в информационной базе_`

_Пример 2:_  
      `_tools.common_filling( 'request_type', doc.TopElem, _request_type_first_elem.PrimaryKey );         tools.common_filling( 'education_method', doc.TopElem, TopElem.Doc.DocID, TopElem );_`

---

