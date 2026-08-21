## Журналы редактора Websoft OmniCode for HCM

В системе Websoft HCM предусмотрено логирование работы редактора Websoft OmniCode for HCM. Журналы (логи) редактора размещаются в папке ...\\WebSoft\\WebSoftServer\\Logs.

Для включения в журналы сообщений об отладке (Debug) в файле ...\\WebSoft\\WebSoftServer\\**xHttp.ini** должна быть указана строка:

`DOTNETCORE-DEBUG: 1`

В противном случае информация об отладке (Debug) в журналах выводиться не будет.

В журнале **components\_\*\*\*.log** записывается информация об инициализации всех компонентов системы. Инициализация компонентов **Websoft.DotNetBuild** и **Websoft.OmniCode** редактора прошла успешно, если в журнале **components\_\*\*\*.log** присутствуют строки:

Информация о работе редактора Websoft OmniCode for HCM записывается в журнал **xhttp\_middleware\_\*\*\*.log**.

Информация об обработке на стороне Websoft HCM записывается в журнал **websoft.components.dotnetbuild\_\*\*\*.log**, а на стороне Builder – в журнал **websoft.components.dotnetbuild.service\_\*\*\*.log**.

При старте компиляции Builder запускает приложение ...\\WebSoft\\WebSoftServer\\components\\websoft\_dotnetbuild\\bin\\**Websoft.Components.DotNetBuild.Service.exe** (в перспективе этих приложений может быть запущено несколько штук). Оно компилирует код, выдает все проблемы и возвращает обратно результат компиляции.

Алгоритм компиляции файла программного кода:

1.  VS Code отправляет код в DotNetBuild.
2.  DotNetBuild отправляет код в сервис.
3.  Сервис с помощью SDK компилирует код.
4.  После компиляции сервис возвращает результат со списком проблем (если есть) обратно в DotNetBuild.
5.  DotNetBuild отправляет полученный результат в VS Code.

---

