## HandleStaticFile

Метод объекта Response.  
Отправляет содержимое файла (аналогично тому, как если бы файл был запрошен напрямую). При этом отправляются корректные значения _Content-Type_ и _Last-Modified_.

_Синтаксис:_  
      **Response.HandleStaticFile (<filePath>)**

_Аргументы:_  
      _<filePath> (обязательный)_  
      Тип: **Строка**. Путь к файлу или url файла.

_Возвращаемое значение:_  
      Производит отправку содержимого файла. Возвращаемое значение отсутствует.

_Пример:_  
      `_<% Response.HandleStaticFile ( sOutImagePath ); %>         <% Response.HandleStaticFile ( sUrl ); %>_`

---

