## GetEducationMethodResponses

Метод предназначен для получения списка отзывов, оставленных пользователями на учебную программу.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEducationMethodResponses", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iEventID_ – ID мероприятия (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень отзывов, оставленных пользователями на учебную программу, а также ряд дополнительных атрибутов:  
\- _array_ \- массив отзывов, оставленных пользователями на учебную программу (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID отзыва (целое число);  
     _person\_fullname_ – ФИО автора отзыва (строка);  
     _create\_date_ – дата формирования отзыва (дата);  
     _link_ – относительная ссылка на карточку отзыва (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется учебная программа «Навыки строительства команды»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Навыки строительства команды' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе_`

`_iEduMethodID = oEdMeth.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEducationMethodResponses", [OptInt (iEduMethodID)]);_`

`_// Проверьте наличие отзывов на учебную программу: Учебный центр - Карточка учебной программы - Отзывы   // Если отзывы на учебную программу отсутствуют, сформируйте новый отзыв._`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_  
{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 5373901041188231315,  
        "person\_fullname": "Калинин Михаил Михайлович",  
        "create\_date": "2009-08-26T16:52:43+00:00",  
        "link": ""  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется учебная программа «Навыки строительства команды»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Навыки строительства команды' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе_`

`_iEduMethodID = oEdMeth.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetEducationMethodResponses", [OptInt (iEduMethodID)]);_`

`_// Проверьте наличие отзывов на учебную программу: Учебный центр - Карточка учебной программы - Отзывы   // Если отзывы на учебную программу отсутствуют, сформируйте новый отзыв._`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество отзывов = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_// * @property {bigint} id        // * @property {string} person_fullname        // * @property {date} create_date        // * @property {string} link_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_person_fullname = q.person_fullname;        str = str + 'res_person_fullname = ' + res_person_fullname + '\n';        res_create_date = q.create_date;        str = str + 'res_create_date = ' + res_create_date + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';_`

     `_alert ( str );   }_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`  

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEducation", "GetEducationMethodResponses", [OptInt (iEduMethodID, curObjectID)]).array;_`

---

