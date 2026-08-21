## GridColumn - Описание столбца компоновки

Элемент разметки  
Название:    GridColumn  
Краткое описание:    Описание столбца компоновки  
Тип:    Управляющий элемент  
Содержимое:      
Подробное описание:      
Описывает столбец в табличной компоновке GridLite Тестирование. Это описание располагается строго внутри элемента GridColumnsLite Тестирование  
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

Ширина столбца. В пикселях.

Align

string

Выравнивание дочерних элементов \[left,center,right\]

Adapt

bool

скрывает эту колонку при режиме плеера "mobile"

---

