## ErrorLogName

Атрибут объекта **MethodRunner**.  
Имя журнала, в который записывается информация об ошибке в случае ошибочного завершения метода.

_Синтаксис:_  
      **MethodRunner.ErrorLogName**

_Возвращаемое значение:_  
      Тип: **Строка**. Имя журнала, в который записывается информация об ошибке.

_Пример 1:_  
      `_runner = new MethodRunner( lib_mail, 'send_mail_message_core' );         runner.SetArguments( message, options );         runner.RunOnServer = global_settings.auto_mailing.run_on_server;         runner.RunAsync = options.GetOptProperty( 'RunAsync', runner.RunAsync );         runner.ErrorLogName = 'mass-mail';         runner.Run();_`

_Пример 2 (условный):_  
      `_// Перед запуском данного кода выполните следующие действия:         // 1. Файл, необходимый для запуска кода, можно скачать на вкладке «Файлы». На данной странице Вики-статьи перейдите на вкладку "Файлы" и скачайте размещенный там архивный файл.         // 2. Разархивируйте архивный файл и разместите его содержимое (см._ **Рис.1**_) в папку d:\WebTutor\ на вашем компьютере.         // 3. Скопируйте приведенный ниже пример в программный агент и запустите указанный агент, нажав на кнопку "Выполнить агент на стороне клиента".         runner = new MethodRunner(OpenCodeLib("file:///D:/WebTutor/test_lib_MethodRunner.js"), "test_MethodRunner"); // создание нового объекта MethodRunner на основании файла test_lib_MethodRunner.js (в указанном файле содержится описание функции (метода) test_MethodRunner)         runner.SetArguments( 'p1', 'p2' ); // указание значений аргументов         runner.RunAsync = true; // выполнение метода будет запущено в отдельном потоке, а управление будет сразу же возвращено вызывающему коду         for ( arg in runner.Arguments ) // вывод на экран элементов из списка аргументов (см._ **Рис.2**_)         {               alert (arg);         }         runner.ErrorLogName = 'error01'; // запись информации об ошибках в журнал 'error01'         runner.Run(); // запуск метода (функции) и вывод данных, содержащихся в файле метода (см._ **Рис.2**_)         Sleep(3000); // задержка между запуском метода и выводом результата         if ( runner.Error == undefined )         {               result = runner.Result;               alert (result + ' успешно'); // вывод результата на экран (см._ **Рис.2**_)         }         if ( !runner.IsRunning )               alert ('Метод сейчас не запущен'); // см._ **Рис.2**`  
  
**Рис.1. Содержимое файла test\_lib\_MethodRunner.js**  
  
  
**Рис.2. Вывод на экран результатов работы программного кода**

---

