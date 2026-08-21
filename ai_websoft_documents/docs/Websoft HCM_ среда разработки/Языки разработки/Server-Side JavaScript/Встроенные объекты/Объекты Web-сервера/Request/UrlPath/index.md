## UrlPath

Атрибут объекта Request.  
Возвращает часть пути url текущего HTTP-запроса без указания хоста.  
Данный атрибут доступен также на запись, что используется, как правило, внутри вызова OnWebRequest для внутреннего перенаправления старых url на новые.

_Синтаксис:_  
      **Request.UrlPath**

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение пути запрашиваемого url текущего HTTP-запроса. 

_Пример 1:_

`_( Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) )_`

`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_URLPATH: <%=Request.UrlPath %><br/>        <!-- выводит на экран строку часть пути url текущего HTTP-запроса без указания хоста (например, для запроса http://localhost:80/test/test.html?param1=1 будет выведена строка '/test/test.html') -->_`

     `_</body>   </html>_`

_Пример 2:_  
      `_<%              switch ( Request.UrlPath )              {                    case '/active_position.xml':                    case '/active_positions.xml':                    case '/candidate.xml':                    case '/change_candidate_record.xml':                          Request.HandlerUrl = Url( 'x-app', 'rcr', '/web30' + Request.UrlPath );                    break;              }         %>_`

---

