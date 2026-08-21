## GetObjectFiles

Метод предназначен для получения списка материалов (файлов) по объекту.

В качестве аргумента необходимо выбрать объект, имеющий ссылки на материалы (файлы).

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libMain", "GetObjectFiles", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iObjectID_ – ID объекта, имеющего ссылки на материалы (файлы) (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень материалов (файлов) по объекту, а также ряд дополнительных атрибутов:  
\- _array_ \- массив материалов (файлов) (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID материала (файла) (целое число);  
     _name_ – название материала (строка);  
     _type_ \- тип материала (например, "file") (строка);  
     _size_ – размер файла (целое число);  
     _link_ – относительная ссылка на приложенный материал (строка);  
     \[_visibility_ – видимость файла (строка).\]

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии      iEventID = oEv.DocID;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetObjectFiles", [OptInt (iEventID)]);_`  
  
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
        "visibility": "all",  
        "link": "download\_file.html?file\_id=5373901041188231365"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии      iEventID = oEv.DocID;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libMain", "GetObjectFiles", [OptInt (iEventID)]);_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество файлов = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_type = q.type;        str = str + 'res_type = ' + res_type + '\n';        res_size = q.size;        str = str + 'res_size = ' + res_size + '\n';        res_visibility = q.visibility;        str = str + 'res_visibility = ' + res_visibility + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';_`

     `_alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

---

