## GetEducationOrgResponses

Метод предназначен для получения списка отзывов на работу обучающей организации.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEdu", "GetEducationOrgResponses", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iEduOrgID_ – ID обучающей организации (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень отзывов на работу обучающей организации:  
\- _array_ \- массив отзывов на работу обучающей организации (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID отзыва (целое число);  
     _person\_fullname_ – ФИО сотрудника, оставившего отзыв (строка);  
     _create\_date_ – дата создания отзыва (дата);  
     _link_ – относительная ссылка на отзыв (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере       // Пусть в системе имеется обучающая организация «Тренинговая компания»   // Находим программно указанную организацию с помощью функции_ _tools.get_doc_by_key_`  
`_oEduOrg = tools.get_doc_by_key ( 'education_org', 'name', 'Тренинговая компания' );   alert ( 'Найдена обучающая организация ' + oEduOrg.TopElem.name + ' с идентификационным номером ' + oEduOrg.DocID ); // на экран выводится информация об отобранной обучающей организации_`   
  
`_iEduOrgID = oEduOrg.TopElem.id;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEdu", "GetEducationOrgResponses", [OptInt (iEduOrgID)]);_`

`_// Проверьте наличие отзывов на учебные активности, проводимые преподавателем: Учебный центр - Карточка отзыва – ссылка на преподатателя (отзыв дожен иметь тип объекта "Обучающая организация [education_org]").   // Если указанные отзывы отсутствуют, сформируйте новый отзыв._`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`  
{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6821181243535342475,  
        "person\_fullname": "Жирова Антонина Васильевна",  
        "create\_date": "2020-07-30T21:01:39+00:00",  
        "link": ""  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется обучающая организация «Тренинговая компания»   // Находим программно указанную организацию с помощью функции_ _tools.get_doc_by_key_`  
`_oEduOrg = tools.get_doc_by_key ( 'education_org', 'name', 'Тренинговая компания' );   alert ( 'Найдена обучающая организация ' + oEduOrg.TopElem.name + ' с идентификационным номером ' + oEduOrg.DocID ); // на экран выводится информация об отобранной обучающей организации_`   
  
`_iEduOrgID = oEduOrg.TopElem.id;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEdu", "GetEducationOrgResponses", [OptInt (iEduOrgID)]);_`

`_// Проверьте наличие отзывов на учебные активности, проводимые преподавателем: Учебный центр - Карточка отзыва – ссылка на преподатателя (отзыв дожен иметь тип объекта "Обучающая организация [education_org]").   // Если указанные отзывы отсутствуют, сформируйте новый отзыв._`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество отзывов = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_// * @property {bigint} id        // * @property {string} person_fullname        // * @property {date} create_date        // * @property {string} link_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_person_fullname = q.person_fullname;        str = str + 'res_person_fullname = ' + res_person_fullname + '\n';         res_create_date = q.create_date;        str = str + 'res_create_date = ' + res_create_date + '\n';         res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';_`

     `_alert ( str );   }_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`  

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEdu", "GetEducationOrgResponses", [OptInt (iEduOrgID, curObjectID)]).array;_`

---

