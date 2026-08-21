## GetEducationMethodCompoundPrograms

Метод предназначен для получения списка модульных программ, в которые входит учебная программа.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEducationMethodCompoundPrograms", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя четыре параметра:  
     _iEducationMethodID_ \- ID учебной программы (целое число).  
     _iRoleID_ \- ID категории с модульными программами (целое число).  
     _bAllowSelfAssignment_ \- отбор по признаку возможности самоназначения (булево).  
     _iPersonID_ \- ID обучающегося сотрудника (целое число) (необязательный).

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень модульных программ, в которые входит учебная программа, а также ряд дополнительных атрибутов:  
\- _array_ \- массив модульных программ, в которые входит учебная программа (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID модульной программы (целое число);  
     _name_ – название модульной программы (строка);  
     _link_ – относительная ссылка на модульную программу (строка);  
     _image\_url_ – относительная ссылка на изображение, связанное с модульной программой (строка).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется учебная программа «Английский язык»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Английский язык' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе_`

`_iEduMethodID = oEdMeth.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEducationMethodCompoundPrograms", [iEducationMethodID, iRoleID, bAllowSelfAssignment, iPersonID]);      // Проверьте наличие учебной программы в составе модульной программы: Учебный центр - Карточка модульной программы - Общие сведения   // Если учебная программа в составе модульной программы отсутствует, добавьте ее, нажав на соответствующую кнопку.      // Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_  
{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 6148914691236517214,  
        "name": "Корпоративный университет",  
        "link": "view\_doc.html?mode=compound\_program&object\_id=6148914691236517214",  
        "image\_url": "images/compound\_program.png"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется учебная программа «Английский язык»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Английский язык' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе_`

`_iEduMethodID = oEdMeth.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetEducationMethodCompoundPrograms", [iEducationMethodID, iRoleID, bAllowSelfAssignment, iPersonID]);_`

`_// Проверьте наличие учебной программы в составе модульной программы: Учебный центр - Карточка модульной программы - Общие сведения   // Если учебная программа в составе модульной программы отсутствует, добавьте ее, нажав на соответствующую кнопку._`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество модульных программ = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_// * @property {bigint} id        // * @property {string} name        // * @property {string} link        // * @property {string} image_url_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';        res_image_url = q.image_url;        str = str + 'res_image_url = ' + res_image_url + '\n';_`

     `_alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEdu", "GetEducationMethodCompoundPrograms", [iEducationMethodID, iRoleID, bAllowSelfAssignment, iPersonID)]).array;_`

---

