## ComboBoxItem - Элемент списка

Элемент разметки  
Название:    ComboBoxItem  
Краткое описание:    Элемент списка  
Тип:    Пользовательский элемент  
Содержимое:    Текст пункта списка  
Подробное описание:      
Элемент списка ComboBoxLite Тестирование  
Примеры использования:    

<ComboBox Name\="MyCombo1">  
  <ComboBoxItem Value\="0">Zero</ComboBoxItem\>  
  <ComboBoxItem Value\="1">Uno</ComboBoxItem\>  
  <ComboBoxItem Value\="2">Due</ComboBoxItem\>  
</ComboBox\>

Параметры:

**Атрибут**

**Тип**

**Описание**

Value

string

Значение элемента списка

Selected

bool

Данное значение выбрано. Это приоритетнее чем свойство SelectedItem у ComboBox

События:

**Событие**

**Описание**

Change

Выполнение действия при переключении на ЭТО значение. Если у ComboBox стоит своё событие Change, то оно не выполнится для этого элемента (у элемента событие приоритетнее)

---

