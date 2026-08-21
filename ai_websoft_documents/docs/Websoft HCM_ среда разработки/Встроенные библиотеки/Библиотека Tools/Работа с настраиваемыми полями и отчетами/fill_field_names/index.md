## fill_field_names

Заполняет структуру полей (из объекта или из каталога) для использования в формах выбора условий. Применяется в диалогах построения фильтров, настраиваемых отчетах и т.д.

_Синтаксис:_  
      **tools.fill\_field\_names (<field\_names>, <form>\[, <iscatalog>\]\[, <evalpath>\]\[, <pretitle>\])**

_Аргументы:_

     <field\_names> (обязательный)  
     Тип: **Объект XmlElem**. Структура полей вида: 

      _<field\_names TEMP="1">  
                  <field\_name MULTIPLE="1" PRIMARY-KEY="name" TEMP="1">  
                        <INHERIT TYPE="field\_name\_base" TEMP="1"/>  
                        <level TYPE="integer" DEFAULT="0" TEMP="1"/>  
                        <field\_names TEMP="1">  
                              <field\_name MULTIPLE="1" PRIMARY-KEY="name" TEMP="1">  
                                    <INHERIT TYPE="field\_name\_base" TEMP="1"/>  
                                    <level TYPE="integer" DEFAULT="1" TEMP="1"/>  
                                    <field\_names TEMP="1">  
                                         <field\_name MULTIPLE="1" PRIMARY-KEY="name" TEMP="1">  
                                               <INHERIT TYPE="field\_name\_base" TEMP="1"/>  
                                               <level TYPE="integer" DEFAULT="2" TEMP="1"/>  
                                         </field\_name>  
                                    </field\_names>  
                              </field\_name>  
                        </field\_names>  
                  </field\_name>  
      </field\_names>_

      где _field\_name\_base_  - это структура вида:

      _<field\_name\_base SAMPLE="1" TEMP="1">  
            <name TYPE="string" TEMP="1"/>  
            <title TYPE="string" TEMP="1"/>  
            <type TYPE="string" TEMP="1"/>  
            <foreign\_array TYPE="variant" TEMP="1"/>  
            <foreign\_catalog TYPE="string" TEMP="1"/>  
            <value\_int TYPE="integer" FOREIGN-ARRAY="foreign\_array.Object" TEMP="1"/>  
            <is\_custom\_field TYPE="bool" NOT-NULL="1" DEFAULT="false" TEMP="1"/>  
            <is\_multiple TYPE="bool" NOT-NULL="1" DEFAULT="false" TEMP="1"/>  
            <is\_array TYPE="bool" NOT-NULL="1" DEFAULT="false" TEMP="1"/>  
            <value\_multiple TYPE="string" MULTIPLE="1" FOREIGN-ARRAY="foreign\_array.Object" TEMP="1"/>  
      </field\_name\_base>_

     <form> (обязательный)  
     Тип: **Объект XmlElem**. Форма источника (объект или каталог), из которой нужно заполнить данные.  
     <iscatalog> (необязательный)  
     Тип: **Булево**. Аргумент, определяющий тип источника (объект или каталог) (_true_ – в качестве источника используется каталог, _false_ – в качестве источника используется объект). По умолчанию _true_ (в качестве источника используется каталог).  
     <evalpath> (необязательный)  
     Тип: **Объект XmlElem**. XML-элемент в структуре _field\_names_ внутри элемента, который нужно заполнять. Задается в случае, если нужно заполнить один из дочерних элементов _field\_names_, вложенных в элемент первого уровня _field\_names_.  
     <pretitle> (необязательный)  
     Тип: **Строка**. Префикс, который добавляется к названию полей в источнике _form_ при заполнении структуры _field\_names_. Атрибут передается, если нужно, например, заполнить значения по ключу данными типа multiple из дочернего элемента источника _form_.

_Возвращаемое значение:_  
      Производит заполнение структуры полей из объекта или из каталога. Возвращаемое значение отсутствует.

_Пример:_  
      `_tools.fill_field_names ( _criterion.field_names, _chain.catalog_name );         tools.fill_field_names ( TopElem.field_names, TopElem.object_name );         tools.fill_field_names ( _child.field_names, TopElem.catalog_name, false, _field_part.field, _field_part.title + '[' + _field_part.array_key + ']' );_`

---

