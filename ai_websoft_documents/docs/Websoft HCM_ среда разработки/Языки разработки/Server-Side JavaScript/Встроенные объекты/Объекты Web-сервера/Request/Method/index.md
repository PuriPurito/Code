## Method

Атрибут объекта Request.  
Возвращает метод (_'GET'_ или _'POST'_) текущего HTTP-запроса.

_Синтаксис:_  
      **Request.Method**

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение метода текущего HTTP-запроса.   
      Допустимые значения:  
      **'GET'** - запрос содержимого заданного ресурса.  
      **'POST'** - передачи пользовательских данных заданному ресурсу.

_Пример 1:_

`_( Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) )_`

`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_<!-- Для примера приводим простой вариант формы POST: -->        <form name="test" METHOD="POST">            <input type="text" name="name1"/>             <textarea name="name2"></textarea>              <input name="submit" type="submit" value="Send"/>        </form>_`

     `_METHOD POST: <%=Request.Method %><br/>        <!-- выводит на экран метод запроса (например, 'POST') -->_`

     `_</body>   </html>_`

_Пример 2:_  
      `_<% sMethod = StrLowerCase( Request.Method ); %>            <% if ( Request.Method != 'POST' )               throw UiError( 'Invalid request method ' ); %>                 <% if ( Request.Method != 'GET' )               throw UserError( 'HTTP GET method is required' ); %>_`

---

