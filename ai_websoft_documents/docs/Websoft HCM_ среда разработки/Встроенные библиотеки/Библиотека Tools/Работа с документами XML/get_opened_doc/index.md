## get_opened_doc

Возвращает документ объекта, переданного в параметрах функции. Если свойство _Doc_ определено, то функция возвращает его значение. В противном случае функция открывает объект по идентификатору ID и возвращает значение _Doc_ открытого объекта.

_Синтаксис:_  
      **tools.get\_opened\_doc (<teObjectParam>)**

_Аргументы:_  
     _<teObjectParam> (обязательный)_  
      Тип: **TopElem**. TopElem объекта.

_Возвращаемое значение:_  
      Тип: **Объект XmlDoc**. Документ объекта или значение _null_.

_Пример 1:_

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна   // Находим программно сотрудника Васильеву Л.П. с помощью функции_ _tools.get_doc_by_key_   _oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник: ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.TopElem.id ); // на экран выводится информация об отобранном сотруднике_`

`_docObject = tools.get_opened_doc ( oCollab.TopElem );   alert (docObject.TopElem.Name); // вывод типа объекта (в данном случае - collaborator)   alert ( tools.object_to_text (docObject, 'xml') ); // преобразование XML-документа в строку_`

_Пример 2:_  
      `_docObject = tools.get_opened_doc ( Child(0).Parent );_`

---

