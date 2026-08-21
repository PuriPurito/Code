## RemoveSysRegKey

Удаляет ключ реестра Windows, включая все вложенные ключи.

_Синтаксис:_  
      **RemoveSysRegKey (<path>\[, <options>\])**

_Аргументы:_  
      _<path> (обязательный)_  
      Тип: **Строка**. Полный путь к ключу реестра.  
      _<options> (необязательный)_  
      Тип: **Строка** или **Объект**. Опции (sysRegOptions).

_Возвращаемое значение:_  
      Удаляет ключ реестра Windows. Возвращаемое значение отсутствует.

_Пример:_  
      `_RemoveSysRegKey( 'HKEY_LOCAL_MACHINE\\Software\\Datex\\EStaff' );         RemoveSysRegKey( 'HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Internet Explorer\\Extensions\\{C30C6D7C-68A6-42B5-97B1-80AB1E4DC1AF}', {Prefer32View:true} );_`

---

