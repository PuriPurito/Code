# Правила: Настраиваемые отчёты (Custom Reports)

Дополнение к `core_rules.md` для написания настраиваемых отчётов.
Читать вместе с `core_rules.md`.

---

## Контекст выполнения

Глобальные переменные, доступные в скрипте отчёта:

| Переменная | Описание |
|---|---|
| `id` | ID текущего документа отчёта (тип XmElem, **не** примитивный int) |
| `columns` | Коллекция столбцов для **текущего прогона** (сбрасывается при следующем открытии) |
| `initiator_person_id` | ID пользователя, запустившего отчёт |
| `TopElem` | **Недоступен** в контексте настраиваемого отчёта |

---

## Формирование данных

Скрипт должен вернуть (`return`) массив объектов. Поле `PrimaryKey` задаёт, какой объект открывается при клике на строку.

---

## Программное сохранение столбцов

- `columns` — только для текущего прогона (сбрасывается при каждом открытии).
- `docSelf.TopElem.columns` — персистентная коллекция, сохраняется в документе.
- Столбцы добавлять **одновременно в оба** массива, затем вызвать `docSelf.Save()`.
- `id` передавать в `tools.open_doc` **напрямую**, без `OptInt` — иначе большой bigint-ID теряется.

```javascript
function fAddColumn(aRoots, sTitle, sValue)
{
    var oCol;
    for (oRoot in aRoots)
    {
        oCol               = oRoot.AddChild();
        oCol.flag_formula  = true;
        oCol.column_title  = sTitle;
        oCol.column_value  = "ListElem." + sValue;
        oCol.datatype      = "string";
    }
}

// В точке генерации столбцов:
var docSelf = tools.open_doc(id);          // id — напрямую, без OptInt!
columns.Clear();
docSelf.TopElem.columns.Clear();
var aRoots = [columns, docSelf.TopElem.columns];

fAddColumn(aRoots, "Название", "obj_name");
fAddColumn(aRoots, "Дата",     "finish_date");
// ...

docSelf.Save();
```

---

## Паттерн разовой генерации столбцов

Флаг `bGenerateColumns = true` в начале скрипта. После первого успешного запуска вручную ставить в `false`.

```javascript
var bGenerateColumns = false; // поставить true для первого прогона

function main()
{
    if (bGenerateColumns)
    {
        // генерация столбцов (см. выше)
    }
    // ... формирование данных ...
}
```
