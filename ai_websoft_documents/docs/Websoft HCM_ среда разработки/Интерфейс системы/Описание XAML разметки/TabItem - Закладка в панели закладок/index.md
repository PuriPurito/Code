## TabItem - Закладка в панели закладок

Элемент разметки  
Название:    TabItem  
Краткое описание:    Закладка в панели закладок  
Тип:    Контейнер  
Содержимое:    Другие компоненты  
Подробное описание:      
Контейнер элементов, являющийся закладкой в элементе TabControlLite Тестирование  
Примеры использования:    

<TabControl Name="Tab1" Height="100" ActiveTab="0">  
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

Title

string

заголовок закладки

Height

integer

Высота элемента

Class

string

Имя класса из таблицы стилей если нужно

Reload

bool

Вместо переключения на эту закладку будет обновлена страница, причем в массив параметров (PARAMETERS) XAML'а будет передано значение: key={Идентификатор TabControl}, value={порядковый номер закладки, начиная с 0}. Также, порядковый номер закладки всегда попадет в CONTEXT(даже если произошла отправка данных на сервер без переключения закладки). Всё вышесказанное действительно, если у TabControl указан идентификатор

События:

**Событие**

**Описание**

Click

Выполнение действия при нажатии на эту закладку

---

