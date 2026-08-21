## OpenSession

Метод объекта SmtpClient.  
Открывает сессию SMTP-клиента.

_Синтаксис:_  
      **SmtpClient.OpenSession (<server\_url>)**

_Аргументы:_  
      _<server\_url> (обязательный)_  
      Тип: **Строка**. URL почтового сервера.

_Возвращаемое значение:_  
      Производится открытие сессии SMTP-клиента. Возвращаемое значение отсутствует.

_Пример:_  
      `_oSmtpClient = SmtpClient(); // создание нового объекта SMTP-клиента         // использование при отправке сообщения унифицированного порта TLS (протокола защиты транспортного уровня) или переключение соединения на TLS на основе специальных механизмов протокола         if ( tools_web.is_true( oParam.GetOptProperty( 'bUseTLSPort', false ) ) )               oSmtpClient.UseTLSPort = true;         else if ( tools_web.is_true( oParam.GetOptProperty( 'bUseTLS', false ) ) )               oSmtpClient.UseTLS = true;         oSmtpClient.OpenSession( smtp_server ); // открытие сессии SMTP-клиента         if ( use_smtp_authenticate ) // если требуется аутентификация на почтовом сервере, то выполняется аутентификация               oSmtpClient.Authenticate( smtp_login, smtp_password );         oSmtpClient.SendMessage( oMailMessage ); // отправка почтового сообщения         oSmtpClient.CloseSession(); // закрытие сессии SMTP-клиента_`

---

