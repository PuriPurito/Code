## read_object

Преобразует строку в объект. Например, строку в формате json в объект. Или строку, содержащую XML, в объект.

Входные параметры:

sSomeObjectPARAM (stirng) строка в формате json или строка, содержащая XML.

Возвращаемый результат – полученный объекта (object).

Пример вызова:

**oUrlResult = tools.read\_object(call\_method(  'getSaveFileUrl', oParam, 'json' ));**

**oResult = tools.read\_object(sResult);**

---

