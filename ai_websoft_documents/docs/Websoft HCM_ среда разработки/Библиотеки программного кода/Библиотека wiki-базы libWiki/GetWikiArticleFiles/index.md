## GetWikiArticleFiles

Метод **GetWikiArticleFiles** предназначен для получения списка материалов (файлов) по указанной статье вики.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libWiki", "GetWikiArticleFiles", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iWikiArticleID_ – ID вики-статьи (целое число).  

_Возвращаемые значения::_  
      Тип: **Объект Выборка**. Содержит перечень материалов (файлов) по указанной статье вики, а также ряд дополнительных атрибутов:  
\- _array_ \- массив материалов (файлов) (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID материала (файла) (целое число);  
     _name_ – название файла (строка);  
     _type_ – тип материала (файла) (строка);  
     _link_ – относительная ссылка на материал (файл) (строка);  
     _size_ – размер файла (целое число).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется вики-статья с кодом 'WikiArt1'    // Находим программно указанную вики-статью с помощью функции_ _tools.get_doc_by_key_   _oWA = tools.get_doc_by_key ( 'wiki_article', 'code', 'WikiArt1' );   alert ( 'Найдена вики-статья ' + oWA.TopElem.name + ' с идентификационным номером ' + oWA.DocID ); // на экран выводится информация о вики-статье_`

`_iWAID = oWA.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ( "libWiki", "GetWikiArticleFiles", [ OptInt (iWAID) ]);_`  
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 5373901041188231365,  
        "name": "fox.jpg",  
        "type": "file",  
        "size": null,  
        "link": "download\_file.html?file\_id=5373901041188231365"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется вики-статья с кодом 'WikiArt1'    // Находим программно указанную вики-статью с помощью функции_ _tools.get_doc_by_key_   _oWA = tools.get_doc_by_key ( 'wiki_article', 'code', 'WikiArt1' );   alert ( 'Найдена вики-статья ' + oWA.TopElem.name + ' с идентификационным номером ' + oWA.DocID ); // на экран выводится информация о вики-статье_`

`_iWAID = oWA.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ( "libWiki", "GetWikiArticleFiles", [ OptInt (iWAID) ]);_`  
  
`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество файлов = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_type = q.type;        str = str + 'res_type = ' + res_type + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';        res_size = q.size;        str = str + 'res_size = ' + res_size + '\n';_`  
  
       `_alert ( str );_`  
`_}   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`  

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libWiki", "GetWikiArticleFiles", [ OptInt (iWikiArticleID, curObjectID) ]).array;_`

---

