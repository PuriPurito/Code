## GetFailedForeignElem

Создает новый пустой элемент массива, не добавляя его в сам массив. Используется для отработки "битых ссылок" на элементы массива и ссылок на удаленные элементы массива.  
Смотри также функции GetOptForeignElem и GetForeignElem.  
Примечание - В текущей реализации массив может быть только каталогом.

_Синтаксис:_  
      **GetFailedForeignElem (<catalogue>)**

_Аргументы:_  
      _<catalogue> (обязательный)_  
      Тип: **Массив**. Массив элементов (каталог).

_Возвращаемое значение:_  
      Тип: **Объект XmlElem**. Ссылка на созданный объект XmlElem. Результат действия функции.

_Пример:_  
      `_newPerson = GetFailedForeignElem( persons );         newExternalTest = GetFailedForeignElem( external_tests );_`

---

