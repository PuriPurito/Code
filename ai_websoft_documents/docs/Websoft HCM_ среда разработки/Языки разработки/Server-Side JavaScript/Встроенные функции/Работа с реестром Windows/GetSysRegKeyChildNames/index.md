## GetSysRegKeyChildNames

Возвращает массив имен дочерних ключей для заданного ключа реестра Windows.

_Синтаксис:_  
      **GetSysRegKeyChildNames (<path>\[, <options>\])**

_Аргументы:_  
      _<path> (обязательный)_  
      Тип: **Строка**. Полный путь к ключу реестра.  
      _<options> (необязательный)_  
      Тип: **Строка** или **Объект**. Опции (sysRegOptions).

_Возвращаемое значение:_  
      Тип: **Массив**. Массив имен дочерних ключей. Результат действия функции.

_Пример:_  
      `_for ( instanceName in GetSysRegKeyChildNames( 'HKEY_LOCAL_MACHINE\\Software\\Datex', {Prefer64View:true} ) )         {               if ( StrBegins( instanceName, package.full_app_id + '_' ) )               {                     strArray.push( StrRightRangePos( instanceName, StrLen( package.full_app_id ) + 1 ) );               }         }_`

---

