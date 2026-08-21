## RespStream

Атрибут объекта Request.  
Возвращает объект типа Stream, в который можно записать данные ответа HTTP. Если заголовок ответа еще не был отправлен к моменту первого обращения к атрибуту, отправляется ответ HTTP 200.

_Синтаксис:_  
      **Request.RespStream**

_Возвращаемое значение:_  
      Тип: **Объект Stream**. Потоковый объект, в который можно записать данные ответа HTTP. 

_Пример:_  
     `_<% destStream = Request.RespStream; %>        <% Request.RespStream.WriteStr ( EncodeCharset( EncodeJson( respObj ), 'utf-8' ) ); %>        <% Request.RespStream.WriteBinary ( binData ); %>_`

---

