## RegisterScreenFormFromStr

Регистрирует экранную форму, переданную в виде строки.

_Синтаксис:_  
      **RegisterScreenFormFromStr (<xmsUrl>, <xmsForm>)**

_Аргументы:_  
      _<xmsUrl> (обязательный)_  
      Тип: **Строка**. url регистрируемой экранной формы.  
      _<xmsForm> (обязательный)_  
      Тип: **Строка**. Строковое выражение, содержащее бинарные данные, загруженные из файла экранной формы с заданным url.

_Возвращаемое значение:_  
      Регистрирует экранную форму. Возвращаемое значение отсутствует.

_Пример:_  
      `_RegisterScreenFormFromStr( vocInfo.object_screen_form_url, LoadUrlData( 'base1_voc_object.xms' ) );         // регистрирует экранную форму vocInfo.object_screen_form_url, содержащую данные строкового выражения, полученные из файла base1_voc_object.xms_`

---

