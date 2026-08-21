# Контекст проекта: AFL — Интеграция 1С ЗУП → Websoft HCM

Этот файл загружается автоматически. Содержит правила разработки на платформе Websoft HCM
и специфику интеграции с 1С Шиной для проекта AFL.

Если обсуждение касается интеграции — дополнительно читать:
`ActiveProjects/AFL/Разработка/Интеграция/03_как_работает_интеграция.md`
(файл мог не переехать вместе с проектом — если его нет, игнорировать эту ссылку).

---

## Общая база знаний по платформе Websoft HCM

В папке `ai_websoft_documents/` (в корне рабочей директории) лежит отдельная,
не привязанная к AFL база знаний по платформе Websoft HCM: универсальные правила кода,
схемы каталогов/документов для XQuery и `tools.open_doc`, готовые примеры кода, полная документация.

**Перед любой задачей на Websoft HCM сначала читать `ai_websoft_documents/README.md`** —
там описан алгоритм, что читать дальше в зависимости от типа задачи
(агент/библиотека, удалённое действие, выборка, отчёт, работа с конкретным каталогом/документом).

Дополнительно короткие файлы общего контекста платформы:
`_claude_context/websoft_hcm_architecture.md`, `_claude_context/websoft_hcm_coding_style.md`.

---

## Архитектура интеграции

Интеграция: **Websoft HCM** ↔ **1С ЗУП** через промежуточную шину **1С Интеграция** (SOAP API).
Websoft опрашивает шину по расписанию через агента, забирает пакеты, обрабатывает, подтверждает получение.

### Ключевые файлы проекта

| Файл | Назначение |
|---|---|
| `wtv/agents/handle_packets_from_1c.js` | Агент-опросчик: получает пакеты, вызывает `HandlePackage` |
| `wtv/custom_libs/afl_integration.js` | `libAflIntegration`: получение пакетов, перевод тегов, маршрутизация |
| `wtv/custom_libs/afl_1c_zup.js` | `libAfl1CZup`: конкретные обработчики типов пакетов |
| `wtv/custom_libs/translated_tags_split/` | Per-type иерархические словари перевода тегов (один файл на тип) |
| `wtv/custom_libs/translated_tags_flat.json` | Плоский fallback-словарь (2512 пар ru/en, ~330 КБ) |
| `Active_Projects/Вне вебсофт/trans.py` | Python-скрипт генерации словарей из XSD-схемы 1С |
| `Active_Projects/Вне вебсофт/schema.xsd` | XSD-схема структур 1С (не читать целиком — очень большой файл) |
| `Active_Projects/Вне вебсофт/tags.json` | Ручные переопределения перевода (приоритет над транслитерацией) |

### Поток обработки пакета

```
Агент handle_packets_from_1c.js
  → SOAP GetPackets к 1С Шине
  → Извлечение <content> (base64 или xml)
  → libAflIntegration.HandlePackage(sContent, sContentType, sMessageUUID)
      → если zip: распаковать, рекурсивный вызов с xml
      → если xml:
          1. GetRawPackageType(sContent)       — тип по ru_key в сыром XML
          2. TranslateXmlTags(sContent, ...)   — кириллица → латиница
          3. GetHandlePackageType(translated)  — подтвердить тип по en-key
          4. OpenDocFromStr(translated)        — XML → XmElem
          5. switch(oPackageType.name) → tools.call_code_library_method(...)
  → libAfl1CZup.<обработчик>(tePacketContent)
  → SOAP ConfirmPackets
```

### Почему нужен перевод тегов

1С хранит XML с кириллическими тегами (`<Справочник.ФизическиеЛица>`).
Websoft HCM не может разобрать их через `OpenDocFromStr` — теги переводятся по словарю.

### Структура записи словаря

```json
{
    "ru": "Справочник.ФизическиеЛица",
    "en": "Directory_Collaborator",
    "children": [
        { "ru": "КлючевыеСвойства", "en": "KeyProperties", "children": [...] },
        { "ru": "ФИО", "en": "Fullname", "children": [] }
    ]
}
```

