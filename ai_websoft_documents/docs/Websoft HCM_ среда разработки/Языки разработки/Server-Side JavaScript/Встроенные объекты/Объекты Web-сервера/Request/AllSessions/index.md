## AllSessions

Атрибут объекта Request.  
Экспериментальный атрибут. Возвращает массив объектов типа Session, содержащий копии данных всех действующих web-сессий (объектов Object JavaScript). Копируются только поля, содержащие скалярные значения, поля, содержащие объекты, копируются как _undefined_.  
См. также атрибут Request.Session.

_Синтаксис:_  
      **Request.AllSessions**

_Возвращаемое значение:_  
      Тип: **Массив**. Массив объектов типа Session. 

_Пример 1:_       `_(Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса))_`  
  
`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_             _Количество сессий: <%=ArrayCount(Request.AllSessions);%>             <!-- на экран выводится количество сессий -->             <br/>             <%                  i=0;                  for (session in Request.AllSessions)                  // session - объект типа Session                   {                       i++;             %>             <!-- исполнение кода временно прерывается; на экран выводится слово "Сессия" и номер сессии -->_`  
          `_Сессия <%=i%>:              <!-- далее исполнение кода возобновляется -->_`  
          `_<%                       Response.Write(EncodeJson(session)+"<br/>");                       // на экран выводится информация о сессии                   }             %>        </body>   </html>_`

_Пример 2:_  
      `_<% curSessionArray = ArraySelectDistinct( ArraySelect( Request.AllSessions, "HasProperty( 'cur_user_id' )" )); %>_`

---

