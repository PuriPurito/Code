## GetSearchDataFromLongreadWikiArticle

Метод **GetSearchDataFromLongreadWikiArticle** возвращает данные для поиска вики-статей.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libWiki", "GetSearchDataFromLongreadWikiArticle", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого передаются методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода.  
     Массив включает в себя один параметр:  
     _teWikiArticle_ \- TopElem вики-статьи (объект XmlElem).

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит данные для поиска вики-статей, а также ряд дополнительных атрибутов:  
\- _items_ \- данные для поиска вики-статей (массив объектов).  
     Атрибуты отдельного объекта:  
     _id_ – ID вики-статьи в текстовом формате (строка);  
     _value_ – строки для поиска (массив строк).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libWiki", "GetSearchDataFromLongreadWikiArticle", [teWikiArticle]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

