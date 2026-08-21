## 2.2.5.3 Настройка «мастеров» - ввод данных в несколько шагов

Иногда требуется изменять набор полей в зависимости от данных, введенных в другие поля, причем логика такого процесса может быть достаточно сложной. Такие задачи можно решать созданием визардов – методов, когда часть полей заполняется на одном шаге, затем следует переход на другой шаг, где видны другие поля и т.д.

В целом метод создания визарда следующий:

\- в объекте wfparameters.objective описывается набор полей первого шага;

\- в коде шаблона подготовки данных набор полей строится в зависимости от значения ключевых полей (присутствующих на первом шаге);

\- для вновь созданной цели (на первом шаге) организуется автооткрытие окна цели на заполнение полного набора данных;

Пример кода шаблона подготовки данных:

// Создаем объект параметров описания полей новой задачи

oData.data.wfparameters = { "objective": {

                                "window\_title": "Выберите тип", // заголовок окна новой цели

                                "kpi\_type": { // поле выбора типа цели

                                                "label": "",

                                                "visible": "true",

                                                "visible\_in": "form",

                                                "editable": true,

                                                "required": false,

                                                "control\_type": "radio",

                                                "data\_src": null,

                                                "layout": "row",

                                                "default": "task",

                                                "scale": {

                                                                "value": \[

                                                                                {

                                                                                                "id": "task",

                                                                                                "name": "<b>Цель</b> (в рамках основной деятельности)",

                                                                                                "desc": ""

                                                                                },

                                                                                {

                                                                                                "id": "project",

                                                                                                "name": "<b>Проект</b> (Для проектного менеджмента.<br/> Задачи распространяются только на членов команды проекта",

                                                                                                "desc": ""

                                                                                }

                                                                \]

                                                }

                                },

                "dialog\_buttons": \[ // кнопки окна диалога выбора типа цели (окно цели 1 шага)

                                {

                                                "action": "save",

                                                "title": "Далее"

                                },

                                {

                                                "action": "cancel",

                                                "title": "Отмена"

                                }

                \],

                                "buttons": \[ // кнопка добавления новой цели

                                                {

                                                                "action": "add",

                                                                "visible": true,

                                                                "position": "bottom",

                                                                "title": "Добавить цель/проект"

                                                }

                                \]

                }

};

for (\_o in oData.data.objectives) // после сохранения цели она входит в возвращаемый набор

{

// Копирование блока параметров из формы персонально в цель

                \_o.wfparameters = {"objective": ParseJson(EncodeJson(oData.data.wfparameters.objective))};

// закрываем на редактирование поле выбора типа цели

                \_o.wfparameters.objective.kpi\_type.editable = false;

// меняем тип расположения радиокнопок (для экономии места)

                \_o.wfparameters.objective.kpi\_type.layout = "col";

// меняем описание названий для типа задачи (экономия места)

                \_o.wfparameters.objective.kpi\_type.scale = {value:\[{id:"task",name:"Цель"},{id:"project",name:"Проект"}\]};

// убираем специфическую кнопку добавления цели/проекта (не нужна на втором уровне)

                \_o.wfparameters.objective.buttons = null;

// убираем кастомные кнопки диалога (далее-отмена), используем стандартные (сохранить)

                \_o.wfparameters.objective.dialog\_buttons = null;

                if (\_o.kpi\_type.value=="task") // для типа «цель» - _свои поля_

                {

                                \_o.wfparameters.objective.name = {label:"_Название задачи_", control\_type:"text", editable: true, visible: true, visible\_in: "title;form"};

                                \_o.wfparameters.objective.plan = {label:"_Плановый показатель_", control\_type:"textarea", editable: true, visible: true, visible\_in: "view;form"};

                                \_o.wfparameters.objective.date\_plan = {label:"_Плановая дата_", control\_type:"date", editable: true, visible: true, visible\_in: "view;form"};

                }

                else if (\_o.kpi\_type.value=="project") // _для типа_ «проект» - _другие поля_

                {

                                \_o.wfparameters.objective.name = {label:"_Название проекта_", control\_type:"text", editable: true, visible: true, visible\_in: "title;form"};

                                \_o.wfparameters.objective.plan = {label:"_Цель проекта_", control\_type:"textarea", editable: true, visible: true, visible\_in: "view;form"};

                                \_o.wfparameters.objective.period\_plan = {label:"_Период реализации_", control\_type:"select", data\_src:"periods", editable: true, visible: true, visible\_in: "view;form"};

                                \_o.wfparameters.objective.project\_peoples = {label:"_Команда проекта_", control\_type:"list", data\_src:"subordinates", editable: true, visible: true, visible\_in: "view;form"};

                }

}

iObjID = ""; // находим идентификатор последней добавленой цели

if (oSave!=null) // форма перерисовывается после сохранения

{

                if (xmlPartData.HasProperty("save\_obj\_id") && String(xmlPartData.save\_obj\_id)!="")

                {

                                iObjID = xmlPartData.save\_obj\_id; // _идентификатор сохраняемой цели_

                }

                if (iObjID=="\_newobj") // добавлена новая цель

                {

                                iObjID = curPA.tasks\[ArrayCount(curPA.tasks)-1\].task\_id; // _нашли_ id

                // _Устанавливаем параметр автооткрытия диалога редактирования_

                                oData.data.autoopen = {"action":"dialog", "type":"objective", "id": String(iObjID)};

                }

}

Итог, окно диалога после нажатия кнопки «Добавить цель/проект»:

Окно после выбора «Цель» и нажатия кнопки «Далее»:

При выборе значения «Проект» и нажатия кнопки «Далее»:

---

