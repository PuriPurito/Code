## get_annals_from_core

Представляет результаты завершенного теста в XML-формате.

_Синтаксис:_  
      **tools.get\_annals\_from\_core (<sSourceParam>)**

_Аргументы:_  
     <sSourceParam> (обязательный)  
     Тип: **Строка**. Результаты завершенного теста для дешифровки.

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение XML-структуры, содержащей результаты тестирования в теге _annals_.

_Пример:_      

      `_tod = StrSimpleDecrypt ( _core );         tod = Trim ( tod );         annals = tools.get_annals_from_core ( tod );_`

      `_sReport = tools.get_annals_from_core ( Trim ( StrSimpleDecrypt ( oSourceParam.core_lesson ) ));_`

---

