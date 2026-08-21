# Правила: Удалённые действия (Remote Actions)

Дополнение к `core_rules.md` для написания удалённых действий.
Читать вместе с `core_rules.md`.

---

## 1. Контракт выполнения

Каждое удалённое действие обязано установить три глобальные переменные и обернуть `main()` в `try...catch`:

```javascript
var sLogName = "Название действия";

// ... функции AlertLog, main, вспомогательные ...

EnableLog(sLogName, true);
try
{
    RESULT  = main();
    ERROR   = 0;
    MESSAGE = "OK";
}
catch (e)
{
    ERROR   = 1;
    MESSAGE = String(e);
    RESULT  = { command: "alert", msg: MESSAGE, msg_type: "error" };
    AlertLog(e);
}
EnableLog(sLogName, false);
```

- `ERROR` — `0` = успех, `1` = ошибка.
- `MESSAGE` — текст ошибки (при `ERROR = 0` можно `"OK"`).
- `RESULT` — объект с командой для фронтенда (см. раздел 3).

---

## 2. Доступ к WVARS

WVARS — переменные, переданные в удалённое действие. Они существуют как глобальные переменные скрипта, но при обращении к **незаявленному** wvar выбрасывается исключение.
✅ **Всегда читать через `try...catch`**:

```javascript
function GetWvarCommand()
{
    try { return String(command); }
    catch (e) { return ""; }
}

function GetWvarFormFields()
{
    try { return String(form_fields); }
    catch (e) { return ""; }
}

function GetObjectIdFromWvars()
{
    iObjectID = undefined;
    try { iObjectID = OptInt(OBJECT_ID); }
    catch (e) { iObjectID = undefined; }

    if (iObjectID == undefined)
    {
        try
        {
            sSelectedIds = String(SELECTED_OBJECT_IDS);
            if (!IsEmptyValue(sSelectedIds))
            {
                aSelectedIds = sSelectedIds.split(";");
                if (ArrayOptFirstElem(aSelectedIds) != undefined)
                    iObjectID = OptInt(ArrayOptFirstElem(aSelectedIds));
            }
        }
        catch (e2) {}
    }
    return iObjectID;
}
```

**Зарезервированные wvars** (заполняются платформой):

| wvar | Описание |
|---|---|
| `OBJECT_ID` | ID объекта, на котором вызвано действие |
| `SELECTED_OBJECT_IDS` | Список ID через `;` (при множественном выборе) |
| `command` | Служебный — `ms_tools` ставит `"submit_form"` при возврате из формы |
| `form_fields` | Служебный — `ms_tools` передаёт JSON-массив заполненных полей формы |

---

## 3. Команды RESULT (при запуске через ms_tools.eval_remote_action)

| Команда | Назначение |
|---|---|
| `display_form` | Показать форму с полями. Поля и кнопки задаются в `form_fields` и `buttons`. |
| `close_form` | Закрыть форму. Опциональный `confirm_result` задаёт следующее действие. |
| `alert` | Показать сообщение. Поле `msg_type`: `"error"`, `"info"`, `"success"`. |
| `reload_page` | Перезагрузить страницу (используется внутри `confirm_result`). |

Пример `close_form` с перезагрузкой страницы:
```javascript
return {
    command: "close_form",
    msg: "Данные успешно сохранены.",
    confirm_result: { command: "reload_page" }
};
```

---

## 4. Структура display_form

```javascript
return {
    command:     "display_form",
    title:       "Заголовок диалога",
    message:     "Пояснение для пользователя.",
    form_fields: aFields,   // массив объектов-полей
    buttons:     aButtons   // массив объектов-кнопок
};
```

**Кнопки** (`buttons`):
```javascript
// Кнопка «Отмена» — всегда добавлять первой
{ name: "CANCEL_BUTTON", type: "cancel", label: "Отмена",    submit_type: "cancel" }

// Кнопка перехода к следующему шагу
{ name: "NEXT_BUTTON",   type: "submit", label: "Далее",     submit_type: "next" }

// Финальная кнопка сохранения
{ name: "SAVE_BUTTON",   type: "submit", label: "Сохранить", submit_type: "save" }
```

