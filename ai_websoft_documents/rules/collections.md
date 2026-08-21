# Правила: Выборки (Collections)

Дополнение к `core_rules.md` для написания выборок.
Читать вместе с `core_rules.md`.

---

## Структура файла выборки

Обязательные глобальные переменные **в начале файла**:

```javascript
ERROR   = 0;   // 0 — успех, 1 — ошибка
MESSAGE = "";  // текст ошибки
RESULT  = [];  // итоговый массив строк

var sLogName = "Название выборки";

function AlertLog(log)
{
    var sLog = log;
    var logType = ObjectType(log);
    if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem'))
        sLog = tools.object_to_text(log, 'json');
    LogEvent(sLogName, sLog);
}

function main()
{
    // логика формирования RESULT
    // return aResult;
}

try
{
    RESULT = main();
}
catch (e)
{
    ERROR   = 1;
    MESSAGE = String(e);
    AlertLog(e);
}
```

---

## Параметры выборки

Параметры доступны через объект `Parameters`:
```javascript
var iPersonId = OptInt(Parameters.person_id);
var sFilter   = String(Parameters.filter_value);
```

---

## Формат RESULT

`RESULT` — массив объектов, где каждый объект — одна строка таблицы. Ключи объекта = имена столбцов.

✅ **Обязательно**: каждый объект должен содержать поле `id` — уникальный идентификатор строки. Без него выборка работает некорректно.

```javascript
aResult.push({
    id:          iObjectId,   // обязательное поле
    object_name: sName,
    finish_date: dDate,
    status:      sStatus
});
```
