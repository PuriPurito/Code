## create_license

Создает файл с объектом, зашифрованным с использованием указанной лицензии.

_Синтаксис:_  
      **tools.create\_license (<iLicenseId>\[, <sOutPath>\])**

_Аргументы:_  
     <iLicenseId> (обязательный)  
     Тип: **Целое число**. ID лицензии для создания файла.  
     <sOutPath> (необязательный)  
     Тип: **Строка**. Строковое выражение пути до файла. По умолчанию - это папка temp администратора или сервера WebTutor.

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение пути до файла.

_Пример:_  
      `_str = tools.create_license ( LicenseID );         ServerEval ( 'tools.create_license ( ' + TopElem.Doc.DocID + ', \'' + StrReplace(UrlToFilePath(sServerTempUrl), '\\', '\\\\') + '\')');_`

---

