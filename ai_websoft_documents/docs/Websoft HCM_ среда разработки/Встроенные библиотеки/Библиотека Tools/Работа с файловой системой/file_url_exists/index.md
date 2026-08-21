## file_url_exists

Проверяет, существует ли файл по указанному пути.

_Синтаксис:_  
      **tools.file\_url\_exists (<sFilePathParam>)**

_Аргументы:_  
     <sFilePathParam> (обязательный)  
     Тип: **Строка**. Строка с путем до файла.

_Возвращаемое значение:_  
      Тип: **Булево**. Возвращает значение _true_, если файл существует, или _false_ - в противном случае.

_Пример 1:_  
      `_// Пусть в системе имеется папка d:\WebTutor\ , а в этой папке – файл file.txt.         // Тогда можем запустить следующий код:         bExist = tools.file_url_exists ( 'x-local:d://WebTutor/file.txt' );         alert (bExist);         bExist1 = tools.file_url_exists ( 'file:D://WebTutor/file.txt' );         alert (bExist1);_`  

_Пример 2:_  
      `_if ( tools.file_url_exists( 'x-local://custom/wtv_dlg_select_server.xml' ) )               dlgUrl = 'x-local://custom/wtv_dlg_select_server.xml';_`

---

