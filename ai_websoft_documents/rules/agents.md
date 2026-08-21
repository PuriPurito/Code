# Правила: Агенты (Agents)

Дополнение к `core_rules.md` для написания агентов (плановых скриптов).
Читать вместе с `core_rules.md`.

---

## Параметры агента

Параметры агента доступны через глобальный объект `Param`:
```javascript
var iValue = OptInt(Param.iValue, 0);
var sName  = String(Param.sName);
```

---

## Параметры библиотек программного кода

```javascript
var libParam = tools.get_params_code_library('libMain');
var sVal = libParam.GetOptProperty('paramName');
```

---

## Структура файла агента

```javascript
var sLogName = "Название агента";

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
    // основная логика агента
}

// Запуск: лог включается ДО try, выключается ПОСЛЕ
EnableLog(sLogName, true);
try
{
    AlertLog("Агент " + sLogName + " начал работу");
    main();
    AlertLog("Агент " + sLogName + " завершил работу");
}
catch (e)
{
    AlertLog(e);
}
EnableLog(sLogName, false);
```
