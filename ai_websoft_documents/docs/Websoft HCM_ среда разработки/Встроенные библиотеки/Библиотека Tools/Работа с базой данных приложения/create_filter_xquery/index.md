## create_filter_xquery

Создает строку условий для использования в выражении _where_  в запросе XQuery на основе структуры с описанием условий.

_Синтаксис:_  
      **tools.create\_filter\_xquery (<conditions>\[, <cond>\]\[, <elem\_name>\])**

_Аргументы:_

     <conditions> (обязательный)  
     Тип: **Объект XmlElem**. Условия выборки.   
     Структура условий выборки имеет следующий вид:

<condition MULTIPLE="1">  
     <field TYPE="string"/>  
     <title TYPE="string"/>  
     <value TYPE="string "/>  
     <type TYPE="string" NOT-NULL="1" DEFAULT="string"/>  
     <option\_type TYPE="string" NOT-NULL="1" DEFAULT="eq" FOREIGN-ARRAY="common.all\_option\_types"/>  
     <is\_custom\_field TYPE="bool" NULL-FALSE="1" DEFAULT="false"/>  
     <and\_or TYPE="string" NOT-NULL="1" DEFAULT="and"/>  
     <is\_multiple TYPE="bool" NULL-FALSE="1" DEFAULT="false"/>  
     <value\_multiple TYPE="string" MULTIPLE="1"/>  
     <bracket TYPE="string"/>  
</condition>

     <cond> (необязательный)  
     Тип: **Строка**. Строковое выражение, которое может быть использовано как префикс к формируемой функцией строке.  
     <elem\_name> (необязательный)  
     Тип: **Строка**. Название переменной в формируемой строке. По умолчанию elem. ($elem).

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение условий для использования в выражении _where_  в запросе XQuery.

_Пример:_  
      `_tools.create_filter_xquery( Ps.conditions );_`

---

