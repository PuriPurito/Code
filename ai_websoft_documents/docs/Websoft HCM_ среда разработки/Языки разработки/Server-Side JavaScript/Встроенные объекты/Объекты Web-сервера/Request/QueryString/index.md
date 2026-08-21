## QueryString

Атрибут объекта Request.  
Возвращает содержимое строки параметров url запроса, разобранное по полям, в виде стандартного объекта JavaScript. Если url не содержит параметров, возвращается пустой объект.

_Синтаксис:_  
      **Request.QueryString**

_Возвращаемое значение:_  
      Тип: **Объект JavaScript**. Содержимое строки параметров url запроса, разобранное по полям, в виде стандартного объекта. 

_Пример 1:_

`_( Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) )_`

`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_QUERYSTRING POST: <%=Response.Write(EncodeJson(Request.QueryString))%><br/>        <!-- выводит на экран информацию о параметрах запроса и их значениях (в данном примере имеется следующий параметр запроса: ?param1=1) -->_`

     `_</body>   </html>_`

_Пример 2:_

     `_<% curUserID = Int( Request.QueryString.object_id ); %>        <% op = Request.QueryString.GetOptProperty("op"); %>        <% uid = Request.QueryString.GetOptProperty("uid"); %>_`

     `_<%              if ( Request.QueryString.HasProperty("subdivision_id"))                  _dep0307948r = Request.QueryString.subdivision_id;        %>_`

---

