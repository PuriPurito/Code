## GetLectorResponses

Метод предназначен для получения списка отзывов на работу преподавателя.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetLectorResponses", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iLectorID_ – ID преподавателя (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень отзывов на работу преподавателя, а также ряд дополнительных атрибутов:  
\- _array_ \- массив отзывов на работу преподавателя (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID отзыва (целое число);  
     _person\_fullname_ – ФИО сотрудника, оставившего отзыв (строка);  
     _create\_date_ – дата создания отзыва (дата);  
     _link_ – относительная ссылка на отзыв (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

Для корректной работы метода необходимо указывать ID объекта Преподаватель (из каталога lectors), а не ID сотрудника (даже, если преподаватель является сотрудником организации).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется преподаватель Петрова Светлана Ивановна   // Находим программно преподавателя Петрову С.И. с помощью функции_ _tools.get_doc_by_key_   oLect = tools.get_doc_by_key ( 'lector', 'lector_fullname', 'Петрова Светлана Ивановна' );   alert ( 'Найден преподаватель ' + oLect.TopElem.lector_fullname + ' с идентификационным номером ' + oLect.DocID ); // на экран выводится информация об отобранном преподавателе` 

`_iLectorID = oLect.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetLectorResponses", [OptInt (iLectorID)]);_`

`_// Проверьте наличие отзывов на учебные активности, проводимые преподавателем: Учебный центр - Карточка отзыва – ссылка на преподатателя (отзыв дожен иметь_ _тип объекта_ _"**Преподаватель [lector]"**).   // Если указанные отзывы отсутствуют, сформируйте новый отзыв._`  
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6821181243535342473,  
        "person\_fullname": "Васильева Людмила Петровна",  
        "create\_date": "2020-07-30T20:41:21+00:00",  
        "link": ""  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется преподаватель Петрова Светлана Ивановна   // Находим программно преподавателя Петрову С.И. с помощью функции_ _tools.get_doc_by_key_   oLect = tools.get_doc_by_key ( 'lector', 'lector_fullname', 'Петрова Светлана Ивановна' );   alert ( 'Найден преподаватель ' + oLect.TopElem.lector_fullname + ' с идентификационным номером ' + oLect.DocID ); // на экран выводится информация об отобранном преподавателе       iLectorID = oLect.TopElem.id;`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetLectorResponses", [OptInt (iLectorID)]);_`

`_// Проверьте наличие отзывов на учебные активности, проводимые преподавателем: Учебный центр - Карточка отзыва – ссылка на преподатателя (отзыв дожен иметь_ _тип объекта_ _"**Преподаватель [lector]"**).   // Если указанные отзывы отсутствуют, сформируйте новый отзыв._`  
  
`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество отзывов = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_// * @property {bigint} id        // * @property {string} person_fullname        // * @property {date} create_date        // * @property {string} link_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_person_fullname = q.person_fullname;        str = str + 'res_person_fullname = ' + res_person_fullname + '\n';         res_create_date = q.create_date;        str = str + 'res_create_date = ' + res_create_date + '\n';         res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';_`

     `_alert ( str );   }_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEducation", "GetLectorResponses", [OptInt (iLectorID, curObjectID)]).array;_`

---

