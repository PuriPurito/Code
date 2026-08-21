## GetCurXQuerySortInfo

Метод объекта ListItem.  
Возвращает информацию о параметрах сортировки на языке XQuery.  
Метод аналогичен GetCurCodeSortInfo, но производит строку не для выполняемого кода, а для запроса XQuery 1, 2 (в частности, для команды сортировки order by). Соответственно, передается имя псевдопеременной (например, $elem), относительно которой будет выполняться сортировка, и направление сортировки. Примеры результатов выполнения данного метода приведены ниже.  
Данный метод целесообразно применять для сортировки массива, сформированного XQuery-запросом к другим объектам.

_Синтаксис:_  
      **ListItem.GetCurXQuerySortInfo ()**

_Аргументы:_  
      _<objName> (обязательный)_  
      Тип: **Строка**. Наименование объекта, в котором хранятся запрашиваемые записи.

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение параметров сортировки на языке XQuery (данное выражение записывается в запросе XQuery после команды сортировки _'order by'_).  
      _Примеры отображения параметров сортировки:_  
      _'$elem/id ascending'  
      '$elem/birth\_date descending'_

_Пример:_  
      `_querySpec.xquery_order_str = list.GetCurXQuerySortInfo( '$elem' );                 query = 'for $elem in positions where ';         if ( _docEnv.ListElem.Name == 'org' )               query = query + '$elem/org_id = ';         else               query = query + '$elem/parent_object_id = ';         query = query + _docEnv.ListElem.PrimaryKey + ' order by ' + List.GetCurXQuerySortInfo( '$elem' ) + ' return $elem';_`

---

