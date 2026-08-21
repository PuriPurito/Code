## recipients

Атрибут объекта MailMessage.  
Объект, содержащий информацию о получателях электронного почтового сообщения. Добавить информацию о новом получателе почтового сообщения можно с помощью метода AddChild.  
Очистка всего атрибута в целом, отдельных элементов массива и отдельных данных в составе указанных элементов может быть выполнена с помощью метода Clear.

_Синтаксис:_  
      **MailMessage.recipients**

_Возвращаемое значение:_  
      Тип: **Объект XmlElem**. Объект, представляющий собой массив объектов отдельных данных о получателях (также типа XmlElem).  
      В состав объектов-элементов массива входят следующие данные:  
      - _name_ – имя получателя в строковом формате.  
      - _address_ – электронный адрес получателя в строковом формате.  
      Атрибут recipients в формате _XML_ имеет следующий вид:  
      _<recipients>  
            <recipient>  
                  <name>\[Получатель 1\]</name>  
                  <address>\[...\]</data>  
            </recipient>  
            <recipient>  
                  <name>\[Получатель 2\]</name>  
                  <address>\[...\]</data>  
            </recipient>  
      \[...\]  
      </recipients>_  
      После применения метода Clear ко всему атрибуту в целом он приобретает вид:  
      _<recipients/>_

_Пример 1:_  
      `_message = new MailMessage(); // формирование объекта MailMessage         sender_email = 'sender@mail.ru';         sender_name = 'Sender X';         recipient_email_0 = 'info@websoft.ru';         recipient_name_0 = 'WebSoft - info ';         recipient_email_1 = 'webmaster@websoft.ru';         recipient_name_1 = 'WebSoft - webmaster';         subject = 'Information';         body = 'Dear friends! We are happy to welcome you in our conference. ';         html_body = 'Dear friends! <br />We are happy to welcome you in our conference. ';                 message.sender.address = sender_email; // заполнение электронного адреса отправителя         message.sender.name = sender_name; // заполнение имени отправителя                 recipient = message.recipients.AddChild();         recipient.name = recipient_name_0; // заполнение имени первого получателя         recipient.address = recipient_email_0; // заполнение электронного адреса первого получателя         recipient = message.recipients.AddChild();         recipient.name = recipient_name_1; // заполнение имени второго получателя         recipient.address = recipient_email_1; // заполнение электронного адреса второго получателя                 message.subject = subject; // тема сообщения         message.body = body; // тело сообщения         message.html_body = html_body; // тело сообщения в формате HTML                 // вывод на экран данных о получателях         alert ( ' Получатель 0: ' + message.recipients[0].name + ' ; ' + message.recipients[0].address ); // данные о первом получателе                 for ( recipient in message.recipients ) {               alert ( ' Получатель: ' + recipient.name + ' ; ' + recipient.address ); // данные о получателях         }_`

_Пример 2:_  
      `_reader = new MailboxReader; // создание нового объекта MailboxReader         reader.OpenMailbox ( account_type, options ); // открытие объекта MailboxReader (доступа к почте)         reader.ReadNextMessage () ) // переход к следующему сообщению         message = reader.Message; // формирование объекта MailMessage, который содержит очередное электронное сообщение, полученное с сервера         // вывод на экран данных о получателях         for ( recipient in message.recipients )         {               alert ( ' Получатель: ' + recipient.name + ' ; ' + recipient.address ); // данные о получателях         }_`

_Пример 3:_  
      `_message = MailMessage();         if ( person.email.HasValue ) // если в карточке сотрудника указан адрес электронной почты, этот адрес добавляется в атрибут recipients почтового сообщения               message.recipients.AddChild().address = person.email;         if ( person.email2.HasValue ) // если в карточке сотрудника указан второй адрес электронной почты, этот адрес также добавляется в атрибут recipients почтового сообщения               message.recipients.AddChild().address = person.email2;_`

---

