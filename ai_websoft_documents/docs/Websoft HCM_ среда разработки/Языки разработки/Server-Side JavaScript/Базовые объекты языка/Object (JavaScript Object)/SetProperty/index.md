## SetProperty

Метод объекта. Устанавливает (изменяет) значение атрибута объекта. Если атрибут отсутствует, добавляет его. Смотри также **GetOptProperty**  и **GetProperty**.

  
Аргументы  
_<propName> -_ наименование атрибута объекта.  
_<propVal> -_ значение атрибута объекта.

  
Результат  
Различные типы данных

  
Пример 1:

oParam.SetProperty( 'insert\_params', sInsertParams );

Пример 2:

var obj = new Object(); // создание нового объекта  
obj.SetProperty( 'param1', 1); // добавление в объект атрибута param1 со значением 1  
obj.SetProperty( 'param2', 2); // добавление в объект атрибута param2 со значением 2  
anyObj1 = obj.GetOptProperty('param1', false); // выдает значение атрибута или второй аргумент (в данном случае - false), если такого атрибута нет  
anyObj2 = obj.GetOptProperty('param2', false);  
anyObj3 = obj.GetOptProperty('param3', false);  
alert (anyObj1); // выдает значение атрибута - 1   
alert (anyObj2); // выдает значение атрибута - 2  
alert (anyObj3); // выдает false, так как такого атрибута нет  
anyObj4 = obj.GetProperty('param3'); // ошибка "Элемент не найден" с прекращением выполнения программного кода

---