### Типы пакетов (GetPacketTypesArray)

Каждая запись содержит: `key` (en), `ru_key` (кириллица), `name`, `library`, `library_function`, опционально `xmd_form_name`.

Примеры типов: `collaborator`, `exchange_message`, `work_schedule_for_time`,
`business_trip_document`, `directory`, `org`, `position`, `subdivision_org`,
`staffing_shedule`, `staff_position_state`, `kadrovaya_istorija`,
`fizlica_*` (специальности, профессии, родственники, языки, награды, стажи, образование, документы, семейное положение, гражданство, фото).

### Ключевые функции libAflIntegration

| Функция | Описание |
|---|---|
| `HandlePackage(sContent, sContentType, sMessageUUID)` | Точка входа обработки пакета |
| `GetRawPackageType(sXml)` | Тип по сырому (русскому) XML |
| `GetHandlePackageType(sXml)` | Тип по переведённому XML |
| `GetPacketTypesArray()` | Массив всех известных типов пакетов |
| `TranslateXmlTags(sXml, sFromLanguage, sPackageType)` | Перевод тегов; загружает per-type файл или fallback |
| `TranslateRecurse(oTags, sXml, sFromLanguage, sToLanguage)` | Рекурсивный обход дерева словаря |
| `GetSystemObject(sCode)` | Настройки системы интеграции (логин, пароль, URL шины) |
| `Get1CHeader(sAction, sLogin, sPassword)` | SOAP-заголовки |
| `PushError(sText, oRes, sFunction, sLib)` | Добавить ошибку в результат |

### Обновление словарей при смене схемы 1С

1. Обновить `schema.xsd`
2. Дополнить `tags.json` ручными переопределениями (при необходимости)
3. Запустить `trans.py` из `Active_Projects/Вне вебсофт/`
4. Скопировать `translated_tags_split/` и `translated_tags_flat.json` в `wtv/custom_libs/`
5. При новом типе пакета — добавить запись в `GetPacketTypesArray()`

---

## Правила разработки Websoft HCM

### Архитектура: Каталоги vs Документы

- **Каталоги** (`XQuery`) — для выборок, списков, поиска.
- **Документы** (`tools.open_doc`) — для изменения данных или получения деталей, недоступных в каталоге.

### Производительность

- ❌ **ЗАПРЕЩЕНО**: `tools.open_doc()` или `XQuery()` внутри цикла.
- ✅ `MatchSome($field, (ID1, ID2...))` — пакетная загрузка группы объектов одним запросом.
- ✅ `.ForeignElem` / `.OptForeignElem` — доступ к связанным объектам без лишнего XQuery (например, `collaborator.position_id.ForeignElem.name`).
- ✅ `ArrayOptFirstElem(aArray) != undefined` — проверка массива на пустоту (быстрее, чем `ArrayCount`).

### Запреты (нарушение = баг или деградация производительности)

