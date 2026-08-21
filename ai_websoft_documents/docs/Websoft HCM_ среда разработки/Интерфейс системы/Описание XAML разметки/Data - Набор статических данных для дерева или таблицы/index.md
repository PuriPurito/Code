## Data - Набор статических данных для дерева или таблицы

Элемент разметки  
Название:    Data  
Краткое описание:    Набор статических данных для дерева или таблицы  
Тип:    Управляющий элемент  
Содержимое:    Содержит набор тегов Row, в которых соответственно набор описаний полей Cell  
Подробное описание:      
Элемент Data располагается внутри описания выборки CollectionLite Тестирование и задает статические данные. Внутри элемента перечислены теги Row, которые являются контейнерами одной записи. В элементах Row содержатся элементы Cell, в которых описываются поля каждой записи.

Атрибуты элемента Cell:  
Id - идентификатор поля  
Value - значение поля  
Примеры использования:    

**<!-- Для таблицы -->  
<Collection Name\="StaticOne">  
<Param Name\="sTargetName" Value\="{Edit1}"/>  
<Param Name\="iTargetRank" Value\="10"/>  
<Data\>  
<Row\>  
<Cell Id\="link" Value\="websoft.ru"/>  
<Cell Id\="datefield" Value\="01.01.2000"/>  
</Row\>  
<Row\>  
<Cell Id\="link" Value\="datex.ru"/>  
<Cell Id\="datefield" Value\="02.02.2010"/>  
</Row\>  
</Data\>  
</Collection\>**

  
**<DataGrid Name\="Grid2Static" Title\="My rigid grid" Source\="{StaticOne}" Height\="200">  
<DataGridColumn Title\="Link" Value\="linkfield" Width\="200" Type\="string"/>  
<DataGridColumn Title\="Дата какая\-то" Value\="datefield" Width\="100" Type\="date" Editable\="1"/>  
</DataGrid\>**

  
**<!-- Для дерева-->**

<Collection Name\="StillTree">  
<Data\>  
<Row\>  
<Cell Id\="id" Value\="branch01"/>  
<Cell Id\="name" Value\="Branch"/>  
<Cell Id\="hasChildren" Value\="true"/>  
</Row\>  
<Row\>  
<Cell Id\="id" Value\="leaf01"/>  
<Cell Id\="name" Value\="Leaf"/>  
<Cell Id\="parent\_id" Value\="branch01"/>  
<Cell Id\="hasChildren" Value\="false"/>  
</Row\>  
</Data\>  
</Collection\>

<Tree Source\="{StillTree}" DataID\="id" DataParent\="parent\_id" DataTitle\="name" 

DataFatherhood\="hasChildren"Click\="OPENWINDOW=http://www.google.ru/search?q={id}"/>

---

