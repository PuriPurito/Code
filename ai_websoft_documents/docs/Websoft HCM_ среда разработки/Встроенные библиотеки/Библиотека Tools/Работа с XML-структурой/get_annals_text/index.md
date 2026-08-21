## get_annals_text

Заполняет структуру _annals_ результатами теста в XML-формате.

_Синтаксис:_  
      **tools.get\_annals\_text (<annals>\[, <qti\_path>\]\[, <qti\_text>\]\[, <learning\_doc>\]\[, <oAnnalsTarget>\])**      или  
      **tools.get\_annals\_text (\[<annals>\]\[, <qti\_path>\]\[, <qti\_text>\]\[, <learning\_doc>\], <oAnnalsTarget>)**

_Аргументы:_  
     <annals> (обязательный; необязательный, если передан аргумент oAnnalsTarget)  
     Тип: **Объект XmlElem**. Структура для заполнения.  
     <qti\_path> (необязательный)  
     Тип: **Строка**. Путь до файла со структурой теста в формате qti.  
     <qti\_text> (необязательный)  
     Тип: **Строка**. Структура теста в формате qti.  
     <learning\_doc> (необязательный)  
     Тип: **TopElem**. TopElem карточки теста.  
     <oAnnalsTarget> (необязательный, если передан аргумент _annals_)  
     Тип: **TopElem**. TopElem открытого документа структуры для заполнения. 

     Примечание: Аргумент _oAnnalsTarget_ связан с _annals_ следующим соотношением:   
     _oAnnalsTarget = OpenDocFromStr ( annals, 'form=x-local://wtv/wtv\_form\_annals\_text.xmd' ).TopElem;_ 

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение заполненной XML-структуры с результатами тестирования, без отступов.

_Пример:_  
      `_TopElem.lesson_report = tools.get_annals_text_from_annals ( TopElem.annals_variant.Object );         annals = tools.get_annals_text ( annals, _qti_path, _qti_text, _learning_doc );_`

---

