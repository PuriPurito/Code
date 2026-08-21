## CareerPlanCreatePostAction

Метод **CareerPlanCreatePostAction** предназначен для отправки уведомлений пользователю при изменении карьерного плана. Данная функция вызывается при сохранении карточки карьерного плана (post\_action).

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libTalentPool", "CareerPlanCreatePostAction", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя четыре параметра:  
     _iCareerPlanID_ \- ID карьерного плана (целое число).  
     _bEdit_ \- состояние параметра is\_edit объекта-команды вызова карточки (command: "open\_doc"...) (булево).  
     _iApplicationID_ \- ID текущего приложения (целое число).  
     _teRemoteAction_ \- TopElem удаленного действия (объект XmlElem).

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libTalentPool", "CareerPlanCreatePostAction", [iCareerPlanID, bEdit, iApplicationID, teRemoteAction]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

