## Структура описания профилей и принципы программирования

<?xml version="1.0" encoding="utf-8"?>

<profile>

    <objects>

        <object\_1>

            <access check="\[CRUD flags for ones to check access\]">\[CRUD flags: c,r,u,d\]</access>

            <lib>\[js lib url - optional, functon name will be object\_1\_create/delete/update/read\]</lib>

            <tag name="\[tag\_1 code\]"/>

            ........

            <tag name="\[tag\_N code\]"/>

            <include>\[fieldslist ;\]</include>

            <exclude>\[fieldslist ;\]</exclude>

        </object\_1>

        ......

        <object\_N>

            ............

        </object\_N>

    </objects>

    <functions>

        <function\_name\_1 desc="\[fn description\]" method="\[http method\]" path="\[url path to fn\]" flags="optional, semicolon separated: SolidBody - pass body params as whole object (do not split)">

            <param name="\[param\_1 name - mandatory\]" type="\[param type - integer,real,bool,string\]" required="\[bool\]" default="\[corresponding to type\]" source="\[input source - path,query,body(default)\]" desc="\[param description\]"/>

            ........

            <param name="\[param\_N name\]" ......

            <result type="\[result type - json/text/void\]" array="\[bool - return array or single object (applicable for type 'json')\]">

                <property name="\[return property name 1 (applicable result type 'json')\]" type="\[property type - integer,real,bool,string\]" desc="\[Property description\]"/>

                ......

                <property name="\[return property name N\]" ........

            </result>

            <lib function="\[function name inside lib if not equals function node name\]">\[url to js lib - mandatory\]</lib>

            <tag name="\[tag\_1 code (tag is optional)\]"/>

            ........

            <tag name="\[tag\_N code (tag is optional)\]"/>

        </function\_name\_1>

        ....

        <function\_name\_N........>

            .......

        </function\_name\_N>

    </functions>

</profile>

Верхний узел всегда profile.

Узел содержит два элемента:

               objects – описание стандартных (CRUD) действий над стандартными каталогами

               functions – описание функций и их источников.

## Стандартные операции CRUD

Внутри узла objects перечисляются объекты Webtutor. Название каждого узла соответствует каталогу Webtutor.

<some\_catalog>

            <access check="\[CRUD flags for ones to check access\]">\[CRUD flags: c,r,u,d\]</access>

            <lib>\[js lib url - optional, functon name will be object\_1\_create/delete/update/read\]</lib>

            <tag name="\[tag\_1 code (tag is optional)\]"/>

            ........

            <tag name="\[tag\_N code (tag is optional)\]"/>

            <include>\[fieldslist ;\]</include>

            <exclude>\[fieldslist ;\]</exclude>

        </some\_catalog>

Каждый узел содержит следующие узлы-свойства:

               access – перечисление стандартных (CRUD) действий, допустимых над этим объектом для данного профиля. Обязателен хотя бы один флаг, иначе узел не несет смысла. Допустимые значения: c (создание - create), r (чтение - read), u (изменение - update), d (удаление - delete), l (список объектов - list).

                              Атрибуты:

                                            check – перечисление CRUD действий, требующих проверки прав доступа на уровне Webtutor. Не обязателен.

               lib – ссылка на стороннюю библиотеку, перегружающую стандартный механизм действий. Не обязателен. В таком случае внутри этой библиотеки будет вызван метод <current\_catalog\_name>\_<action\_name>, где

                              current\_catalog\_name – название текущего узла

                              action\_name – действие (create, update, read, delete, list)

               tag – метка, соответствующая блоку Webtutor. Этих узлов может быть несколько. Для функционирования внутри Webtutor в логике профилей безопасности, нужен хотя бы один.

                              Атрибуты:

                                            name – код блока Webtutor

               include – список полей через “;”, доступных для ввода/вывода, «белый список». Не обязателен.

exclude – список полей через “;”, запрещенных для ввода/вывода, «черный список». Не обязателен.

               Для свойств include/exclude можно указывать пути, например если требуемый элемент находится не на первом уровне. Например «foo/bar/baz»

Особенности обращения к CRUD-операциям

create – метод POST. Свойства нового объекта передаются в теле запроса в JSON-формате. Путь – название каталога (например /oapi/group). Возвращается JSON-объект со свойством id, равным идентификатору созданного объекта.

read – метод GET. ID документа передается в пути после названия каталога (например /oapi/group/1234567890). Возвращает JSON-объект со свойствами, соответствующими всем полям этого документа (с учетом описания include/exclude)

