## Row

Абстрактная переменная типа Объект ScreenItem, характеризующая строку таблицы.  
Возвращает текущий элемент GRID-ROW. Обычно используется в коде, вызываемом внутри элемента.

_Синтаксис:_  
      **row.\[...\]**

_Пример:_  
`_Ps.object_id.Add().Value = row.Env.ListElem.id;   row.SetSel( true );   row.AddAttr( 'SET-SEL-ACTION', setSelAction );_`

---

