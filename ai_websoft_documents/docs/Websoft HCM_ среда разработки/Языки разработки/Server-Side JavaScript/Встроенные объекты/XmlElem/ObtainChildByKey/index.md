## ObtainChildByKey

Ищет дочерний элемент с заданным ключевым элементом. Если не находит, то добавляет новый дочерний элемент, и его ключевому полю присваивает заданное значение. Возвращает ранее существовавший или вновь созданный дочерний элемент.

_Аргументы_  
keyValue   - значение ключа (Any).  
keyName   - имя элемента, являющегося ключом (String). Необязательный аргумент. Если имя ключа не указано, используется первичный ключ.

_Результат_  
Объект XmlElem

_Пример:_

catInformer = blocks.ObtainChildByKey( sTabBlockId );  
sFormFields = teRemoteAction.wvars.ObtainChildByKey( 'form\_fields' ).value;  
addPATaks = oDocPA.TopElem.tasks.ObtainChildByKey(newTaskID, "task\_id");

---

