## xquery

Оптимизированная функция выполнения длинных запросов. Ее предпочтительнее использовать, кода нужно сделать, например запрос с иерархией. И всегда использовать вместо CatalogHierSubset используя функцию IsHierChild.

Входные параметры:  
sQueryParam (string) –  строка для выполнения запроса.

Возвращаемый результат  - результат выполнения запроса XQuery по оптимизированной строке sQueryParam.

Пример вызова.  
**docArray = tools.xquery( 'for $elem in documents where IsHierChild( $elem/id, ' + \_main\_doc.document\_id + ' ) order by $elem/Hier() return $elem/id' );xarrSubdivisions = tools.xquery( 'for $elem in subdivisions where IsHierChild( $elem/id, ' + iLastDepID + ' ) order by $elem/Hier() return $elem/id' );**

---

