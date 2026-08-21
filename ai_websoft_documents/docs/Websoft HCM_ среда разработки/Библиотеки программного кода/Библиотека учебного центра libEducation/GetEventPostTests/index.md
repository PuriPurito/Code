## GetEventPostTests

Метод предназначен для получения списка пост-тестов по мероприятию.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEventPostTests", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iEventID_ – ID мероприятия (целое число). 

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень пост-тестов по мероприятию, а также ряд дополнительных атрибутов:  
\- _array_ \- массив пост-тестов, которые были прикреплены к мероприятию (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID теста (целое число);  
     _name_ – название теста (строка);  
     _status_ – статус теста (строка);  
     _duration_ – продолжительность (в днях) (целое число);  
     _passing\_score_ – проходной балл (целое число);  
     _link_ – относительная ссылка на тест (строка);  
     _image\_url_ – относительная ссылка на картинку (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetEventPostTests", [OptInt (iEventID)]);   // Проверьте назначение пост-тестов по мероприятию: Учебный центр - Карточка мероприятия - Контрольные   // Если участникам мероприятия пост-тесты не назначены, произведите назначение, нажав на кнопку "Назначить пост-тесты участникам".   // Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 3240158765180627712,  
        "name": "Занимательная география",  
        "status": "Открытый",  
        "duration": 100,  
        "passing\_score": 3,  
        "link": "view\_doc.html?mode=assessment&object\_id=3240158765180627712",  
        "image\_url": "view\_doc.html?mode=assessment&object\_id=3240158765180627712"  
    }, {  
        "id": 5297803148692954893,  
        "name": "Тест по химии",  
        "status": "Открытый",  
        "duration": 30,  
        "passing\_score": 3,  
        "link": "view\_doc.html?mode=assessment&object\_id=5297803148692954893",  
        "image\_url": "view\_doc.html?mode=assessment&object\_id=5297803148692954893"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется мероприятие «Делегирование»   // Находим программно мероприятие с помощью функции_ _tools.get_doc_by_key_   _oEv = tools.get_doc_by_key ( 'event', 'name', 'Делегирование' );   alert ( 'Найдено мероприятие ' + oEv.TopElem.name + ' с идентификационным номером ' + oEv.TopElem.id ); // на экран выводится информация об отобранном мероприятии_`

`_iEventID = oEv.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetEventPostTests", [OptInt (iEventID)]);      // Проверьте назначение пост-тестов по мероприятию: Учебный центр - Карточка мероприятия - Контрольные   // Если участникам мероприятия пост-тесты не назначены, произведите назначение, нажав на кнопку "Назначить пост-тесты участникам".      bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество прикрепленных файлов = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';           // @property {bigint} id        // @property {string} name        // @property {number} duration        // @property {string} status        // @property {number} passing_score        // @property {string} link        // @property {string} image_url           res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';         res_duration = q.duration;        str = str + 'res_duration = ' + res_duration + '\n';        res_status = q.status;        str = str + 'res_status = ' + res_status + '\n';        res_passing_score = q.passing_score;        str = str + 'res_passing_score = ' + res_passing_score + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';         res_image_url = q.image_url;        str = str + 'res_image_url = ' + res_image_url + '\n';_`

     `_alert ( str );   }_`

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEducation", "GetEventPostTests", [OptInt (iEventID, curObjectID)]).array;_`

---

