## HandleCommonEducationPlanCreate

Метод **HandleCommonEducationPlanCreate** предназначен для обработки события создания плана обучения.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "HandleCommonEducationPlanCreate", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя три параметра:  
     _iEducationPlanID_ \- ID плана обучения (целое число).  
     _teEducationPlan_ \- TopElem карточки плана обучения (объект XmlElem).  
     _iChatbotID_ \- ID чат-бота (целое число).

_Возвращаемое значение:_  
      Тип:  **Объект** . Содержит ряд атрибутов:  
_\- error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
_\- errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", " andleCommonEducationPlanCreate", [iEducationPlanID, teEducationPlan, iChatbotID]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

