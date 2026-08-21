## Body

Атрибут объекта HttpResponse.  
Тело Http-ответа, возвращаемое в виде строки (в составе строки могут быть бинарные данные).

_Синтаксис:_  
      **HttpResponse.Body**

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение, содержащее тело Http-ответа.

_Пример:_  
      `_resp = HttpRequest ( 'http://reg.datex-soft.com/' ); // получение объекта HttpResponse         alert (resp.Body); // возвращает тело Http-ответа_`

---

p://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) )_`

`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_<!-- Для примера приводим простой вариант формы POST: -->        <form name="test" METHOD="POST">             <input type="text" name="name1"/>             <textarea name="name2"></textarea>             <input name="submit" type="submit" value="Send"/>        </form>_`

     `_BODY POST: <%=Response.Write(Request.Body)%><br/>        <!-- выводит на экран информацию о теле запроса (например, 'name1=test1&name2=test2&submit=Send') -->_`

     `_</body>   </html>_`

_Пример 2:_  
      `_<% sBody = Request.Body; %>          <% reqArg = ParseJson ( DecodeCharset( Request.Body, 'utf-8' ) ); %>_`

---

