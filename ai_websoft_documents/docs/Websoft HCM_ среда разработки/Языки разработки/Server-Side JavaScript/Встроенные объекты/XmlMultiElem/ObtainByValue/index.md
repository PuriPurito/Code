## ObtainByValue

Метод объекта. Ищет соответствующий множественный элемент с заданным значением. Если не находит, добавляет новый элемент и присваивает ему заданное значение. Возвращает ранее существовавший или вновь созданный дочерний элемент.

Аргументы:

     value   - значение элемента

Результат:

     Объект XmlElem

Примеры:  
  
candidate.profession\_id.ObtainByValue( 2054 );  
 

docResource.TopElem.role\_id.ObtainByValue(OptInt("0x65B0E892097F478A"));

  
question = OpenNewDoc('x-local://qti/qti\_item.xmd');  
question.BindToDb();  
question.TopElem.role\_id.ObtainByValue(OptInt(group\_id));

---

