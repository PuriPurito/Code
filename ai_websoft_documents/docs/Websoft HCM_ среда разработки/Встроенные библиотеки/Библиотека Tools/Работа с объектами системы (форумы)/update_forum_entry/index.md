## update_forum_entry

Обновляет данные о количестве дочерних элементов в родительском форуме. Если задан iNewForumIDParam, то дочерним записям форума с iParentForumEntryIDParam,  проставляется новое значение форума.

Входные параметры:

doc (Doc) необязательный, если задан iParentForumEntryIDParam – Doc записи форума, родителя которого нужно обновить;

iNewForumIDParam (int) необязательный – ID форума, к которому нужно привязать элементы ;

iParentForumEntryIDParam (int) необязательный, если задан doc – ID родительской записи форума.

Возвращаемый результат – целое число (int), количество дочерних элементов вниз по иерархии в документе определяемом iParentForumEntryIDParam.

Пример вызова

**tools.update\_forum\_entry( null, null, iParentForumEntryID );**

**tools.update\_forum\_entry( TopElem.Doc, TopElem.forum\_id );**

---

