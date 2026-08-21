## include_person_to_personnel_reserve_position

Включает сотрудника в кадровый резерв. При этом создается объект **Кадровый резерв** и этап развития карьеры к нему. Если объект кадрового резерва для данного сотрудника уже создан, в этот объект вносятся изменения.

_Синтаксис:_  
      **tools.include\_person\_to\_personnel\_reserve\_position (<iPersonIdParam>, <teRequestParam>\[, <iCareerReserveTypeIdParam>\]\[, <iPositionIdParam>\]\[, <strStateParam>\]\[, <iPositionCommonIdParam>\]\[, <sIncludeDateParam>\])**  
      или  
      **tools.include\_person\_to\_personnel\_reserve\_position (<iPersonIdParam>, null, \[<iCareerReserveTypeIdParam>\]\[, <iPositionIdParam>\]\[, <strStateParam>\]\[, <iPositionCommonIdParam>\]\[, <sIncludeDateParam>\])**

_Аргументы:_  
     <iPersonIdParam> (обязательный)  
     Тип: **Целое число**. ID сотрудника, включаемого в резерв.  
     <teRequestParam> (необязательный (при отсутствии указать значение null))  
     Тип: **TopElem**. _TopElem_ заявки на включение в резерв. Если в заявке есть настраиваемые поля и в настраиваемых полях есть ссылка на тип кадрового резерва, то этот тип будет приписан создаваемому объекту кадрового резерва. При отсутствии _TopElem_ заявки необходимо обязательно указать значение _null_.  
     <iCareerReserveTypeIdParam> (необязательный)  
     Тип: **Целое число**. ID типа кадрового резерва. Этот тип будет приписан создаваемому объекту кадрового резерва.  
     <iPositionIdParam> (необязательный)  
     Тип: **Целое число**. ID должности. Эта должность будет указана в качестве цели развития этапа развития карьеры. Если должность не указана, но в заявке на включение в резерв была проставлена должность (как объект заявки), то будет использоваться ID должности из заявки.  
     <strStateParam> (необязательный)  
     Тип: **Строка**. Статус объекта кадрового резерва, который присваивается в результате работы функции. По умолчанию - _candidate_.  
     <iPositionCommonIdParam> (необязательный)  
     Тип: **Целое число**. ID типовой должности (используется, если не указана должность iPositionIdParam). Эта типовая должность будет указана в качестве цели развития этапа развития карьеры. Если типовая должность не указана, но в заявке на включение в резерв была проставлена типовая должность (как объект заявки), то будет использоваться _ID_ типовой должности из заявки.  
     <sIncludeDateParam> (необязательный)  
     Тип: **Дата**. Дата включения в резерв. По умолчанию используется текущая дата.     

_Возвращаемое значение:_  
      Тип: **Целое число**. ID объекта Кадровый резерв.

_Пример 1:_       

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна   // Находим программно сотрудника Васильеву Л.П. с помощью_ _функции tools.get_doc_by_key_   _oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_iReserveID = tools.include_person_to_personnel_reserve_position (oCollab.DocID, null);   alert (iReserveID);_`

_Пример 2:_  
      `_tools.include_person_to_personnel_reserve_position( iPersonID);         tools.include_person_to_personnel_reserve_position( _person.PrimaryKey, docRequest.TopElem);_`

---

