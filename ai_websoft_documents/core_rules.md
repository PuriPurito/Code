# Core Rules: Разработка на языке Websoft HCM

Универсальные правила разработки. Читать **всегда** независимо от типа задачи.

Для специфических контекстов дополнительно читать нужный файл из `rules/`:
- `rules/agents.md` — агенты и библиотеки кода
- `rules/remote_actions.md` — удалённые действия
- `rules/collections.md` — выборки
- `rules/custom_reports.md` — настраиваемые отчёты
- `rules/print_forms.md` — печатные формы (.mht)

---

## 1. Архитектурные принципы

### Каталоги vs Документы
- **Каталоги** (`XQuery`) — для выборок, списков и поиска.
- **Документы** (`tools.open_doc`) — для изменения данных или получения детальной информации (которой нет в каталоге).

### Производительность
- ❌ **ЗАПРЕЩЕНО**: Вызывать `tools.open_doc()` или `XQuery()` внутри цикла.
- ✅ Использовать `MatchSome($field, (ID1, ID2...))` для получения группы объектов одним запросом.
- ✅ Использовать `.ForeignElem` или `.OptForeignElem` для доступа к связанным объектам (например, `collaborator.position_id.ForeignElem.name`).
- ✅ Для проверки массива на пустоту использовать `ArrayOptFirstElem(aArray) != undefined` (быстрее, чем `ArrayCount`).

---

## 2. Синтаксис XQuery

**Базовая структура**: `for $elem in catalog_name where condition order by $elem/field return $elem`

**Оформление**:
- ✅ Простые запросы — вставлять напрямую в `XQuery("...")`.
- ✅ Сложные/многострочные — выносить в переменную `sQuery`.

**Функции**:
- `contains($field, 'строка')` — поиск подстроки.
- `MatchSome($field, (123, 456))` — поиск по списку значений.
  ⚠️ **Лимит ~500 элементов**. При возможном превышении — загрузить весь каталог и фильтровать через `ArraySelect`/`ArrayOptFind`, или предупредить комментарием о риске.
- `doc-contains($elem/id, '', 'запрос')` — полнотекстовый поиск. ❌ Использовать **только** по явному запросу.
- `date('DD.MM.YYYY')` — работа с датами.

**Возврат полей**: Для экономии памяти возвращать только нужные поля:
```
return $elem/Fields('id', 'name')
```

---

## 3. Функции работы с массивами

✅ **Приоритетно**: Использовать встроенные функции платформы вместо нативных JS-конструкций.

| Функция | Назначение |
|---|---|
| `ArrayOptFindByKey(array, value, 'field')` | Поиск одного элемента по ключу (читаемо) |
| `ArrayOptFind(array, "condition")` | Поиск одного элемента по сложному условию |
| `ArraySelect(array, "condition")` | Получить все совпадающие элементы (подмассив) |
| `ArraySelectAll(xquery_result)` | Обернуть результат XQuery для поиска/фильтрации |
| `ArrayMerge(array, "expr", "sep")` | Объединить значения в строку |
| `ArrayCount(array)` | Количество элементов |
| `ArrayOptFirstElem(array)` | Безопасно получить первый элемент |

**`ArrayOptFindByKey` vs `ArrayOptFind`**:
- `ArrayOptFindByKey` — когда нужен один объект и простое совпадение по полю. Более читаемо.
- `ArrayOptFind` — когда нужна сложная условная логика или нормализация типов через `OptInt`.

**`ArraySelect` vs `ArrayOptFind`**:
- `ArrayOptFind` — возвращает **один** первый элемент (или `undefined`).
- `ArraySelect` — возвращает **все** совпадающие элементы (подмассив).

```javascript
// ✅ Один элемент
var oPlan = ArrayOptFind(aPlans, "OptInt(This.id) == " + iPlanId);

// ✅ Несколько элементов
var aPlanPas = ArraySelect(aPasAll, "OptInt(This.assessment_plan_id) == " + OptInt(plan.id));
for (oPas in aPlanPas) { ... }
```

❌ **ЗАПРЕЩЕНО**: Использовать JS-объект `{}` как хеш-таблицу — вместо этого `ArrayOptFindByKey`.
❌ **ЗАПРЕЩЕНО**: Использовать методы `Array.prototype` (`.filter`, `.map`, `.find`) — не поддерживаются на XQuery-массивах.

> **`ArraySelectAll`**: результат `XQuery` **всегда** оборачивать в `ArraySelectAll(XQuery(...))` перед передачей в функции поиска. Без этого `ArrayOptFindByKey` / `ArrayOptFind` / `ArraySelect` работают некорректно.

---

## 4. Работа с документами

