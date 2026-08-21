## ZipCreate

Создает zip-архив.

_Синтаксис:_  
      **ZipCreate (<archivePath>, <filesArray>\[, <options>\])**

_Аргументы:_  
      _<archivePath> (обязательный)_  
      Тип: **Строка.** Путь (или url) к создаваемому архиву.  
      _<filesArray> (обязательный)_  
      Тип: **Массив**. Список файлов или папок, которые нужно заархивировать.  
      _<options> (необязательный)_  
      Тип: **Объект**. Объект с параметрами.  
      _Используемая опция:_  
      _**BaseDir**_ \- базовая папка. Если указана базовая папка, то пути к файлам могут быть относительными.

_Возвращаемое значение:_  
      Производится архивирование файлов. Возвращаемое значение отсутствует.

_Пример:_  
      `_ZipCreate ( 'C:\\Temp\1.zip', ['app','base','SpXml.exe'], { BaseDir: 'C:\\Program Files\\EStaff' } );         ZipCreate( archivePath, '*', {BaseDir:tempDir} );         ZipCreate( UrlToFilePath( 'x-local://data/obj/xml_41.zip' ), UrlToFilePath( 'x-local://data/obj/xml' ) );_`

---