update – метод PATCH. ID документа для изменения передается в пути после названия каталога (например /oapi/group/1234567890). Все свойства, которые нужно изменить, передаются в теле запроса в JSON-формате.

delete – метод DELETE. ID документа для удаления передается в пути после названия каталога (например /oapi/group/1234567890).

list – метод GET. Возвращает массив объектов в JSON-формате из каталога (не из документа!). Список полей может быть ограничен описанием include/exclude. Автоматически добавляются два необязательных целочисленных параметра в адресной строке: offset и limit. С помощью них можно организовать постраничный вывод данных.

Примеры описания CRUD

<group>  
                              <access check="">l</access>  
                              <tag name="pers"/>  
                              <include>id;code;name;role\_id;access\_roles</include>  
               </group>

                              Разрешить получать список групп. Отнести функцию к блоку «Персонал». Ограничить список выводимых полей ID, кодом, названием, кодом роли и ролями доступа.

<course>  
                              <access check="rud">crudl</access>  
                              <tag name="dist"/>  
               </course>

               Разрешить всё (создавать, читать, изменять, удалять и получать список) с курсами. Но для операций чтения, изменения и удаления проверять доступ средствами Webtutor. Отнести функцию к блоку «Дистанционное обучение»

                              <subdivision>  
                                            <access>ru</access>  
                                             <lib>x-local://wt/web/xxx.js</lib>  
                                            <tag name="pers"/>  
                              </ subdivision>

               Разрешить читать и изменять объекты подразделений. Выполнение операций будет производиться не стандартным механизмом, а функциями subdivision\_read и subdivision\_update, описанными в файле x-local://wt/web/xxx.js. Функции будет вызваны со следующими параметрами: subdivision\_read(subdivision\_id) и subdivision\_update(object\_id, oObjectWithNewProperties)

Функции

Внутри узла functions перечисляются дополнительные функции.

<function\_name desc="\[fn description\]" method="\[http method\]" path="\[url path to fn\]" flags="optional, semicolon separated: SolidBody - pass body params as whole object (do not split)">

            <param name="\[param\_1 name - mandatory\]" type="\[param type - integer,real,bool,string\]" required="\[bool\]" default="\[corresponding to type\]" source="\[input source - path,query,body(default)\]" desc="\[param description\]"/>

            ........

            <param name="\[param\_N name\]" ......

            <result type="\[result type - json/text/void\]" array="\[bool - return array or single object (applicable for type 'json')\]">

                <property name="\[return property name 1 (applicable result type 'json')\]" type="\[property type - integer,real,bool,string\]" desc="\[Property description\]"/>

                ......

                <property name="\[return property name N\]" ........

            </result>

            <lib function="\[function name inside lib if not equals function node name\]">\[url to js lib - mandatory\]</lib>

            <tag name="\[tag\_1 code (tag is optional)\]"/>

            ........

            <tag name="\[tag\_N code (tag is optional)\]"/>

     </function\_name>

Название узла равно названию функции. Обращение к ней имеет форму /oapi/function\_name

У функции есть следующие атрибуты:

               desc – описание. Не обязателен.

               method – Метод HTTP запроса (GET,POST, PATCH и т.д.). По умолчанию GET.

               path – Путь к функции. Не обязателен. Функцию можно вызвать не с корневого уровня, а по некоторому пути (см. пример)

               flags – Дополнительные опции поведения вызова функции через «;». Не обязателен. Поддерживаются следующие флаги:

                              SolidBody – все параметры со свойством “source” равным “body” будут упакованы в один объект, который будет передан в функцию. В противном случае каждый полученный параметр будет передан в функцию отдельно.

Каждый узел содержит следующие узлы-свойства:

               param – параметр, который будет передан в функцию. Этих узлов может быть несколько. Параметры будут переданы в функцию именно в таком порядке.

                              Атрибуты:

                                            name – название параметра. Обязательно.

                                                           NB: параметры могут быть системными. В таком случае они не будут вынесены в API, но их системные значения будут переданы в функцию автоматически. Системные параметры начинаются со знака “{“ и заканчиваются знаком “}”. Фигурные скобки помечают параметр как системный. См. системные значения.

                                            type – тип параметра. \[string, integer, real, bool\]. Обязателен.

                                            required – 1/0. Не обязательно. Объявляет параметр обязательным.

                                            default – значение по умолчанию. Должен соответствовать типу type. Не обязательный. Игнорируется при required = true.

                                            source – средство передачи параметра. Возможны значения path (в пути адресной строки), query (в параметрах адресной строки) и body (в теле запроса в JSON объекте). Не обязателен. По умолчанию равен body.

