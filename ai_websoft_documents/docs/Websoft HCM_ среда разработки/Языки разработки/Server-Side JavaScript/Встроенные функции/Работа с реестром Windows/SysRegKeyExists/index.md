## SysRegKeyExists

Проверяет, существует ли указанный ключ реестра Windows.

_Синтаксис:_  
      **SysRegKeyExists (<path>\[, <options>\])**

_Аргументы:_  
      _<path> (обязательный)_  
      Тип: **Строка**. Полный путь к ключу реестра.  
      _<options> (необязательный)_  
      Тип: **Строка** или **Объект**. Опции (sysRegOptions).

_Возвращаемое значение:_  
      Тип: Булево. Возвращает значение, показывающее, существует ли указанный ключ реестра Windows (true – ключ существует, false – ключ не существует). Результат действия функции.

_Пример:_  
      `_keyExists = SysRegKeyExists( 'HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Office\\Word' );            if ( ! SysRegKeyExists( regKey, {Prefer64View:true} ) )              existanceRegKey = false;_`

---

