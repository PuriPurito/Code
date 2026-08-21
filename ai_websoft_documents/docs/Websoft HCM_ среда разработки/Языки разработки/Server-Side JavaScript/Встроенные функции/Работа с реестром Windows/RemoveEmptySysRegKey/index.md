## RemoveEmptySysRegKey

Удаляет ключ реестра Windows, если он пустой. Если ключ содержит другие ключи, функция завершается с ошибкой.

_Синтаксис:_  
      **RemoveEmptySysRegKey (<path>\[, <options>\])**

_Аргументы:_  
      _<path> (обязательный)_  
      Тип: **Строка**. Полный путь к ключу реестра.  
      _<options> (необязательный)_  
      Тип: **Строка** или **Объект**. Опции (sysRegOptions).

_Возвращаемое значение:_  
      Удаляет ключ реестра Windows. Возвращаемое значение отсутствует.

_Пример:_  
      `_RemoveEmptySysRegKey( 'HKEY_LOCAL_MACHINE\\Software\\Datex\\', {UseBoth3264Views:true} );         RemoveEmptySysRegKey( 'HKEY_CURRENT_USER\\Software\\Datex\\' );_`

---

