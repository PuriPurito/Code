## Информация о прекращении поддержки толстого клиента

В 2024 году мы начали процесс разделения системы на компоненты. Ввиду технической невозможности реализовать поддержку компонентного подхода системы в толстом админе, работа с объектами функционала, выделенного в компоненты, **возможна только в веб-версии администратора**. В частности, при работе с толстым клиентом могут выводиться сообщения вида «объект не найден», «элемент не найден», «файл не найден» и т.д.

После разделения системы на компоненты толстый клиент поддерживаться не будет.

Кроме того, могут не поддерживаться некоторые операции с файлами на клиенте (архивы, Excel), сохранение данных, шифрование и декодирование данных. Обработку указанных операций необходимо переносить на сервер, соответствующие примеры и рекомендации мы разместим дополнительно.

### Функции, которые не выполняются в браузере

1.  AskDirectory (и ему подобные функции доступа к локальной файловой системе) — безопасность в браузере принципиально запрещает доступ к структуре файловой системы на локальном компьютере.
2.  AppDataDirectoryPath
3.  AppDirectoryPath
4.  Base64Encode
5.  CopyFile
6.  CreateDirectory
7.  CreateShellLink
8.  DecodeCharset
9.  DeleteDirectory
10.  DeleteFile
11.  EncodeCharset
12.  EvalThread
13.  ExportToXml
14.  FileIsBusy
15.  FilePath
16.  FilePathExists
17.  FileStream
18.  FindExtDataElemByFieldID
19.  FontDescription
20.  GetCurProcessUsedMemorySize
21.  GetFileCreationDate
22.  GetFileModDate
23.  GetPropStorageDirectory
24.  GetSysUserName
25.  HttpRequest
26.  ImportFromXml
27.  IsAbsoluteFilePath
28.  IsDirectory
29.  KillActiveThread
30.  LoadFileData
31.  LoadFileText
32.  LoadFromLds
33.  LoadFromStr
34.  LoadLdsUrlData
35.  MakeReport
36.  Md5
37.  MoveFile
38.  MultipartFormEncode
39.  ObtainDirectory
40.  ObtainTempDirectoryPath
41.  OptChildAttrValue
42.  ParseMimeDate
43.  PathIsDirectory
44.  ProcessExecute
45.  PutFileData
46.  PutFileText
47.  ReadDirectory
48.  ReadDirectoryByPath
49.  RegisterUiTemplateFile
50.  SaveToLds
51.  SaveToStream
52.  SendMailMessage
53.  SetFileAccess
54.  SetHttpCookie
55.  SetHttpDefaultAuth
56.  SetPropHostDir
57.  SetPropMaxRecordsNum
58.  SHA1
59.  SHA1Base64
60.  ShowMailMessage
61.  StrIsAlphaNum
62.  StrMimeDate
63.  StrSimpleDecrypt
64.  StrSimpleEncrypt
65.  StrStdDecrypt
66.  StrSubStrCount

### Агенты сервера, предназначенные для запуска на клиенте

В связи с прекращением поддержки толстого клиента необходимо переписать агенты сервера, которые запускаются на клиенте. Однако, если в системе много агентов, перебирать все по очереди и искать необходимые будет достаточно проблематично.

Отличия агентов сервера, предназначенных для запуска на клиенте, от остальных агентов:

*   в программном коде агента присутствует слово «Screen». Это значит, что агент потенциально взаимодействует с интерфейсом, т.е. выполняется на клиенте;
*   в программном коде агента используются глобальные переменные **LdsIsClient** и **LdsIsServer**.

Для поиска агентов, удовлетворяющих представленным условиям, нужно знать, где расположен программный код агентов – в базе или в файлах. В зависимости от их места расположения рекомендуем производить поиск:

*   если агенты находятся в базе:
    *   если включен поиск – в интерфейсе администратора поиском по словам «Screen», «LdsIsClient», «LdsIsServer»;
    *   если выключен поиск – прямым запросом к базе по полю **run\_code**;
*   если агенты находятся в файлах – глобальным поиском по каталогу.

Для упрощения поиска агентов сервера, предназначенных для запуска на клиенте, мы написали специальный агент, который ищет агенты по представленным выше критериям. Скачать «Агент поиска агентов запускаемых на клиенте» можно в конце этой статьи.

---

