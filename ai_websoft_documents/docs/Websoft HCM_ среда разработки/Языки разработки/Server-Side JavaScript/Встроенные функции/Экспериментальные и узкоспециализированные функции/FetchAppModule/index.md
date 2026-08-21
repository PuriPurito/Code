## FetchAppModule

Динамически подключает к программе дополнительный модуль. Если модуль уже подключен, функция не производит никаких действий.  
Редко используемая функция.

_Синтаксис:_  
      **FetchAppModule (<moduleName>)**

_Аргументы:_  
      _<moduleName> (обязательный)_  
      Тип: **Строка**. Наименование подключаемого модуля.

_Возвращаемое значение:_  
      Производится подключение дополнительного модуля. Возвращаемое значение отсутствует.

_Пример:_  
      `_FetchAppModule( 'app2' );                 function set_init()         {               FetchAppModule ( 'base1' );               FetchAppModule ( 'chrome' );               FetchAppModule ( 'firefox' );               FetchAppModule ( 'gate' );               FetchAppModule ( 'lotus' );               FetchAppModule ( 'outlook' );               FetchAppModule ( 'thunderbird' );         }_`

---

