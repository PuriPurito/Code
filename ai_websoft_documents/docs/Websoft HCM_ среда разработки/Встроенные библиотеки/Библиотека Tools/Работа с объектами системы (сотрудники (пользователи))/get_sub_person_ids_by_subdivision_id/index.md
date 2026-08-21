## get_sub_person_ids_by_subdivision_id

Возвращает массив ID сотрудников указанного подразделения и дочерних подразделений.

_Синтаксис:_  
      **tools.get\_sub\_person\_ids\_by\_subdivision\_id (<subdivision\_id>\[, <sConditionsParam>\])**

_Аргументы:_  
     <subdivision\_id> (обязательный)  
     Тип: **Целое число**. ID подразделения, сотрудников которого нужно найти.  
     <sConditionsParam> (необязательный)  
     Тип: **Строка**. Дополнительное условие для поиска сотрудников. Будет добавлено в условия поиска с использованием and в запросе.

_Возвращаемое значение:_  
      Тип: **Массив**. Массив ID сотрудников указанного подразделения и дочерних подразделений.

_Пример 1:_

`_// Пусть в системе имеется подразделение «IT отдел»   // Находим программно подразделение «IT отдел» с помощью_ _функции tools.get_doc_by_key_   _oSub = tools.get_doc_by_key ( 'subdivision', 'name', 'IT отдел' );    alert ( 'Найдено подразделение ' + oSub.TopElem.name + ' с идентификационным номером ' + oSub.TopElem.id ); // на экран выводится информация об отобранном подразделении_`

`_arrPerson = tools.get_sub_person_ids_by_subdivision_id ( oSub.TopElem.id );   alert ( ArrayCount (arrPerson) ); // возвращает количество элементов массива    str = 'Сотрудники подразделения ' + oSub.TopElem.name + ': \n';   for (elem in arrPerson) // выводит информацию об элементах массива   {        // Находим сотрудника по его ID с помощью_ _функции tools.get_doc_by_key_        _iCollab_id = elem;        oCollab = tools.get_doc_by_key ( 'collaborator', 'id', iCollab_id );        str = str + ' - ' + oCollab.TopElem.fullname + '\n';   }   alert ( str );_`

_Пример 2:_  
      `__ids_array = tools.get_sub_person_ids_by_subdivision_id ( _subdivision_id, sConditionsParam );         arrPersonID = tools.get_sub_person_ids_by_subdivision_id ( curNodeID );_`

---

