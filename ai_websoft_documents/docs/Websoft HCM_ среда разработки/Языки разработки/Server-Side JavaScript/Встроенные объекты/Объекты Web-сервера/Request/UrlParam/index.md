## UrlParam

Атрибут объекта Request.  
Возвращает строку параметров (_param1=value1&param2=value2&..._) в составе url текущего HTTP-запроса.  
Данный атрибут доступен также на запись, что используется, как правило, внутри вызова OnWebRequest для внутреннего перенаправления старых url на новые.

_Синтаксис:_  
      **Request.UrlParam**

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение, содержащее параметры запрашиваемого url текущего HTTP-запроса в формате (_param1=value1&param2=value2&..._). 

_Пример 1:_

`_( Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) )_`

`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_URLPARAM: <%=Request.UrlParam %><br/>        <!-- выводит на экран строку параметров в составе url текущего HTTP-запроса (например, для запроса http://localhost:80/test/test.html?param1=1 будет выведена строка 'param1=1') -->_`

     `_</body>   </html>_`  
 

_Пример 2:_  
      `_<%               if ( Request.UrlParam != "" )                    sRedirectUrl += ( StrContains( sRedirectUrl, "?" ) ? '&' : '?' ) + Request.UrlParam;         %>             <%                    for ( sElem in Request.UrlParam.split( "&" ) )              {                    arrElem = sElem.split( "=" );                    sElem = arrElem[ 0 ];              }         %>_`

---

