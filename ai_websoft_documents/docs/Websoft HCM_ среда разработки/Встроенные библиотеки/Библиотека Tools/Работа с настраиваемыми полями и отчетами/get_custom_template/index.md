## get_custom_template

Функция возвращает набор заполненных настраиваемых полей для данного каталога и данного документа. Если указан только первый параметр, функция вернет список полей без значений.

_Синтаксис:_  
      **tools.get\_custom\_template (<catalog>, \[<top\_id>\], \[<source>\])**

_Аргументы:_  
     <catalog> (обязательный)  
     Тип: **Строка**. Строка с названием каталога без ‘s’ на конце.  
     <top\_id> (необязательный)  
     Тип: **Целое число**. ID документа, для которого нужно вернуть набор полей.  
     <source> (необязательный)  
     Тип: **TopElem**. TopElem документа, для которого нужно вернуть набор полей.  
 

_Возвращаемое значение:_  
      Тип: **Объект XmlElem**. Объект с набором заполненных настраиваемых полей для данного каталога и данного документа.

_Пример 1:_  
      `_fldCustomTemplate = tools.get_custom_template ( 'collaborator', null, null );          str = ExportElemsToStr (fldCustomTemplate); // возвращает строку, содержащую отформатированные данные массива XML-элементов         alert (str);_`

_Пример 2:_  
      `_fldCustomElems = tools.get_custom_template ('request_type', filRequestType.id);         custom_fields = tools.get_custom_template ( "development_plan", Int(curObjectID), curPA ).fields;         arrSheets = tools.get_custom_template ( TopElem.Name, TopElem.Doc.DocID, TopElem ).sheets;_`

---

