## Form

Атрибут объекта Request.  
Возвращает содержимое web-формы запроса, передаваемого через метод POST, разобранное по полям, в виде стандартного объекта JavaScript.  
Если запрос не содержит web-форму, атрибут возвращает ошибку.

_Синтаксис:_  
      **Request.Form**

_Возвращаемое значение:_  
      Тип: **Объект JavaScript**. Содержимое web-формы запроса, разобранное по полям. 

_Пример 1:_

`_( Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) )_`

`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_<!-- Для примера приводим простой вариант формы POST: -->        <form name="test" METHOD="POST">             <input type="text" name="name1"/>             <textarea name="name2"></textarea>             <input name="submit" type="submit" value="Send"/>        </form>_`

     `_FORM POST: <%=Response.Write(EncodeJson(Request.Form))%><br/>        <!-- выводит на экран информацию о данных, введенных в форму запроса (например, '{"name1":"test1","name2":"test2","submit":"Send"}') -->_`

     `_</body>   </html>_`

_Пример 2:_

     `_<% message = Request.Form; %>        <% _catalog_name = Request.Form.GetProperty("catalog_name"); %>        <% _sequence = String(Request.Form.sequence).split(";"); %>        <% _title = Request.Form.title; %>        <% _question_text = Request.Form.question_text; %>        <% _type_id = Request.Form.type_id; %>        <% _order = Request.Form.order; %>        <% _item_id = Int(Request.Form.item_id); %>_`

     `_<%             if (Request.Form.HasProperty("comment"))                  curItemDoc.TopElem.comment = Request.Form.comment;        %>_`

---

