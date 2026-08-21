## TileView - Плиточное представление данных по шаблону

Элемент разметки  
Название:    TileView  
Краткое описание:    Плиточное представление данных по шаблону  
Тип:    Пользовательский элемент  
Содержимое:    Объекты Param  
Подробное описание:      
Если данные из CollectionLite Тестирование представлять не списком, как в DataGridLite Тестирование, а плиткой, где каждая плитка - какой-то XAML шаблон, то на помощь приходит TileView.

Примеры использования:    

<TileView Width="900" Height="500" DataSource="{Collection1}" TemplateSource="xaml\_tile1" PageSize="5"/>  
Код Collection1:  
RESULT = XQuery("kpis");

Код xaml\_tile1:  
<SPXMLScreen>  
<%  
var sType;  
switch (PARAMETERS.GetOptProperty("type"))  
{  
case "auto": sType = "Автомат"; break;  
case "input": sType = "Вводимый"; break;  
case "scale": sType = "По шкале"; break;  
default:    sType = "???"; break;  
}  
%>  
<Grid Width="100%" CellClass="cssGridCutifier">  
<GridColumns>  
<GridColumn Width="200" Align="right"/>  
<GridColumn/>  
</GridColumns>  
<Label>Название:</Label>  
<Label><%=PARAMETERS.GetOptProperty("name")%></Label>  
<Label>Тип:</Label>  
<Label><%=sType%></Label>  
</Grid>  
</SPXMLScreen>

Параметры:

**Атрибут**

**Тип**

**Описание**

Width

integer

Ширина. В пикселях.

Height

integer

\[ExtJS Player\]: Высота. В пикселях. \[ExtJS Player 5\]: отсутствие значение высоты вынудит TileView подбирать высоту автоматически.

DataSource

string

Код документа выборки в WT. Если написать просто код выборки, то она будет напрямую запрошена с сервера. Если написать код выборки в фигурных скобках {}, то выборка будет проводиться через объект Collection (который в этом случае должен существовать). Это нужно, если требуется на каждый запрос к выборке передать еще какие-то данные, которые в этом самом объекте Collection и описываются.

TemplateSource

string

Код документа XAML в базе WT. XAML будет использован для отрисовки каждой плитки. В объект PARAMETERS будут переданы поля из текущей записи, полученной из DataSource (см пример). N.B. При генерации каждой плитки в XAML не будут работать такие служебные объекты, как диалоги, действия, выборки и т.п. Они просто потеряются.

Hidden

bool

Скрыт элемент или показан. По умолчанию показан.

Name

string

Идентификатор

Columns

integer

Количество колонок в таблице. \[3\]

Rows

integer

Количество строк в таблице без скролла (используется чтобы скорректировать высоту каждой ячейки) \[3\]

Scroll

bool

Показывать полосы прокрутки, если содержимое тайла не влезает. Если не показывать + не влезает, то содержимое просто будет отсечено. \[Да\]

TileHeight

integer

высота тайла в пикселях. Приоритетнее чем Rows. Если нет ни Height, ни TileHeight, TileHeight принимается равным 100px;

TileWidth

integer

ширина тайла в пикселях. Приоритетнее чем Columns.

PageSize

integer

Размер страницы. Если используется постраничное отображение. Игнорируется при статичных выборках.

PagingMode

string

Режим постраничного отображения. \[bar, scroll\]

---

