## MergeScreenForm

Объединяет две формы.  
Смотри также функцию AppendScreenForm.

_Синтаксис:_  
      **MergeScreenForm (<mainFormUrl>, <addFormUrl>, <elemName>)**

_Аргументы:_  
      _<mainFormUrl> (обязательный)_  
      Тип: **Строка**. Url основной формы.  
      _<addFormUrl> (обязательный)_  
      Тип: **Строка**. Url дополнительной формы.  
      _<elemName> (обязательный)_  
      Тип: **Строка**. Наименование элемента основной формы, после которого будет присоединена дополнительная форма.

_Возвращаемое значение:_  
      Тип: **Объект Экран (Screen)**. Ссылка на объединенный экран. Результат действия функции.

_Пример:_  
      `_MergeScreenForm( '//base2/base2_access_role.xms', 'rcr_fields_access_role.xms', 'AccessFieldsAnchor' );         // объединяет формы '//base2/base2_access_role.xms' и 'rcr_fields_access_role.xms' в дополнительную форму и помещает ее после формы 'AccessFieldsAnchor'_`

---

