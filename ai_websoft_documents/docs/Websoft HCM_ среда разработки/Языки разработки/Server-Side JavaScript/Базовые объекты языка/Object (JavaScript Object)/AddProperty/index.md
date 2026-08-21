## AddProperty

Метод объекта. Добавляет в объект (JavaScript Object) новый атрибут и присваивает ему значение.

Аргументы  
_<arg1>_ \- наименование атрибута (string)  
_<arg2>_ - значение атрибута (variant)

Результат  
_undefined_

  
Пример 1

Parameters.AddProperty( \_param.name, \_value );

Пример 2:

var obj = new Object(); // создание нового объекта  
obj.AddProperty( 'param1', 1); // добавление в объект атрибута param1 со значением 1  
obj.AddProperty( 'param2', 2); // добавление в объект атрибута param2 со значением 2  
anyObj1 = obj.GetOptProperty('param1', false); // выдает значение атрибута или второй аргумент (в данном случае - false), если такого атрибута нет  
anyObj2 = obj.GetOptProperty('param2', false);  
anyObj3 = obj.GetOptProperty('param3', false);  
alert (anyObj1); // выдает значение атрибута - 1   
alert (anyObj2); // выдает значение атрибута - 2  
alert (anyObj3); // выдает false, так как такого атрибута нет

alert (obj.HasProperty('param1')); // выдает true, так как такой атрибут есть  
alert (obj.HasProperty('param3')); // выдает false, так как такого атрибута нет

obj.SetProperty( 'param1', 0); // изменение значения атрибута param1   
anyObj1 = obj.GetOptProperty('param1', false); // выдает значение атрибута или второй аргумент (в данном случае - false), если такого атрибута нет  
alert (anyObj1); // выдает новое значение атрибута - 0

---

