## MethodRunner

Объект **MethodRunner** используется внутри ядра для вызова функций (методов), описанных в XMD-форме или в программных файлах системы.  
Также с помощью конструктора _new MethodRunner_ данный объект можно создать явно и в случае, если требуется вызвать метод с параметрами, отличающимися от заданных в описании метода, например, вызвать метод асинхронно или без прогресс-индикатора.  
Конструктор объекта **MethodRunner** имеет два обязательных параметра (аргумента): **baseElem** и **methodName** (подробнее см. в разделе **Аргументы**).  
См. также раздел **Атрибуты описания методов**.

_Синтаксис:_  
      **new MethodRunner(<baseElem>, <methodName>)**

_Аргументы:_  
      _<baseElem> (обязательный)_  
      Тип: **Объект XmlElem**. Ссылка на источник, в котором содержится описание функции (метода) (например, JS-файл, внешняя библиотека и т.д.)  
      _<methodName> (обязательный)_  
      Тип: **Строка**. Имя функции (метода).

_Возвращаемое значение:_  
      Тип: **Объект MethodRunner**. Создает объект MethodRunner или предоставляет возможности для работы с указанным объектом.

_Пример 1:_  
      `_runner = new MethodRunner ( lib_agent, 'kick_agent' );         runner = new MethodRunner ( lib_mail, 'send_mail_message_core' );         runner = new MethodRunner ( lib_sms, 'send_sms_message_core' );         runner = new MethodRunner ( lib_recruit, 'send_vacancy_create_notif' );         runner = new MethodRunner ( lib_mail, 'send_mail_message' );         methRunner = new MethodRunner ( OpenCodeLib ( "x-local://wtv/wtv_lib_client_bridge_service.js" ), "get_metadata" );_`

_Пример 2 (условный):_  
      `_// Перед запуском данного кода выполните следующие действия:         // 1. Файл, необходимый для запуска кода, можно скачать на вкладке «Файлы». На данной странице Вики-статьи перейдите на вкладку "Файлы" и скачайте размещенный там архивный файл.         // 2. Разархивируйте архивный файл и разместите его содержимое (см._ **Рис.1**_) в папку d:\WebTutor\ на вашем компьютере.         // 3. Скопируйте приведенный ниже пример в программный агент и запустите указанный агент, нажав на кнопку "Выполнить агент на стороне клиента".         runner = new MethodRunner(OpenCodeLib("file:///D:/WebTutor/test_lib_MethodRunner.js"), "test_MethodRunner"); // создание нового объекта MethodRunner на основании файла test_lib_MethodRunner.js (в указанном файле содержится описание функции (метода) test_MethodRunner)         runner.SetArguments( 'p1', 'p2' ); // указание значений аргументов         runner.RunAsync = true; // выполнение метода будет запущено в отдельном потоке, а управление будет сразу же возвращено вызывающему коду         for ( arg in runner.Arguments ) // вывод на экран элементов из списка аргументов (см._ **Рис.2**_)         {               alert (arg);         }         runner.ErrorLogName = 'error01'; // запись информации об ошибках в журнал 'error01'         runner.Run(); // запуск метода (функции) и вывод данных, содержащихся в файле метода (см._ **Рис.2**_)         Sleep(3000); // задержка между запуском метода и выводом результата         if ( runner.Error == undefined )         {               result = runner.Result;               alert (result + ' успешно'); // вывод результата на экран (см._ **Рис.2**_)         }         if ( !runner.IsRunning )               alert ('Метод сейчас не запущен'); // см._ **Рис.2**`  
  
**Рис.1. Содержимое файла test\_lib\_MethodRunner.js**  
  
  
**Рис.2. Вывод на экран результатов работы программного кода**  

            _Атрибут объекта:_  
      Arguments  
      Error  
      ErrorDesc  
      ErrorLogName  
      IsRunning  
      Result  
      RunAsync  
      RunOnServer  
      RunUi  
      ShowCompletionMessage  
  
            _Метод объекта:_  
      Kill  
      Run  
      SetArguments  
      SetDefaultEnvObject

---

