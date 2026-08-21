## GetEducationMethodCompetences

Метод предназначен для получения списка компетенций, развиваемых в рамках учебной программы.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetEducationMethodCompetences", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iEventID_ – ID мероприятия (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень компетенций, развиваемых в рамках учебной программы, а также ряд дополнительных атрибутов:  
\- _array_ \- массив компетенций, развиваемых в рамках учебной программы (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID компетенции (целое число);  
     _name_ – название компетенции (строка);  
     _plan\_value_ – код шкалы справочника значения плановой величины компетенции (строка);  
     _plan\_value\_name_ – значение плановой величины компетенции (строка);  
     _weight_ – удельный вес компетенции в % (целое число).  
  
\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_` 

`_// Пусть в системе имеется учебная программа «Английский язык»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Английский язык' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе_`

`_iEduMethodID = oEdMeth.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetEducationMethodCompetences", [OptInt (iEduMethodID)]);      // Проверьте наличие компетенций, развиваемых в рамках учебной программы: Учебный центр - Карточка учебной программы - Компетенции   // Если компетенции отсутствуют, добавьте компетенцию, нажав на соответствующую кнопку.      // Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_  
{  
    "error": 0,  
    "errorText": 0,  
    "result": true,  
    "array": \[{  
        "id": 7538693290572795768,  
        "weight": 5,  
        "name": "Работа в команде",  
        "plan\_value": "sw9kf",  
        "plan\_value\_name": "1"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется учебная программа «Английский язык»   // Находим указанную учебную программу с помощью функции_ _tools.get_doc_by_key_   _oEdMeth = tools.get_doc_by_key ( 'education_method', 'name', 'Английский язык' );   alert ( 'Найдена учебная программа ' + oEdMeth.TopElem.name + ' с идентификационным номером ' + oEdMeth.TopElem.id ); // на экран выводится информация об отобранной учебной программе_`

`_iEduMethodID = oEdMeth.TopElem.id;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetEducationMethodCompetences", [OptInt (iEduMethodID)]);_`

`_// Проверьте наличие компетенций, развиваемых в рамках учебной программы: Учебный центр - Карточка учебной программы - Компетенции   // Если компетенции отсутствуют, добавьте компетенцию, нажав на соответствующую кнопку._`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество компетенций = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_// * @property {bigint} id        // * @property {string} name        // * @property {string} plan_value        // * @property {string} plan_value_name        // * @property {number} weight_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_plan_value = q.plan_value;        str = str + 'res_plan_value = ' + res_plan_value + '\n';         res_plan_value_name = q.plan_value_name;        str = str + 'res_plan_value_name = ' + res_plan_value_name + '\n';        res_weight = q.weight;        str = str + 'res_weight = ' + res_weight + '\n';_`

     `_alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

_Пример 3:_  
      `_RESULT = tools.call_code_library_method ("libEdu", "GetEducationMethodCompetences", [OptInt( iEduMethodID, curObjectID)]).array;_`

---