| Запрет | Причина |
|---|---|
| `XQuery` внутри цикла | Производительность |
| `tools.open_doc` внутри цикла (для чтения) | Производительность |
| `XQuery` без `Fields(...)` на больших выборках | Память |
| `finally` | Не поддерживается в Websoft HCM |
| `eval()` | — |
| `XQuery("sql:...")` | Только по явному запросу пользователя |
| `doc-contains` в XQuery | Только по явному запросу пользователя |
| `.filter`, `.map`, `.find` на массивах | Не работают на XQuery-массивах |
| JS `{}` как хеш-таблица | Использовать `ArrayOptFindByKey` |
| `for (var oItem in aArray)` | `var` в `for...in` ломает семантику |
| Индексный `for (var i = 0; i < ...)` | XQuery-массив не поддерживает индекс без `ArrayDirect()` |
| Забыть `BindToDb()` при создании документа | Документ не попадёт в SQL-базу |
| JS-методы строк: `.substring()`, `.length`, `.toLowerCase()` | Не поддерживаются в движке Websoft |
| Инлайн тройной оператор `cond ? a : b` как не последний аргумент вызова функции | Движок Websoft теряет все последующие через запятую аргументы (они приходят пустыми/undefined) — обнаружено на `FillRef(oNode, cond ? x : y, "position", "должности")`, где `sType`/`sEntityName` приходили пустыми. Выносить тернарник в переменную до вызова |
| Инлайн тройной оператор `cond ? a : b` как значение свойства в объектном литерале (`{ key: cond ? a : b }`) | Тот же класс бага движка Websoft. Оборачивать голыми `()` нельзя — Prettier уберёт их как избыточные при следующем форматировании; оборачивать вызовом, который Prettier не тронет, например `String(cond ? a : b)` — обнаружено на `new_subdivision_id: new_subdivision_id == "" ? "" : new_subdivision_id` в `sap_documents.js` |

### XQuery

```javascript
// Базовая структура
for $elem in catalog_name where condition order by $elem/field return $elem/Fields('id', 'name')

// Поиск по списку ID (лимит ~500 элементов!)
MatchSome($field, (123, 456, 789))

// Поиск подстроки
contains($field, 'строка')

// Работа с датами
date('DD.MM.YYYY')
```

- Простые запросы — вставлять напрямую в `XQuery("...")`.
- Сложные/многострочные — выносить в переменную `sQuery`.
- Результат XQuery **всегда** оборачивать в `ArraySelectAll(XQuery(...))` перед передачей в функции поиска.
- При `MatchSome` с возможным превышением 500 элементов — загрузить весь каталог и фильтровать через `ArraySelect`, или оставить предупреждающий комментарий.

### Функции работы с массивами

| Функция | Назначение |
|---|---|
| `ArrayOptFindByKey(array, value, 'field')` | Один элемент по ключу (простое совпадение) |
| `ArrayOptFind(array, "condition")` | Один элемент по сложному условию |
| `ArraySelect(array, "condition")` | Все совпадающие элементы |
| `ArraySelectAll(xquery_result)` | Обернуть результат XQuery для поиска/фильтрации |
| `ArrayMerge(array, "expr", "sep")` | Объединить значения в строку |
| `ArrayCount(array)` | Количество элементов |
| `ArrayOptFirstElem(array)` | Безопасно получить первый элемент |

- `ArrayOptFindByKey` — простое совпадение по одному полю, более читаемо.
- `ArrayOptFind` — сложная логика или нормализация через `OptInt`.
- `ArrayOptFind` → один результат; `ArraySelect` → все совпадающие.
- После `Array*`-функций **всегда** проверять результат `!= undefined`.
- Результат `XQuery` **всегда** оборачивать в `ArraySelectAll(XQuery(...))` перед передачей в `ArrayOptFindByKey` / `ArrayOptFind` / `ArraySelect` — без этого они работают некорректно.

### Паттерн пакетной загрузки (обязательный)

```javascript
// ДО цикла — один запрос на все нужные ID
sPersonIds = ArrayMerge(aPas, "This.person_id", ", ");
aCollData = ArraySelectAll(XQuery(
    "for $c in collaborators where MatchSome($c/id, (" + sPersonIds + ")) " +
    "return $c/Fields('id', 'position_parent_id')"
));

// ВНУТРИ цикла — поиск в предзагруженном массиве (без XQuery)
oColl     = ArrayOptFind(aCollData, "OptInt(This.id) == " + iPersonID);
iSubDivID = oColl != undefined ? OptInt(oColl.position_parent_id) : undefined;
```

