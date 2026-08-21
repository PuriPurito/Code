## beautify_file_size

Возвращает строку с размером файла в соответствующих единицах измерения с учетом размерности (байтах, килобайтах, мегабайтах и т.д.). 

_Синтаксис:_  
      **tools.beautify\_file\_size (<iByteSizeParam>\[, <bAddUnitParam>\])**

_Аргументы:_  
     <iByteSizeParam> (обязательный)  
     Тип: **Целое число**. Размер файла в байтах.  
     <bAddUnitParam> (необязательный)  
     Тип: **Булево**. Необходимость указания единиц измерения размера файла (_true_ – указывать единицы измерения, _false_ – не указывать). Значение по умолчанию равно _true_.

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение размера файла с указанием или без указания единицы измерения.

_Пример 1:_  
      `_sSize1 = tools.beautify_file_size (100);         sSize2 = tools.beautify_file_size (10000);         sSize3 = tools.beautify_file_size (1000000000);         sSize4 = tools.beautify_file_size (100, false);         sSize5 = tools.beautify_file_size (10000, false);         sSize6 = tools.beautify_file_size (1000000000, false);         alert (sSize1 + ';  ' + sSize1 + ';  ' + sSize2 + ';  ' + sSize3 + ';  ' + sSize4 + ';  ' + sSize5 + ';  ' + sSize6);_`

_Пример 2:_  
      `_sSize = tools.beautify_file_size ( catResourceElem.size.Value );_`

---

