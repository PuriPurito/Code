## RegisterFormFromStr

Регистрирует XML-форму, заданную в аргументах. Используется для программной генерации форм "на лету".

_Синтаксис:_  
      **RegisterFormFromStr (<formUrl>, <formData>)**

_Аргументы:_  
      _<formUrl> (обязательный)_  
      Тип: **Строка**. Url, по которому будет зарегистрирована форма.  
      _<formData> (обязательный)_  
      Тип: **Строка**. Строка с описанием формы.

_Возвращаемое значение:_  
      Тип: **Форма (объект XmlForm)**. Ссылка на форму. Результат действия функции.

_Пример:_  
      _RegisterFormFromStr( strForm , tools.xml\_header() + '<SPXML-FORM><data><columns><column MULTIPLE="1" PRIMARY-KEY="column\_id"><column\_id TYPE="string"/><column\_formula TYPE="string" STORE-SECTION="cdata"/></column></columns></data></SPXML-FORM>' );_

---

