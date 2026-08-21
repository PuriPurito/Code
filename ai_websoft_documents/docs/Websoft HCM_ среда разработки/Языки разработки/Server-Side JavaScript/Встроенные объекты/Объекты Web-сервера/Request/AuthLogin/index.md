## AuthLogin

Атрибут объекта Request.  
Возвращает логин пользователя авторизованного запроса. Если запрос не авторизованный, или атрибут вызывается до авторизации, возвращается пустая строка.

_Синтаксис:_  
      **Request.AuthLogin**

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение логина пользователя. 

_Пример 1:_

`_( Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) )_`

  
`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_AUTHLOGIN: <%=Request.AuthLogin%><br/>        <!-- выводит на экран логин пользователя, который выполняет запрос -->_`

     `_</body>   </html>_`

_Пример 2:_

     `_<% AuthLogin = Request.AuthLogin; %>_`

     `_<% throw UserError( "Edit access denied for login " + request.AuthLogin); %>_`

     `_<%             if ( curUserID != null )             {                  Request.AuthUserID = curUserID;                  Request.AuthLogin = curUser.login.Value;             }        %>_`

---

