## SetSysRegStrValue

Устанавливает строковое значение ключа реестра Windows.

_Синтаксис:_  
      **SetSysRegStrValue (<path>, <name>, <value>\[, <options>\])**

_Аргументы:_  
      _<path> (обязательный)_  
      Тип: **Строка**. Полный путь к ключу реестра.  
      _<name> (обязательный)_  
      Тип: **Строка**. Имя элемента.  
      _<value> (обязательный)_  
      Тип: **Строка**. Строковое значение элемента.  
      _<options> (необязательный)_  
      Тип: **Строка** или **Объект**. Опции (sysRegOptions).

_Возвращаемое значение:_  
      Устанавливает значение ключа реестра Windows. Возвращаемое значение отсутствует.

_Пример:_  
      `_SetSysRegStrValue( 'HKEY_LOCAL_MACHINE\\Software\\Datex\\EStaff', 'Sn', 'AHYC-52DG-87RT' );         SetSysRegStrValue( regKey, 'Default Visible', 'Yes', sysRegOptions );_`

---

