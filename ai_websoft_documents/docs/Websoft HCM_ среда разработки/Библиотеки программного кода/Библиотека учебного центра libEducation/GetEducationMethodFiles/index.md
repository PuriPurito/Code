## GetEducationMethodFiles

Метод предназначен для получения списка файлов, приложенных к учебной программе.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEdu", "GetEducationMethodFiles", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iEduMethodID_ – ID учебной программы (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень файлов, приложенных к учебной программе, а также ряд дополнительных атрибутов:  
\- _array_ \- массив приложенных файлов (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID файла (целое число);  
     _name_ – имя файла (строка);  
     _type_ \- тип материала (например, "file") (строка);  
     _link_ – относительная ссылка на приложенный файл (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется учебная программа «Английский язык»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Английский язык' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе      iEduMethodID = oEdMeth.TopElem.id;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEdu", "GetEducationMethodFiles", [OptInt (iEduMethodID)]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_``      _Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6821181243535342478,  
        "name": "Global.Samples.cs",  
        "type": "file",  
        "size": 9671,  
        "link": "download\_file.html?file\_id=6821181243535342478"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется учебная программа «Английский язык»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_`  
`_oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Английский язык' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе      iEduMethodID = oEdMeth.TopElem.id;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEdu", "GetEducationMethodFiles", [OptInt (iEduMethodID)]);_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество файлов = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_type = q.type;        str = str + 'res_type = ' + res_type + '\n';        res_size = q.size;        str = str + 'res_size = ' + res_size + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';_`

     `_alert ( str );   }_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_``   `

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ( "libEdu", "GetEducationMethodFiles", [ OptInt (iEduMethodID, curObjectID) ]).array;_`

---

