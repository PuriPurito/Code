# Правила: Печатные формы (Print Forms)

Дополнение к `core_rules.md` для написания кода печатных форм.
Читать вместе с `core_rules.md`.

---

## Формат файла

Печатная форма — файл `.mht` (MIME HTML). Код скрипта размещается в HTML-части,
между закрывающим `</head>` и открывающим `<body>`:

```html
</head>

<%
try {
    // логика получения данных
}
catch(e) {
    alert(e);
}
%>

<body ...>
```

Данные выводятся в HTML через шаблонные теги `<%= ... %>`:

```html
<o:p><%= oMainInfo.person_fullname %></o:p>
```

---

## Структура данных: объект oMainInfo

Рекомендуемый паттерн — собрать все данные в один объект, инициализировав поля пустыми строками.
Это гарантирует отсутствие ошибок при рендере, даже если данные не найдены:

```javascript
oMainInfo = new Object();
oMainInfo.person_fullname     = '';
oMainInfo.birth_date          = '';
oMainInfo.position_name       = '';
oMainInfo.subdivision_name    = '';
oMainInfo.finish_date         = '';
oMainInfo.expert_fullname     = '';
oMainInfo.signature_learner   = '';
oMainInfo.signature_instructor = '';
```

## Форматирование дат

```javascript
StrDate(OptDate(someValue), false)   // формат ДД.ММ.ГГГГ
```

---

## Шаблон структуры скрипта ПФ

```html
</head>

<%
try {
    oMainInfo = new Object();
    oMainInfo.field1 = '';
    oMainInfo.field2 = '';

    sTopElemName = TopElem.Name;
    // получить данные из TopElem 
}
catch(e) {
    alert(e);
}
%>

<body ...>
    ...
    <%= oMainInfo.field1 %>
    ...
    <%= oMainInfo.field2 %>
    ...
</body>
```