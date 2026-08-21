## GetWikiArticleChilds

Метод предназначен для получения списка дочерних/связанных статей для указанной статьи вики.

Для установления связи статей вики необходимо, чтобы в системе были определены типы связи (**Управление знаниями – Справочники – Тип wiki статьи**).  

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libWiki", "GetWikiArticleChilds", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя пять параметров:  
     _iWikiArticleID_ – ID вики-статьи (целое число).    
     _iWikiArticleCommunicationTypeID_ – ID типа связи вики-статьи (целое число).   
     _sStatus_ – статус wiki статьи (критерий поиска) (строка) (необязательный). По умолчанию – пустая строка (любой статус).   
     _bShowFullData_ – показывать расширенные данные (булево) (необязательный). По умолчанию – _false_.  
     _iMaxLenDesc_ – максимальная длина возвращаемого описания (целое число) (необязательный). По умолчанию – _100_. 

_Возвращаемые значения:Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень дочерних/связанных статей для указанной статьи вики, а также ряд дополнительных атрибутов:  
\- _array_ \- массив дочерних статей вики (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID статьи вики (целое число);  
     _name_ – название статьи (строка);  
     _create\_date_ – дата формирования статьи (дата);  
     _author\_name_ – ФИО автора (строка);  
     _tags_ – теги (метки) (строка);  
     _image\_url_ – относительная ссылка на изображение (строка);  
     _link_ – относительная ссылка на карточку статьи (строка);  
     _desc_ – описание дочерней статьи (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется вики-статья с кодом 'WikiArt1'    // Находим программно указанную вики-статью с помощью функции_ _tools.get_doc_by_key_   _oWA = tools.get_doc_by_key ( 'wiki_article', 'code', 'WikiArt1' );   alert ( 'Найдена вики-статья ' + oWA.TopElem.name + ' с идентификационным номером ' + oWA.DocID ); // на экран выводится информация о вики-статье_`

`_// Пусть в системе имеется тип связи вики-статьи с кодом 'WikiSv1'    // Находим программно указанный тип связи вики-статьи с помощью функции tools.get_doc_by_key   oWA_type_comm = tools.get_doc_by_key ( 'wiki_article_communication_type', 'code', 'WikiSv1' );   alert ( 'Найден тип связи вики-статьи ' + oWA_type_comm.TopElem.name + ' с идентификационным номером ' + oWA_type_comm.DocID ); // на экран выводится информация о типе связи вики-статьи_`

`_iWAID = oWA.TopElem.id;   iWA_type_commID = oWA_type_comm.TopElem.id;      // Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWiki", "GetWikiArticleChilds", [OptInt (iWAID), OptInt (iWA_type_commID)]);_`  
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6821181243535342492,  
        "name": "Вторая вики-статья",  
        "create\_date": null,  
        "link": "view\_doc.html?mode=wiki\_base&object\_id=6821181243535342492",  
        "author\_name": "",  
        "tags": "",  
        "image\_url": ""  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется вики-статья с кодом 'WikiArt1'    // Находим программно указанную вики-статью с помощью функции_ _tools.get_doc_by_key_   _oWA = tools.get_doc_by_key ( 'wiki_article', 'code', 'WikiArt1' );   alert ( 'Найдена вики-статья ' + oWA.TopElem.name + ' с идентификационным номером ' + oWA.DocID ); // на экран выводится информация о вики-статье_`

`_// Пусть в системе имеется тип связи вики-статьи с кодом 'WikiSv1'    // Находим программно указанный тип связи вики-статьи с помощью функции tools.get_doc_by_key   oWA_type_comm = tools.get_doc_by_key ( 'wiki_article_communication_type', 'code', 'WikiSv1' );   alert ( 'Найден тип связи вики-статьи ' + oWA_type_comm.TopElem.name + ' с идентификационным номером ' + oWA_type_comm.DocID ); // на экран выводится информация о типе связи вики-статьи_`

`_iWAID = oWA.TopElem.id;   iWA_type_commID = oWA_type_comm.TopElem.id;      // Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWiki", "GetWikiArticleChilds", [OptInt (iWAID), OptInt (iWA_type_commID)]);_`  
  
`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество статей = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_create_date = q.create_date;        str = str + 'res_create_date = ' + res_create_date + '\n';        res_author_name = q.author_name;        str = str + 'res_author_name = ' + res_author_name + '\n';        res_tags = q.tags;        str = str + 'res_tags = ' + res_tags + '\n';        res_image_url = q.image_url;        str = str + 'res_image_url = ' + res_image_url + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';_`  
  
       `_alert ( str );_`  
`_}   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`  

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libWiki", "GetWikiArticleChilds", [ OptInt (iWikiArticleID, curObjectID), iWikiArticleCommunicationTypeID ] ).array;_`

---

