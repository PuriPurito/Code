# Code Review: report_non_std_objects.js

**Дата:** 2026-03-25
**Файл:** `ai_websoft_documents/code_examples/custom_reports/report_non_std_objects.js`
**Стандарт:** `core_rules.md`

---

## Итог

| Категория | Кол-во |
|---|---|
| Ошибки (баги) | 1 |
| Нарушения стандартов | 5 |
| Замечания / рекомендации | 3 |

Код логически корректен и работоспособен. Нарушения касаются стиля оформления и одного потенциального визуального бага.

---

## Ошибки

### #1 — Поле `ref_object_id` не инициализируется в проходах 1, 2, 3

**Строки:** 869–880, 925–934, 975–984

В `generateColumns` добавляется столбец `"Источник (объект)"` → `ListElem.ref_object_id`:
```javascript
fAddColumn(aRoots, "Источник (объект)", "ref_object_id");
```

Но в объектах `r`, формируемых в проходах 1, 2 и 3, поле `ref_object_id` не задаётся — остаётся `undefined`. В проходе 4 (ресурсы) поле заполняется корректно.

**Исправление:** добавить `r.ref_object_id = "";` во всех трёх проходах при формировании объекта `r`.

---

## Нарушения стандартов

### #2 — `var` внутри функций — массовое нарушение

**Правило:** `core_rules.md §8` — В Websoft HCM `var` делает переменную **глобальной**. Рабочие переменные внутри функций объявлять **без `var`**.

Нарушение присутствует во всех функциях файла:

| Функция | Переменные с `var` |
|---|---|
| `AlertLog` | `sLog`, `logType` |
| `fAddColumn` | `oCol` |
| `generateColumns` | `docSelf`, `aRoots` |
| `fPassModFilter` | `dModDate`, `dMinDate` |
| `fIsExcluded` | `sItem` |
| `fReadDocInfo` | `oInfo`, `docObj`, `teObj`, `oFromIntElem`, `sVal` |
| `fCollectResourceRefs` | `aAllResources`, `aAllExtractedPairs`, `oRow`, `docObj`, `aExtracted`, `sExtId`, `sSourceId`, `bFound`, `oPair`, `oPairNew`, `aFoundResources`, `oRes`, `sResId`, `iResId`, `sRefObjIds`, `oDocInfo`, `r` |
| `main` | `aCatIsStd`, `aCatNoIsStd`, `aResult`, `sCatalogName`, `aElems`, `oElem`, `r`, `oInfo`, `bIsStd`, `bChanged`, `iObjTypeId`, и др. |

На уровне скрипта `var` для конфигурационных переменных (`sLogName`, `bGenerateColumns`, `sMinModDate`, `aCatExclude` и т.д.) — **корректно**.

---

### #3 — Префикс `f` в именах функций

**Правило:** `core_rules.md §8` — Венгерская нотация **не применяется** к именам функций. Функции именуются в `PascalCase` без префиксов.

Все вспомогательные функции нарушают это правило:

| Текущее имя | Должно быть |
|---|---|
| `fAddColumn` | `AddColumn` |
| `generateColumns` | `GenerateColumns` |
| `fPassModFilter` | `PassModFilter` |
| `fIsExcluded` | `IsExcluded` |
| `fReadDocInfo` | `ReadDocInfo` |
| `fIsDangerousTypeForResourceScan` | `IsDangerousTypeForResourceScan` |
| `fIsDecStr` | `IsDecStr` |
| `fIsHexPfxStr` | `IsHexPfxStr` |
| `fExtractIdsFromXml` | `ExtractIdsFromXml` |
| `fCollectResourceRefs` | `CollectResourceRefs` |

`AlertLog` и `main` — именованы корректно.

---

### #4 — Именование переменных `n`, `c` без венгерской нотации

**Правило:** `core_rules.md §8` — именование по венгерской нотации обязательно для всех переменных.

Нарушения в `fIsDecStr` (строки 312–324) и `fIsHexPfxStr` (строки 329–347):

