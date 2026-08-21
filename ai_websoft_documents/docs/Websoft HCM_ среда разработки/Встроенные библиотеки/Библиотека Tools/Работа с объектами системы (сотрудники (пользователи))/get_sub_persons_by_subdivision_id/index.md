## get_sub_persons_by_subdivision_id

Возвращает массив каталожных записей сотрудников указанного подразделения и дочерних подразделений.

_Синтаксис:_  
      **tools.get\_sub\_persons\_by\_subdivision\_id (<subdivision\_id>\[,<sConditionsParam>\])**

_Аргументы:_  
     <subdivision\_id> (обязательный)  
     Тип: **Целое число**. ID подразделения, для которого производится поиск сотрудников.  
     <sConditionsParam> (необязательный)  
     Тип: **Строка**. Дополнительное условие для поиска сотрудников. Будет добавлено в условия поиска с использованием and в запросе.

_Возвращаемое значение:_  
      Тип: **Массив**. Массив каталожных записей сотрудников указанного подразделения и дочерних подразделений.

_Пример 1:_

`_// Пусть в системе имеется подразделение «IT отдел»   // Находим программно подразделение «IT отдел» с помощью_ _функции tools.get_doc_by_key_   _oSub = tools.get_doc_by_key ( 'subdivision', 'name', 'IT отдел' );    alert ( 'Найдено подразделение ' + oSub.TopElem.name + ' с идентификационным номером ' + oSub.TopElem.id ); // на экран выводится информация об отобранном подразделении_`

`_array = tools.get_sub_persons_by_subdivision_id ( oSub.TopElem.id );   alert ( ArrayCount (array) ); // возвращает количество элементов массива   str = 'В подразделении ' + oSub.TopElem.name + ' работают следующие сотрудники: \n';   for (elem in array) // выводит информацию об элементах массива   {        str = str + ' - ' + elem.fullname + '\n';   }   alert ( str );_`

_Пример 2:_  
      `_array = tools.get_sub_persons_by_subdivision_id ( ListElem.id );         _ids_array = tools.get_sub_persons_by_subdivision_id ( _subdivision_id, sConditionsParam );_`

---

