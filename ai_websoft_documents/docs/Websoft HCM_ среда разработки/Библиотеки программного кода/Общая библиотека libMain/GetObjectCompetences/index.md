## GetObjectCompetences

Метод предназначен для получения списка компетенций по объекту.

В качестве аргумента необходимо выбрать объект, имеющий связь с компетенциями. 

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libMain", "GetObjectCompetences", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя один параметр:  
     _iObjectID_ – ID объекта, имеющего ссылки на значения карты знаний (целое число).  

_Возвращаемое значение:_  
      Тип: **Объект Выборка**. Содержит перечень компетенций по объекту, а также ряд дополнительных атрибутов:  
\- _array_ \- массив компетенций (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID компетенции (целое число);  
     _name_ – название компетенции (строка);  
     _plan\_value_ – плановое значение (строка);  
     _plan\_value\_name_ – название планового значения (строка);  
     _weight_ – вес компетенции (целое число).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_`   
  
`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции_ _tools.get_doc_by_key_   _oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_iCollabID = oCollab.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetObjectCompetences", [OptInt (iCollabID)]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

_Пример 2:_       

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции_ _tools.get_doc_by_key_   _oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_iCollabID = oCollab.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libMain", "GetObjectCompetences", [OptInt (iCollabID)]);_`

`_bRESULT = oRes.result;   alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество компетенций = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_// * @property {bigint} id        // * @property {string} name        // * @property {string} plan_value        // * @property {string} plan_value_name        // * @property {number} weight_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_plan_value = q.plan_value;        str = str + 'res_plan_value = ' + res_plan_value + '\n';        res_plan_value_name = q.plan_value_name;        str = str + 'res_plan_value_name = ' + res_plan_value_name + '\n';        res_weight = q.weight;        str = str + 'res_weight = ' + res_weight + '\n';_`

     `_alert ( str );   }   ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

---

