## GridRow - Строка табличной компоновки

Название:    GridRow  
Краткое описание:    Строка табличной компоновки  
Тип:    Контейнер  
Содержимое:    Содержит другие пользовательские элементы  
Подробное описание:    

  
Строка внутри табличной компоновки GridLite Тестирование. Содержит любые элементы, которые будут выстроены в ряд.  
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

Height

integer

Высота. В пикселях. Опционально.

Class

string

Имя класса из таблицы стилей если нужно

---