| Переменная | Тип | Должно быть |
|---|---|---|
| `n` (счётчик цикла) | integer | `i` или `iN` |
| `c` (символ строки) | string | `sCh` или `sC` |

---

### #5 — Отсутствие точки с запятой

**Правило:** `core_rules.md §8` — всегда ставить `;` в конце выражения.

**Строка 850:**
```javascript
bChanged = true   // ← нет точки с запятой
```

---

### #6 — Использование `.length` вместо `ArrayCount()`

**Правило:** `core_rules.md §1` — использовать встроенные функции платформы вместо JS-методов.

| Строка | Текущий код | Правильный код |
|---|---|---|
| 522 | `aFoundResources.length` | `ArrayCount(aFoundResources)` |
| 1003 | `aResult.length` | `ArrayCount(aResult)` |

---

## Замечания / рекомендации

### #7 — Ручные циклы поиска по массиву вместо платформенных функций

**Правило:** `core_rules.md §1` — приоритетно использовать встроенные функции платформы вместо ручных конструкций.

В нескольких местах используются ручные циклы `for...in` для поиска по массиву, хотя есть готовые платформенные функции:

**`fIsExcluded` (строки 227–236):** ручной перебор массива для проверки вхождения:
```javascript
// Текущий код — ручной цикл
for (sItem in aExclude) {
    if (sItem == sName) return true;
}
return false;

// Можно заменить на:
return ArrayOptFind(aExclude, "This == '" + sName + "'") != undefined;
```

**`fIsDangerousTypeForResourceScan` (строки 297–306):** аналогичный паттерн.

**`fExtractIdsFromXml` (строки 392–397):** ручная дедупликация через цикл:
```javascript
// Текущий код — ручная проверка дублей
for (sExisting in aIds) {
    if (sExisting == sVal) { bFound = true; break; }
}
if (!bFound) aIds.push(sVal);

// Можно заменить на:
if (ArrayOptFind(aIds, "This == '" + sVal + "'") == undefined)
    aIds.push(sVal);
```

**`fCollectResourceRefs` (строки 451–461):** ручная дедупликация пар `{sId, sSourceId}` — здесь объекты с двумя полями, `ArrayOptFind` применим:
```javascript
// Можно заменить на:
if (ArrayOptFind(aAllExtractedPairs, "This.sId == '" + sExtId + "' && This.sSourceId == '" + sSourceId + "'") == undefined)
    aAllExtractedPairs.push(oPairNew);
```

> **Оговорка:** корректность `ArrayOptFind` на JS-массивах строк-примитивов зависит от версии платформы. Паттерн надёжен для JS-массивов объектов и XQuery-результатов.

---

### #8 — `tools.open_doc` в цикле в проходе 2 при потенциально больших каталогах

**Строки 909–911:** в проходе 2 (aCatNoIsStd) `fReadDocInfo` вызывает `tools.open_doc` для каждого элемента каждого каталога.

По `core_rules.md §12` это допустимо, когда данные (doc_info, custom_elems) недоступны в каталоге. Однако `aCatNoIsStd` содержит более 200 каталогов, часть из которых может хранить тысячи записей (`documents`, `groups`, `articles` и др.).

**Рекомендация:** убедиться, что все потенциально крупные каталоги добавлены в `aCatExclude`. Добавить комментарий-предупреждение о производительности рядом с началом прохода 2, по аналогии с комментарием в `fCollectResourceRefs`.

---

### #9 — Пустые блоки `catch` без логирования и с нарушением форматирования

**Строки 269, 278, 854–856:**
```javascript
catch (eCustom) {}
catch (eDocInfo) {}
catch(e){}           // ← отсутствует пробел перед (e)
```

Пустые `catch` скрывают ошибки. Отсутствие пробела перед `(e)` нарушает форматирование.

**Рекомендация:** добавить хотя бы `AlertLog(...)` или явный комментарий `// игнорируем`.
