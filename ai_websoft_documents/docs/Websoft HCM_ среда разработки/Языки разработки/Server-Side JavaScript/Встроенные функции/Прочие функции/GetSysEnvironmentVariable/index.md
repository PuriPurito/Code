## GetSysEnvironmentVariable

Возвращает значение системной переменной окружения.

_Синтаксис:_  
      **GetSysEnvironmentVariable (<name>)**

_Аргументы:_  
      _<name> (обязательный)_  
      Тип: **Строка.** Имя системной переменной.

_Возвращаемое значение:_  
      Тип: **Строка.** Строковое значение системной переменной окружения. Результат действия функции.

_Пример:_  
      `_A1 = GetSysEnvironmentVariable ( 'windir' );         alert ( A1 ); // возвращает "C:\WINDOWS"                 exePath = FilePath ( GetSysEnvironmentVariable( 'windir' ), 'microsoft.net\\Framework\\v4.0.30319\\regasm.exe' ); // добавляет к пути "C:\\WINDOWS" заданный фрагмент         alert ( exePath ); // возвращает строковое значение пути 'C:\WINDOWS\microsoft.net\Framework\v4.0.30319\regasm.exe'_`

---

