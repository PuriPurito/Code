## merge_text_array

Преобразует массив или объект в строку указанного формата (json, xml).

Входные параметры:

\_aDataPARAM (variant) массив array или объект (object) для преобразования.

\_sName (string) необязательный по умолчанию null. Если не null, то параметр указывает название тега (для XML) или свойства (json), в который будут заключены данные, полученные из \_aDataPARAM.

\_bObj (bool) флаг true – преобразуется объект, false – преобразуется массив.

\_sFormatPARAM (string) необязательный по умолчанию XML. Возможны два значения (json, xml). Задает формат возвращаемой строки.

Возвращаемый результат – строка (string) полученная из массива или объекта.

Пример вызова:

**return tools.merge\_text\_array(\_aPairs, (\_sFormatPARAM == 'json' ? null: \_sNamePARAM), false, \_sFormatPARAM);**

**return tools.merge\_text\_array(\_aSubPairs, null, (\_iObjType == 1 || \_iObjType == 2), \_sFormatPARAM);**

---

