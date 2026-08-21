# Личный стиль кода — WebSoft HCM

Этот файл составлен на основе анализа реального кода из ActiveProjects.
Используй эти паттерны при генерации нового кода.

---

## Соглашения по именованию переменных

Строгая система префиксов:

| Префикс | Тип | Примеры |
|---------|-----|---------|
| `i` | integer / ID | `iPlanID`, `iDays`, `iCounter`, `iObjectFuncID` |
| `s` | string | `sLogName`, `sText`, `sObjectIDs`, `sCollIDs` |
| `b` | boolean | `bReturn`, `bLogActive`, `bResultSend`, `bCheck` |
| `o` | object ({}литерал) | `oDoc`, `oList`, `oForm`, `oResult`, `oStep` |
| `a` / `arr` | array | `aCache`, `aRes`, `aPlans`, `arrObjects` |
| `doc` | document (tools.open_doc) | `docRequest`, `docPlan`, `docEducationPlan` |
| `te` | TopElem (XML-элемент) | `teElem`, `tePlan`, `tePerson` |
| `_` | локальная / временная | `_arrFormFields`, `_sName`, `_wvar` |
| `cur` | текущий контекст | `curPA`, `curUserID`, `curObject` |

**Поля объектов** — snake_case: `person_id`, `is_dismiss`, `assessment_appraise_id`
**Переменные в коде** — camelCase с префиксом: `iPlanID`, `sLogName`

---

## Структура агентов

### Стандартная структура JS-агента

```javascript
// Объявление вспомогательных функций — в начале файла
function AlertLog(e, type) {
    if(type != undefined) {
        alert(String(type) + ': ' + String(e))
    } else {
        alert(String(e))
    }
}

function fCheckDate(dDate, iDays) {
    var dToday = DateNewTime(Date(), 0, 0, 0)
    var dCheck = DateOffset(DateNewTime(dDate, 0, 0, 0), iDays * 86400)
    return DateToRawSeconds(dCheck) == DateToRawSeconds(dToday)
}

// Главная функция
function main() {
    // основная логика
}

// Точка входа — в конце файла
var sLogName = String('agent_name')
var bLogActive = true

EnableLog(sLogName, bLogActive)
try {
    main()
} catch(e) {
    AlertLog(e)
}
EnableLog(sLogName, false)
```

---

## XQuery паттерны

### Простой запрос
```javascript
aResult = ArraySelectAll(tools.xquery(
    "for $elem in collaborators " +
    "where $elem/is_dismiss = false() " +
    "return $elem"
))
```

### Запрос с параметром (конкатенация строк)
```javascript
aResult = ArraySelectAll(tools.xquery(
    "for $elem in assessment_appraises " +
    "where $elem/person_id = " + iPersonID + " " +
    "and $elem/workflow_state != 'end' " +
    "return $elem"
))
```

### Запрос со списком ID через MatchSome
```javascript
// MatchSome — проверяет вхождение поля в список
aSubdivision = ArraySelectAll(tools.xquery(
    "for $elem in person_hierarchys " +
    "where MatchSome(collaborator_id," +
    ArrayMerge(aPlans, "This.person_id", ",") + ") " +
    "return $elem"
))
```

### SQL внутри XQuery
```javascript
// Используется для сложных запросов или когда нужна скорость
aResult = ArraySelectAll(XQuery("sql: " +
    "SELECT c.id, c.fullname, c.email " +
    "FROM collaborators c " +
    "INNER JOIN subdivisions s ON c.subdivision_id = s.id " +
    "WHERE c.is_dismiss = 0 " +
    "AND c.id = " + SqlLiteral(iCollID)
))
```

### Получение первого элемента
```javascript
teElem = ArrayOptFirstElem(tools.xquery(
    "for $elem in collaborators where $elem/id = " + iID + " return $elem"
))
if(teElem != undefined) {
    // безопасный доступ
}
```

---

## Работа с документами

### Открытие и изменение
```javascript
docObject = tools.open_doc(iID)
if(docObject != undefined) {
    teElem = docObject.TopElem
    teElem.field_name = sValue
    teElem.person_id = iPersonID
    docObject.Save()
}
```

