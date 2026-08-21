## GetUpcomingEvents

Метод предназначен для получения списка ближайших мероприятий.

Выборка производится только для публичных мероприятий (в карточке которых в программе WebTutor Administrator на вкладке «**Общие сведения**» установлен флажок «**Публичное мероприятие**» и, соответственно, для которых свойство _is\_public = true()_).

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "GetUpcomingEvents", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя восемь параметров:  
     _iPersonID_ – ID пользователя (целое число).   
     _iDays_ – период (количество дней), для которого определяется перечень предстоящих мероприятий (целое число).   
     _sEventTypes_ – коды типов мероприятий (строка). Допустимые значения для стандартной конфигурации: _'compound\_program'_ (Модульная программа), _'compound\_program\_elem'_ (Элемент модульной программы), _'education\_method'_ (Учебная программа), _'education\_method\_from\_program'_ (Элемент из набора программ), 'one\_time' (Разовое мероприятие), _'dist\_test'_ (Дистанционное обучение), _'assessment'_ (Тестирование), _'case'_ (Кейс), _'webinar'_ (Вебинар). Если необходимо указать несколько типов мероприятий, они перечисляются через символ ; (точка с запятой).  
     _sType_ – дополнительный тип (строка). Допустимые значения – _'all'_ (все), _'my'_ (относящиеся к текущему пользователю), _'open'_ (открытые). По умолчанию - _'all'_.  
     _bCheckUserPlace_ – проверять расположение сотрудника (булево).   
     _sXQueryQual_ – дополнительное условие выборки в формате XQuery (строка). (Примеры указания дополнительных условий выборки: _"$elem/code = 'Eng1'"_ (отбор мероприятий с кодом _'Eng1'_); _"contains($elem/name, 'Английский')"_ (отбор мероприятий, название которых содержит выражение _'Английский'_)).  
     _bUseTimezone_ \- учитывать часовые пояса (булево) (необязательный). Значение по умолчанию - _false_.  
     _bShowCurrentEvent_ \- учитывать ли только текущие мероприятия (булево) (необязательный).. Значение по умолчанию - _false_.

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит перечень ближайших мероприятий, а также ряд дополнительных атрибутов:  
\- _array_ \- массив мероприятий (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID мероприятия (целое число);  
     _code_ – код мероприятия (строка);  
     _name_ – название мероприятия (строка);  
     _education\_org\_name_ – название организации, проводящей мероприятие (строка);  
     _type\_name_ \- название типа мероприятия (строка);  
     _is\_open_ \- является ли мероприятие открытым (булево);  
     _status\_name_ \- название статуса мероприятия (строка);  
     _start\_date_ – начало мероприятия (дата);  
     _finish\_date_ – конец мероприятия (дата);  
     _person\_num_ – количество участников (целое число);  
     _image\_url_ – относительная ссылка на изображение (строка);  
     _link_ – относительная ссылка на мероприятие (строка).

\- _result_ – результат вызова метода (_true_ – если операция завершилась успешно, _false_ – в противном случае) (булево).  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример 1:_

`_// Данный агент должен быть выполнен на сервере_`   
  
`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции_ _tools.get_doc_by_key_`  
`_oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_iCollabID = oCollab.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetUpcomingEvents", [OptInt (iCollabID), 100, 'one_time', 'all', false, "$elem/code = 'Eng1'", false]);_`  
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`  
  
`_Результат выполнения метода, записанный в лог и преобразованный в формат JSON:_`

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
        "is\_open": true,  
        "status\_name": "Планируется",  
        "start\_date": "2020-08-08T09:00:00+00:00",  
        "finish\_date": "2020-08-08T10:00:00+00:00",  
        "person\_num": 2,  
        "image\_url": "/images/event.png",  
        "link": "view\_doc.html?mode=event&object\_id=6821181243535342460"  
    }\]  
}

_Пример 2:_       

`_// Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая принимает участие в мероприятии   // Находим программно сотрудника Васильеву Л.П. с помощью функции_ _tools.get_doc_by_key_`  
`_oCollab = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );   alert ( 'Найден сотрудник ' + oCollab.TopElem.fullname + ' с идентификационным номером ' + oCollab.DocID ); // на экран выводится информация об отобранном сотруднике_`

`_iCollabID = oCollab.DocID;_`

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_`  
`_oRes = tools.call_code_library_method ("libEducation", "GetUpcomingEvents", [OptInt (iCollabID), 100, 'one_time', 'all', false, "$elem/code = 'Eng1'", false]);_`  
  
_bRESULT = oRes.result;_  
`_alert ("Успешность выполнения метода (true/false) = " + bRESULT);   RESULT = oRes.array;   alert ("Количество мероприятий = " + ArrayCount (RESULT));   for(q in RESULT)   {        str = '';_`

     `_res_id = q.id;        str = str + 'res_id = ' + res_id + '\n';         res_code = q.code;        str = str + 'res_code = ' + res_code + '\n';        res_name = q.name;        str = str + 'res_name = ' + res_name + '\n';        res_education_org_name = q.education_org_name;        str = str + 'res_education_org_name = ' + res_education_org_name + '\n';        res_type_name = q.type_name;        str = str + 'res_type_name = ' + res_type_name + '\n';        res_is_open = q.is_open;        str = str + 'res_is_open = ' + res_is_open + '\n';        res_status_name = q.status_name;        str = str + 'res_status_name = ' + res_status_name + '\n';        res_start_date = q.start_date;        str = str + 'res_start_date = ' + res_start_date + '\n';        res_finish_date = q.finish_date;        str = str + 'res_finish_date = ' + res_finish_date + '\n';        res_person_num = q.person_num;        str = str + 'res_person_num = ' + res_person_num + '\n';        res_image_url = q.image_url;        str = str + 'res_image_url = ' + res_image_url + '\n';        res_link = q.link;        str = str + 'res_link = ' + res_link + '\n';_`

     `_alert ( str );   }_`

`_ERROR = oRes.error;   alert ("Код ошибки = " + ERROR);   MESSAGE = oRes.errorText;   alert ("Сообщение об ошибке = " + MESSAGE);_`

      

_Пример 3:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "GetUpcomingEvents", [iPersonID, iDays, sEventTypes, sType, bCheckUserPlace, sXQueryQual, bUseTimezone, bShowCurrentEvent]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

