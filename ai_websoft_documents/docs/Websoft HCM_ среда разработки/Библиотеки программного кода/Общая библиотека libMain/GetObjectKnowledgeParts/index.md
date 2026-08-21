## GetObjectKnowledgeParts

Метод предназначен для получения списка значений карты знаний по объекту..

В качестве аргумента необходимо выбрать объект, имеющий ссылки на значения карты знаний. 

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libMain", "GetObjectKnowledgeParts", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя три параметра:  
     _iObjectID_ – ID объекта, имеющего ссылки на значения карты знаний (целое число).    
     _iCurUserID_ – ID сотрудника (целое число).   
     _bShowOnlyAcknowledgement_ – показывать только подтвержденные значения (булево). По умолчанию – _true_. 

_Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень значений карты знаний по объекту, а также ряд дополнительных атрибутов:  
\- _array_ \- массив значений карты знаний (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID значения карты знаний (целое число);  
     _name_ – наименование значения карты знаний (строка);  
     _desc_ – описание (строка);  
     _class_ – классификатор значения карты знаний (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Данный агент должен быть выполнен на сервере    // Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна   // Находим программно сотрудника Васильеву Л.П. с помощью функции tools.get_doc_by_key   oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_iEventID = oEv.DocID;   iCollabID = oCollab.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libMain", "GetObjectKnowledgeParts", [OptInt (iEventID), OptInt (iCollabID), false]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6756124991377782878,  
        "name": "HR-автоматизация",  
        "desc": "",  
        "class": "Внедрение e-learning"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`  
 

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна   // Находим программно сотрудника Васильеву Л.П. с помощью функции tools.get_doc_by_key   oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_iEventID = oEv.DocID;   iCollabID = oCollab.DocID;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetObjectKnowledgeParts", [OptInt (iEventID), OptInt (iCollabID), false]);_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество значений карты знаний = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_desc = q.desc;        str = str + 'res_desc = ' + res_desc + '\n';        res_class = q.class;        str = str + 'res_class = ' + res_class + '\n';_`

     `_alert ( str );   }_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

---

