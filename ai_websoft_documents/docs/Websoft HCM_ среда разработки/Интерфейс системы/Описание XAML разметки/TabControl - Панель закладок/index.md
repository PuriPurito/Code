## TabControl - Панель закладок

Элемент разметки  
Название:    TabControl  
Краткое описание:    Панель закладок  
Тип:    Контейнер  
Содержимое:    Элементы TabItem  
Подробное описание:      
Контейнер закладок. Содержит закладки TabItemLite Тестирование

  
  
  
  
  
  

  
Примеры использования:    

<TabControl Name="Tab1" ActiveTab="0">  
  <TabItem Title="Check">  
    <CheckBox Name="Checkbox1" Title="Agree totally" Value="1"/>  
  </TabItem>  
  <TabItem Title="Combo">  
    <ComboBox Name="MyCombo1">  
      <ComboBoxItem Value="0">Zero</ComboBoxItem>  
      <ComboBoxItem Value="1" Selected="true">Uno</ComboBoxItem>  
      <ComboBoxItem Value="2">Due</ComboBoxItem>  
    </ComboBox>  
  </TabItem>  
</TabControl>

Параметры:

**Атрибут**

**Тип**

**Описание**

Name

string

Идентификатор

Width

integer

Ширина контейнера

Class

string

Имя класса из таблицы стилей если нужно

ActiveTab

integer

Номер открытой закладки по умолчанию (начиная с 0). Опционально.

Hidden

bool

Скрыт элемент или показан. По умолчанию показан.

Preservable

bool

Запоминать ли выбранную закладку (\[ExtJS: в Cookie\]). Требует указания идентификатора Name. По умолчанию: нет

DisplayMode

string

Способ отображения \[tab, accordion, concertina, onehandedconcertina\]

TabsLocation

string

Расположение закладок относительно панели \[w, n, e, s\]

TabsWidth

integer

Жестко заданная ширина закладок с текстом. Опционально.

TabsHidden

bool

Скрыть панель вкладок. Переключаться придется только программно.

MinHeight

MinHeight

Минимальная высота компонента. По умолчанию: не указана

Adapt

bool

Автоматически отменяет работу параметра TabsLocation при режиме плеера "mobile"

---

