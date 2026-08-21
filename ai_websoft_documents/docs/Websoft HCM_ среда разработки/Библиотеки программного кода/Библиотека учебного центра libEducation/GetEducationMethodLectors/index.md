## GetEducationMethodLectors

Метод предназначен для получения списка преподавателей учебной программы.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEducationMethodLectors", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя два параметра:  
     _iEventID_ – ID мероприятия (целое число).    
     _bShowDismiss_ - Включает/выключает отображение уволенных сотрудников (булево). По умолчанию – _false_.

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень преподавателей учебной программы, а также ряд дополнительных атрибутов:  
\- _array_ \- массив преподавателей учебной программы (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID преподавателя (целое число);  
     _name_ – ФИО преподавателя (строка);  
     _link_ – относительная ссылка на карточку преподавателя (строка);  
     _image\_url_ – относительная ссылка на фотографию преподавателя (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется учебная программа «Английский язык»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Английский язык' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе_`

`_iEduMethodID = oEdMeth.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEducationMethodLectors", [OptInt (iEduMethodID), false]);_`  
  
`_// Проверьте наличие преподавателей учебной программы: Учебный центр - Карточка учебной программы - Преподаватели   // Если преподаватели отсутствуют, добавьте преподавателя, нажав на соответствующую кнопку._`  
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_      _Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`  
{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6327975429225669262,  
        "name": "Лезова Надежда Семеновна",  
        "image\_url": "/person\_icon.html?id=1105387902724063523",  
        "link": "view\_doc.html?mode=lector&object\_id=6327975429225669262"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется учебная программа «Английский язык»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Английский язык' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе_`

`_iEduMethodID = oEdMeth.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetEducationMethodLectors", [OptInt (iEduMethodID), false]);      // Проверьте наличие преподавателей учебной программы: Учебный центр - Карточка учебной программы - Преподаватели   // Если преподаватели отсутствуют, добавьте преподавателя, нажав на соответствующую кнопку.      bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество преподавателей = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_// * @property {bigint} id        // * @property {string} name        // * @property {string} image_url        // * @property {string} link_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_image_url = q.image_url;        str = str + 'res_image_url = ' + res_image_url + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';_`

     `_alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEducation", "GetEducationMethodLectors", [OptInt (iEduMethodID, curObjectID), bShowDismiss]).array;_`

---

