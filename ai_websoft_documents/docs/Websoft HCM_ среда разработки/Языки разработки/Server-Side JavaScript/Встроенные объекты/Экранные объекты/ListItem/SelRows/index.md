## SelRows

Атрибут объекта ListItem.  
Возвращает массив выделенных строк (элементов ROW, которые представляют из себя объекты типа ScreenItem).

_Синтаксис:_  
      **ListItem.SelRows**

_Возвращаемое значение:_  
      Тип: **Массив (массив объектов ScreenItem)**. Массив выделенных строк в списке.

_Пример:_  
      `_for ( row in list.SelRows )               Ps.elems.ObtainChildByKey( ' ' + row.Env.ListElem.id );_`

---

