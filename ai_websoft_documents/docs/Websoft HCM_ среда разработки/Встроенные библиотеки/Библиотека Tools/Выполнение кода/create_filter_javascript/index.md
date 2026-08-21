## create_filter_javascript

Создает строку условий для использования в выражении типа eval в коде администратора WebTutor или в серверном коде на основе структуры с описанием условий.

_Синтаксис:_  
      **tools.create\_filter\_javascript (<conditions>\[, <first\_cond>\]\[, <elem\_name>\])**

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

     <first\_cond> (необязательный)  
     Тип: **Строка**. Строковое выражение, которое может быть использовано как префикс к формируемой функцией строке.  
     <elem\_name> (необязательный)  
     Тип: **Строка**. Название переменной в формируемой строке. По умолчанию – текущий объект 'curObject.'  
 

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение условий для использования в выражении eval.

_Пример:_  
     _str = 'JavaScript: ' + tools.create\_filter\_javascript( Ps.conditions, null, '' );_

     `_try        {             if ( SafeEval( tools.create_filter_javascript( _part_course.view.conditions, null, 'curObject.' ), [ { 'curObject': curObject } ] ) == false )                  throw 'cont';        }        catch ( e )        {             continue;        }_`

---

