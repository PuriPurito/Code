## user_init

**tools\_web.user\_init** \- функция авторизации (инициализации) пользователя на портале.

_Синтаксис:_  
      **tools\_web.user\_init ( <Request>, <Request\_Query> )**

_Аргументы:_  
     <Request> (обязательный)  
      Тип: **Объект**. HTTP-запрос инициализации .  
     <Request\_Query>   
      Тип: **Объект JavaScript**. Набор полей параметров инициализации. Каждое поле описывается следующим образом: _<data\_name>: <data\_value>_,  
где _<data\_name>_ \- название параметра (строка) (например, "auth\_type" – тип аутентификации; "set\_auth"; "user\_login"; "user\_password"; "logout" и др.); <data\_value> - значение параметра (тип параметра зависит от соответствующего типа поля) .

_Возвращаемое значение:_  
      Тип: **Булево**. Показатель успешности выполнения инициализации пользователя (true - инициализация выполнена успешно, false - инициализация выполнена неуспешно).

Примеры:  
  
     oUserInit = tools\_web.user\_init(Request, Request.Query);  
     oUserInit = tools\_web.user\_init( Request, { 'auth\_type': 'basic' } );  
     oUserInit = tools\_web.user\_init(Request, ({"auth\_type": "mobile", "set\_auth": true, "logout": true}));  
     oUserInit = tools\_web.user\_init(Request, ({"auth\_type": "cookie", "set\_auth": "1", "user\_login": Request.AuthLogin, "user\_password": Request.AuthPassword}));  
     var oUserInit = tools\_web.user\_init( Request,  {} );  
     bNotAuthorized = tools\_web.user\_init(Request, Request.Query).access == false;

---

