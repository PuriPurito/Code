## RespContentType

Атрибут объекта Request.  
Более современный эквивалент атрибута ContentType объекта Response.  
Содержит значение заголовка "_Content-Type_" ответа на текущий запрос HTTP.  
Атрибут доступен как на чтение, так и на запись. Если заголовок уже был отправлен, попытка изменения атрибута возвращает ошибку.

_Синтаксис:_  
      **Request.RespContentType**

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение значения заголовка "Content-Type" ответа на текущий запрос HTTP. 

_Пример 1:_

`_( Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) )_`

`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_RESPCONTENTTYPE: <%=Request.RespContentType %><br/>        <!-- выводит на экран информацию о значении заголовка "Content-Type" (например, если в заголовке приведено выражение <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>, то возвращается значение text/html) -->_`

     `_</body>   </html>_`

_Пример 2:_  
     `_<% Request.RespContentType = 'text/html; charset=utf-8'; %>        <% Request.RespContentType = 'application/json'; %>        <% Request.RespContentType = fldContentType.type.Value; %>_`

---

