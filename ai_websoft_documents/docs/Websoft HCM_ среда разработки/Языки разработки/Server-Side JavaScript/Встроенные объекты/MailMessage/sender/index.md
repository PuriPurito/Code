## sender

Атрибут объекта MailMessage.  
Объект, содержащий информацию об отправителе электронного почтового сообщения.  
Очистка атрибута и отдельных данных в составе данного атрибута может быть выполнена с помощью метода Clear.

_Синтаксис:_  
      **MailMessage.sender**

_Возвращаемое значение:_  
      Тип: **Объект XmlElem**. Объект, содержащий информацию об отправителе электронного сообщения.  
      В состав объекта входят следующие данные:  
      - _name_ – имя отправителя в строковом формате.  
      - _address_ – электронный адрес отправителя в строковом формате.  
      Атрибут _sender_ в формате _XML_ имеет следующий вид:  
      _<sender>  
            <name>\[Отправитель\]</name>  
            <address>\[...\]</data>  
      </sender>_  
      После применения метода Clear ко всему атрибуту в целом он приобретает вид:  
      _<sender/>_

_Пример 1:_  
      `_message = new MailMessage(); // формирование объекта MailMessage         sender_email = 'sender@mail.ru';         sender_name = 'Sender X';         recipient_email_0 = 'info@websoft.ru';         recipient_name_0 = 'WebSoft - info ';         recipient_email_1 = 'webmaster@websoft.ru';         recipient_name_1 = 'WebSoft - webmaster';         subject = 'Information';         body = 'Dear friends! We are happy to welcome you in our conference. ';         html_body = 'Dear friends! <br />We are happy to welcome you in our conference. ';                 message.sender.address = sender_email; // заполнение электронного адреса отправителя         message.sender.name = sender_name; // заполнение имени отправителя                 recipient = message.recipients.AddChild();         recipient.name = recipient_name_0; // заполнение имени первого получателя         recipient.address = recipient_email_0; // заполнение электронного адреса первого получателя         recipient = message.recipients.AddChild();         recipient.name = recipient_name_1; // заполнение имени второго получателя         recipient.address = recipient_email_1; // заполнение электронного адреса второго получателя                 message.subject = subject; // тема сообщения         message.body = body; // тело сообщения         message.html_body = html_body; // тело сообщения в формате HTML                 alert ( 'Отправитель: ' + message.sender.name + ' ; ' + message.sender.address ); // вывод на экран данных об отправителе_`

_Пример 2:_  
      `_reader = new MailboxReader; // создание нового объекта MailboxReader         reader.OpenMailbox ( account_type, options ); // открытие объекта MailboxReader (доступа к почте)         reader.ReadNextMessage () ) // переход к следующему сообщению         message = reader.Message; // формирование объекта MailMessage, который содержит очередное электронное сообщение, полученное с сервера         alert ( 'Отправитель: ' + message.sender.name + ' ; ' + message.sender.address ); // вывод на экран данных об отправителе_`

---