desc – описание. Не обязателен.

result – описание возвращаемого функцией значения.

Атрибуты:

                                            type – тип возвращаемого значения. Обязателен. Возможные значения: text (просто текст), json (объект с данными) и void (ничего не вернет, просто ответ будет без ошибки)

                                             array – 1/0. Не обязателен. Показывает что результат будет массивом, а не единственным значением. Только для type=json.

                              Если атрибут type=json, то должен содержать дочерние элементы:

                                            property – возвращаемое свойство. Может быть несколько. Только для type=json.

                              Атрибуты:

                                                                          name – название свойства. Обязателен.

                                                                          type – тип свойства. Обязателен.

                              desc – описание. Не обязателен.

               lib – ссылка на файл с функцией. Обязателен.

Атрибуты:

                                             function – если по какой-то причине название узла не соответствует названию функции внутри файла, в этом атрибуте можно указать название функции внутри файла. Не обязательно.

               tag – метка, соответствующая блоку Webtutor. Этих узлов может быть несколько. Для функционирования внутри Webtutor в логике профилей безопасности, нужен хотя бы один.

                              Атрибуты:

                                            name – код блока Webtutor

Системные значения

               GuestID – ID текущего клиента(приложения/пользователя)   

               Guest – Карточка текущего клиента (приложения/пользователя)

               Paging – добавляет два параметра, принимаемые из параметров адресной строки, offset и limit. Оба имеют тип целое число. Необязательны.

Примеры описания дополнительный функций

<info desc="Stupid info" method="get">

                              <param name="iFrom" type="integer" default="true" source="path" desc="From"/>  
                              <param name="iTo" type="integer" required="true" source="path" desc="To"/>  
                              <param name="{Guest}"/>  
                              <param name="{GuestID}"/>

                                            <result type="json" array="true">  
                                                           <property name="index" type="integer" desc="Index"/>  
                                                           <property name="date" type="string" desc="Date"/>  
                                            </result>

                                            <lib>x-local://wt/web/xxx.js</lib>

                                            <tag name="pwt"/>  
                              </info>

                              Функция по адресу /oapi/info по методу GET, принимающая в пути два числовых обязательных значения. Также в функцию будут переданы переменные Guest и GuestID третьим и четвертым параметром. Будет возвращен массив объектов со свойствами index(число) и date(строка). Функция отнесена к блоку «Персональный Вебтютор».  
Будет вызвана функция info внутри файла xxx.js.  
 Например, вызов /oapi/info/1/5   вызовет в xxx.js функцию info(1,5, Guest, GuestID)

<assignToPerson desc="Assign course to person" method="post" path="Course">                                             <param name="course\_id" type="integer" required="true" source="body" desc="course ID"/>  
                              <param name="person\_id" type="integer" required="true" source="body" desc="person ID"/>  
                              <param name="foo" type="integer" default="1" source="body" desc="Foo parameter"/>

                                            <result type="text"/>  
                                            <lib function="assign\_course\_to\_person">x-local://wt/web/xxx.js</lib>

                                            <tag name="dist"/>

                              </assignToPerson>

Функция по адресу /oapi/Course/assignToPerson по методу POST, принимающая в теле запроса объект с двумя обязательными числовыми свойствами и одним опциональным, но его значение по умолчанию равно 1. В результате будет возвращен некоторый текст.

               Будет вызвана функция assign\_course\_to\_person внутри файла xxx.js.

Например, вызов /oapi/Course/assignToPerson с телом {“course\_id”: 123456, “person\_id”: 789000} вызовет в xxx.js функцию assign\_course\_to\_person (123456, 789000, 1)

Но если в описании assignToPerson указать флаг SolidBody (<assignToPerson flags=”SolidBody”…), то в функцию будет вызвана следующим образом: assign\_course\_to\_person (objectWithParams)

где objectWithParams = {“course\_id”: 123456, “person\_id”: 789000, “foo”: 1}

<DoSomething method="patch">

               <param name="param1" type="string" required="true" source="query"/>  
                              <param name="param2" type="string" required="true" source="query"/>

                                            <result type="void"/>  
                                            <lib>x-local://wt/web/xxx.js</lib>

                                            <tag name="admin"/>

                              </ DoSomething >

Функция по адресу /oapi/DoSomething?param1=ABC&param2=CDE по методу “PATCH”. Не возвращает ничего. Относится к блоку «Администрирование»

---

