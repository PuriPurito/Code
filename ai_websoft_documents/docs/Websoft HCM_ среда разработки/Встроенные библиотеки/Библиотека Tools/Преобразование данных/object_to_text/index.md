## object_to_text

Преобразует объект в строку указанного формата (json, xml).

Входные параметры:

_objectPARAM_ (object) объект (object) для преобразования.

_sFormatPARAM_ (string). Возможны два значения (json, xml). Задает формат возвращаемой строки.

_iMaxDepthPARAM_ (int) необязательный по умолчанию 0. Глубина дочерних свойств объекта, до которой можно спускаться. Должна быть не больше 5.

Примечание: Ранее использовался четвертый параметр:  
sName (string) необязательный. Параметр указывает название тега (для XML), в который будут заключены данные, полученные из \_vObjectPARAM. По умолчанию <value></value>.  
В настоящее время этот параметр не применяется.

Возвращаемый результат – строка (string) полученная из объекта.

Примеры вызова:

**docElem.TopElem.result = tools.object\_to\_text(RESULT, 'json');**       

  
**\_query\_str = "for $elem in collaborators where $elem/fullname ='Васильева Людмила Петровна' return $elem"; // предполагается, что в системе имеется сотрудник 'Васильева Людмила Петровна'  
personArray = XQuery(\_query\_str); // выполнение запроса по поиску сотрудника  
personArray1 = ArrayFirstElem (personArray); // на всякий случай, выбирается первый элемент массива  
doc = OpenDoc (UrlFromDocID (personArray1.id)); // открытие документа объекта  
alert ( tools.object\_to\_text (doc.TopElem, 'xml') ); // вывод на экран данных документа объекта в формате XML, глубина 0  
alert ( tools.object\_to\_text (doc.TopElem, 'json') ); // вывод на экран данных документа объекта в формате JSON, глубина 0**

---

