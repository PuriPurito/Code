## HasSel

Атрибут объекта ListItem.  
Возвращает _true_, если в списке выделен хотя бы один элемент. В противном случае атрибут возвращает _false_.

_Синтаксис:_  
      **ListItem.HasSel**

_Возвращаемое значение:_  
      Тип: **Булево**. Возвращает значение, показывающее, выделен ли в списке хотя бы один элемент (_true_ – выделен хотя бы один элемент, _false_ – ни один элемент в списке не выделен).

_Пример:_  
      `_bList_Select = List.HasSel;         bGrid_Select = Grid.HasSel;         bView_Select = view.HasSel;         bScreenItem_Select = Screen.FindItem( 'MainList' ).HasSel;                 if ( list.HasSel )               Ps.elem_id = list.SelRow.Env.ListElem.id;         else               Ps.elem_id.Clear();_`

---

