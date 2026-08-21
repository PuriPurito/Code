## OrigRequest

Атрибут объекта Response.  
Возвращает исходный объект Request, к которому относится данный объект (HTTP-ответ).

_Синтаксис:_  
      **Response.OrigRequest**

_Возвращаемое значение:_  
      Тип: **Объект Request**. Исходный объект HTTP-запроса. 

_Пример 1:_  
      `_(Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса))                 <html>               <head>                     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>               </head>               <body>                     ORIGREQUEST.URL: <%=Response.OrigRequest.Url%><br/>                     ORIGREQUEST.URLHOST: <%=Response.OrigRequest.UrlHost%><br/>                     ORIGREQUEST.URLPATH: <%=Response.OrigRequest.UrlPath%><br/>                     ORIGREQUEST.URLPARAM: <%=Response.OrigRequest.UrlParam%><br/>                     <!-- выводит на экран значения атрибутов исходного HTTP-запроса -->               </body>         </html>_`  
  
_Результат:_  

_Пример 2:_  
      `_<% isDlg = StrContains ( Response.OrigRequest.UrlPath, '_select.htm' ); %>_`

---