**Изменение данных**:
```javascript
doc = tools.open_doc(objectID);
doc.TopElem.name = 'Новое имя';
doc.Save();
```

**Создание объекта**:
```javascript
doc = tools.new_doc_by_name('collaborator');
doc.TopElem.lastname = 'Иванов';
doc.BindToDb(); // Обязательно для новых объектов — иначе не попадёт в SQL-базу
doc.Save();
```

> **`custom_elems`** недоступны в результатах `XQuery` (каталоговые записи). Для обращения к `custom_elems` необходимо открывать полный документ через `tools.open_doc(id)`.
> ```javascript
> // ❌ Неправильно — custom_elems нет в каталоговой записи XQuery
> for (oReq in aReqs)
>     var iVal = OptInt(oReq.custom_elems.ObtainChildByKey("my_field").value);
>
> // ✅ Правильно — открываем документ
> for (oReq in aReqs)
> {
>     var docReq = tools.open_doc(OptInt(oReq.id));
>     var iVal = OptInt(docReq.TopElem.custom_elems.ObtainChildByKey("my_field").value);
> }
> ```

---

## 5. Глобальные объекты

| Объект | Описание |
|---|---|
| `tools` | Основные системные методы (`wtv_tools.xml`) |
| `ms_tools` | Общие вспомогательные методы |
| `TopElem` | Корневой элемент текущего документа (в контексте агентов, экранных форм) |
| `curUser` | Объект текущего пользователя |
| `curUserID` | ID текущего пользователя |

---

## 6. Основные функции библиотеки `tools`

**Работа с документами**:
- `open_doc(id)` — открыть существующий документ. Возвращает `undefined` если документ не найден.
- `new_doc_by_name(name)` — создать новый документ.
- `get_opened_doc(id)` — получить уже открытый в памяти документ (быстрее, чем `open_doc`). Возвращает `null` если не найден.

**Работа с пользователями**:
- `get_cur_user()` — получить объект текущего пользователя.
- `is_boss(personID)` — проверить, является ли сотрудник руководителем.
- `get_main_boss_by_person_id(personID)` — получить основного руководителя.

**Уведомления**:
- `create_notification(code, personID, text, objectID)` — создать уведомление по коду.

**Разное**:
- `log(message)` / `LogEvent(name, msg)` — запись в системный лог.
- `date_str(date)` — форматирование даты в строку.
- `IsEmptyValue(val)` — проверка на `undefined`, `null` или `""`. **Только для примитивов** (строки, числа, даты). ❌ Не использовать для XmElem/объектов — вернёт `true` даже на валидном объекте.
- `OptInt(val)` — возвращает `undefined` (не `0`!) если значение не удаётся преобразовать в число. Всегда проверять через `!= undefined` перед использованием.

```javascript
// ❌ Нельзя напрямую присваивать OptInt в integer-поле документа (TopElem)
// ✅ Всегда проверять перед присвоением
var iVal = OptInt(oElem.some_id);
if (iVal != undefined)
    doc.TopElem.some_id = iVal;
```

---

## 7. Работа со строками

❌ **ЗАПРЕЩЕНО**: JS-методы строк (`.substring()`, `.substr()`, `.charAt()`, `.toLowerCase()`, `.length`) — не поддерживаются в движке Websoft.

✅ **Использовать платформенные функции**:

| Задача | Функция | Пример |
|---|---|---|
| Длина строки | `StrLen(s)` | `StrLen("abc")` → 3 |
| Первые N символов | `StrLeftRange(s, n)` | `StrLeftRange("abcde", 3)` → "abc" |
| Символ на позиции N | `StrRangePos(s, n, n+1)` | `StrRangePos("abc", 1, 2)` → "b" |
| Подстрока pos1..pos2 | `StrRangePos(s, p1, p2)` | `StrRangePos("abcde", 1, 4)` → "bcd" |
| Строка с позиции до конца | `StrRightRangePos(s, n)` | `StrRightRangePos("abcde", 2)` → "cde" |
| В нижний регистр | `StrLowerCase(s)` | `StrLowerCase("ABC")` → "abc" |
| В верхний регистр | `StrUpperCase(s)` | |
| Начало строки | `StrBegins(s, prefix)` | |
| Вхождение подстроки | `StrContains(s, sub)` | |
| Замена | `StrReplace(s, old, new)` | |

> **Байты**: Str-функции работают с байтами. ASCII = 1 байт/символ. Кириллица (UTF-8) = 2 байта/символ — использовать `StrCharRangePos` / `StrCharCount` при работе с русским текстом.
> **`.indexOf()` и `.split()`** — поддерживаются движком, можно использовать.

---

## 8. Преобразование типов

