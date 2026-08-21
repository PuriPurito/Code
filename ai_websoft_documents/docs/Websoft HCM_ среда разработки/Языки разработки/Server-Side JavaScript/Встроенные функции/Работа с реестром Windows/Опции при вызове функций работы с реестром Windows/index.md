## Опции при вызове функций работы с реестром Windows

Большинство функций работы с реестром Windows принимают в качестве последнего необязательного аргумента <options> список опций. Опции задаются в двойственном формате - либо объект типа Object, как правило, описываемый конструкцией _JSON_, либо строка вида _name1=value1;name2=value2;_...  
В системе список опций часто носит имя _sysRegOptions_.  
  
_Список допустимых опций_:  
**Prefer32View** - для 64-битной ОС использовать 32-битную альтернативную ветку реестра (независимо от типа приложения).  
**Prefer64View** - для 64-битной ОС использовать 64-битную основную ветку реестра (независимо от типа приложения).  
**UseBoth3264Views** - для 64-битной ОС использовать и 32-битную, и 64-битную ветки реестра (независимо от типа приложения).

_Пример:_  
      `_sysRegOptions = {Prefer32View:true};         register_explorer_plugin_core ( 'HKEY_AUTO\\Software\\', {Prefer32View:true} );         RemoveSysRegKey( 'HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Internet Explorer\\Extensions\\{C30C6D7C-68A6-42B5-97B1-80AB1E4DC1AF}', {Prefer32View:true} );         filePath = GetSysRegStrValue( regKey, '', {Prefer64View:true} );                 if ( ! SysRegKeyExists( regKey, {Prefer64View:true} ) )               return false;                 filePath = GetSysRegStrValue( 'HKEY_LOCAL_MACHINE\\SOFTWARE\\ESET\\ESET Security\\CurrentVersion\\Info', 'InstallDir', {UseBoth3264Views:true} );_`

---

