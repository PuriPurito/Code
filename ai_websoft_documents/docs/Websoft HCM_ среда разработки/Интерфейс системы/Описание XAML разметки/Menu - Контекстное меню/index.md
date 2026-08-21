## Menu - Контекстное меню

Элемент разметки  
Название:    Menu  
Краткое описание:    Контекстное меню  
Тип:    Пользовательский элемент  
Содержимое:    Список элементов MenuItem  
Подробное описание:      

Контекстное меню элементов (т.е. всплывающее по правой кнопке). В теле перечислены пункты мению MenuItemLite Тестирование

Элементы, поддерживающие контекстное меню: DataGridLite Тестирование, EditLite Тестирование, TreeLite Тестированиеи даже ButtonDocument Link Icon

Примеры использования:    

  
Пример 1  
<Edit Name="Edit1" Width="500">  
<Menu>  
<MenuItem Title="Очистить" Click="DELETE=Edit1"/>  
</Menu>  
</Edit>

  
Пример 2

  
<Collection Name="MenuMe" Source="MenuMe">  
<Param Name="alertMsg" Value="Текущая дата {datefield}"/>  
</Collection>  
<DataGrid Name="GridStatic" Title="My rigid grid" Source="{StaticOne}" Height="200" ShowHeader="true" Selection="single">  
<DataGridColumn Title="Link" Value="linkfield" Width="200" Type="link" Click="SET=Edit1,{val}" Ghost="0"/>  
<DataGridColumn Title="Дата какая-то" Value="datefield" Width="100" Type="date" Editable="1"/>

<Menu Source="{MenuMe}">  
<MenuItem Title="Пыкнуть..." Click="ALERT=Пыкнул {linkfield}"/>  
</Menu>  
</DataGrid>  
Код выборки MenuMe:  
RESULT = (\[  
{"title":"Сообщить об успехе", "click":("ALERT=" + alertMsg)},  
{"title":"Сообщить о поражении", "click":("ALERT=You lose!")},  
{"title":"Подсветить значение", "click":("ALERT=Текущее значение: {linkfield}")}  
\]);

Параметры:

**Атрибут**

**Тип**

**Описание**

Source

string

Код документа выборки в WT, которая вернёт список пунктов меню. Если написать просто код выборки, то она будет напрямую запрошена с сервера. Если написать код выборки в фигурных скобках {}, то выборка будет проводиться через объект Collection (который в этом случае должен существовать). Эти пункты идут в дополнение к пунктам MenuItem, запрашиваются при каждом вызове контекстного меню, а не один раз.

---

