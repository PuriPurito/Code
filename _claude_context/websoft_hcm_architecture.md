# Архитектура платформы WebTutor / Websoft HCM

## Общее описание

Websoft HCM — корпоративная HR-система на базе платформы WebTutor (разработчик: Datex).
Документация: http://docs.datex.ru/ | Неофициальная: https://webtutor-docs.firebaseapp.com

---

## Хранение данных (ДВОЙНЫЕ ТАБЛИЦЫ)

**КЛЮЧЕВОЙ ФАКТ**: каждый объект хранится одновременно в двух таблицах:

| Тонкая таблица (ед.ч.) | Толстая таблица (мн.ч.) |
|------------------------|------------------------|
| `collaborator` | `collaborators` |
| `request` | `requests` |
| `event` | `events` |
| `position` | `positions` |
| `subdivision` | `subdivisions` |
| `education_plan` | `education_plans` |
| `assessment_appraise` | `assessment_appraises` |

**Тонкая таблица** (ед.ч.) — 3 столбца: `id`, дата изменения, XML-строка со ВСЕМИ полями.
**Толстая таблица** (мн.ч.) — много столбцов, денормализованные популярные поля (кэш).

**Правило**: для XQuery-запросов использовать ТОЛСТУЮ таблицу (мн.ч.) — она быстрее,
не требует разбора XML. Тонкую таблицу использовать только если нужны редкие поля.

---

## Типы артефактов

### 1. Агент (Agent)
Фоновый процесс, запускается по расписанию или вручную.

**JS-агент:**
```javascript
// Файл: agents/my_agent.js
var sLogName = String('my_agent')
var bLogActive = true

function main() {
    // Основная логика
}

EnableLog(sLogName, bLogActive)
try { main() }
catch(e) { AlertLog(e) }
EnableLog(sLogName, false)
```

**C# агент:**
```csharp
namespace Agents {
    class ServerAgent {
        [EntryPoint("Agents.ServerAgent.Run")]
        public static void Run(JsObject parameters, DatexGlobal dg) {
            // parameters["param_name"] — доступ к параметрам агента
        }
    }
}
```

---

### 2. Remote Action
API-метод, вызывается из клиентского кода. Возвращает JsObject.

**JS Remote Action:**
```javascript
// Типичная структура
var oResult = {}
try {
    var iID = OptInt(PARAMETERS.id)
    // ... логика ...
    oResult.success = true
    oResult.data = someData
} catch(e) {
    oResult.success = false
    oResult.error = String(e)
}
RESULT = EncodeJson(oResult)
```

**C# Remote Action:**
```csharp
namespace RemoteActions {
    class RemoteAction {
        [EntryPoint("RemoteActions.RemoteAction.Run")]
        public static JsObject Run(JsObject parameters, DatexGlobal dg) {
            using var retObject = dg.CreateJsObject(false);
            try {
                retObject["ERROR"] = 0;
                retObject["MESSAGE"] = "";
                // ... логика ...
                retObject["RESULT"] = someValue;
            } catch (Exception ex) {
                retObject["ERROR"] = 1;
                retObject["MESSAGE"] = ex.Message;
            }
            return retObject;
        }
    }
}
```

---

### 3. Remote Collection
Провайдер данных для форм и списков. Возвращает массив объектов.

**C# Remote Collection:**
```csharp
namespace Collections {
    class RemoteCollection {
        [EntryPoint("Collections.RemoteCollection.Run")]
        public static JsObject Run(JsObject parameters, DatexGlobal dg) {
            using var retObject = dg.CreateJsObject(false);
            try {
                retObject["ERROR"] = 0;
                var xarrItems = dg.XQuery("for $elem in collaborators return $elem").Execute();
                // ... маппинг результатов ...
                retObject["RESULT"] = items.ToArray();
            } catch (Exception ex) {
                retObject["ERROR"] = 1;
                retObject["MESSAGE"] = ex.Message;
            }
            return retObject;
        }
    }
}
```

---

### 4. Библиотека (.js)
Переиспользуемые функции, подключаются к другим скриптам.

```javascript
// Функции объявляются глобально
function getSubordinatesForPerson(collaborator_id, boss_type_code) {
    // ...
}

function AlertLog(log, type) {
    if(type != undefined) {
        alert(String(type) + ': ' + String(log))
    } else {
        alert(String(log))
    }
}
```

---

### 5. SPXML-INLINE-FORM (XML-форма)
Декларативное описание структуры данных формы.