### Создание нового документа
```javascript
docNew = tools.new_doc_by_name('education_plan')
if(docNew != undefined) {
    teNew = docNew.TopElem
    teNew.name = sName
    teNew.person_id = iPersonID
    teNew.start_date = dStartDate
    docNew.BindToDb()
    docNew.Save()
    iNewID = docNew.DocID
}
```

---

## Функции для работы с массивами

```javascript
// Все элементы
aResult = ArraySelectAll(xqueryOrCollection)

// Первый или undefined (безопасно)
teFirst = ArrayOptFirstElem(array)

// Поиск по ключу (безопасно, не бросает исключение)
oFound = ArrayOptFindByKey(aCache, sKey, 'field_name')

// Поиск по ключу — все совпадения
aFiltered = ArraySelectByKey(array, sValue, 'field_name')

// Трансформация массива
aIDs = ArrayExtract(aCollaborators, "This.person_id")

// Слияние в строку для XQuery
sIDs = ArrayMerge(aPlans, "This.person_id", ",")

// Итерация
for(oItem in aItems) {
    // oItem — текущий элемент
}

// Объединение массивов
aAll = ArrayUnion(aArray1, aArray2)

// Пересечение
aCommon = ArrayIntersect(aArray1, aArray2)

// Уникальные значения
aDistinct = ArraySelectDistinct(array, 'field_name')
```

---

## Кэширование документов

```javascript
// Паттерн кэша для избежания повторных обращений к БД
var aCache = []

function fGetDocFromCache(iID, sCatalogName) {
    var oCatalogCache = ArrayOptFindByKey(aCache, sCatalogName, 'catalog_name')
    if(oCatalogCache == undefined) {
        oCatalogCache = {"catalog_name": sCatalogName, "docs": []}
        aCache.push(oCatalogCache)
    }
    var oDocCache = ArrayOptFindByKey(oCatalogCache.docs, iID, 'id')
    if(oDocCache == undefined) {
        var docTemp = tools.open_doc(iID)
        if(docTemp != undefined) {
            oDocCache = {"id": iID, "doc": docTemp}
            oCatalogCache.docs.push(oDocCache)
        }
    }
    return (oDocCache != undefined) ? oDocCache.doc : undefined
}
```

---

## Обработка ошибок

### В агентах — логирование
```javascript
try {
    main()
} catch(e) {
    AlertLog(e)
    // или
    alert('Ошибка: ' + e)
}
```

### В workflow — блокировка действия
```javascript
var wf_problems = []

if(teElem.field == undefined || teElem.field == '') {
    wf_problems.push("Не заполнено обязательное поле")
}

if(condition) {
    wf_problems.push("Нарушено условие")
}

if(ArrayOptFirstElem(wf_problems) != undefined) {
    BRUTE_MESSAGE = EncodeJson({
        "type": "alert",
        "text": wf_problems.join('<br>'),
        "text_ok": "Ок"
    })
    WORKFLOW_ACTION_BREAK = true
}
```

---

## Специальные переменные платформы

### Контекст выполнения
```javascript
curObject          // Текущий объект (в обработчиках событий)
curPA              // Текущий профиль/анкета
curUserID          // ID текущего пользователя
objDoc             // Текущий документ
objDocSec          // Текущий документ (второй)
```

### Параметры входа
```javascript
PARAMETERS         // Параметры вызова remote action (объект)
SELECTED_OBJECT_IDS // Выбранные ID объектов (строка через запятую)
Param.param_name   // Параметры агента (из настроек)
```

### Системные API объекты
```javascript
tools              // Основное API (xquery, open_doc, new_doc и др.)
tools_web          // Web API
global_settings    // Глобальные настройки системы
lists              // Системные справочники
DefaultDb          // Прямое подключение к БД
ms_tools           // Инструменты сообщений/локализации
```

### Возвращаемые значения и управление
```javascript
RESULT = EncodeJson(oResult)          // Результат remote action
WORKFLOW_ACTION_BREAK = true          // Блокировка действия workflow
REDIRECT_TO_PA = iID                  // Перенаправление на профиль
RELOAD_PA = true                      // Перезагрузка текущего профиля
BRUTE_MESSAGE = EncodeJson({...})     // Показать alert пользователю
```

---

## Работа с датами

