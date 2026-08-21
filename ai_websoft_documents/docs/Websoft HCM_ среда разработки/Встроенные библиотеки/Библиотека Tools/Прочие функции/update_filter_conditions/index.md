## update_filter_conditions

Обновляет указанный фильтр в администраторе WebTutor.

Входные параметры:

\_source\_conditions (Xml) –– структура, содержащая текущие условия поиска.

\_catalog\_name (string) ––  строка с названием каталога, для которого используется фильтр.

\_scheme\_id (string) необязательный  – ID фильтра для обновления.

\_set\_flag (bool) необязательный. Если укащанный фильтр проставляется в качестве выбранного для каталога в администраторе WebTutor.

Возвращаемый результат – нет.

Пример вызова.

**tools.update\_filter\_conditions( Ps.conditions, \_filter\_catalog, Ps.scheme\_id );**

---

