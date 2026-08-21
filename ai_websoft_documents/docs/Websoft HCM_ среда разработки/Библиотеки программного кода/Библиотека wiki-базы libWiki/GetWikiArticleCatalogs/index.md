## GetWikiArticleCatalogs

Метод **GetWikiArticleCatalogs** предназначен для получения списка объектов, ссылки на которые прикреплены к вики-статье.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libWiki", "GetWikiArticleCatalogs", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя два параметра:  
     _iWikiArticleID_ – ID вики-статьи (целое число).    
     _sCatalogName_ – название каталога, содержащего прикрепленные объекты (строка). 

_Возвращаемые значения:_  
      Тип: **Объект Выборка**. Содержит перечень объектов, ссылки на которые прикреплены к вики-статье, а также ряд дополнительных атрибутов:  
\- _array_ \- массив прикрепленных объектов.  
     Атрибуты отдельного объекта:  
     _id_ – ID объекта (целое число);  
     _name_ – название объекта (строка);  
     _type_ – тип прикрепленного элемента (строка, имеющая значение "_file_");  
     _link_ – относительная ссылка на карточку заявки (строка);  
     _image\_url_ – относительная ссылка на изображение (строка);  
     _comment_ – комментарий (строка).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется вики-статья с кодом 'WikiArt1'    // Находим программно указанную вики-статью с помощью функции_ _tools.get_doc_by_key_   _oWA = tools.get_doc_by_key ( 'wiki_article', 'code', 'WikiArt1' );   alert ( 'Найдена вики-статья ' + oWA.TopElem.name + ' с идентификационным номером ' + oWA.DocID ); // на экран выводится информация о вики-статье_`

`_iWAID = oWA.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWiki", "GetWikiArticleCatalogs", [OptInt (iWAID), 'collaborator' ]); // в данном случае к вики-статье присоединены ссылки на объекты из каталога «Сотрудник»_`  
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6327975429225669154,  
        "name": "Наблюдатов Иван Петрович",  
        "type": "Сотрудник",  
        "link": "view\_doc.html?mode=collaborator&object\_id=6327975429225669154",  
        "image\_url": "/person\_icon.html?id=6327975429225669154",  
        "comment": ""  
    }, {  
        "id": 3050438886317795229,  
        "name": "Васильева Людмила Петровна",  
        "type": "Сотрудник",  
        "link": "view\_doc.html?mode=collaborator&object\_id=3050438886317795229",  
        "image\_url": "/person\_icon.html?id=3050438886317795229",  
        "comment": ""  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется вики-статья с кодом 'WikiArt1'    // Находим программно указанную вики-статью с помощью функции_ _tools.get_doc_by_key_   _oWA = tools.get_doc_by_key ( 'wiki_article', 'code', 'WikiArt1' );   alert ( 'Найдена вики-статья ' + oWA.TopElem.name + ' с идентификационным номером ' + oWA.DocID ); // на экран выводится информация о вики-статье_`

`_iWAID = oWA.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWiki", "GetWikiArticleCatalogs", [OptInt (iWAID), 'collaborator' ]); // в данном случае к вики-статье присоединены ссылки на объекты из каталога «Сотрудник»_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество объектов = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_type = q.type;        str = str + 'res_type = ' + res_type + '\n';        res_comment = q.comment;        str = str + 'res_comment = ' + res_comment + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';        res_image_url = q.image_url;        str = str + 'res_image_url = ' + res_image_url + '\n';_`  
  
       `_alert ( str );_`  
`_}   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`  

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libWiki", "GetWikiArticleCatalogs", [ OptInt (iWikiArticleID, curObjectID ), sCatalogName ]).array;_`

---

