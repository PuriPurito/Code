## MailMessageFromMimeStr

Создает объект типа **_MailMessage_** на основании почтового сообщения _в формате MIME_.

_Синтаксис:_  
      **MailMessageFromMimeStr (<mimeData>)**

_Аргументы:_  
      _<mimeData> (обязательный)_  
      Тип: **Строка.** Почтовое сообщение в формате MIME.

_Возвращаемое значение:_  
      Тип: **Объект XmlElem**. Ссылка на формируемый объект **_MailMessage_**. Результат действия функции.

_Пример:_  
      `_message = MailMessageFromMimeStr( item.mime_body ); // формирование электронного почтового сообщения         SendMailMessage( message ); // отправление электронного почтового сообщения_`

---

