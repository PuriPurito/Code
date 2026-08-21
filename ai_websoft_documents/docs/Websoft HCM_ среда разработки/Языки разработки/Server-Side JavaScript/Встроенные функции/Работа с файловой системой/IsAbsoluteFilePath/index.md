## IsAbsoluteFilePath

Проверяет, является ли корректным полный путь к файлу, переданный в качестве аргумента.

Существование файла данной функцией не проверяется.

Данная функция не работает в тонком клиенте (в браузере). Для корректной работы функции рекомендуется переносить обработку данных на сервер. Подробнее в статье.

_Синтаксис:_  
**IsAbsoluteFilePath (<path>)**

_Аргументы:_  
_<path> (обязательный)_  
Тип: **Строка**. Путь (или url) к файлу.

_Возвращаемое значение:_  
Тип: **Булево**. Возвращает значение, показывающее, является ли корректным полный путь к файлу (_true_ – строковое выражение _<path>_ является корректным, _false_ – строковое выражение _<path>_ является некорректным). Результат действия функции.

A1 = IsAbsoluteFilePath ('D:\\\\\\WebTutor\\\\file.docx');  
alert (A1); // возвращает значение true

A2 = IsAbsoluteFilePath ('D:\\\\WebTutor\\\\file.docx');  
alert (A2); // возвращает значение true

A3 = IsAbsoluteFilePath( 'c:\\\\temp\\1.ddd' );  
alert (A3); // возвращает значение true

A4 = IsAbsoluteFilePath ('WebTutor\\\\file.docx');  
alert (A4); // возвращает значение false

A5 = IsAbsoluteFilePath( 'c://temp/1.ddd' );  
alert (A5); // возвращает значение false

A6 = IsAbsoluteFilePath ('file:\\\\\\D:\\\\WebTutor\\test\_lib\_MethodRunner.js');  
alert (A6); // возвращает значение false

A7 = IsAbsoluteFilePath ('x-local:d:\\\\WebTutor\\file.txt'');  
alert (A7); // возвращает значение false

---

