## GetCurSortColumnIndex

Метод объекта ListItem.  
Возвращает номер столбца, по которому производится сортировка (нумерация столбцов начинается с нуля).

_Синтаксис:_  
      **ListItem.GetCurSortColumnIndex ()**

_Аргументы:_  
      Метод вызывается без аргументов.

_Возвращаемое значение:_  
      Тип: **Целое число**. Номер столбца, по которому производится сортировка.

_Пример:_  
      `_if (List.GetCurSortColumnIndex() < ColumnMaxNum)         {               _array = ArraySort ( _array, ColumnName, List.GetCurSortDir() );         }_`

---

