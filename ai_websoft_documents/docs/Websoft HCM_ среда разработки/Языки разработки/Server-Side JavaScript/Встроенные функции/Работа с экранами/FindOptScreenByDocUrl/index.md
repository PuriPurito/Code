## FindOptScreenByDocUrl

Ищет экран с заданным url документа. Если экран не найден, возвращает _undefined_.  
См. также FindScreenByDocUrl и ObtainDocScreen.

_Синтаксис:_  
      **FindOptScreenByDocUrl (<docUrl>)**

_Аргументы:_  
      _<docUrl> (обязательный)_  
      Тип: **Строка**. Url искомого документа.

_Возвращаемое значение:_  
      Тип: **Объект Экран (Screen)**. Ссылка на найденный экран. Результат действия функции.

_Пример:_  
      `_if ( ( screen = FindOptScreenByDocUrl( docUrl ) ) != undefined )               ObtainDocScreen( docUrl );         // если экран с заданным url найден, то он поднимается наверх и делается активным_`

---

