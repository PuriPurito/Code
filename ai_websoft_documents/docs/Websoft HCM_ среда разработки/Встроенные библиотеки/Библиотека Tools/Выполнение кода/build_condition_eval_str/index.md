## build_condition_eval_str

Используется в Webtutor Administrator в форме редактирования условий документооборота. Формирует строку на основе стандартных значений, доступных в выпадающем списке условий документооборота. Эта строка в дальнейшем выполняется в функции **eval** для определения видимости/редактирования объектов документооборота.

_Синтаксис:_  
      **tools.build\_condition\_eval\_str (<\_conditions>\[, <iWorkflowIDParam>\]\[, <teWorkflowParam>\])**

_Аргументы:_

     <\_conditions> (обязательный)  
     Тип: **Объект XmlElem**. Структура, содержащая условия документооборота.  
     Пример структуры <\_conditions>:

     <conditions>  
          <condition MULTIPLE="1">  
                 <type TYPE="string"/>  
                 <workflow\_field\_id TYPE="string"/>  
                 <workflow\_field\_value TYPE="string"/>  
                 <workflow\_state\_id TYPE="string"/>  
                 <cur\_user\_type TYPE="string"/>  
                 <and\_or TYPE="string" NOT-NULL="1" DEFAULT="&amp;&amp;"/>  
                 <begin\_bracket TYPE="string"/>  
                 <finish\_bracket TYPE="string"/>  
                 <usl TYPE="string"/>  
                 <person\_id TYPE="integer" FOREIGN-ARRAY="collaborators"/>  
                 <eval\_str TYPE="string"/>  
                 <cur\_access\_role TYPE="string" FOREIGN-ARRAY="access\_roles"/>  
                 <cur\_parent\_object\_id TYPE="integer" FOREIGN-ARRAY="subdivisions"/>  
                 <org\_id TYPE="integer" FOREIGN-ARRAY="orgs"/>  
                 <cur\_position\_id TYPE="integer" FOREIGN-ARRAY="positions"/>  
                 <cur\_group\_id TYPE="integer" FOREIGN-ARRAY="groups"/>  
          </condition>  
     </conditions>

     <iWorkflowIDParam> (необязательный)  
     Тип: **Целое число**. ID документооборота. Применяется, если используется условие с типом проверки определенного поля в документообороте (_type ='if\_workflow\_field\_value'_) или если не передан параметр _<teWorkflowParam>_.  
     <teWorkflowParam> (необязательный)  
     Тип: **TopElem**. TopElem документооборота. Применяется, если используется условие с типом проверки определенного поля в документообороте (_type='if\_workflow\_field\_value'_).

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение, которое может быть использовано в функции **eval** для определения видимости/редактирования объектов документооборота.

_Пример:_  
      `__action.condition_eval_str = tools.build_condition_eval_str ( _action.conditions, TopElem.Doc.DocID, TopElem );_`

---

