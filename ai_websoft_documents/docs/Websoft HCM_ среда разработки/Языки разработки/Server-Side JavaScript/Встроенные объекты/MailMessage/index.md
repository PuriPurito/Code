## MailMessage

**Объект MailMessage** содержит электронное сообщение. Данный объект может использоваться в системе двумя способами:  
\- для обработки сообщений, полученных с сервера (атрибут Message объекта  MailBoxReader);  
\- для отправки сообщений по электронной почте (через объект SmtpClient).  
Структура данного объекта описана в файле _x-app://app/sx\_mail\_message.xmd_.  
**Объект MailMessage** поддерживает, кроме специализированных атрибутов, приведенных в данном разделе, поддерживает ряд других атрибутов и методов объекта XmlElem (в частности, для возвращения содержимого текущего элемента в формате XML используется метод Xml, а для копирования некоторого другого объекта в **объект MailMessage** - метод AssignElem).  
См. также - объект MailBoxReader и объект SmtpClient.

            _Атрибут объекта:_  
      attachments  
      body  
      html\_body  
      recipients  
      sender  
      subject  
  
     

_Пример:_  
      `_message = new MailMessage(); // формирование объекта MailMessage         sender_email = 'sender@mail.ru';         sender_name = 'Sender X';         recipient_email_0 = 'info@websoft.ru';         recipient_name_0 = 'WebSoft - info ';         recipient_email_1 = 'webmaster@websoft.ru';         recipient_name_1 = 'WebSoft - webmaster';         subject = 'Information';         body = 'Dear friends! We are happy to welcome you in our conference. ';         html_body = 'Dear friends! <br />We are happy to welcome you in our conference. ';                 message.sender.address = sender_email; // заполнение электронного адреса отправителя         message.sender.name = sender_name; // заполнение имени отправителя                 recipient = message.recipients.AddChild();         recipient.name = recipient_name_0; // заполнение имени первого получателя         recipient.address = recipient_email_0; // заполнение электронного адреса первого получателя         recipient = message.recipients.AddChild();         recipient.name = recipient_name_1; // заполнение имени второго получателя         recipient.address = recipient_email_1; // заполнение электронного адреса второго получателя                 message.subject = subject; // тема сообщения         message.body = body; // тело сообщения         message.html_body = html_body; // тело сообщения в формате HTML                 alert ( 'Сообщения полностью (Xml): ' + message.Xml ); // вывод на экран сообщения в формате XML_`

---

