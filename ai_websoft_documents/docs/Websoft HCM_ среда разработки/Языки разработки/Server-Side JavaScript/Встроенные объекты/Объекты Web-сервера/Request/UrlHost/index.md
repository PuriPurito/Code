## UrlHost

Атрибут объекта Request.  
Возвращает хост (адрес сервера и номер порта, если он указан) запрашиваемого url текущего HTTP-запроса.  
Данный атрибут доступен также на запись, что используется, как правило, внутри вызова OnWebRequest для внутреннего перенаправления старых url на новые.

_Синтаксис:_  
      **Request.UrlHost**

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение, содержащее хост (адрес сервера и номер порта, если он указан) запрашиваемого url текущего HTTP-запроса. 

_Пример 1:_

`_( Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) )_`

`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_URLHOST: <%=Request.UrlHost%><br/>        <!-- выводит на экран url хоста текущего HTTP-запроса (например, 'localhost') -->_`

     `_</body>   </html>_`

_Пример 2:_  
      `_<% oParams.url = tools_web.get_url_protocol ( Request.Url ) + Request.UrlHost; %>         <% alert ( Request.UrlHost ); %>_`

---

