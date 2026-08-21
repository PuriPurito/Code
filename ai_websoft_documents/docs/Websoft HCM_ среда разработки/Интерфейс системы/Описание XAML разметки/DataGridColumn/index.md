## DataGridColumn

Описывает колонку таблицы DataGrid, в которой находится.

Атрибуты

Тип/Формат

Поддержка

Описание

Title

string

\*

Заголовок колонки

Value

string

\*

Поле из результатов выборки, из которого извлекать значение

Width

integer

\*

Ширина колонки. Опционально.

Type

string

\*

Тип колонки\[**string**,**checkbox**,**date**,**button**,**image,link,fixedimage**\]. По умолчанию **string**.

Hidden

bool

\*

Колонка скрыта от показа. По умолчанию **false**

ColorSource

string

\*

Поле из результатов выборки, в котором записан цвет в HEX вида **#****RRGGBB** либо непосредственно строка цвета HEX вида **#****RRGGBB**

Editable

bool

\*

Редактируемая колонка или нет. По умолчанию **false**

Sortable

bool

\*

Сортируемая колонка или нет. По умолчанию **false**

Ghost

bool

\*

Данные из этой колонки не будут извлекаться для передачи на сервер. По умолчанию если **Ghost** не указан, то извлекаются только редактируемые поля (**Editable**\=**1**). Параметром Ghost можно регулировать: передавать конкретное нередактируемое поле или не передавать редактируемое.

MinWidth

integer

**\[ExtJS Player 5\]**

Минимальная ширина для колонки

Multiline

bool

**\[ExtJS Player 5\]**

Перенос текста (для типа "string") \[false\]

ClassSource

string

**\[ExtJS Player 5\]**

Поле из результатов выборки, в котором записано название класса для ячейки

     
     
   

Cобытия

Описание

Click

Выполнение действия при нажатии на кнопку (только если **Type****\="****button****"** или **Type****\="****link****"**). Описание действия аналогично описанию действия кнопки Button

NB: в фигурных скобках можно использовать поля из результатов выборки, например **{****name****}**

   <DataGrid Name="Grid1" Title="My first grid" Source="SelectMe" Height="200" PageSize="5">  
  <DataGridColumn Title="ID" Value="id" Width="200" Type="string" Hidden="true"/>  
  <DataGridColumn Title="Название" Value="name" Width="50%" Type="string" ColorSource="#FF0000"/>  
  <DataGridColumn Title="Дата создания" Value="modification\_date" Width="100" Type="date" Editable="1"/>  
</DataGrid>

---

