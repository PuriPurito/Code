## Grid - Табличная компоновка

Элемент разметки  
Название:    Grid  
Краткое описание:    Табличная компоновка  
Тип:    Контейнер  
Содержимое:    Описание столбцов таблицы GridColumns и элементы строк GridRow  
Подробное описание:    

  

Таблица компоновки со строками и столбцами.  
Содержит описание столбцов таблицы GridColumnsLite Тестирование и элементы GridRowLite Тестирование  
Примеры использования:      
<Grid Width="500">  
<GridColumns>  
<GridColumn Width="200"/>  
<GridColumn Width="300"/>  
</GridColumns>  
<GridRow>  
<Label>TopLeft</Label>  
<Label>TopRight</Label>  
</GridRow>  
<GridRow>  
<Label>BottomLeft</Label>  
<Label>BottomRight</Label>  
</GridRow>  
</Grid>

Параметры:

**Атрибут**

**Тип**

**Описание**

Width

integer

Ширина. В пикселях.

Class

string

string

CellClass

string

Имя класса из таблицы стилей для каждой ячейки

Hidden

bool

Скрыт элемент или показан. По умолчанию показан.

Adapt

bool

Принудительно выставляет только одну колонку при режиме плеера "mobile"

---

