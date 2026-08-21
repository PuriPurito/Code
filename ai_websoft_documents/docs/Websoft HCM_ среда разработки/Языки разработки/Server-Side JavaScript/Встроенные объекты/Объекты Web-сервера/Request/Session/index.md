## Session

Атрибут объекта Request.  
Возвращает объект Session, связанный с текущим запросом. Если в коде Web-страницы объект Session доступен через глобальную переменную с таким же именем, то, например, внутри OnWebRequest единственный способ получить ссылку на этот объект - это обратиться через **Request.Session**.  
См. таже Request.AllSessions.

_Синтаксис:_  
      **Request.Session**

_Возвращаемое значение:_  
      Тип: **Объект Session**. Объект сессии, связанный с текущим запросом. 

_Пример 1:_

`_( Для воспроизведения данного кода можно разместить html-файл test.html с приведенным ниже кодом в папку \\WebTutor\WebTutorServer\wt\web\test\ . Запуск файл выполняется из браузера с помощью URL: http://[адрес портала]/test/test.html?param1=1 (например, http://localhost:80/test/test.html?param1=1) (где test/test.html – путь к html-файлу, param1=1 – условный параметр запроса) )_`

`_<html>        <head>             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>        </head>        <body>_`

     `_SESSION: <%=Response.Write(EncodeJson(Request.Session))%><br/>        <!-- выводит на экран информацию о текущей сессии -->_`

     `_</body>   </html>_`

_Пример 2:_

     `_<% var Session = Request.Session; %>_`

     `_<%              if ( Request.Session.HasProperty( 'Env' ) )             {                  oTempEnv = Request.Session.Env;             }        %>_`

---

�               Количество сессий: <%=ArrayCount(Request.AllSessions);%>                     <!-- на экран выводится количество сессий -->                     <br/>                     <%                           i=0;                           for (session in Request.AllSessions)                           // session - объект типа Session                           {                                 i++;                           %>                           <!-- исполнение кода временно прерывается; на экран выводится слово "Сессия" и номер сессии -->                           Сессия <%=i%>:                           <!-- далее исполнение кода возобновляется -->                           <%                                 Response.Write(EncodeJson(session)+"<br/>");                                 // на экран выводится информация о сессии                           }                     %>               </body>         </html>_`  
  
_Результат:_  

_Пример 2:_  
      `_<% session = open_notes_session();%>         <% config = getServerConfiguration(session); %>                 <% obj = new Object;         obj.session = session; %>_`

---

