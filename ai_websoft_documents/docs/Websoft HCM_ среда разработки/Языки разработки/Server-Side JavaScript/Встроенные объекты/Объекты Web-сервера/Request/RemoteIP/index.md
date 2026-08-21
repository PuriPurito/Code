## RemoteIP

Атрибут объекта Request.  
Возвращает IP адрес, с которого отправлен запрос, в виде строки.

_Синтаксис:_  
      **Request.RemoteIP**

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение IP адреса, с которого отправлен запрос. 

_Пример 1:_

`_( Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) )_`

`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_<!-- Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) -->_`

     `_REMOTEIP: <%=Request.RemoteIP %><br/>        <!-- выводит на экран информацию об IP адресе (например, для демонстрационной версии, установленной на компьютер, возвращается IP адрес 127.0.0.1) -->_`

     `_</body>   </html>_`

_Пример 2:_

     `_<% sLog += Request.RemoteIP; %>_`

     `_<%              if (Request.RemoteIP == access.ip)              {                  access = true;                  break;             }        %>_`

---

