## OpenMailbox

Метод объекта MailboxReader .  
Открытие объекта MailboxReader (для получения доступа к почте).

_Синтаксис:_  
      **MailboxReader.OpenMailbox (<account\_type>, <options>)**

_Аргументы:_  
      _<account\_type> (обязательный)_  
      Тип: **Строка**. Используемый протокол.  
      Доступные значения:  
      _- <pop3>  
      - <imap>_  
      _<options> (обязательный)_  
      Тип: **Строка**. Строковое выражение набора опций открытия объекта MailboxReader.  
      В системе могут использоваться следующие опции, разделяемые символами «точка с запятой»:  
      _'server=<server\_name>'_ – указание имени почтового сервера (опция обязательна);  
      _'login=<account\_login>'_ – указание логина учетной записи на почтовом сервере (опция обязательна);  
      _'password=<account\_password>'_ – указание пароля учетной записи на почтовом сервере (опция обязательна);  
      _'folder=<account\_folder>'_ – указание имени папки на почтовом сервере, из которой считывается почтовое сообщение (опция обязательна);  
      _'subfolders=1'_ – с учетом подпапок в хранилище;  
      _'download=1'_ – форсированная загрузка;  
      _'unread-only=1'_ – загрузка только непрочтенных сообщений;  
      _'mark-read=1'_ – загрузка сообщений с установкой пометки «Прочтенные»;  
      _'detect-html-body=1'_ – распознавание формата HTML;  
      _'useTLSPort=1'_ или _'useTLS=1'_ – загрузка с использованием унифицированного порта TLS (протокола защиты транспортного уровня) или переключения соединения на TLS с использованием специальных механизмов протокола.

_Возвращаемое значение:_  
      Производится открытие объекта MailboxReader. Возвращаемое значение отсутствует.

_Пример:_  
      `_server_name = ''; // необходимо указать реальное имя почтового сервера         account_login = ''; // необходимо указать реальный логин учетной записи на почтовом сервере         account_password = ''; // необходимо указать реальный пароль учетной записи на почтовом сервере         account_type = 'imap'; // необходимо указать используемый протокол (pop3 или imap)         account_folder = 'inbox'; // имя папки, из которой считывается почтовое сообщение         alert('Mailbox Reader Start');         reader = new MailboxReader; // создание нового объекта MailboxReader         // формирование строкового выражения опций открытия объекта MailboxReader (для получения доступа к почте)         options = '';         options = options + 'server=' + server_name + ';';         options = options + 'login=' + account_login + ';';         options = options + 'password=' + account_password + ';';         options = options + 'folder=' + account_folder + ';';         options = options + 'subfolders=1;';         options = options + 'download=1;';         options = options + 'unread-only=1;';         options = options + 'mark-read=1;';         options = options + 'detect-html-body=1;';         reader.OpenMailbox ( account_type, options ); // открытие объекта MailboxReader (доступа к почте)         while (true)         {               if (!reader.ReadNextMessage () ) // переход к следующему сообщению и проверка наличия указанного сообщения                     break; // если сообщений больше нет, производится выход из цикла               message = reader.Message; // формирование объекта MailMessage, который содержит очередное электронное сообщение, полученное с сервера               subj = message.subject; // тема сообщения               for (attc in message.attachments) // работа с электронными почтовыми вложениями               {                     if (StrEnds ( attc.name, '.zip', true ) ) // проверка на наличие в имени почтового вложения выражения '.zip' (без учета регистра)                     {                     }               }               reader.MarkMessageAsRead (); // пометка текущего сообщения как прочитанного         }         reader.CloseMailbox (); // закрытие объекта MailboxReader_`

---

