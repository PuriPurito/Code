## SetRespStatus

Метод объекта Response.  
Возвращает статус HTTP-ответа. Более старый эквивалент метода SetRespStatus объекта Request.  
Если заголовок уже был отправлен, метод возвращает ошибку.

_Синтаксис:_  
      **Response.SetRespStatus (<statusCode>, <statusDesc>)**

_Аргументы:_  
      _<statusCode> (обязательный)_  
      Тип: **Целое число**. Трехзначный код статуса.  
      _<statusDesc> (обязательный)_  
      Тип: **Строка**. Наименование статуса.

Внимание! Аргумент <statusDesc> относится только к серверу EStaff. Для WebSoft HCM он не действует – текстовая статусная строка устанавливается автоматически по стандарту протокола.

_Возвращаемое значение:_  
      Производит отправку статуса HTTP-ответа. Возвращаемое значение отсутствует.

_Пример:_  
      `_<% Response.SetRespStatus ( iCode, sDesc ); %>         <% Response.SetRespStatus ( 200, 'OK' ); %>         <% Response.SetRespStatus ( OptInt(iHTTPCode, 400), "Error"); %>         <% Response.SetRespStatus ( 401, 'Authorization required' ); %>         <% Response.SetRespStatus ( 403, 'Forbidden' ); %>         <% Response.SetRespStatus ( 404, "Not Found" ); %>         <% Response.SetRespStatus ( 500, 'Invalid server state' ); %>         <% Response.SetRespStatus ( 500, 'Internal server error' ); %>_`

---

