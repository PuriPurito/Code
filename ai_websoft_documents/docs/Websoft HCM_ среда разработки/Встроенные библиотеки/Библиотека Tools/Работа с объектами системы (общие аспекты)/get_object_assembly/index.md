## get_object_assembly

Функция осуществляет универсальную (через _.Net_ или _ActiveX_) инициализацию компонентов (дополнительных библиотек) - утилит для использования в функционале системы.

_Синтаксис:_  
      **tools. get\_object\_assembly(<sLibParam>)**

_Аргументы:_  
     _<sLibParam> (обязательный)_  
      Тип: **Строка**. Тип инициализируемой библиотеки (компонента).  
      Допустимые значения:  
_Zip_ – работа с архивами  
_Image_ – работа с изображениями  
_Pdf_ – работа с PDF документами  
_Powerpoint_ – работа с документами PowerPoint  
_Excel_ – работа с документами Excel  
_Word_ \- работа с документами Word  
_Crypto_ – шифрование  
_FileUtils_ – расширенные методы работы с файлами  
_RegExp_ – работа с регулярными выражениями  
_DatexCore_ – работа с функциями ядра системы из внешнего кода (C#)  
_Authorization_ – расширенные методы авторизации, работа с LDAP  
_XHTTPMiddlewareStatic_ – методы работы с веб-сервером, использование сокетов  
_FaceRecognition_ – распознавание лиц, функционал прокторинга  
_PKeyGenerator_ – работа с лицензиями

_Возвращаемое значение:_  
      Тип: **Объект**. Инициализированный компонент.  

_Пример 1:_  
      `_var oImage = tools.get_object_assembly( 'Image' ); // инициализация компонента для работы с изображениями         oImage.Open(sPicPath); // загрузка изображения          oImage.Resize(iWidth, iHeight, (iWidth == iHeight), false); // изменение размера изображения         oImage.Save(); // сохранение измененного изображения         oImage.Close(); // закрытие объекта_`

_Пример 2:_  
     `_// реализация функции HttpRequest в среде Linux        var oReq = tools.get_object_assembly( "HttpRequest" );        resp = oReq.Open( sUrl, sMethodParam, sBody, sHeaders, null, null, iTimeOut );_`

---

