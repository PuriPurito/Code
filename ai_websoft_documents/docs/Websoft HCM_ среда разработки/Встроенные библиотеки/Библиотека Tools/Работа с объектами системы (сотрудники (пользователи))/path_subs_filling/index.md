## path_subs_filling

Функция, которая заполняет структуру path\_subs в карточке преподавателя, для отображения пути штатного расписания на основе карточки сотрудника для внутренних преподавателей

Входные параметры:

\_path\_subs (XML element) – структура для заполнения вида:

           <path\_subs>

                        <path\_sub MULTIPLE="1" PRIMARY-KEY="id">

                                   <id TYPE="integer" FOREIGN-ARRAY="subs"/>

                                   <type TYPE="string"/>

                                   <name TYPE="string"/>

                                   <parent\_id TYPE="integer" FOREIGN-ARRAY="subs"/>

                        </path\_sub>

            </path\_subs>

\_person\_id (int) необязательный, если передан \_person\_doc. ID сотрудника. 

\_person\_doc (TopElem) необязательный. TopElem сотрудника. 

Возвращаемый результат – заполненная структура path\_subs.

Пример вызова:

**tools.path\_subs\_filling( TopElem.path\_subs, TopElem.person\_id, null );**

---

