## GetObjectCatalogs

Метод предназначен для получения списка прикрепленных объектов.

В качестве аргумента необходимо выбрать объект, у которого имеются ссылки на другие объекты. 

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libMain", "GetObjectCatalogs", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя два параметра:  
     _iObjectID_ – ID объекта, имеющего ссылки на другие объекты (целое число).   
     _sCatalogName_ – каталог, в котором производится поиск прикрепленных объектов (строка). Если данный параметр имеет значение null, то возвращаются прикрепленные объекты из всех каталогов. 

_Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень прикрепленных объектов, а также ряд дополнительных атрибутов:  
\- _array_ \- массив прикрепленных объектов (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID прикрепленного объекта (целое число);  
     _name_ – название прикрепленного объекта (строка);  
     _type_ – тип прикрепленного объекта (строка);  
     _link_ – относительная ссылка на карточку прикрепленного объекта (строка);  
     _image\_url_ – относительная ссылка на изображение (строка);  
     _comment_ – комментарий (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetObjectCatalogs", [OptInt (iEventID), 'collaborator']);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 3050438886317795229,  
        "name": "Васильева Людмила Петровна",  
        "type": "Сотрудник",  
        "link": "view\_doc.html?mode=collaborator&object\_id=3050438886317795229",  
        "image\_url": "/person\_icon.html?id=3050438886317795229",  
        "comment": ""  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetObjectCatalogs", [OptInt (iEventID), 'collaborator']);_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество прикрепленных объектов = " + ArrayCount (RESULT));   alert (EncodeJson(oRes));_`

`_for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_type = q.type;        str = str + 'res_type = ' + res_type + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';        res_image_url = q.image_url;        str = str + 'res_image_url = ' + res_image_url + '\n';        res_comment = q.comment;        str = str + 'res_comment = ' + res_comment + '\n';_`

     `_alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

---

