## CreateDynamicElem

Создает динамический XML-элемент (без привязки к форме) со всеми присущими ему свойствами ((Value, Name, Xml …) и методами (AddChild, …). Созданный элемент не имеет родительского элемента.

_Синтаксис:_  
      **CreateDynamicElem (<name>, <type>)**

_Аргументы:_  
      _<name> (обязательный)_  
      Тип: **Строка**. Имя создаваемого элемента.  
      _<type> (обязательный)_  
      Тип: **Строка**. Тип данных XML-элемента (возможные значения: _'string', 'integer', 'bool'_ и т.д.).

_Возвращаемое значение:_  
      Тип: **Объект XmlElem**. Ссылка на созданный объект XmlElem. Результат действия функции.

_Пример:_  
      `_newElem = CreateDynamicElem( 'elem_count' , 'string'); // создание элемента newElem со свойством Name='elem_count' и текстовым свойством Value         newElem.Value = 'Новый элемент'; // определение значения свойства Value элемента newElem         newElem.AddChild( 'count', 'integer' ); // создание двух подчиненных элементов первого уровня и определение значений их свойства Value         newElem.count = 5;         newElem.AddChild( 'description', 'string' );         newElem.description = 'Описание нового элемента';         alert (newElem.Name + ' = ' + newElem.Value); // вывод на экран значений свойств Name и Value элемента newElem (Name='elem_count', Value='Новый элемент')         for ( _elem in newElem ) // вывод на экран наименований и значений подчиненных элементов первого уровня, входящих в состав элемента newElem         {               alert (_elem.Name + ' = ' + _elem.Value); // первый элемент: Name='count', Value=5; второй элемент: Name='description', Value='Описание нового элемента'         }_`

_Другие примеры:_  
      `_newElem = CreateDynamicElem( 'elem_count', 'integer' );         valueElem = CreateDynamicElem( 'v', ( elem.IsMethod ? 'string' : elem.Type ) );         filterElem = CreateDynamicElem( 'is_candidate', 'bool' );_`

---

