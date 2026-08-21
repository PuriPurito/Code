## extend_object

Добавляет свойства (properties) объекта-источника к свойствам объекта-получателя.

Примечание – Значения одноименных свойств объекта-получателя заменяются на соответствующие значения объекта-источника.

_Синтаксис:_  
      **tools.extend\_object (<oObjectRecipient>, <oObjectSource>)**

_Аргументы:_  
     <oObjectRecipient> (обязательный)  
     Тип: **Объект**. Объект-получатель.  
     <oObjectSource> (обязательный)  
     Тип: **Объект**. Объект-источник.

_Возвращаемое значение:_  
      Тип: **Объект**. Объект-получатель с добавлением свойств объекта-источника.

_Пример 1:_  
      `_objRecipient = {id:1, name:'test', }; // объект-получатель         objSource = {id:2, desc:'full description', value:123}; // объект-источник         tools.extend_object (objRecipient, objSource); // добавление свойств объекта-источника в объект-получатель         for (p in objRecipient) {                alert( p + '=' + objRecipient.GetProperty(p) ); // вывод на экран всех свойств объекта objRecipient         }_`  

_Пример 2:_  
      `_tools.extend_object (_vRedirectQuery, _oUrlQuery);_`

---

