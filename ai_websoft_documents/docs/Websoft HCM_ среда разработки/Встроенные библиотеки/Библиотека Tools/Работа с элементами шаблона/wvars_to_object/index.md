## wvars_to_object

Функция, которая формирует объект на основе переменных элемента шаблона, шаблона документа, удаленного действия, выгрузки и т.д. Объект будет иметь следующий вид. Свойство(property) это название переменной. Значение свойства это value переменной, как оно заполнено в структуре параметров (listWVarsPARAM).

Входные параметры:

listWVarsPARAM (XML element) – структура описывающая переменные вида:

            <wvars>

                        <wvar MULTIPLE="1" PRIMARY-KEY="name">

                                   <name TYPE="string"/>

                                   <parent\_wvar\_name TYPE="string" FOREIGN-ARRAY="BaseMultipleElem"/>

                                   <value TYPE="string"/>

                                   <type TYPE="string" NOT-NULL="1" DEFAULT="string" FOREIGN-ARRAY="common.template\_field\_types"/>

                                   <catalog TYPE="string" FOREIGN-ARRAY="common.exchange\_object\_types"/>

                                   <entries>

                                               <entry MULTIPLE="1" PRIMARY-KEY="id">

                                                           <id TYPE="string"/>

                                                           <name TYPE="string"/>

                                               </entry>

                                   </entries>

                                   <description TYPE="string" TITLE="1"/>

                                   <is\_modify TYPE="bool" NOT-NULL="1" DEFAULT="false" TEMP="1"/>

                                   <position TYPE="integer" NOT-NULL="1" DEFAULT="0"/>

                        </wvar>

            </wvars>

Возвращаемый результат – объект (object), полученный  на основе переменных элемента шаблона, шаблона документа, удаленного действия, выгрузки и т.д..

Пример вызова:

**oCollectionParam = tools.wvars\_to\_object( TopElem.wvars );**

---

