## assign_elems

Заполняет свойства объекта-получателя из соответствующих свойств объекта-источника. Заполняются только те свойства, названия которых указаны в переданном в функцию массиве.

_Синтаксис:_  
      **tools.assign\_elems (<fldTarget>, <fldSourceParam>, <arrFieldNamesParam>)**

_Аргументы:_  
      <fldTarget> (обязательный)  
      Тип: **TopElem объекта**. Объект-получатель.  
      <fldSourceParam> (обязательный)  
      Тип: **TopElem объекта**. Объект-источник.  
      <arrFieldNamesParam> (обязательный)  
      Тип: **Массив**. Массив строк с названиями полей для заполнения.     

_Возвращаемое значение:_  
      Производит заполнение свойства объекта. Возвращаемое значение отсутствует.

_Пример 1:_  
      _tools.assign\_elems( fldCustomWebTemplate\_temp, teCustomWebTemplate0666, \['use\_session\_cache','out\_type','cwt\_type','zones'\] );_  
      _tools.assign\_elems( fldFormLogEntry, fldLogEntry, \['revision','author','date','msg'\] );_  
      _tools.assign\_elems( teForm, tePoll, \["questions","items"\] );_

     `_docSite = OpenNewDoc( 'x-local://wtv/wtv_site.xmd' );        docSite.BindToDb();        if ( TopElem.site_id.HasValue ) {             teSite = OpenDoc( UrlFromDocID( TopElem.site_id ) ).TopElem;             tools.assign_elems( docSite.TopElem, teSite, [ 'web_design_id', 'lng_id', 'menus', 'web_designs', 'first_unauthorized_url', 'first_authorized_url', 'anonym_collaborator_id','anonymous_modes' ] );        }_`

_Пример 2 (Запись полей "код" и "имя" из объекта-источника (подразделения) в объект-получатель (группу)):_  
      _teSub = tools.open\_doc(SubID).TopElem; // TopElem объекта-источника_  
      _teGroup = tools.open\_doc(GroupID).TopElem; // TopElem объекта-получателя  
     tools.assign\_elems (teGroup, teSub, \["code","name"\]); // запись указанных полей в объект-получатель из объекта-источника_

---

