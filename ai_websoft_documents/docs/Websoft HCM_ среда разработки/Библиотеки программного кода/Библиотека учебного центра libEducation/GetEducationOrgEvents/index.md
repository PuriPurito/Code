## GetEducationOrgEvents

Метод предназначен для получения списка мероприятий, которые проводит обучающая организация.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEdu", "GetEducationOrgEvents", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя три параметра:  
     _iEduOrgID_ – ID обучающей организации (целое число).    
     _iUserID_ \- ID сотрудника (целое число).  
     _bUseTimezone_ \- учитывать часовые пояса (булево) (необязательный). Значение по умолчанию - false.

_Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень мероприятий, которые проводит указанная обучающая организация, а также ряд дополнительных атрибутов:  
\- _array_ \- массив мероприятий, проводимых обучающей организацией (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID мероприятия (целое число);  
     _code_ – код мероприятия (строка);  
     _name_ – название мероприятия (строка);  
     _education\_org\_name_ – название обучающей организации (строка);  
     _type\_name_ – название типа мероприятия (строка);  
     _is\_open_ – мероприятие является открытым/закрытым (булево);  
     _start\_date_ – начало мероприятия (дата);  
     _finish\_date_ – конец мероприятия (дата);  
     _person\_num_ – количество обучаемых (целое число).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере       // Пусть в системе имеется обучающая организация «Школа английского языка Корпоративного университета»   // Находим программно указанную организацию с помощью функции_ _tools.get_doc_by_key_`  
`_oEduOrg = tools.get_doc_by_key ( 'education_org', 'name', 'Школа английского языка Корпоративного университета' );   alert ( 'Найдена обучающая организация ' + oEduOrg.TopElem.name + ' с идентификационным номером ' + oEduOrg.DocID ); // на экран выводится информация об отобранной обучающей организации_` 

`_iEduOrgID = oEduOrg.TopElem.id;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEdu", "GetEducationOrgEvents", [OptInt (iEduOrgID)]);_`

`_// Проверьте наличие мероприятий, проводимых обучающей организацией: Учебный центр - Карточка обучающей организации - Мероприятия    // Если указанные мероприятия отсутствуют, добавьте мероприятие, нажав на кнопку "Новое мероприятие"_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_``      _Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`  
{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6821181243535342460,  
        "code": "Eng1",  
        "name": "Английский язык (мероприятие)",  
        "education\_org\_name": "Школа английского языка Корпоративного университета",  
        "type\_name": "Разовое мероприятие",  
        "is\_open": false,  
        "start\_date": "2020-07-21T09:00:00+00:00",  
        "finish\_date": "2020-07-21T10:00:00+00:00",  
        "person\_num": 2  
    },   
{  
        "id": 6821181243535342463,  
        "code": "",  
        "name": "Английский язык",  
        "education\_org\_name": "Школа английского языка Корпоративного университета",  
        "type\_name": "Учебная программа",  
        "is\_open": false,  
        "start\_date": "2020-07-21T09:00:00+00:00",  
        "finish\_date": "2020-07-21T10:00:00+00:00",  
        "person\_num": 3  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется обучающая организация «Школа английского языка Корпоративного университета»   // Находим программно указанную организацию с помощью функции_ _tools.get_doc_by_key_`  
`_oEduOrg = tools.get_doc_by_key ( 'education_org', 'name', 'Школа английского языка Корпоративного университета' );   alert ( 'Найдена обучающая организация ' + oEduOrg.TopElem.name + ' с идентификационным номером ' + oEduOrg.DocID ); // на экран выводится информация об отобранной обучающей организации_` 

`_iEduOrgID = oEduOrg.TopElem.id;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEdu", "GetEducationOrgEvents", [OptInt (iEduOrgID)]);_`

`_// Проверьте наличие мероприятий, проводимых обучающей организацией: Учебный центр - Карточка обучающей организации - Мероприятия    // Если указанные мероприятия отсутствуют, добавьте мероприятие, нажав на кнопку "Новое мероприятие"_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество мероприятий = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_// * @property {bigint} id        // * @property {string} code        // * @property {string} name        // * @property {string} education_org_name        // * @property {string} type_name        // * @property {boolean} is_open        // * @property {date} start_date        // * @property {date} finish_date        // * @property {int} person_num_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_code = q.code;        str = str + 'res_code = ' + res_code + '\n';        res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_education_org_name = q.education_org_name;        str = str + 'res_education_org_name = ' + res_education_org_name + '\n';        res_type_name = q.type_name;        str = str + 'res_type_name = ' + res_type_name + '\n';        res_is_open = q.is_open;        str = str + 'res_is_open = ' + res_is_open + '\n';        res_start_date = q.start_date;        str = str + 'res_start_date = ' + res_start_date + '\n';        res_finish_date = q.finish_date;        str = str + 'res_finish_date = ' + res_finish_date + '\n';        res_person_num = q.person_num;        str = str + 'res_person_num = ' + res_person_num + '\n';_`

     `_alert ( str );   }_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEdu", "GetEducationOrgEvents", [OptInt (iEduOrgID, curObjectID)]).array;_`

---

