# Инструкция по использованию папки `ai_websoft_documents`

Эта папка — база знаний для разработки на платформе Websoft HCM (язык Эвола).
Читай этот файл первым, чтобы понять, куда смотреть при решении задачи.

---

## Структура папки

```
ai_websoft_documents/
├── README.md              ← эта инструкция
├── core_rules.md          ← универсальные правила кода (читать ВСЕГДА)
├── rules/                 ← правила для конкретных контекстов
│   ├── agents.md          ← агенты и библиотеки кода
│   ├── remote_actions.md  ← удалённые действия
│   ├── collections.md     ← выборки
│   └── custom_reports.md  ← настраиваемые отчёты
├── global_index.md        ← индекс папки docs/ (читать вместо поиска по папкам)
├── schemas/
│   ├── catalogs/          ← схемы каталогов (для построения XQuery)
│   └── documents/         ← схемы документов (для работы с TopElem)
├── raw_schemas/           ← исходные XMD-файлы (читать только при нехватке данных из schemas/)
├── code_examples/         ← готовые примеры кода
└── docs/                  ← полная документация (навигировать через global_index.md)
```

---

## Алгоритм: что читать при получении задачи

```
Задача получена
    │
    ├─ 1. Читаем core_rules.md — всегда, если ещё не читали в этой сессии
    │
    ├─ 2. Определяем тип контекста — читаем нужный файл из rules/:
    │       ├─ Агент / библиотека кода  → rules/agents.md
    │       ├─ Удалённое действие       → rules/remote_actions.md
    │       ├─ Выборка                  → rules/collections.md
    │       └─ Настраиваемый отчёт     → rules/custom_reports.md
    │
    ├─ 3. Нужна документация по API / функциям / настройкам?
    │       └─ Открываем global_index.md → ищем нужный раздел → читаем файл по пути
    │
    ├─ 4. Нужно строить XQuery запрос к каталогу?
    │       └─ Читаем schemas/catalogs/wtv_<имя_каталога>s.md
    │
    ├─ 5. Нужно работать с документом через tools.open_doc / TopElem?
    │       └─ Читаем schemas/documents/wtv_<имя_объекта>.md
    │
    ├─ 6. Пишем код аналогичного типа (агент, системное событие)?
    │       └─ Смотрим code_examples/ для проверки паттернов
    │
    └─ 7. Структура в schemas/ недостаточна?
            └─ Смотрим raw_schemas/wtv_<имя>.xmd напрямую
```

---

## Справочник: ключевые каталоги

| Сущность | Каталог (XQuery) | Файл схемы |
|----------|-----------------|------------|
| Сотрудники | `collaborators` | `schemas/catalogs/wtv_collaborators.md` |
| Курсы | `courses` | `schemas/catalogs/wtv_courses.md` |
| Незавершённые курсы | `active_learnings` | `schemas/catalogs/wtv_active_learnings.md` |
| Завершённые курсы | `learnings` | `schemas/catalogs/wtv_learnings.md` |
| Незавершённые тесты | `active_test_learnings` | `schemas/catalogs/wtv_active_test_learnings.md` |
| Завершённые тесты | `test_learnings` | `schemas/catalogs/wtv_test_learnings.md` |
| Оценочная процедура | `assessment_appraises` | `schemas/catalogs/wtv_assessment_appraises.md` |
| Планы оценки | `assessment_plans` | `schemas/catalogs/wtv_assessment_plans.md` |
| ПАС (анкеты) | `pas` | `schemas/catalogs/wtv_pas.md` |
| Должности | `positions` | `schemas/catalogs/wtv_positions.md` |
| ПШР (штатное расписание) | `staff_positions` | `schemas/catalogs/wtv_staff_positions.md` |
| Подразделения | `subdivisions` | `schemas/catalogs/wtv_subdivisions.md` |
| Организации | `orgs` | `schemas/catalogs/wtv_orgs.md` |
| Типовые должности | `appointment_types` | `schemas/catalogs/wtv_appointment_types.md` |
| Данные объектов | `object_datas` | `schemas/catalogs/wtv_object_datas.md` |
| Типы данных объектов | `object_data_types` | `schemas/catalogs/wtv_object_data_types.md` |

---

## Готовые примеры кода

| Тип | Файл |
|-----|------|
| Агент (уведомления) | `code_examples/agents/Агент уведомлений по планам оценки.js` |
| Системное событие | `code_examples/Системное событие Завершение курса.js` |
| Системное событие | `code_examples/Системное событие Завершение теста.js` |

---

## Важные правила (из `core_rules.md`)

- **Каталоги** — для выборок через `XQuery`. **Документы** — для чтения/изменения деталей через `tools.open_doc`.
- ❌ Нельзя вызывать `XQuery` или `tools.open_doc` внутри цикла.
- ❌ Нельзя использовать `finally`, `eval`, `XQuery("sql:...")` без явного запроса.
- ✅ Для группового получения объектов использовать `MatchSome($elem/id, (ID1, ID2...))`.
- ✅ Новые документы требуют `BindToDb()` перед `Save()`.
- ✅ Именование переменных — венгерская нотация: `s` строка, `i` число, `d` дата, `a` массив, `o` объект.