✅ **Приоритетно**: Использовать Opt-версии функций: `OptInt`, `OptDate`, `OptReal` вместо `Int`, `Date`, `Real`.
Opt-функции возвращают `undefined` вместо исключения при невалидном значении. Результат **всегда** проверять перед использованием.

```javascript
// ✅ Правильно
var iID = OptInt(elem.id);
if (!IsEmptyValue(iID)) { /* use iID */ }

// ❌ Неправильно — Int бросит ошибку на невалидном значении
var iID = Int(elem.id);
```

---

## 9. Обработка ошибок

- Всегда оборачивать `tools.open_doc` и критические операции в `try...catch`.
- `tools.open_doc()` возвращает `undefined` если документ не открылся → проверка через `== undefined` достаточна.
- `tools.get_opened_doc()` может вернуть `null` → проверять `== null || == undefined`.
- После `ArrayOptFirstElem()`, `ArrayOptFindByKey()`, `ArrayOptFind()` — **всегда** проверять результат через `== undefined` перед использованием.
- ❌ `IsEmptyValue()` **не работает** для XmElem-объектов — вернёт `true` даже на валидном объекте.

```javascript
// ✅ Правильно — для Array*-функций всегда использовать != undefined / == undefined
var oDocType = ArrayOptFirstElem(XQuery("..."));
if (oDocType == undefined)
{
    AlertLog("Не найдена запись");
    return;
}
// дальше безопасно использовать oDocType.id, oDocType.name и т.д.

// ❌ Неправильно — IsEmptyValue не работает для XmElem
if (IsEmptyValue(oDocType)) { ... }

// ❌ Неправильно — если XQuery вернул пустой результат, обращение к .id выбросит ошибку
var oDocType = ArrayOptFirstElem(XQuery("..."));
docNew.TopElem.type_id = OptInt(oDocType.id);
```

---

## 10. Запреты и ограничения

| Запрет | Примечание |
|---|---|
| ❌ `XQuery` внутри цикла (для чтения) | Производительность |
| ❌ `tools.open_doc` внутри цикла (для чтения) | Производительность |
| ❌ `XQuery` без `Fields(...)` на больших выборках | Потребление памяти |
| ❌ `finally` | Не поддерживается в Websoft HCM |
| ❌ `eval()` | Использовать стандартные методы |
| ❌ `XQuery("sql:...")` | Только если пользователь явно запросил SQL |
| ❌ `doc-contains` в XQuery | Только если пользователь явно запросил |
| ❌ `Array.prototype` методы (`.filter`, `.map`, `.find`) | Не поддерживаются на XQuery-массивах |
| ❌ JS `{}` как хеш-таблица | Использовать `ArrayOptFindByKey` по предзагруженному массиву |
| ❌ `var` в объявлении `for...in` | Семантика var в Websoft — глобальная, нарушает логику |
| ❌ Забыть `BindToDb()` при создании документа | Документ не попадёт в SQL-базу |

---

## 11. Паттерн пакетной загрузки данных перед циклом

❌ **ЗАПРЕЩЕНО**: Вызывать `XQuery` или `tools.open_doc` внутри цикла для загрузки связанных объектов.

✅ **Паттерн**: Собрать все нужные ID → один `MatchSome`-запрос вне цикла → поиск в памяти внутри цикла.

```javascript
// ДО цикла — пакетная загрузка
var sPersonIds = ArrayMerge(aPas, "This.person_id", ", ");
var aCollData = ArraySelectAll(XQuery(
    "for $c in collaborators where MatchSome($c/id, (" + sPersonIds + ")) " +
    "return $c/Fields('id', 'position_parent_id')"
));

// ВНУТРИ цикла — O(n) поиск по предзагруженному массиву
var oColl     = ArrayOptFind(aCollData, "OptInt(This.id) == " + iPersonID);
var iSubDivID = oColl != undefined ? OptInt(oColl.position_parent_id) : undefined;
```

**Формат ID**: ID в документе (`open_doc`, `TopElem`) хранится в hex, в каталоге (`XQuery`) — в decimal.
✅ Использовать `ArrayOptFind` с `OptInt` для надёжного сравнения (нормализует оба формата):
```javascript
// ✅ Правильно — OptInt нормализует оба формата к числу
var oCourse = ArrayOptFind(aCourseData, "OptInt(This.id) == " + iCourseId);

// ❌ Ненадёжно — ID могут быть в разных форматах (hex vs decimal)
var oCourse = ArrayOptFindByKey(aCourseData, iCourseId, "id");
```

