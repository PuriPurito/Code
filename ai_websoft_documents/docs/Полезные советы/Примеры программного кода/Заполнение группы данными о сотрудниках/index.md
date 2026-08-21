## Заполнение группы данными о сотрудниках

// Создание объекта с указанным названием, если такого объекта нет в системе  
aObj = XQuery("for $elem in groups where $elem/name = 'Solaris' return $elem"); // Выполнение запроса по поиску объекта (группы) с указанным названием  
iCountObj = ArrayCount(aObj); // возвращает 1, если объект с указанным именем имеется, или 0, если объект с указанным именем отсутствует  
  
if ( iCountObj == 0 ) {  
                alert ("Создается новый объект с указанным названием");  
                docGroup = OpenNewDoc( 'x-local://wtv/wtv\_group.xmd' ); // Создание новой группы. wtv\_group.xmd - это шаблон, который используется для создания групп  
                docGroup.BindToDb( DefaultDb ); // Привязка документа к базе данных  
                docGroup.TopElem.name='Solaris'; // Задание имени группы  
                docGroup.TopElem.code='Sol1'; // Задание кода группы  
                docGroup.Save(); // Сохранение новой созданной группы  
}  
else  
                alert ("Объект с указанным названием уже имеется в системе");  
  
aObj = XQuery("for $elem in groups where $elem/name = 'Solaris' return $elem"); // Повторное выполнение запроса по поиску группы с указанным названием (теперь такая группа уже определенно имеется в системе)  
oGroup = ArrayFirstElem (aObj); // Массив aObj включает в себя один объект. Данный оператор выделяет объект из массива  
docGroup = tools.open\_doc( oGroup.id ); // Открытие документа группы с указанным названием  
docGroup.TopElem.collaborators.Clear(); // Удаление из группы имеющихся в ней записей  
aCollaborators = XQuery("for $elem in collaborators where contains($elem/fullname, 'Иванов') return $elem"); // Выполнение запроса по поиску сотрудников, отвечающих определенным условиям  
// В результате формируется массив записей сотрудников, отвечающих указанным условиям  
  
for (oCollaborator in aCollaborators)  
{  
      docGroup.TopElem.collaborators.AddChild().collaborator\_id = oCollaborator.id; // Размещение всех элементов массива в группу (заполнение группы отобранными элементами)  
      // (при наличии большого количества сотрудников для выполнения данной операции требуется подождать некоторое время)  
}  
  
docGroup.Save(); // Сохранение измененной группы в базу

---

