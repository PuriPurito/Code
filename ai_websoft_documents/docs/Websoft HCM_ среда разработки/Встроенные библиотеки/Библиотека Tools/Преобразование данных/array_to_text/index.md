## array_to_text

Преобразует массив в строку указанного формата (json, xml).

_Синтаксис:_  
      **tools.array\_to\_text (<aArrayParam>\[, <sFormatParam>\]\[, <sNameParam>\])**

_Аргументы:_  
      _<aArrayParam> (обязательный)_  
      _Тип: **Массив**. Массив, который необходимо преобразовать._  
      _<sFormatParam> (необязательный)_  
      _Тип: **Строка**. Формат возвращаемой строки. Возможны два значения: 'json' и 'xml'). По умолчанию аргументу присваивается значение 'xml'._  
      _<sNameParam> (необязательный)_  
      _Тип: **Строка**. Название корневого (root) тега. Значение аргумента учитывается, если формируется строка в формате XML. По умолчанию аргументу присваивается значение 'data' (корневой тег <data></data>)._.

_Возвращаемое значение:_  
      Тип: **Строка**. Строка, сформированная из массива.

_Пример 1:_  
      `_var Array1 = ['one', 'two', 'three'];         sDataTypePARAM = 'json';         res1 = tools.array_to_text( Array1, sDataTypePARAM ); // возвращает строку '["value":"one", "value":"two", "value":"three"]'         alert (res1);         sDataTypePARAM = 'xml';         res2 = tools.array_to_text( Array1, sDataTypePARAM ); // возвращает строку '<data><value>one</value></data><data><value>two</value></data><data><value>three</value></data>'         alert (res2);         res3 = tools.array_to_text( Array1, sDataTypePARAM, 'd' ); // возвращает строку '<d><value>one</value></d><d><value>two</value></d><d><value>three</value></d>'         alert (res3);_`

_Пример 2:_  
      `_oResulter.result = tools.array_to_text ( RESULT, sDataTypePARAM );         var sXMLResult = tools.array_to_text ( oData.TopElem, "xml", "pa" );         tools.array_to_text (_aColumns, "json");         var sSerialized = '(' + tools.array_to_text ( aCatalogsToRegPARAM, 'json' ) + ')';_`

---

