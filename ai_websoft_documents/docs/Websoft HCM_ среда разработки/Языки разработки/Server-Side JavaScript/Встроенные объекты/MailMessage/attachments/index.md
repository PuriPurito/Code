## attachments

Атрибут объекта MailMessage.  
Преддставляет собой объект XmlElem массива вложений в электронное почтовое сообщение. Добавить в почтовое сообщение новое вложение можно с помощью метода AddChild.  
Очистка всего атрибута в целом, отдельных элементов массива и отдельных данных в составе указанных элементов может быть выполнена с помощью метода Clear.

_Синтаксис:_  
      **MailMessage.attachments**

_Возвращаемое значение:_  
      Тип: **Объект XmlElem**. Объект, представляющий собой массив объектов отдельных вложений (также типа XmlElem) в электронное почтовое сообщение.  
      В состав объектов-элементов массива входят следующие данные:  
      - _name_ – имя вложения в строковом формате.  
      - _data_ – содержание файла вложения (объект Binary).  
      Атрибут _attachments_ в формате _XML_ имеет следующий вид:  
      _<attachments>  
            <attachment>  
                  <name>\[Вложение 1\]</name>  
                  <data>\[...\]</data>  
            </attachment>  
            <attachment>  
                  <name>\[Вложение 2\]</name>  
                  <data>\[...\]</data>  
            </attachment>  
      \[...\]  
      </attachments>_  
      После применения метода Clear ко всему атрибуту в целом он приобретает вид:  
      _<attachments/>_

_Пример 1:_  
      `_message = new MailMessage(); // формирование объекта MailMessage         att = message.attachments.AddChild(); // работа с новым вложением в почтовое сообщение         // добавление во вложение к почтовому сообщению трех файлов (указанные файлы должны существовать в файловой системе)         att.data.LoadFromFile ( FilePathToUrl ( 'D:\\WebTutor\\wtl1.xfp' )); // загрузка содержимого первого файла через бинарный объект         att.name = "wtl1.xfp";                 att = message.attachments.AddChild();         att.data.LoadFromFile ( FilePathToUrl ( 'D:\\WebTutor\\file1.xml' )); // загрузка содержимого второго файла через бинарный объект         att.name = "file1.xml";                 att = message.attachments.AddChild();         att.data.LoadFromFile ( FilePathToUrl ( 'D:\\WebTutor\\file.docx' )); // загрузка содержимого третьего файла через бинарный объект         att.name = "file.docx";                 alert ( 'Вложения полностью (Xml): ' + message.attachments.Xml ); // вывод на экран вложений в сообщение в формате XML_`

_Пример 2:_  
      `_reader = new MailboxReader; // создание нового объекта MailboxReader         reader.OpenMailbox ( account_type, options ); // открытие объекта MailboxReader (доступа к почте)         reader.ReadNextMessage (); // переход к следующему сообщению         message = reader.Message; // формирование объекта MailMessage, который содержит очередное электронное сообщение, полученное с сервера         for ( attachment in message.attachments )         {               alert ( attachment.name );               alert ( attachment.data );         }_`

---

