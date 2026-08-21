## Настройки моста SPXML->SQL

Рассмотрим опции моста SPXML->SQL , все, что описано ниже относится к последней, на момент написания этой статьи, версии 1.2.2.7.  
  
Физически компонент моста представляет собой один файл "com\_spxml\_mssql\_provider.dll" и располагается в директории "WebTutorCorpServer\\storage" относительно установки сервера WebTutor. 

  
Все настройки моста находятся в двух файлах "spxml\_mssql\_provider\_config.config" и "spxml\_mssql\_provider\_config.xml", первый файл содержит настройки для конкретной библиотеки и обновляется при обновлении версии моста, основные же настройки находятся во втором файле, и их рассмотрим подробно.  
  
Сам файл настроек - стандартный xml-файл конфигурации приложений для .Net.  
  
Примерный файл выглядит вот так:  
  
<?xml version="1.0" encoding="windows-1251"?>  
<configuration>  
<appSettings>  
<add key="LogDirectory" value="Logs" />  
<add key="LookFailedUrlsOnDisk" value="true" />  
<add key="FetchBackFoundUrlsOnDisk" value="true" />  
<add key="SharedConnection" value="false" />  
<add key="ConnectionString" value="" />  
<add key="Username" value="" />  
<add key="Password" value="" />  
<add key="Database" value="" />  
<add key="TrashDatabase" value="" />  
<add key="DateFormat" value="dmy" />  
<add key="Mode" value="Normal" />  
  
  
<!-- tuning start -->  
<add key="XmlPrimaryIndex" value="false" />  
<add key="XmlSecondaryIndex" value="false" />  
<!-- tuning end -->  
  
  
</appSettings>  
</configuration>  
  
Ключ "LogDirectory" - указывает на директорию, где будет создаваться журнал работы моста, все ошибки и сообщения записываются в файлы вида "DDMMYYYY.log" (По-умолчанию "Logs")  
Ключ "LookFailedUrlsOnDisk" - если "true", система будет искать не найденные файлы в базе SQL в директориях на сервере (По-умолчанию "true")  
Ключ "FetchBackFoundUrlsOnDisk" - если "true", система будет записывать в базу SQL найденные файлы в директориях на сервере (По-умолчанию "true")  
Ключ "SharedConnection" - если "true", система будет использовать только одно соединение с базой SQL при выполнении извлечения данных, иначе каждый раз будет создавать новое или занимать соединение из пула (по-умолчанию "false")  
Ключ "ConnectionString" - стандартная строка соединения для поставщика SQL Server ADO.Net , конфигурируется в основном из программы конфигурации , но может быть изменено и вручную, если требуются иные настройки  
Ключи "Username" и "Password" - логин/пароль пользователя соотв. базы данных SQL, могут быть пустыми, если используется интегрированная авторизация, конфигурируются в основном из программы конфигурации  
Ключ "Database" - наименование базы в SQL  
Ключ "TrashDatabase" - наименование базы удаленных документов в SQL  
Ключ "DateFormat" - формат даты внутри документов XML , изменять не рекомендуется (По-умолчанию "dmy")  
Ключ "Mode" - если "Normal" - стандартный режим работы моста , если "Debug" - включает режим отладки и протоколирование выполнения любых действий внутри компонента, все сообщения пишутся в лог (По-умолчанию "Normal")  
Ключи "XmlPrimaryIndex"/"XmlSecondaryIndex" - включают создание доп. xml-индексов при создании базы SQL, могут быть полезны только, если используются доп. запросы XQuery для SQL 2005 (По-умолчанию "false")  
  
При любом изменении параметров требуется перезапуск сервера WebTutor (либо соотв. IIS Application Pool), чтобы они вступили в силу.

---

