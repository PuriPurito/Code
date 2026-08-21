## set_field_to_form_upload_data

Добавляет поля в XML структуру (например, полученную функцией tools.get\_form\_upload\_data)  из указанного объекта. Применяется при создании лицензии на материалы библиотеки или формировании пакетов.

Входные параметры:  
fldFormTarget (XML) структура, в которую добавляют информацию.  
fldObjParam (XML) – либо XML структура из которой берется информация.  
oObjIDParam (int) необязательный, если передан fldObjParam – ID объекта.  
bInvariableParam (bool)

Возвращаемый результат  нет

Пример вызова.  
**tools.set\_field\_to\_form\_upload\_data( formDoc, access\_roles );**

---

