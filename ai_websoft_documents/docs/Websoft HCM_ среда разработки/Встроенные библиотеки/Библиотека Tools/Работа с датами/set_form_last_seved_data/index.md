## set_form_last_seved_data

Разрешает установки даты сохранения (не modification\_date) для объектов каталога для последующего отслеживания версий объекта.

Входные параметры:

sCatalogNameParam (string)  –  название каталога без ‘s’ на конце.

bValueParam (bool)  – true размещать установку даты, false не разрешать.

Возвращаемый результат – нет.

Пример вызова:

**tools.set\_form\_last\_seved\_data( fldAdminAccessCatalogElem.PrimaryKey, true );**

---

