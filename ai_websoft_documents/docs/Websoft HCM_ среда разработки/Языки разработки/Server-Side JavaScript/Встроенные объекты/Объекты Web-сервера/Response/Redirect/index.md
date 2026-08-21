## Redirect

Метод объекта Response.  
Вызывает отправку статуса _HTTP 302 "Object Moved"_ (перенаправление). Более старый эквивалент метода Redirect объекта Request.  
Если заголовок уже был отправлен, метод возвращает ошибку.

_Синтаксис:_  
      **Response.Redirect (<redirectUrl>)**

_Аргументы:_  
      _<redirectUrl> (обязательный)_  
      Тип: **Строка**. Url, на который производится перенаправление.

_Возвращаемое значение:_  
      Производит отправку статуса. Возвращаемое значение отсутствует.

_Пример:_  
      `_<% Response.Redirect("view_doc.html?" + _retreat); %>         <% Response.Redirect( sRedirectUrl ); %>_`

---

edirect ( "view_doc.html?mode=default&m=1" ); %>_`

---

