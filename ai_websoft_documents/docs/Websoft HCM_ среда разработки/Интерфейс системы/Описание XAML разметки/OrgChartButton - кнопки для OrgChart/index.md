## OrgChartButton - кнопки для OrgChart

Элемент разметки  
Название:    OrgChartButton  
Краткое описание:    кнопки для OrgChart  
Тип:    Пользовательский элемент  
Содержимое:      
Подробное описание:      
Кнопки для каждого узла OrgChartDocument Link Icon  
Примеры использования:    

<Collection Name="OrgChartCollection" Source="org\_chart\_collection"/>

<OrgChart Name="OneHellOfAChart" Width="100%" Height="600" Source="{OrgChartCollection}" Selectable="1">  
<OrgChartButton Click="OPENURL=view\_doc.html?mode=collaborator&doc\_id=<%=curDocID%>&object\_id={person\_id}" Image="/pics/person.gif">Open collaborator</OrgChartButton>  
</OrgChart>

Параметры:

**Атрибут**

**Тип**

**Описание**

Image

string

URL до изображения кнопки

События:

**Событие**

**Описание**

Click

Выполнение действия при нажатии на кнопку

---

