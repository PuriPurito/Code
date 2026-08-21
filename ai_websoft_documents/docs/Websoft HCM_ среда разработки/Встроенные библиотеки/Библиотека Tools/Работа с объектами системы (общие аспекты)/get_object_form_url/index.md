## get_object_form_url

Возвращает путь до xmd формы каталога или объекта каталога.

Входные параметры:

sCatalogNameParam (string) – название каталога (без s на конце).

bIsCatalogParam (bool)  – флаг указывающий, нужно возвращать форму каталога (true), или форму объекта (false).

Возвращаемый результат – пусть до формы (string) начинающийся с «x-local:».

Пример вызова.

**sObjectFormUrl = tools.get\_object\_form\_url( fldSourceObjectElem.Name, false );**

---

