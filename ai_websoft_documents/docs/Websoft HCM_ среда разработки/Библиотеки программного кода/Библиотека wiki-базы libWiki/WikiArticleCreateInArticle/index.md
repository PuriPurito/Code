## WikiArticleCreateInArticle

Метод **WikiArticleCreateInArticle** предназначен для создания вики-статьи о статье.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libWiki", "WikiArticleCreateInArticle", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя семь параметров:  
     _iCurUserID_ \- ID текущего пользователя (целое число).  
     _iBaseArticleID_ \- ID родительской статьи (целое число).  
     _iWikiCommTypeID_ \- ID типа связи (целое число).  
     _sArticleName_ \- название новой статьи (строка).  
     _iArticleType_ \- тип новой статьи (целое число).  
     _sArticleStatus_ \- статус новой статьи (строка).  
     _sArticleText_ \- текст новой статьи (строка).

_Возвращаемые значения:_

      Тип:  **Объект**. Содержит следующие атрибуты:  
\- _result_ – результат вызова метода (строка). Значение атрибута в случае успешного завершения метода - 'Статья создана'.

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWiki", "WikiArticleCreateInArticle", [iCurUserID, iBaseArticleID, iWikiCommTypeID, sArticleName, iArticleType, sArticleStatus, sArticleText]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