```javascript
// Сегодня в начале дня (00:00:00)
var dToday = DateNewTime(Date(), 0, 0, 0)

// Сдвиг даты на N дней (86400 секунд = 1 день)
var dFuture = DateOffset(dDate, iDays * 86400)

// Сравнение дат
if(DateToRawSeconds(dDate1) == DateToRawSeconds(dDate2)) { }
if(DateToRawSeconds(dDate) < DateToRawSeconds(dToday)) {
    // дата в прошлом
}

// Форматирование
var sDate = FormatDate(dDate, "DD.MM.YYYY")
```

---

## Работа с состояниями workflow

```javascript
// Типичный switch по состояниям
switch(String(oPlan.workflow_state)) {
    case '1_person':
        oListElem.person_1++
        break
    case '1_boss':
        oListElem.boss_before++
        break
    case '2_end':
        oListElem.end_before++
        break
    case '3_person':
        oListElem.person_3++
        break
    case '3_boss':
        oListElem.boss_3++
        break
    case '3_end':
        oListElem.end_3++
        break
}
```

---

## Формы с шагами (display_form)

```javascript
var oForm = {
    command: "display_form",
    title: "Заголовок формы",
    message: "Описание или инструкция",
    form_fields: [
        {
            name: "person_id",
            title: "Сотрудник",
            type: "catalog",
            catalog: "collaborator",
            required: true
        },
        {
            name: "comment",
            title: "Комментарий",
            type: "text",
            value: ""
        },
        {
            name: "date_field",
            title: "Дата",
            type: "date"
        }
    ],
    buttons: [
        { name: "cancel", label: "Отмена", type: "cancel" },
        { name: "submit", label: "Применить", type: "submit" }
    ]
}

// Получение значений после заполнения формы
function getParam(_arrFormFields, _sName) {
    var _oField = ArrayOptFindByKey(_arrFormFields, _sName, 'name')
    return (_oField != undefined) ? _oField.value : undefined
}

var iPersonID = OptInt(getParam(PARAMETERS.form_fields, 'person_id'))
var sComment = String(getParam(PARAMETERS.form_fields, 'comment'))
```

---

## Уведомления

```javascript
// Создать уведомление
tools.create_notification('notification_type_code', iPersonID)

// Создать уведомление с параметрами
tools.create_notification('notification_type_code', iPersonID, {
    param1: value1,
    param2: value2
})
```

---

## Работа с группами доступа

```javascript
// Добавить сотрудника в группу
var docGroup = tools.open_doc(iGroupID)
if(docGroup != undefined) {
    var teGroup = docGroup.TopElem
    var teNewMember = teGroup.members.ObtainChildByKey(iPersonID, 'collaborator_id')
    teNewMember.collaborator_id = iPersonID
    docGroup.Save()
}

// Удалить из группы
var docGroup = tools.open_doc(iGroupID)
if(docGroup != undefined) {
    var teGroup = docGroup.TopElem
    teGroup.members.DeleteChildByKey(iPersonID, 'collaborator_id')
    docGroup.Save()
}
```

---

## Комментарии

Все комментарии пишутся **на русском языке**:

```javascript
// Поиск подчиненных для данного руководителя
// Возвращает массив объектов с полями person_id, fullname
function getSubordinatesForPerson(collaborator_id, boss_type_code) {
    // Получаем иерархию подчиненности
    var aHierarchy = ArraySelectAll(tools.xquery(
        "for $elem in person_hierarchys " +
        "where $elem/boss_id = " + collaborator_id + " " +
        "return $elem"
    ))
    // Фильтруем по типу руководителя если задан
    if(boss_type_code != undefined && boss_type_code != '') {
        aHierarchy = ArraySelectByKey(aHierarchy, boss_type_code, 'boss_type_code')
    }
    return aHierarchy
}
```

---

## Проверки и защитное программирование

```javascript
// Всегда проверяй на undefined перед использованием
if(docElem != undefined) {
    teElem = docElem.TopElem
    // ... безопасный доступ
}

// Проверка пустого значения
if(!IsEmptyValue(sValue)) {
    // значение не пустое
}

// Безопасное преобразование типов
iID = OptInt(rawValue)         // undefined если не число
sVal = String(rawValue)        // всегда строка
dDate = OptDate(rawValue)      // undefined если не дата

// Проверка наличия свойства у объекта
if(!oData.HasProperty("field_name")) {
    oData.field_name = defaultValue
}

// Проверка непустого массива
if(ArrayOptFirstElem(aItems) != undefined) {
    // массив не пустой
}
```
