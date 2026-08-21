## MailboxReader

**Объект MailBoxReader** – это программно-аппаратная часть (бэкенд) универсального высокоуровневого почтового клиента, дающего доступ к полученной почте.  
**Объект MailBoxReader** работает с любыми серверами и протоколами _POP3_ и _IMAP_. Он реализует только базовые (верхнего уровня) функции доступа к почте – открыть объект (присоединиться к серверу), прочитать письма из указанной папки, закрыть объект (отсоединиться от сервера) и т.д.  
Система считывает электронное сообщение с почтового сервера, из почтового ящика, к которому было настроено подключение, и позволяет на его основании сформировать объект MailMessage.  
См. также - объект MailMessage**.**

            _Атрибут объекта:_  
      Message  
  
            _Метод объекта:_  
      CloseMailbox  
      DeleteMessage  
      MarkMessageAsRead  
      OpenMailbox  
      ReadNextMessage

_Пример:_  
      `_server_name = ''; // необходимо указать реальное имя почтового сервера         account_login = ''; // необходимо указать реальный логин учетной записи на почтовом сервере         account_password = ''; // необходимо указать реальный пароль учетной записи на почтовом сервере         account_type = 'imap'; // необходимо указать используемый протокол (pop3 или imap)         account_folder = 'inbox'; // имя папки, из которой считывается почтовое сообщение         alert('Mailbox Reader Start');         reader = new MailboxReader; // создание нового объекта MailboxReader         // формирование строкового выражения опций открытия объекта MailboxReader (для получения доступа к почте)         options = '';         options = options + 'server=' + server_name + ';';         options = options + 'login=' + account_login + ';';         options = options + 'password=' + account_password + ';';         options = options + 'folder=' + account_folder + ';';         options = options + 'subfolders=1;';         options = options + 'download=1;';         options = options + 'unread-only=1;';         options = options + 'mark-read=1;';         options = options + 'detect-html-body=1;';         reader.OpenMailbox ( account_type, options ); // открытие объекта MailboxReader (доступа к почте)         while (true)         {               if (!reader.ReadNextMessage () ) // переход к следующему сообщению и проверка наличия указанного сообщения                     break; // если сообщений больше нет, производится выход из цикла               message = reader.Message; // формирование объекта MailMessage, который содержит очередное электронное сообщение, полученное с сервера               subj = message.subject; // тема сообщения               for (attc in message.attachments) // работа с электронными почтовыми вложениями               {                     if (StrEnds ( attc.name, '.zip', true ) ) // проверка на наличие в имени почтового вложения выражения '.zip' (без учета регистра)                     {                     }               }               reader.MarkMessageAsRead (); // пометка текущего сообщения как прочитанного         }         reader.CloseMailbox (); // закрытие объекта MailboxReader_`

---

