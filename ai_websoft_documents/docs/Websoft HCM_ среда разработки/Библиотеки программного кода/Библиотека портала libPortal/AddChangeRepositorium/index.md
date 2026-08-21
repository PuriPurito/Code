## AddChangeRepositorium

Метод **AddChangeRepositorium** предназначен для добавления/изменения репозитория.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libPortal", "AddChangeRepositorium", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя семь параметров:  
     _iRepositoriumID_ \- ID репозитария (целое число).  
     _bAddRepo_ – добавление или изменение репозитория: _true_ \- добавить репозиторий; _false_ \- изменить репозиторий (булево).  
     _strRepoName_ – название репозитария (строка).  
     _strRepoComment_ – комментарий (строка).  
     _iRepoImageResID_ \- ID ресурса-изображения (целое число).  
     _iParentRepoID_ \- ID "родительского" репозитория (целое число).  
     _strRepoAuthorIDs_ \- список ID авторов (строка). 

_Возвращаемые значения:_  
      Тип:  **Объект**. Содержит следующие атрибуты:  
\- error - код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- errorText – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libPortal", "AddChangeRepositorium", [iRepositoriumID, bAddRepo, strRepoName, strRepoComment, iRepoImageResID, iParentRepoID, strRepoAuthorIDs]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

