## EducationProgramOpenFullPostAction

Метод **EducationProgramOpenFullPostAction** предназначен для проставления категории у объекта (набора программ), заданного параметром _iEducationProgramID._ Категории берутся из параметра _teRemoteAction_. Данная функция вызывается при сохранении карточки набора программ (_post\_action_).

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libEducation", "EducationProgramOpenFullPostAction", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя четыре параметра:  
     _iEducationProgramID_ \- ID набора программ (целое число).  
     _bIsEdit_ \- состояние параметра is\_edit объекта-команды вызова карточки (command: "open\_doc"...) (булево).   
     _iAppID_ \- ID текущего приложения (целое число).  
     _teRemoteAction_ \- TopElem текущего удаленного действия (объект XmlElem)

_Возвращаемое значение:_  
      Тип:  **Объект** . Содержит ряд атрибутов:  
_\- error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
_\- errorText_ – текст ошибки (строка).  
 

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libEducation", "EducationProgramOpenFullPostAction", [iEducationProgramID, bIsEdit, iAppID, teRemoteAction]);_`

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

