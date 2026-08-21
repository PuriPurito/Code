## GetEducationMethodRequests

Метод предназначен для получения списка заявок, поданных на прохождение учебной программы.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEducationMethodRequests", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iEventID_ – ID мероприятия (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень заявок, поданных на прохождение учебной программы, а также ряд дополнительных атрибутов:  
\- _array_ \- массив заявок, поданных на прохождение учебной программы (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID заявки (целое число);  
     _person\_fullname_ – ФИО сотрудника, подавшего заявку (строка);  
     _create\_date_ – дата формирования заявки (дата);  
     _status_ – статус заявки (строка);  
     _link_ – относительная ссылка на карточку заявки (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется учебная программа «Английский язык»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Английский язык' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе_`

`_iEduMethodID = oEdMeth.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEducationMethodRequests", [OptInt (iEduMethodID)]);      // Проверьте наличие заявок, поданных на прохождение учебной программы: Учебный центр - Карточка учебной программы - Заявки   // Если заявки отсутствуют, добавьте заявку, нажав на соответствующую кнопку.      // Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_  
{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 5373901041188231318,  
        "person\_fullname": "Васильева Людмила Петровна",  
        "create\_date": "2009-08-26T16:56:26+00:00",  
        "status": "Активная",  
        "link": "view\_doc.html?mode=request&object\_id=5373901041188231318"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется учебная программа «Английский язык»   // Находим указанную учебную программус помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Английский язык' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе_`

`_iEduMethodID = oEdMeth.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetEducationMethodRequests", [OptInt (iEduMethodID)]);      // Проверьте наличие заявок, поданных на прохождение учебной программы: Учебный центр - Карточка учебной программы - Заявки   // Если заявки отсутствуют, добавьте заявку, нажав на соответствующую кнопку.      bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество заявок = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_// * @property {bigint} id        // * @property {string} person_fullname        // * @property {date} create_date        // * @property {string} status        // * @property {string} link_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_person_fullname = q.person_fullname;        str = str + 'res_person_fullname = ' + res_person_fullname + '\n';         res_create_date = q.create_date;        str = str + 'res_create_date = ' + res_create_date + '\n';         res_status = q.status;        str = str + 'res_status = ' + res_status + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';_`

     `_alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEducation", "GetEducationMethodRequests", [OptInt (iEduMethodID, curObjectID)]).array;_`

---

