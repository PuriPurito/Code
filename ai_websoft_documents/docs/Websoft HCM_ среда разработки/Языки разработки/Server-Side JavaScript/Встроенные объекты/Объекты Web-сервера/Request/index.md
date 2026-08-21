## Request

Объект **_Request_** доступен на сервере xHttp.exe при вызове кода веб-страницы. Обозначает соответствующий HTTP-запрос к странице.  
Обычно данные объекты используются в html-файлах.

_Принципиальная структура идентификаторов HTTP-запросов:_  
  
Подробнее см. стандарт **RFC 3986**.

      _Атрибуты объекта:_  
      AllSessions  
      AuthLogin  
      AuthObject  
      AuthPassword  
      AuthUserID  
      Body  
      Form  
      Header  
      Method  
      Query  
      QueryString  
      RemoteIP  
      RespContentType  
      RespStream  
      Session  
      Url  
      UrlHost  
      UrlParam  
      UrlPath  
       
      _Методы объекта:_  
      AddRespHeader  
      CheckLdsAuth  
      Execute  
      HandleNotFound  
      PermanentRedirect  
      Redirect  
      SetRespStatus  
      SetWrongAuth

---

