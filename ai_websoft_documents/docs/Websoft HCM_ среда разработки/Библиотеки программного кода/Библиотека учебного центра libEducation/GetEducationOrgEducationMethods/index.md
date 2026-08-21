## GetEducationOrgEducationMethods

Метод предназначен для получения списка учебных программ, которые проводит обучающая организация.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEducationOrgEducationMethods", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iEduOrgID_ – ID обучающей организации (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень учебных программ, которые проводит обучающая организация, а также ряд дополнительных атрибутов:  
\- _array_ \- массив учебных программ, которые проводит обучающая организация (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID учебной программы, похожей на текущую (целое число);  
     _name_ – название учебной программы (строка);  
     _type_ – тип прикрепленного объекта (строка, имеющая значение "org");  
     _object\_name_ – название объекта (строка);  
     _person\_num_ – количество участников (целое число);  
     _cost_ – стоимость (целое число);  
     _link_ – относительная ссылка на карточку учебной программы (строка).  
     _image\_url_ – относительная ссылка на изображение учебной программы (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере       // Пусть в системе имеется обучающая организация «Школа английского языка Корпоративного университета»   // Находим программно указанную организацию с помощью функции_ _tools.get_doc_by_key_`  
`_oEduOrg = tools.get_doc_by_key ( 'education_org', 'name', 'Школа английского языка Корпоративного университета' );   alert ( 'Найдена обучающая организация ' + oEduOrg.TopElem.name + ' с идентификационным номером ' + oEduOrg.DocID ); // на экран выводится информация об отобранной обучающей организации_` 

`_iEduOrgID = oEduOrg.TopElem.id;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEducationOrgEducationMethods", [OptInt (iEduOrgID)]);_`

`_// Проверьте наличие учебных программ, проводимых обучающей организацией: Учебный центр - Карточка обучающей организации – Учебная программа   // Если указанные учебные программы отсутствуют, добавьте учебную программу, нажав на кнопку "Новая учебная программа"_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_``      _Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`  
{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 182862116452969502,  
        "name": "Английский язык",  
        "type": "org",  
        "object\_name": "Школа английского языка Корпоративного университета",  
        "person\_num": null,  
        "cost": 0,  
        "link": "view\_doc.html?mode=education\_method&object\_id=182862116452969502",  
        "image\_url": "/images/education\_method.png"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется обучающая организация «Школа английского языка Корпоративного университета»   // Находим программно указанную организацию с помощью функции_ _tools.get_doc_by_key_`  
`_oEduOrg = tools.get_doc_by_key ( 'education_org', 'name', 'Школа английского языка Корпоративного университета' );   alert ( 'Найдена обучающая организация ' + oEduOrg.TopElem.name + ' с идентификационным номером ' + oEduOrg.DocID ); // на экран выводится информация об отобранной обучающей организации_` 

`_iEduOrgID = oEduOrg.TopElem.id;_`  
  
`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEducationOrgEducationMethods", [OptInt (iEduOrgID)]);_`

`_// Проверьте наличие учебных программ, проводимых обучающей организацией: Учебный центр - Карточка обучающей организации – Учебная программа   // Если указанные учебные программы отсутствуют, добавьте учебную программу, нажав на кнопку "Новая учебная программа"_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество учебных программ = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_type = q.type;        str = str + 'res_type = ' + res_type + '\n';        res_object_name = q.object_name;        str = str + 'res_object_name = ' + res_object_name + '\n';        res_person_num = q.person_num;        str = str + 'res_person_num = ' + res_person_num + '\n';        res_cost = q.cost;        str = str + 'res_cost = ' + res_cost + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';        res_image_url = q.image_url;        str = str + 'res_image_url = ' + res_image_url + '\n';_`

     `_alert ( str );   }_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEducation", "GetEducationOrgEducationMethods", [OptInt (iEduOrgID, curObjectID)]).array;_`

---

