## admin_access_copying

Копирует параметры доступа к объекту в другой объект.

_Синтаксис:_  
      **tools.admin\_access\_copying (<to\_obj\_id>\[, <to\_obj\_doc>\], <from\_obj\_id>\[, <from\_obj\_doc>\])**      или  
      **tools.admin\_access\_copying (\[<to\_obj\_id>\], <to\_obj\_doc>\[, <from\_obj\_id>\], <from\_obj\_doc>)** 

_Аргументы:_  
      _<to\_obj\_id> (обязательный; необязательный, если передан аргумент <to\_obj\_doc>)_  
      Тип: **Целое число**. ID объекта, в который нужно скопировать параметры доступа.  
      _<to\_obj\_doc> (необязательный)_  
      Тип: **TopElem**. TopElem объекта, в который нужно скопировать параметры доступа.  
      _<from\_obj\_id> (обязательный; необязательный, если передан аргумент <from\_obj\_doc>)_  
      Тип: **Целое число**. ID объекта, из которого нужно скопировать параметры доступа.  
      _<from\_obj\_doc> (необязательный)_  
      Тип: **TopElem**. TopElem объекта, из которого нужно скопировать параметры доступа.

_Возвращаемое значение:_  
      Производит копирование параметров доступа. Возвращаемое значение отсутствует.

_Пример:_  
     `_tools.admin_access_copying('', docEventResult.TopElem, '', topElem);        tools.admin_access_copying( null, requestDoc.TopElem, curObjectID, curObject );_`

---