---

## 5. Типы полей form_fields

Тип передаётся в поле `type` каждого объекта массива `form_fields`. Список подтверждён анализом `ms_tools.xml`:

| `type` | Описание |
|---|---|
| `string` | Однострочный ввод текста |
| `hidden` | Скрытое поле (для передачи состояния между шагами) |
| `heading` | Заголовок / разделитель без ввода |
| `paragraph` | Текстовый блок без ввода |
| `date` | Выбор даты |
| `integer` | Числовой ввод |
| `bool` | Чекбокс / булево |
| `text` | Многострочный текст (`richtext: true` → richtext-редактор) |
| `foreign_elem` | Выбор объекта из каталога (требует `catalog`) |
| `list` | Выбор нескольких значений |
| `combo` | Выпадающий список (enum/справочник) |

❌ **НЕ существует тип `catalog`** — это ошибочный вариант. Для выбора из каталога использовать `foreign_elem`.

**Атрибуты поля `foreign_elem`**:
```javascript
{
    name:       "subdivision_id",
    type:       "foreign_elem",
    catalog:    "subdivision",         // ✅ catalog (не catalog_name!)
    label:      "Подразделение",
    value:      "123",                 // ID выбранного объекта (строка)
    query_qual: "$elem/parent_id = 0", // доп. фильтр XQuery (опционально)
    mandatory:  true
}
```

> `ms_tools.xml` читает оба варианта — сначала `catalog`, потом fallback `catalog_name`. ✅ Использовать `catalog`.

---

## 6. Многошаговые формы (wizard-паттерн)

**Принцип**: состояние между шагами передаётся через `hidden`-поля в `form_fields`. Текущий шаг хранится в поле `__step__`.

**Поток выполнения**:
1. Первый вызов (`command != "submit_form"`) → вернуть `display_form` с шагом 1.
2. Последующие вызовы (`command == "submit_form"`) → прочитать `form_fields`, определить `__step__`, вернуть следующий шаг или сохранить.

```javascript
function main()
{
    iCollabID = GetObjectIdFromWvars();
    sCommand  = GetWvarCommand();

    // Первый вызов — показать шаг 1
    if (sCommand != "submit_form")
    {
        oBaseValues = GetCurrentValues(iCollabID);
        return BuildStepResult("step_one", oBaseValues);
    }

    // Последующие вызовы — обработать возврат формы
    oFormValues = ParseFormFieldsToValues();
    oBaseValues = GetCurrentValues(iCollabID);
    oValues     = MergeValues(oBaseValues, oFormValues);
    sStep       = String(oValues.GetOptProperty("__step__", "step_one"));

    if (sStep == "step_one")
        return BuildStepResult("step_two", oValues);

    if (sStep == "step_two")
    {
        SaveData(iCollabID, oValues);
        return { command: "close_form", confirm_result: { command: "reload_page" } };
    }

    throw "Неизвестный шаг: " + sStep;
}
```

**Передача состояния** — каждый шаг должен передать значения предыдущих шагов через `hidden`-поля:
```javascript
function AddHidden(aFields, sName, xValue)
{
    aFields.push({
        name:  sName,
        type:  "hidden",
        value: xValue == undefined ? "" : String(xValue)
    });
}

// В каждом следующем шаге:
AddHidden(aFields, "__step__",       "step_two");
AddHidden(aFields, "subdivision_id", iSubdivisionID);
// ... все накопленные значения предыдущих шагов
```

**Парсинг form_fields** — ms_tools возвращает JSON-массив объектов `{name, value}`:
```javascript
function ParseFormFieldsToValues()
{
    oValues        = {};
    sRawFormFields = GetWvarFormFields();
    if (IsEmptyValue(sRawFormFields))
        return oValues;

    aFormFields = ParseJson(sRawFormFields);
    if (aFormFields == undefined || ObjectType(aFormFields) != "JsArray")
        return oValues;

    for (oField in aFormFields)
    {
        sName = String(oField.GetOptProperty("name", ""));
        if (!IsEmptyValue(sName))
            oValues.SetProperty(sName, oField.GetOptProperty("value", ""));
    }
    return oValues;
}
```
