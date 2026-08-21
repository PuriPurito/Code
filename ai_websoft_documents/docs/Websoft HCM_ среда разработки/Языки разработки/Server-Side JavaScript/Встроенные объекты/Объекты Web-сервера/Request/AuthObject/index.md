## AuthObject

Атрибут объекта Request.  
Возвращает объект, соответствующий пользователю авторизованного запроса от клиентской части (SpXml.exe).

_Синтаксис:_  
      **Request.AuthObject**

_Возвращаемое значение:_  
      Тип: **Объект XmlElem**. Объект, соответствующий пользователю авторизованного запроса. 

_Пример:_

     `_<% Request.AuthObject = user; %>_`

     `_<% queryStr += ' and $elem/user_id = ' + Request.AuthObject.id.XQueryLiteral; %>_`

     `_<%              if ( Request.AuthObject != undefined )             {                  msgStr += '.\r\n\r\n';                  msgStr += UiText.objects.user + ':\r\n';                  msgStr += respObj.fullname + '\r\n';                  if ( respObj.HasProperty( 'email' ) )                       msgStr += respObj.email + '\r\n';             }        %>_`

---

