## Result

Атрибут объекта **MethodRunner**.  
Значение, которое вернул метод. Если метод еще не завершил работу, возвращается _undefined_.

_Синтаксис:_  
      **MethodRunner.Result**

_Возвращаемое значение:_  
      Тип: **Строка, Число, Булево** или др. Значение, возвращаемое методом.

_Пример 1:_  
      `_var methRunner = new MethodRunner(OpenCodeLib("x-local://wtv/wtv_lib_client_bridge_service.js"), "get_metadata");         methRunner.SetDefaultEnvObject(({"Request": Request, "CurMethodResult": ({})}));         methRunner.SetArguments(XAML_TEMPLATE_ID, sParameters + sLocalParameters);         methRunner.Run();         renderedResult = methRunner.Result;         if ( methRunner.Result == undefined ) // метод завершил работу               alert ("Метод завершил работу");_`

_Пример 2 (условный):_  
      `_// Перед запуском данного кода выполните следующие действия:         // 1. Файл, необходимый для запуска кода, можно скачать на вкладке «Файлы». На данной странице Вики-статьи перейдите на вкладку "Файлы" и скачайте размещенный там архивный файл.         // 2. Разархивируйте архивный файл и разместите его содержимое (см._ **Рис.1**_) в папку d:\WebTutor\ на вашем компьютере.         // 3. Скопируйте приведенный ниже пример в программный агент и запустите указанный агент, нажав на кнопку "Выполнить агент на стороне клиента".         runner = new MethodRunner(OpenCodeLib("file:///D:/WebTutor/test_lib_MethodRunner.js"), "test_MethodRunner"); // создание нового объекта MethodRunner на основании файла test_lib_MethodRunner.js (в указанном файле содержится описание функции (метода) test_MethodRunner)         runner.SetArguments( 'p1', 'p2' ); // указание значений аргументов         runner.RunAsync = true; // выполнение метода будет запущено в отдельном потоке, а управление будет сразу же возвращено вызывающему коду         for ( arg in runner.Arguments ) // вывод на экран элементов из списка аргументов (см._ **Рис.2**_)         {               alert (arg);         }         runner.ErrorLogName = 'error01'; // запись информации об ошибках в журнал 'error01'         runner.Run(); // запуск метода (функции) и вывод данных, содержащихся в файле метода (см._ **Рис.2**_)         Sleep(3000); // задержка между запуском метода и выводом результата         if ( runner.Error == undefined )         {               result = runner.Result;               alert (result + ' успешно'); // вывод результата на экран (см._ **Рис.2**_)         }         if ( !runner.IsRunning )               alert ('Метод сейчас не запущен'); // см._ **Рис.2**`  
  
**Рис.1. Содержимое файла test\_lib\_MethodRunner.js**  
  
  
**Рис.2. Вывод на экран результатов работы программного кода**

---