```xml
<?xml version="1.0" encoding="utf-8"?>
<SPXML-INLINE-FORM>
    <USE FORM="//wtv/ms_general.xmd"/>

    <app_form1>
        <field_name TYPE="string" />
        <count TYPE="integer" />
        <is_active TYPE="bool" />

        <items>
            <item MULTIPLE="1" PRIMARY-KEY="id" TEMP="1">
                <id TYPE="integer"/>
                <name TYPE="string"/>
                <value TYPE="string"/>
            </item>
        </items>
    </app_form1>
</SPXML-INLINE-FORM>
```

**Атрибуты:**
- `TYPE` — тип данных: string, integer, bool, date, real
- `MULTIPLE="1"` — массив элементов
- `PRIMARY-KEY` — уникальный ключ в массиве
- `TEMP="1"` — временные данные, не сохраняются в БД
- `INHERIT TYPE` — наследование структуры

---

## XQuery синтаксис (JS-диалект)

### Базовый запрос
```javascript
// for ... in ... where ... return ...
aResult = ArraySelectAll(tools.xquery(
    "for $elem in collaborators " +
    "where $elem/is_dismiss = false() " +
    "return $elem"
))
```

### Условия (where)
```javascript
// Равенство
"where $elem/status = 'active'"
// Сравнение чисел
"where $elem/person_id = " + iPerson
// Несколько условий
"where $elem/status = 'active' and $elem/is_dismiss = false()"
// true/false как функции
"where $elem/active = true()"
// Поиск в тексте
"where StrContains($elem/fullname, 'Иванов')"
// Вхождение в список
"where MatchSome($elem/id, (" + aIDs.join(',') + "))"
// doc-contains — полнотекстовый поиск
"where doc-contains($elem/id, '" + sIDList + "')"
```

### Возврат (return)
```javascript
// Весь объект
"return $elem"
// Конкретные поля
"return $elem/Fields('id', 'fullname', 'person_id')"
// Одно поле
"return $elem/id"
```

### Сортировка и ограничение
```javascript
"for $elem in collaborators order by $elem/fullname return $elem"
```

### ForeignElem — получение связанного объекта
```javascript
// $elem/field_id — ID связанного объекта
// $elem/field_id.ForeignElem — сам объект
"return $elem/person_id.ForeignElem/fullname"
```

### SQL внутри XQuery (быстрее)
```javascript
aResult = ArraySelectAll(XQuery("sql: " +
    "SELECT c.id, c.fullname FROM collaborators c " +
    "WHERE c.is_dismiss = 0 AND c.id = " + SqlLiteral(iID)
))
```

---

## C# API (Datex.Global)

### JsObject — базовый тип данных
```csharp
// Доступ к полям
var name = (string?)jsObj["name"];
var id = (long?)jsObj["id"];
var isActive = (bool?)jsObj["is_active"];

// Итерация по коллекции
var items = jsObj["items"].AsIEnumerableJsObject();
foreach (var item in items) { }

// ForeignElem
var foreignName = (string?)jsObj["person_id"].ForeignElem["fullname"];
```

### DatexGlobal dg — главный API объект
```csharp
// XQuery запрос
var results = dg.XQuery("for $elem in collaborators return $elem").Execute();

// Открыть документ
var doc = dg.OpenDoc(id, "collaborator");

// Создать новый документ
var newDoc = dg.OpenNewDoc("x-local://wtv/wtv_collaborator.xmd");
newDoc["field"] = value;
newDoc.BindToDb();
newDoc.Save();

// Текущий пользователь
var curUserID = (long?)dg.Request.Session["Env"]["curUserID"];

// Прокси для JS-функций
dg.Proxy.tools.create_notification(typeID, personID);

// Создать JsObject
using var obj = dg.CreateJsObject(false);
```

---

## Специальные URL-схемы

```
x-local://wtv/wtv_collaborator.xmd     — шаблон документа сотрудника
x-local://components/my_comp/file.js   — файл компонента
x-local://wt/web/script.js             — скрипт веб-части
```

---

## Структура компонентов

```
components/
  my_component/
    spxml/
      agents/             ← JS или C# агенты
      remote_actions/     ← API-методы
      remote_collections/ ← Провайдеры данных
      libs/               ← Библиотеки и .csproj
      *.xml               ← Конфигурация, пакеты
      *.js                ← Скрипты инициализации
```

---

## Зависимости C# проекта (.csproj)

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>
  <ItemGroup>
    <Reference Include="Datex.Global">
      <HintPath>$(WebTutorServerDir)\dotnetcore\core\windows\Datex.Global.dll</HintPath>
    </Reference>
    <Reference Include="Datex.Core">
      <HintPath>$(WebTutorServerDir)\dotnetcore\core\windows\Datex.Core.dll</HintPath>
    </Reference>
    <Reference Include="Datex.log">
      <HintPath>$(WebTutorServerDir)\dotnetcore\core\windows\Datex.log.dll</HintPath>
    </Reference>
  </ItemGroup>
</Project>
```
