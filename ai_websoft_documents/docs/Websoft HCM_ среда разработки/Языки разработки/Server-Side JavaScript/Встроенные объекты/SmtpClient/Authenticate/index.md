## Authenticate

Метод объекта SmtpClient.  
Выполняет аутентификацию связи SMTP-клиента с почтовым сервером (аутентификация клиента требуется, если параметр _use\_smtp\_authenticate_ имеет значение _true_).

_Синтаксис:_  
      **SmtpClient.Authenticate (<server\_login>, <server\_password>)**

_Аргументы:_  
      _<server\_login> (обязательный)_  
      Тип: **Строка**. Логин почтового сервера.  
      _<server\_password> (обязательный)_  
      Тип: **Строка**. Пароль почтового сервера.

_Возвращаемое значение:_  
      Производится аутентификация связи SMTP-клиента с почтовым сервером. Возвращаемое значение отсутствует.

_Пример:_  
      `_oSmtpClient = SmtpClient(); // создание нового объекта SMTP-клиента         // использование при отправке сообщения унифицированного порта TLS (протокола защиты транспортного уровня) или переключение соединения на TLS на основе специальных механизмов протокола         if ( tools_web.is_true( oParam.GetOptProperty( 'bUseTLSPort', false ) ) )               oSmtpClient.UseTLSPort = true;         else if ( tools_web.is_true( oParam.GetOptProperty( 'bUseTLS', false ) ) )               oSmtpClient.UseTLS = true;         oSmtpClient.OpenSession( smtp_server ); // открытие сессии SMTP-клиента         if ( use_smtp_authenticate ) // если требуется аутентификация на почтовом сервере, то выполняется аутентификация               oSmtpClient.Authenticate( smtp_login, smtp_password );         oSmtpClient.SendMessage( oMailMessage ); // отправка почтового сообщения         oSmtpClient.CloseSession(); // закрытие сессии SMTP-клиента_`

---

