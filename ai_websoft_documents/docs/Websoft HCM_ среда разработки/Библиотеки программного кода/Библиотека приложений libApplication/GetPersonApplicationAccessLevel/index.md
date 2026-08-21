## GetPersonApplicationAccessLevel

Метод **GetPersonApplicationAccessLevel** предназначен для получения уровня доступа сотрудника в приложении.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libApplication", "GetPersonApplicationAccessLevel", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя три параметра:  
     _iPersonID_ \- ID сотрудника (целое число).  
     _sApplicationCode_ \- код приложения (строка).  
     tePerson - TopElem сотрудника (объект XmlDoc).

_Возвращаемое значение:_  
\- _iLevel_ \- уровень доступа сотрудника в приложении (целое число).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libApplication", "GetPersonApplicationAccessLevel", [iPersonID, sApplicationCode, tePerson]);_`   
  
`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

