## Header

Атрибут объекта HttpResponse.  
Возвращает содержимое заголовка HTTP-ответа в виде стандартного объекта JavaScript, содержащего пары <имя поля>-<значение поля>.

_Синтаксис:_  
      **HttpResponse.Header**

_Возвращаемое значение:_  
      Тип: **JavaScript Object**. Содержимое заголовка HTTP-ответа.

_Пример:_  
      `_resp = HttpRequest ( 'http://reg.datex-soft.com/' ); // получение объекта HttpResponse         obj = resp.Header; // возвращает содержимое заголовка HTTP-ответа в виде объекта JavaScript         for (p in obj) {               alert( p + '=' + obj.GetProperty(p) ); // вывод на экран всех атрибутов объекта JavaScript         }_`

---

1 – условный параметр запроса) )_`

`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_<!-- Для примера приводим простой вариант формы POST: -->        <form name="test" METHOD="POST">             <input type="text" name="name1"/>             <textarea name="name2"></textarea>             <input name="submit" type="submit" value="Send"/>        </form>_`

     `_HEADER POST: <%=Response.Write(EncodeJson(Request.Header))%><br/>        <!-- выводит на экран информацию о заголовке запроса -->_`

     `_</body>   </html>_`

_Пример 2:_  
      `_<% oRequestHeader = Request.Header; %>         <% authStr = Request.Header.GetOptProperty( 'Authorization', '' ); %>_`

---