**Паттерн проверки принадлежности к коллекции**:
```javascript
// ДО цикла — пакетная загрузка коллекции
aGroupMembers = ArraySelectAll(XQuery(
    "for $gc in group_collaborators where $gc/group_id = " + iGroupID +
    " return $gc/Fields('collaborator_id')"
));

// ВНУТРИ цикла — без XQuery
oInGroup = ArrayOptFind(aGroupMembers, "OptInt(This.collaborator_id) == " + iCollabId);
if (oInGroup != undefined)
    continue;
```

**ID-форматы**: в документе (`open_doc`, `TopElem`) — hex; в каталоге (`XQuery`) — decimal.
Сравнивать через `OptInt` — нормализует оба формата:
```javascript
// ✅ Надёжно
oCourse = ArrayOptFind(aCourseData, "OptInt(This.id) == " + iCourseId);
// ❌ Ненадёжно — форматы могут не совпасть
oCourse = ArrayOptFindByKey(aCourseData, iCourseId, "id");
```

### Работа с документами

```javascript
// Изменение
doc = tools.open_doc(objectID);
doc.TopElem.name = 'Новое имя';
doc.Save();

// Создание
doc = tools.new_doc_by_name('collaborator');
doc.TopElem.lastname = 'Иванов';
doc.BindToDb(); // обязательно — иначе нет в SQL-базе
doc.Save();
```

- `custom_elems` недоступны в XQuery — открывать через `tools.open_doc(id)`.
- `tools.open_doc()` возвращает `undefined` если не найден → проверять `== undefined`.
- `tools.get_opened_doc()` может вернуть `null` → проверять оба варианта.

### `open_doc` в цикле — допустимые исключения

- **Чтение**: только если нужны `custom_elems` и выборка заведомо мала.
- **Запись**: всегда допустимо (батч-запись не поддерживается). Оборачивать в `try...catch`:

```javascript
for (oItem in aItems) {
    try {
        docItem = tools.open_doc(OptInt(oItem.id));
        if (docItem == null || docItem == undefined) continue;
        docItem.TopElem.some_field = "новое значение";
        docItem.Save();
    } catch (err) {
        AlertLog("Ошибка при обработке " + oItem.id + ": " + err);
    }
}
```

### Работа со строками

❌ Нельзя: `.substring()`, `.substr()`, `.charAt()`, `.toLowerCase()`, `.length`

| Задача | Функция |
|---|---|
| Длина | `StrLen(s)` |
| Первые N символов | `StrLeftRange(s, n)` |
| Подстрока | `StrRangePos(s, p1, p2)` |
| С позиции до конца | `StrRightRangePos(s, n)` |
| Нижний регистр | `StrLowerCase(s)` |
| Верхний регистр | `StrUpperCase(s)` |
| Начало строки | `StrBegins(s, prefix)` |
| Вхождение | `StrContains(s, sub)` |
| Замена | `StrReplace(s, old, new)` |

> Кириллица = 2 байта/символ в UTF-8 — при работе с русским текстом использовать `StrCharRangePos` / `StrCharCount`.
> `.indexOf()` и `.split()` — поддерживаются, можно использовать.

### Преобразование типов

Всегда `OptInt` / `OptDate` / `OptReal` вместо `Int` / `Date` / `Real`.
Opt-версии возвращают `undefined` вместо исключения. Результат всегда проверять перед использованием.

```javascript
iID = OptInt(elem.id);
if (iID != undefined) { /* use iID */ }
```

### Работа с датами

❌ Никогда не вычитать даты через JS-арифметику — только платформенные функции.

```javascript
dToday     = DateNewTime(Date());           // обнулить время перед сравнением
dStartDate = DateNewTime(OptDate(oElem.value));
if (IsEmptyValue(dStartDate)) { /* пропустить */ }
iDays = OptInt(DateDiff(dToday, dStartDate) / 86400); // DateDiff → секунды
```

| Функция | Описание |
|---|---|
| `DateNewTime(date)` | Дата без времени — обязательно перед сравнением |
| `DateDiff(date1, date2)` | Разница в секундах (`/ 86400` → дни) |
| `DateOffset(date, seconds)` | Сдвиг на N секунд (`86400` = 1 сутки) |

