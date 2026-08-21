## SetSysRegIntegerValue

Устанавливает целочисленное значение ключа реестра Windows.

_Синтаксис:_  
      **SetSysRegIntegerValue (<path>, <name>, <value>\[, <options>\])**

_Аргументы:_  
      _<path> (обязательный)_  
      Тип: **Строка**. Полный путь к ключу реестра.  
      _<name> (обязательный)_  
      Тип: **Строка**. Имя элемента.  
      _<value> (обязательный)_  
      Тип: **Целое число**. Целочисленное значение элемента.  
      _<options> (необязательный)_  
      Тип: **Строка** или **Объект**. Опции (sysRegOptions).

_Возвращаемое значение:_  
      Устанавливает значение ключа реестра Windows. Возвращаемое значение отсутствует.

_Пример:_  
      `_SetSysRegIntegerValue( 'HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\EStaff', 'NoModify', 1 );         SetSysRegIntegerValue( regKey, 'NoRepair', 1 );_`

---

