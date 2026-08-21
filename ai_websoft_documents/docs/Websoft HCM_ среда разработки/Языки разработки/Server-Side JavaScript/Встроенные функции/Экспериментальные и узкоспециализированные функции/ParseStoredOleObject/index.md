## ParseStoredOleObject

Разбирает поле типа OLE-объект, хранящееся в MS Access.

_Синтаксис:_  
      **ParseStoredOleObject (<str>)**

_Аргументы:_  
      _<str> (обязательный)_  
      Тип: **Строка**. Строка, содержащая обрабатываемое поле.

_Возвращаемое значение:_  
      Тип: **Object JavaScript**. Результат действия функции.  
      _Объект типа JavaScript содержит следующие поля:_  
      **Class FileName** - имя файла;  
      **Data** \- содержимое файла.

_Пример:_  
      `_JSObj = ParseStoredOleObject (str);_`

---

