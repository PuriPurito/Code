## ContentType

Атрибут объекта HttpResponse.  
Содержит значение поля _Content-Type_, хранящегося в заголовке Http-ответа.

_Синтаксис:_  
      **HttpResponse.ContentType**

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение значения поля Content-Type.

_Пример:_  
      `_resp = HttpRequest ( 'http://reg.datex-soft.com/' ); // получение объекта HttpResponse         alert (resp.ContentType); // возвращает поле Content-Type Http-ответа_`

---

рока**. Строковое выражение значение заголовка ответа на запрос. 

_Пример 1:_  
      `_(Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса))                 <html>               <head>                     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>               </head>               <body>                     CONTENTTYPE: <%=Response.ContentType%><br/>                     <!-- выводит на экран значение заголовка ответа на запрос -->               </body>         </html>_`  
  
_Результат:_  

_Пример 2:_  
      `_<% Response.ContentType = "text/xml"; %>         <% Response.ContentType= "text/xml;charset=UTF-8"; %>         <% Response.ContentType = attachment.content_type; %>         <% Response.ContentType = "application/" + sHeader; %>                 <%               if (Response.ContentType == "application/pdf")                     sOutType = "pdf";               else if (Response.ContentType == "application/vnd.ms-excel" || Response.ContentType == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")                     sOutType = "xls";         %>_`

---