### Глобальные объекты

| Объект | Описание |
|---|---|
| `tools` | Системные методы (`wtv_tools.xml`) |
| `ms_tools` | Вспомогательные методы |
| `TopElem` | Корневой элемент текущего документа |
| `curUser` | Текущий пользователь |
| `curUserID` | ID текущего пользователя |

### Основные функции `tools`

- `open_doc(id)` — открыть документ. `undefined` если не найден.
- `new_doc_by_name(name)` — создать документ.
- `get_opened_doc(id)` — получить из памяти (быстрее). `null` если не найден.
- `get_cur_user()`, `is_boss(personID)`, `get_main_boss_by_person_id(personID)`
- `create_notification(code, personID, text, objectID)`
- `log(message)` / `LogEvent(name, msg)` — системный лог.
- `date_str(date)` — форматирование даты.
- `IsEmptyValue(val)` — только для примитивов (строки, числа, даты). ❌ Не для XmElem-объектов.
- `OptInt(val)` — возвращает `undefined` (не `0`) при невалидном значении.

### Стандарты оформления кода

**Именование переменных (венгерская нотация)**:

| Префикс | Тип | Пример |
|---|---|---|
| `s` | строка | `sName`, `sLog` |
| `i` | целое число | `iCount`, `iObjectID` |
| `d` | дата | `dToday`, `dStartDate` |
| `a` | массив | `aItems`, `aParams` |
| `o` | объект | `oResult`, `oItem` |
| `b` | булево | `bIsActive` |
| `te` | TopElem | `teCollaborator` |
| `doc` | Документ | `docCollaborator` |

**Функции**: PascalCase, без префиксов: `GetControlDate`, `ReadDocInfo`, `IsExcluded`.

**`var`**: В Websoft `var` делает переменную глобальной.
- `var` — только для намеренно глобальных (параметры агента, верхний уровень скрипта).
- Рабочие переменные внутри функций — без `var`.
- ❌ Никогда `var` внутри цикла.

**Итерация**:
```javascript
// ✅
for (oCourseCertReq in aCourseCertReqs) { ... }

// ❌ var в for...in
for (var oItem in aItems) { ... }

// ❌ индексный цикл
for (var i = 0; i < ArrayCount(aItems); i++) { ... }
```

**Форматирование**: отступы — табуляция; `{` — в конце строки (K&R); `;` в конце каждого выражения.
Форматирование обычных `.js`-файлов (custom_libs, agents) обеспечивается Prettier (`.prettierrc.json` в корне) — запускается автоматически при сохранении.
Файлы-шаблоны Websoft (`**/Шаблоны/**`, содержат `<% %>`) в форматирование Prettier **не входят** — он не понимает этот синтаксис и ломает отступы; их правят вручную, отступы — табуляция.

**Логирование** — универсальная функция `AlertLog` в каждом скрипте:
```javascript
function AlertLog(log) {
    var sLog = log;
    logType = ObjectType(log);
    if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem'))
        sLog = tools.object_to_text(log, 'json');
    LogEvent(sLogName, sLog);
}
```
- Включать: `EnableLog(sLogName, true)`.
- Выключать после завершения: `EnableLog(sLogName, false)`.

**Структура скрипта**: основную логику выносить в функцию `main()`.

### Обработка ошибок

```javascript
// ✅ Всегда проверять результат Array*-функций
oDocType = ArrayOptFirstElem(XQuery("..."));
if (oDocType == undefined) {
    AlertLog("Не найдена запись");
    return;
}

// ❌ IsEmptyValue не работает для XmElem
if (IsEmptyValue(oDocType)) { ... }

// ❌ Обращение к полям без проверки — выбросит ошибку если XQuery вернул пустой результат
oDocType = ArrayOptFirstElem(XQuery("..."));
docNew.TopElem.type_id = OptInt(oDocType.id);
```
