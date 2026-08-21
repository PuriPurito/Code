## DataType

Возвращает тип аргумента <arg> (строка, число, объект и т.п.)  
Примечание – Если в качестве аргумента задан объект любого типа, то функция возвращает значение 'object'.

_Синтаксис:_  
      **DataType (<arg>)**

_Аргументы:_  
      _<arg> (обязательный)_  
      Тип: **Строка, Целое, Вещественное число, Булево или Объект**. Исходное значение.

_Возвращаемое значение:_  
      Тип: **Строка** . Тип аргумента. Результат действия функции.

_Пример:_  
      `_A1 = 'Программа Webtutor'; // строковое значение         alert( DataType (A1)) ; // возвращает строковое значение 'string'         A2 = 123; // целое число         alert( DataType (A2) ); // возвращает строковое значение 'integer'         A3 = 123.45; // вещественное число         alert( DataType (A3) ); // возвращает строковое значение 'real'         A4 = true; // булево         alert( DataType (A4) ); // возвращает строковое значение 'bool'            A5 = Date(); // объект типа Дата (текущая дата)         alert( DataType (A5) ); // возвращает строковое значение 'object'         alert(DataType(CurDate)); // тип данных Дата (текущая дата); возвращает строковое значение 'date'          alert(DataType(ParseDate(Date()))); // тип данных Дата (текущая дата); возвращает строковое значение 'date'          alert(DataType(ArrayFirstElem(collaborators).modification_date)); // объект типа Дата; возвращает строковое значение 'object' (объекти типа XmElem)         alert(DataType(ArrayFirstElem(collaborators).modification_date.Value)); // тип данных Дата; ; возвращает строковое значение 'date'          alert(DataType(RValue(ArrayFirstElem(collaborators).modification_date))); // тип данных Дата; ; возвращает строковое значение 'date'_`   
  
      ``_`_Array1 = ['one', 'two', 'three']; // массив         alert( DataType (Array1) ); // возвращает строковое значение 'object'         A6 = undefined; // значение undefined         alert( DataType (A6) ); // возвращает строковое значение 'undefined'         A7 = null; // значение null         alert( DataType (A7) ); // возвращает строковое значение 'null'_`_``

---

