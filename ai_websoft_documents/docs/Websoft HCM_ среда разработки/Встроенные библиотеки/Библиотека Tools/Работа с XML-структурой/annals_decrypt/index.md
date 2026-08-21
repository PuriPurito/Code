## annals_decrypt

Представляет результаты теста в формате XML-структуры.

_Синтаксис:_  
      **tools.annals\_decrypt (<oSourceParam>\[, <sQtiPathParam>\]\[, <sQtiTextParam>\])**

_Аргументы:_  
      <oSourceParam> (обязательный)      Тип: **Объект XmlElem**. Элемент для разбора теста, в котором содержится либо непустое поле lesson\_report, objects (массив с элементами) или core\_lesson.  
      <sQtiPathParam> (необязательный)      Тип: **Строка**. Путь до файла со структурой теста в формате qti.  
      <sQtiTextParam> (необязательный)  
      Тип: **Строка**. Структура теста в формате qti.

_Возвращаемое значение:_  
      Тип: **Объект XmlDoc**. XML-структура, содержащая результаты тестирования.

_Пример:_

    `_tools.annals_decrypt( Ps );       TopElem.annals_variant = tools.annals_decrypt( oSource, sQtiPath );_`

    `_for ( _learning in _learning_array ) {           learningDoc = OpenDoc( UrlFromDocID( _learning.id ) ).TopElem;           assessmentDoc = OpenDoc( UrlFromDocID( _learning.assessment_id ) ).TopElem;           fldAnnals = tools.annals_decrypt( learningDoc, tools.get_qti_path( assessmentDoc ) );       }_`

---

