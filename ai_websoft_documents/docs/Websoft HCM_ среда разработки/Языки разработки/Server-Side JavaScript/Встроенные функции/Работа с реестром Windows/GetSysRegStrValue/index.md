## GetSysRegStrValue

Возвращает значение строкового элемента из реестра Windows. Если элемент не существует, возвращается пустая строка.

_Синтаксис:_  
      **GetSysRegStrValue (<path>\[, <name>, <options>\])**

_Аргументы:_  
      _<path> (обязательный)_  
      Тип: **Строка**. Полный путь к ключу реестра.  
      _<name> (необязательный)_  
      Тип: **Строка**. Имя элемента. Если указано пустое имя элемента, используется элемент по умолчанию.  
      _<options> (необязательный)_  
      Тип: **Строка** или **Объект**. Опции (sysRegOptions).

_Возвращаемое значение:_  
      Тип: **Строка**. Значение элемента из реестра Windows. Результат действия функции.

_Пример:_  
      `_elemVal = GetSysRegStrValue ( 'HKEY_CURRENT_USER\\Software\\Clients\\Mail\\', '' );         filePath = GetSysRegStrValue ( regKey, '', {Prefer64View:true} );         filePath = GetSysRegStrValue( 'HKEY_LOCAL_MACHINE\\SOFTWARE\\ESET\\ESET Security\\CurrentVersion\\Info', 'InstallDir', {UseBoth3264Views:true} );_`

---

