## Rows

Атрибут объекта ListItem.  
Возвращает массив всех строк в списке (элементов типа ROW, которые представляют собой объекты типа ScreenItem).

_Синтаксис:_  
      **ListItem.Rows**

_Возвращаемое значение:_  
      Тип: **Массив (массив объектов ScreenItem)**. Массив всех строк в списке.

_Пример:_  
      `_for ( row in list.Rows )         {               if ( Ps.elems.ChildByKeyExists( ' ' + row.Env.ListElem.id ) )                     row.SetSel( true );         }_`

---

