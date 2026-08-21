## ObjectType

Возвращает тип объекта (_массив, JS-объект, XmlElem_ и т.п.)  
Может также использоваться как дополнительная вместе с функцией DataType (в случае, если функция DataType возвращает значение _'object'_).  
Примечание – Если в качестве аргумента задана переменная с простым типом данных (_строка, число, булево_ и т.д.), то функция возвращает пустую строку.

_Синтаксис:_  
      **ObjectType (<obj>)**

_Аргументы:_  
      _<obj> (обязательный)_  
      Тип: **Объект**. Ссылка на объект. Исходное значение.

_Возвращаемое значение:_  
      Тип: **Строка**. Тип объекта. Результат действия функции.  
      _Основные возможные типы объектов:_  
      _XmElem_ - документы XML, элементы XML, атрибуты документов, каталожные записи и др.;  
      _XmFormElem_ - формы (объекты XmlForm) и их элементы;  
      _FaItem_ - экраны (объекты Screen) и их элементы;  
      _JsArray_ - массивы;  
      _BmObject_ \- объекты с внутренней структурой данных платформы SPXML (в частности, каталоги, выборки из каталогов (например, результаты выполнения функции XQuery), объекты (структуры) типа Дата (**Date()**) и др.)

_Пример:_  
      `_// Примечание - Для корректного выполнения данного кода файлы WebTutorAdmin/wtv/wtv_resource.xmd и WebTutorAdmin/wtv/wtv_resource.xms должны существовать в системе.         newDate = Date(); // дата (текущая дата)         alert( ObjectType (newDate) ); // возвращает строковое значение 'BmObject'                 newArray = ['one', 'two', 'three']; // массив         alert( ObjectType (newArray) ); // возвращает строковое значение 'JsArray'                 newDoc = OpenNewDoc ('x-local://wtv/wtv_resource.xmd'); // документ XML (объект XmlDoc)         alert( ObjectType (newDoc) ); // возвращает строковое значение 'XmElem'                 newForm = FetchForm ( 'x-local://wtv/wtv_resource.xmd' ); // форма, загруженная из XMD-файла (объект XmlForm)         alert( ObjectType (newForm) ); // возвращает строковое значение 'XmFormElem'                 newScreen = CreateDocScreen( newDoc , 'x-local://wtv/wtv_resource.xms' ); // экран (объект Screen)         alert( ObjectType (newScreen) ); // возвращает строковое значение 'FaItem'                 newElem = CreateDynamicElem( 'elem_count' , 'string'); // элемент XML (объект XmlElem)         alert( ObjectType (newElem) ); // возвращает строковое значение 'XmElem'                 catalog = FindOptCatalog ( 'events' ); // каталог в базе данных         alert( ObjectType (catalog) ); // возвращает строковое значение 'BmObject'            alert ( ObjectType (collaborators) ); // каталог; возвращает строковое значение 'BmObject'         alert ( ObjectType (ArrayFirstElem(collaborators)) ); // каталожная запись; возвращает строковое значение 'XmElem'                 // Пример совместного использования функций DataType и ObjectType:         A1 = ['one', 'two', 'three']; // объект (массив)         // или A1 = 'Программа Webtutor'; // строковое значение (тип данных)         if ( DataType (A1) == 'object' )               alert( ObjectType (A1) ) ; // если переменная A1 является объектом, то возвращается символическое обозначение типа объекта         else alert( DataType (A1) ); // если переменная A1 не является объектом, то возвращается символическое обозначение типа данных_`

---

