## GetWikiArticleTree

Метод предназначен для получения списка статей определенного типа, содержащихся в вики-базе.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libWiki", "GetWikiArticleTree", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя пять параметров:  
     _iWikiBaseID_ – ID вики-базы (целое число).    
     _iWikiArticleTypeID_ – ID типа вики-статьи (целое число).   
     _sSearch_ – критерий поиска (строка) (необязательный). По умолчанию – пустая строка (без использования критерия поиска).  
     _bShowFullData_ – показывать расширенные данные (булево) (необязательный). По умолчанию – _false_.  
     _iMaxLenDesc_ – максимальная длина возвращаемого описания (целое число) (необязательный). По умолчанию – _100_. 

_Возвращаемые значения:_  
      Тип: **Объект Выборка**. Содержит перечень статей определенного типа, содержащихся в вики-базе, а также ряд дополнительных атрибутов:  
\- _array_ \- массив статей в вики-базе (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID статьи вики (целое число);  
     _name_ – название статьи (строка);  
     _create\_date_ – дата формирования статьи (дата);  
     _author\_name_ – ФИО автора (строка);  
     _tags_ – теги (метки) (строка);  
     _image\_url_ – относительная ссылка на изображение (строка);  
     _link_ – относительная ссылка на карточку статьи (строка);  
     _desc_ – описание отобранной статьи (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется вики-база с кодом 'WikiBase1'    // Находим программно указанную вики-базу с помощью функции_ _tools.get_doc_by_key_   _oWB = tools.get_doc_by_key ( 'wiki_base', 'code', 'WikiBase1' );   alert ( 'Найдена вики-база ' + oWB.TopElem.name + ' с идентификационным номером ' + oWB.DocID ); // на экран выводится информация о вики-базе_`

`_// Пусть в системе имеется тип вики-статьи с кодом 'WikiArtType1'    // Находим программно указанный тип вики-статьи с помощью функции tools.get_doc_by_key   oWA_type = tools.get_doc_by_key ( 'wiki_article_type', 'code', 'WikiArtType1' );   alert ( 'Найден тип вики-статьи ' + oWA_type.TopElem.name + ' с идентификационным номером ' + oWA_type.DocID ); // на экран выводится информация о типе вики-статьи_`

`_iWBID = oWB.TopElem.id;   iWA_typeID = oWA_type.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWiki", "GetWikiArticleTree", [OptInt (iWBID), OptInt (iWA_typeID)]);_`  
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6821181243535342491,  
        "name": "Первая вики-статья",  
        "create\_date": null,  
        "link": "view\_doc.html?mode=wiki\_base&object\_id=6821181243535342491",  
        "author\_name": "",  
        "tags": "",  
        "image\_url": ""  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется вики-база с кодом 'WikiBase1'    // Находим программно указанную вики-базу с помощью функции_ _tools.get_doc_by_key_   _oWB = tools.get_doc_by_key ( 'wiki_base', 'code', 'WikiBase1' );   alert ( 'Найдена вики-база ' + oWB.TopElem.name + ' с идентификационным номером ' + oWB.DocID ); // на экран выводится информация о вики-базе_`

`_// Пусть в системе имеется тип вики-статьи с кодом 'WikiArtType1'    // Находим программно указанный тип вики-статьи с помощью функции tools.get_doc_by_key   oWA_type = tools.get_doc_by_key ( 'wiki_article_type', 'code', 'WikiArtType1' );   alert ( 'Найден тип вики-статьи ' + oWA_type.TopElem.name + ' с идентификационным номером ' + oWA_type.DocID ); // на экран выводится информация о типе вики-статьи_`

`_iWBID = oWB.TopElem.id;   iWA_typeID = oWA_type.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWiki", "GetWikiArticleTree", [OptInt (iWBID), OptInt (iWA_typeID)]);_`  
  
`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество статей = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_create_date = q.create_date;        str = str + 'res_create_date = ' + res_create_date + '\n';        res_author_name = q.author_name;        str = str + 'res_author_name = ' + res_author_name + '\n';        res_tags = q.tags;        str = str + 'res_tags = ' + res_tags + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';_`  
  
     `_alert ( str );_`  
`_}   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`  

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libWiki", "GetWikiArticleTree", [ iWikiBaseID, iWikiArticleTypeID, sSearch, bShowFullData ]).array;_`

---

