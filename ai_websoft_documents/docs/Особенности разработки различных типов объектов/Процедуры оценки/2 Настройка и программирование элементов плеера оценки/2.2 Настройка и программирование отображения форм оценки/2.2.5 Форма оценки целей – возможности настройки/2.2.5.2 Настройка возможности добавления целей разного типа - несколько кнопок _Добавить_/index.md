## 2.2.5.2 Настройка возможности добавления целей разного типа - несколько кнопок "Добавить"

Плеер оценки предусматривает возможность добавления на одном уровне задач разного типа, отличающихся, например, набором полей или другими параметрами.

Алгоритм реализации данного процесса (на примере целей верхнего уровня) следующий:

\- в объекте wfparameters настраиваeтся массив objective, содержащий два элемента на одном уровне, содержащие разный набор полей;

\- в массиве кнопок каждого элемента wfparameters.objective.buttons настраивается элемент (кнопка) с типом «добавить цель» (action: “add”), но с разными названиями;

В итоге, плеер покажет две кнопки добавления цели, при нажатии на кнопку, идущую первой в списке кнопок, плеер сформирует параметры на основе первого объекта objective, а при нажатии на вторую кнопку – из второго объекта.

Пример объекта wfparameters:

{

   "objective": \[

      {"instruction": {"label": "<center><b>Выберите компетенцию<\\/b><\\/center>",

                               "visible": "true", "visible\_in": "form"},

         "name": {"label": "Компетенция", "visible": "true", "visible\_in": "title",

                               "editable": "false",  "required": "false", "control\_type": "text"},

         "richtext": {"label": "<span style='font-size: 12px;'><b>Важно!<\\/b> Разница между «текущим уровнем» и «целевым уровнем» развития компетенций не может составлять больше одного уровня. Например, если текущий уровень «базовый», то целевой уровень можно выставить только «устойчиво демонстрирует».Описание компетенций и уровней приведено в разделе «Описание компетенций».<\\/span>",

                               "visible": "true", "visible\_in": "form"},

         "competence\_id": {"label": "Компетенция",  "visible": "true", "visible\_in": "form",

                               "editable": "true",  "required": "true", "control\_type": "select",

"data\_src": "competences", "placeholder": "--Выберите компетенцию--"},

         "competence\_cur\_level": {"label": "Текущий уровень", "visible": "true", "visible\_in": "form",

                               "editable": "true", "required": "true", "control\_type": "select",

                               "scale": \[ {"id": "1", "name": "Не демонстрирует",  "desc": ""},

{"id": "2", "name": "Базовый уровень", "desc": ""},

               {"id": "3",  "name": "Устойчиво демонстрирует", "desc": ""},

               {"id": "4", "name": "Ролевая модель", "desc": "" } \],

               "placeholder": "--_Выберите текущий уровень_\--" },

         "competence\_target\_level": {"label": "_Целевой уровень_", "visible": "true", "visible\_in": "form",

                              "editable": "true",  "required": "true", "control\_type": "select",

 "scale": \[ {"id": "1", "name": "Не демонстрирует",  "desc": ""},

{"id": "2", "name": "Базовый уровень", "desc": ""},

               {"id": "3",  "name": "Устойчиво демонстрирует", "desc": ""},

               {"id": "4", "name": "Ролевая модель", "desc": "" } \],

                               "placeholder": "--_Выберите целевой уровень_\--"},

"can\_add\_child": "true",

"can\_delete": "true",

"can\_translate": "false",

"buttons": \[{"action":"add","title":"Добавить компетенцию","position":"bottom","visible":"true"},

               {"action": "weight", "title": "",  "position": "bottom", "visible": "false"},

               {"action":"comment","title":"Добавить комментарий","position":"bottom","visible":"false"}\],

"dialog\_buttons": \[{"action":"save","title": "Сохранить"},

                               { "action": "cancel","title": "Закрыть" }\]

 },

  {"instruction": {"label": "<center><b>Заполните данные по области развития<\\/b><\\/center>",

                               "visible": "true", "visible\_in": "form"},

     "richtext": {"label": "Область развития: Предметная профессиональная область, которая подлежит развитию у оцениваемого.",

                               "visible": "true", "visible\_in": "form"},

       "name": {"label":"Название","visible":"true","visible\_in":"title","editable":"false",

                               "required": "false", "control\_type": "text" },

       "short\_name": { "label": "_Краткое название_", "visible": "true","visible\_in": "form",

                               "editable": "true","required": "true", "control\_type": "text"},

        "buttons": \[{"action": "add","title":"_Добавить область развития_","position": "bottom",

                                              "visible": "true"},

                               {"action": "weight","title": "", "position": "bottom", "visible": "false"},

                               {"action": "comment","title": "Добавить комментарий","position": "bottom",

                                              "visible": "false"}\],

         "dialog\_buttons": \[{"action": "save","title": "Сохранить"},

                                               {"action": "cancel","title": "Закрыть"}\]

      }\]

}

Пример полученного интерфейса:

При нажатии на кнопку «Добавить компетенцию»:

При нажатии на кнопку «Добавить область развития»:

---

