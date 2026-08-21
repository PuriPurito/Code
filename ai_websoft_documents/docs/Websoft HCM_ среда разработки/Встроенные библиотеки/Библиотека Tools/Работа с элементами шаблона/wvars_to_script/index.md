## wvars_to_script

Функция, которая формирует строку на основе переменных элемента шаблона, шаблона документа, удаленного действия, выгрузки и т.д. Эту строку затем используют в выражении типа eval вместе с кодом элемента шаблона, шаблона документа, удаленного действия, выгрузки и т.д. Таким образом, инициализируются переменные нужного типа и им присваиваются значения, которые затем видны в коде элемента шаблона, шаблона документа, удаленного действия, выгрузки и т.д.

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

bWarily (bool) необязательный по умолчанию false. Если передается true, то при вычислении первоначального значение переменной, код будет помещен в try{}catch{}. То есть если произойдет ошибка вычисления, то код не прервет свое выполнение, а переменной  будет присвоено значение по умолчанию соответствующего типа.

Возвращаемый результат – строка (string), полученная на основе переменных элемента шаблона, шаблона документа, удаленного действия, выгрузки и т.д..

Пример вызова:

**var s\_anti\_str = tools.wvars\_to\_script(TopElem.wvars, false);**

---

