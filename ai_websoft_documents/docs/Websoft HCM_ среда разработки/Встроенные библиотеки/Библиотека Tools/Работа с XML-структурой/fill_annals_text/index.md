## fill_annals_text

Заполняет структуру annals результатами теста в XML-формате.

_Синтаксис:_  
      **tools.fill\_annals\_text (<fldAnnalsObjectsTarge>\[, <sQtiPathParam>\]\[, <sQtiTextParam>\]\[, <fldAnnalsObjectsTarget>\]\[, <bNoSendCorrectAnswerParam>\])**

_Аргументы:_  
     <fldAnnalsObjectsTarge> (обязательный)  
     Тип: **Объект XmlElem**. Структура для заполнения.  
     <sQtiPathParam> (необязательный)  
     Тип: **Строка**. Путь до файла со структурой теста в формате qti.  
     <sQtiTextParam> (необязательный)  
     Тип: **Строка**. Структура теста в формате qti.  
     <fldAnnalsObjectsTarget> (необязательный)  
     Тип: **Объект XmlElem**. Тест-источник.  
     <bNoSendCorrectAnswerParam> (необязательный)  
     Тип: **Булево**. Аргумент, указывающий, что не нужно записывать правильный ответ в результирующую структуру (_true_ – не нужно записывать правильный ответ, _false_ – нужно записывать правильный ответ). По умолчанию _true_.

_Возвращаемое значение:_  
      Производит заполнение структуры annals результатами теста. Возвращаемое значение отсутствует.

_Пример:_  
      `_tools.fill_annals_text( fldAnnals.au.history.objects, sQtiPathParam, sQtiTextParam );         tools.fill_annals_text( fldAnnals.au.history.objects, sQtiPathParam, sQtiTextParam, fldObjectsSource, bNoSendCorrectAnswerParam );_`

---

