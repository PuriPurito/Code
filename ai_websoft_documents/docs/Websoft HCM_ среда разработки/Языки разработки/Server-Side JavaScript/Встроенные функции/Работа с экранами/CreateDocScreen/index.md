## CreateDocScreen

Создает экран для заданного документа.

_Синтаксис:_  
      **CreateDocScreen (<xmlDoc>\[, <xmsUrl>\])**

_Аргументы:_  
      _<xmlDoc> (обязательный)_  
      Тип: **Документ (объект xmlDoc)**. Документ, который будет отображен на экране.  
      _<xmsUrl> (необязательный)_  
      Тип: **Строка**. Url экранной формы, при помощи которой документ будет открыт. Если аргумент не указан, то используется экранная форма по умолчанию.

_Возвращаемое значение:_  
      Тип: **Объект Экран (Screen)**. Ссылка на экран для документа, указанного в аргументе <xmlDoc>. Результат действия функции.

_Пример:_  
      `_newDoc = OpenNewDoc ('x-local://wtv/wtv_resource.xmd'); // документ XML (объект XmlDoc)         newScreen = CreateDocScreen( newDoc , 'x-local://wtv/wtv_resource.xms' );         // создает экран newScreen (объект Screen) для документа newDoc и открывает его с помощью экранной формы wtv_resource.xms         // Примечание - Для корректного выполнения данного кода файлы WebTutorAdmin/wtv/wtv_resource.xmd и WebTutorAdmin/wtv/wtv_resource.xms должны существовать в системе.            screen = CreateDocScreen( doc );         // создает экран screen для документа doc и открывает его с помощью формы по умолчанию_`

---