**Паттерн проверки принадлежности к коллекции**:
```javascript
// ДО цикла — пакетная загрузка коллекции
var aGroupMembers = ArraySelectAll(XQuery(
    "for $gc in group_collaborators where $gc/group_id = " + iGroupID +
    " return $gc/Fields('collaborator_id')"
));

// ВНУТРИ цикла — проверка без XQuery
var oInGroup = ArrayOptFind(aGroupMembers, "OptInt(This.collaborator_id) == " + iCollabId);
if (oInGroup != undefined)
    continue;
```

**Допустимые исключения для `open_doc` в цикле**:
- **Чтение**: допустим только если нужны `custom_elems` / `custom_fields`, недоступные в каталоге, и выборка заведомо мала.
- **Запись/изменение**: всегда допустим — батч-запись не поддерживается платформой. Каждый вызов оборачивать в `try...catch`:

```javascript
for (oItem in aItems)
{
    try
    {
        var docItem = tools.open_doc(OptInt(oItem.id));
        if (docItem == null || docItem == undefined) continue;
        docItem.TopElem.some_field = "новое значение";
        docItem.Save();
    }
    catch (err)
    {
        AlertLog("Ошибка при обработке " + oItem.id + ": " + err);
    }
}
```

---

## 12. Работа с датами

**Правило**: Никогда не вычитать даты через JS-арифметику. Использовать только платформенные функции.

| Функция | Описание |
|---|---|
| `DateNewTime(date)` | Дата без времени (часы/минуты/секунды = 0). **Обязательно** использовать перед сравнением дат. |
| `DateDiff(date1, date2)` | Разница в **секундах**. `/86400` → дни. |
| `DateOffset(date, seconds)` | Сдвиг даты на N секунд. `86400` = 1 сутки. |

**Паттерн «разница в днях»**:
```javascript
// 1. Обнулить время у обеих дат
var dToday     = DateNewTime(Date());
var dStartDate = DateNewTime(OptDate(oStartElem.value));

// 2. Проверить что дата распарсилась
if (IsEmptyValue(dStartDate)) { /* пропустить */ }

// 3. DateDiff возвращает секунды — делить на 86400 для дней
var iDays = OptInt(DateDiff(dToday, dStartDate) / 86400);
if (IsEmptyValue(iDays)) { /* пропустить */ }
```

---

## 13. Стандарты оформления кода

### Именование переменных (Венгерская нотация)

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

### Именование функций
- ❌ Венгерская нотация **не применяется** к именам функций — никаких префиксов (`f`, `fn` и т.д.).
- ✅ Имена функций — `PascalCase`: `GetControlDate`, `ReadDocInfo`, `IsExcluded`, `CollectResourceRefs`.

### Итерация по массивам
- ✅ **ВСЕГДА** `for (oItem in aItems)` для обхода XQuery-результатов и JS-массивов.
- ❌ **ЗАПРЕЩЕНО**: `var` в объявлении `for...in`: `for (var oItem in aItems)` — неверно.
- ❌ **ЗАПРЕЩЕНО**: Индексный цикл `for (var i = 0; i < ...)` — XQuery-массив не поддерживает индекс без `ArrayDirect()`.
- Переменная цикла — осмысленное имя с правильным венгерским префиксом (обычно единственное число от имени массива):

```javascript
// ✅ Правильно
for (oCourseCertReq in aCourseCertReqs) { ... }
for (oCertDocInfo in aCertDocInfos) { ... }

// ❌ Неправильно — var в for...in
for (var oR in aReqs) { ... }

// ❌ Неправильно — индексный цикл
for (var i = 0; i < ArrayCount(aReqs); i++) { ... }
```

### Использование `var`
В Websoft HCM `var` делает переменную **глобальной** (видна за пределами функции/блока). Переменная **без `var`** является локальной.
- ✅ `var` — только для намеренно глобальных переменных (параметры агента, разделяемое состояние верхнего уровня скрипта).
- ✅ Рабочие переменные внутри функций — **без `var`** (локальные).
- ❌ Не использовать `var` внутри тела цикла.

### Форматирование
- Отступы — **табуляция**.
- Открывающая `{` — **на новой строке** для функций и циклов.
- Точка с запятой `;` в конце каждого выражения.

### Логирование
Универсальная функция `AlertLog` — включать в каждый скрипт:
```javascript
function AlertLog(log)
{
    var sLog = log;
    var logType = ObjectType(log);
    if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem'))
        sLog = tools.object_to_text(log, 'json');
    LogEvent(sLogName, sLog);
}
```
- Включать лог: `EnableLog(sLogName, true)`.
- Выключать лог после завершения: `EnableLog(sLogName, false)`.
- Шаблоны запуска для конкретных контекстов — см. файлы в `rules/`.

### Структура скрипта
- Основную логику выносить в функцию `main()`.
