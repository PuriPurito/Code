## body

Атрибут объекта MailMessage.  
Объект, содержащий тело электронного почтового сообщения. В частности, в процессе подготовки почтового уведомления данный атрибут используется, когда значение _body\_type_ не равно _'html'_.  
Очистка атрибута может быть выполнена с помощью метода Clear.  
См. также html\_body.

_Синтаксис:_  
      **MailMessage.body**

_Возвращаемое значение:_  
      Тип: **Объект XmlElem**. Объект, содержащий тело сообщения.  
      Атрибут _body_ в формате _XML_ имеет следующий вид:  
      _<body>\[Тело сообщения\]</body>_  
      После применения метода Clear атрибут приобретает вид:  
      _<body/>_

_Пример 1:_  
      `_message = new MailMessage(); // формирование объекта MailMessage         sender_email = 'sender@mail.ru';         sender_name = 'Sender X';         recipient_email_0 = 'info@websoft.ru';         recipient_name_0 = 'WebSoft - info ';         recipient_email_1 = 'webmaster@websoft.ru';         recipient_name_1 = 'WebSoft - webmaster';         subject = 'Information';         body = 'Dear friends! We are happy to welcome you in our conference. ';         html_body = 'Dear friends! <br />We are happy to welcome you in our conference. ';                 message.sender.address = sender_email; // заполнение электронного адреса отправителя         message.sender.name = sender_name; // заполнение имени отправителя                 recipient = message.recipients.AddChild();         recipient.name = recipient_name_0; // заполнение имени первого получателя         recipient.address = recipient_email_0; // заполнение электронного адреса первого получателя         recipient = message.recipients.AddChild();         recipient.name = recipient_name_1; // заполнение имени второго получателя         recipient.address = recipient_email_1; // заполнение электронного адреса второго получателя                 message.subject = subject; // тема сообщения         message.body = body; // тело сообщения         message.html_body = html_body; // тело сообщения в формате HTML                 alert ( 'Тело сообщения: ' + message.body ); // вывод на экран данных о теле сообщения_`

_Пример 2:_  
      `_oMailMessage = new MailMessage(); // формирование объекта MailMessage         if ( docActiveNotification.TopElem.body_type == 'html' ) // если body_type имеет значение 'html'         {               oMailMessage.html_body = docActiveNotification.TopElem.body.Value;               oMailMessage.body.Clear(); // производится очистка содержимого атрибута body         }         else // если body_type имеет значение, отличное от 'html'         {               oMailMessage.html_body.Clear(); // производится очистка содержимого атрибута body               oMailMessage.body = docActiveNotification.TopElem.body.Value;         }         alert (oMailMessage.Xml); // вывод на экран сообщения в формате XML_`

_Пример 3:_  
      `_reader = new MailboxReader; // создание нового объекта MailboxReader         reader.OpenMailbox ( account_type, options ); // открытие объекта MailboxReader (доступа к почте)         reader.ReadNextMessage () ) // переход к следующему сообщению         message = reader.Message; // формирование объекта MailMessage, который содержит очередное электронное сообщение, полученное с сервера         alert ( ' Тело сообщения: ' + message.body ); // вывод на экран данных о теле сообщения_`

---

