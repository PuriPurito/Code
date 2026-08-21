## ObtainObjectDocScreen

Вызывает открытие экрана для объектного документа.  
Редко используемая функция.

_Синтаксис:_  
      **ObtainObjectDocScreen (<base>, <catalog>, <docID>\[, <xmsUrl>\])**

_Аргументы:_  
      _<base> (обязательный)_  
      Тип: **База данных**. Исходная база данных.  
      _<catalog> (обязательный)_  
      Тип: **Строка**. Исходная база данных.  
      _<docID> (обязательный)_  
      Тип: **Целое число**. id документа.  
      _<xmsUrl> (необязательный)_  
      Тип: **Строка**. url экранной формы, при помощи которой документ будет открыт. Если аргумент не указан, то используется экранная форма по умолчанию.

_Возвращаемое значение:_  
      Тип: **Объект Экран (Screen)**. Ссылка на экран. Результат действия функции.

_Пример:_  
      `_screen = ObtainObjectDocScreen( DefaultDb, 'vacancy', ListElem.vacancy_id )         // открывает экран screen для документа из базы данных DefaultDb, из каталога 'vacancy', с идентификационным номером ListElem.vacancy_id при помощи экранной формы по умолчанию         screen1 = ObtainObjectDocScreen( lib_voc.get_voc_db( Ps.voc_info ), vocInfo.object_name, elemID, vocInfo.object_screen_form_url );         // открывает экран screen1 для документа из базы данных lib_voc.get_voc_db( Ps.voc_info ), из каталога vocInfo.object_name, с идентификационным номером elemID при помощи экранной формы vocInfo.object_screen_form_url_`

---

