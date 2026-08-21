## add_person_to_assessment_appraise

Функция добавляет сотрудника в список оцениваемых в процедуре оценки. Планы и анкеты при этом не создаются.

_Синтаксис:_  
      **tools.add\_person\_to\_assessment\_appraise(<person\_id>, <assessment\_appraise\_id>\[, <person\_doc>\],\[ <doc\_assessment\_appraise>\])**  
      или  
      **tools.add\_person\_to\_assessment\_appraise(\[<person\_id>\],\[ <assessment\_appraise\_id>,\] <person\_doc>, <doc\_assessment\_appraise>)**

_Аргументы:_  
      _<person\_id> (обязательный (необязательный, если передан аргумент person\_doc))_  
      Тип: **Целое число**. ID сотрудника.   
      _<arg> (обязательный (необязательный, если передан аргумент doc\_assessment\_appraise))_  
      Тип: **Целое число**. ID процедуры оценки, в которую нужно добавить сотрудника.   
      _<arg> (необязательный)_  
      Тип: **TopElem**. TopElem карточки сотрудника.   
      _<arg> (необязательный)_  
      Тип: **Объект XmlDoc**. Документ процедуры оценки, в которую нужно добавить сотрудника. 

_Возвращаемое значение:_  
      Тип: **Объект XmlDoc**. Изменённый и сохраненный документ процедуры оценки.

_Пример:_  
      `_tools.add_person_to_assessment_appraise ( iPersonID, iObjectID, null, docObject );_`

---

