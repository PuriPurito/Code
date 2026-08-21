## Query

Атрибут объекта Request.  
Возвращает стандартный объект JavaScript, содержащий объединенный набор полей из атрибутов Form и QueryString.

_Синтаксис:_  
      **Request.Query**

_Возвращаемое значение:_  
      Тип: **Объект JavaScript**. Объект, содержащий набор полей. 

_Пример 1:_

`_( Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) )_`

`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_<!-- Для примера приводим простой вариант формы POST: -->        <form name="test" METHOD="POST">             <input type="text" name="name1"/>             <textarea name="name2"></textarea>             <input name="submit" type="submit" value="Send"/>        </form>_`

     `_QUERY POST: <%=Response.Write(EncodeJson(Request.Query))%><br/>        <!-- выводит на экран информацию о полях формы и параметрах запроса и их значениях -->_`

     `_</body>   </html>_`

_Пример 2:_  
      `_<% oRequestQuery = Request.Query; %>         <% sAltMethod = StrLowerCase( Request.Query.GetOptProperty( "method", "" ) ); %>_`

---

