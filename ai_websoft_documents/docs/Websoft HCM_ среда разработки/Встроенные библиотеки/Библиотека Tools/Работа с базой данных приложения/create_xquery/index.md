## create_xquery

Формирует строку для использования в запросе XQuery на основе указанных параметров.

_Синтаксис:_  
      **tools.create\_xquery (<catalog\_name>, <xquery\_qual>\[, <filter\_xquery>\]\[, <order\_str>\]\[, <order\_dir>\]\[, <is\_hier>\]\[, <foreign\_field>\]\[, <oColumnsParam>\])**

_Аргументы:_  
     <catalog\_name> (обязательный)  
     Тип: **Строка**. Строка с названием каталога без «s» на конце, по которому будет происходить поиск в запросе.  
     <xquery\_qual> (обязательный)  
     Тип: **Строка**. Строка с текстом условий поиска, который используется в конструкции _where_. Они будут добавлены к условиям заданными в других параметрах функции (_filter\_xquery_ и _ft\_filter_).  
     <filter\_xquery> (необязательный)  
     Тип: **Строка**. Строка с текстом других условий поиска, который используется в конструкции _where_. Они будут добавлены к условиям заданными в других параметрах функции (_xquery\_qual_ и _ft\_filter_). При отсутствии данного аргумента необходимо добавить значение _null_.   
     <ft\_filter> (необязательный)  
     Тип: **Строка**. Строка с текстом для полнотекстового поиска в документе, который используется в конструкции _where_ (с использованием оператора _doc-contains_). Они будут добавлены к условиям, заданным в других параметрах функции (_xquery\_qual_ и _filter\_xquery_).  
     <order\_str> (необязательный)  
     Тип: **Строка**. Строка названий полей разделенных символами «запятая» (,) , по которым будет происходить сортировка в запросе (используются в конструкции _order by_).  
     <order\_dir> (необязательный)  
     Тип: **Строка**. Строка, указывающая направление сортировки (значение по умолчанию равно _'+'_ (сортировка по возрастанию (_asсending_)). Для задания сортировки по убыванию (_descending_) значение параметра указывается равным _'-'_, _'descending'_ или _'desc'_.  
     <is\_hier> (необязательный)  
     Тип: **Булево**. Аргумент, определяющий необходимость создания иерархии в результате запроса (_true_ – в строку запроса будет добавлен фрагмент _$elem/Hier()_). По умолчанию _false_.  
     <foreign\_field> (необязательный)  
     Тип: _Строка_. Если в запросе будет использоваться полнотекстовый поиск (параметр _ft\_filter_), то можно указать ключевое поле поиска, отличное от id. Значение по умолчанию равно 'id'.  
     <oColumnsParam> (необязательный)  
     Тип: _Объект XmlElem_. Колонки (например, из файла _view\_types.xml_) для возврата результатов запроса.

_Возвращаемое значение:_  
      Тип: **Строка**. Строка для использования в запросе XQuery на основе указанных параметров.

_Пример 1:_  
`_try {        _query_str = tools.create_xquery ( 'collaborator', "contains($elem/fullname, 'Иванов')", "$elem/sex = 'm'", 'candidate', 'code, org_name', 'desc');        alert ( _query_str ); // возвращает строку: for $elem in collaborators where contains($elem/fullname, 'Иванов') and $elem/sex = 'm' and doc-contains( $elem/id, 'wt_data', 'candidate' ) order by $elem/code, $elem/org_name descending return $elem        objArray = XQuery(_query_str);  // objArray является массивом объектов Сотрудник, отобранных запросом.         A1 = ArrayOptFirstElem ( objArray ); // функция возвращает первый элемент массива сотрудников objArray         alert ('Найден сотрудник: ' + A1.fullname); // на экран выводится полное имя отобранного сотрудника   }    catch (err){        alert ('Сотрудник не найден!');   }   _`

_Пример 2:_  
     `_query = tools.create_xquery ( s_catalog_name, s_xquery_qual, s_filter_xquery, s_ft_filter, s_order_str, s_order_dir, b_is_hier, s_foreign_field, oColumnsParam );        query = tools.create_xquery ( 'assessment', '$elem/status != \'project\'', _filter_xquery, Ps.filter.fulltext, '$elem/title', List.GetCurSortDir(), false );        XQuery( tools.create_xquery ( 'sub', '$elem/type != \'position\'', '', Ps.filter.fulltext, 'name', List.GetCurSortDir(), true ) );        query = tools.create_xquery ( 'event_collaborator', xqueryQualExpr , '', _ft_filter, _cur_view_type.columns.Child( List.GetCurSortColumnIndex() ).order, List.GetCurSortDir(), false, primaryKeyExpr );        query = tools.create_xquery ( Ps.catalog_name, Ps.xquery_qual, sFilterXquery, Ps.filter.fulltext, ( Ps.use_common_columns ? _cur_column.order : '$elem/' + _cur_column.name ), List.GetCurSortDir(), Ps.is_hier, null, Ps );_`

---

