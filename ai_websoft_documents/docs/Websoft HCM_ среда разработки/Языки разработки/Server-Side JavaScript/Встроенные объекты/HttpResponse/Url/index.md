## Url

Атрибут объекта HttpResponse.  
Этот атрибут возвращает фактический url, с которого производится закачка данных. Обычно он совпадает с запрошенным url, но если запрос включает в себя перенаправление (redirect), например, _по ошибкам 303 или 304_, то атрибут вернет url, c которого фактически произведена закачка данных (после выполнения перенаправления).

_Синтаксис:_  
      **HttpResponse.Url**

_Возвращаемое значение:_  
      Тип: **Строка**. Url, с которого производена закачка данных.

_Пример:_  
      `_resp = HttpRequest ( 'http://reg.datex-soft.com/' ); // получение объекта HttpResponse         alert (resp.Url); // возвращает адрес страницы, с которой получен ответ_`

---

est.Url%><br/>        <!-- выводит на экран url текущего HTTP-запроса (например, 'http://localhost/test/test.html?param1=1') -->_`

     `_</body>   </html>_`

_Пример 2:_     `_<% sInterface = UrlFileName ( Request.Url ); %>        <% reqArg = UrlQuery ( Request.Url ); %>        <% oParams.url=tools_web.get_url_protocol ( Request.Url ) + Request.UrlHost; %>_`

---

