## DeleteMessage

Метод объекта MailboxReader .  
Удаление текущего сообщения (объекта MailboxReader, из которого данный метод был вызван).

_Синтаксис:_  
      **MailboxReader.DeleteMessage ()**

_Аргументы:_  
      Функция вызывается без аргументов.

_Возвращаемое значение:_  
      Производится удаление текущего сообщения. Возвращаемое значение отсутствует.

_Пример:_  
      `_reader = new MailboxReader; // создание нового объекта MailboxReader         reader.OpenMailbox ( account_type, options ); // открытие объекта MailboxReader (доступа к почте)         reader.ReadNextMessage(); // переход к следующему сообщению для работы с ним         reader.DeleteMessage(); // удаление текущего сообщения         reader.CloseMailbox(); // закрытие объекта MailboxReader_`

---

