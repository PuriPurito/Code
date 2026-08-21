## DataGridRowHTMLDescription - Раскрывающаяся строка в таблице, содержащая HTML описание [ExtJS Player 5]

Элемент разметки  
Название:    DataGridRowHTMLDescription  
Краткое описание:    Раскрывающаяся строка в таблице, содержащая HTML описание \[ExtJS Player 5\]  
Тип:    Управляющий элемент  
Содержимое:    HTML шаблон раскрывающейся строки. Значения из строки таблицы добываются указанием соответствующего свойства в фигурных скобках (см. пример)  
Подробное описание:      
Только для версии проигрывателя \[ExtJS Player 5\]

Добавляет раскрывающуюся строку для каждой обычной строки таблицы DataGridLite Тестирование, содержащей HTML описание по шаблону.

Для таблицы может существовать только один шаблон. Если встречается несколько элементов DataGridRowHTMLDescription, в расчет будет принят только первый.

  
Примеры использования:    

<Collection Name="TestCollection" Source="TestCollection">      
</Collection>

<DataGrid Title="XXX" Source="{TestCollection}" Name="xxxGrid" ShowHeader="1">  
<DataGridColumn Width="300" Type="string" Title="Name" Value="name" ColorSource="color"/>  
<DataGridColumn Width="100" Type="integer" Title="Num" Value="num"/>  
<DataGridRowHTMLDescription>  
<!\[CDATA\[  
<span>Название: </span><span style="font-weight: bold">{name}</span><span>, и цифра равна </span><i>{num}. Цвет = {color}</i>  
\]\]>  
</DataGridRowHTMLDescription>  
</DataGrid>

---

