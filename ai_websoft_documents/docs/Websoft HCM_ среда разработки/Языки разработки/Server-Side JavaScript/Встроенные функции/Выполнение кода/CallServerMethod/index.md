## CallServerMethod

Вызывает метод (функцию) библиотеки на сервере приложения. У метода должна быть установлена мета-директива "META:ALLOW-CALL-FROM-CLIENT:1".  
Значения аргументов могу быть переданы либо через массив, либо через стандартный объект, содержащий пары "имя аргумента" - "значения аргумента".

Примечание - Не все типы значений могут быть переданы в серверный метод и возвращены обратно. Поддерживаются все скалярные типы, стандартные массивы, стандартные объекты, а также объекты XmlElem и XmlDoc. 

_Синтаксис:_  
      **CallServerMethod( <libName>, <methodName> )  
      CallServerMethod( <libName>, <methodName>, <argsArray> )**

_Аргументы:_  
     _<libName> (обязательный)_  
      Тип: **Строка**. Имя или URL библиотеки.  
     _<methodName> (обязательный)_  
      Тип: **Строка**. Название метода.  
     _<argsArray> (необязательный)_  
      Тип: **Массив**. Массив параметров. В качестве элементов массива могут быть объекты разного типа – строки, числа, объекты, массивы… Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки. В случае, если параметры метода не предусмотрены, указывается пустой массив (\[\]).

_Возвращаемое значение:_  
      Тип: **Строка, флаг, объект** или др. (зависит от вызываемого метода). Результат действия функции.

_Примеры_   
Для режима Процессы:  
     `_CallServerMethod( 'ms_tools', 'evaluate_remote_collection_obj', [ iRemoteCollectionIDParam, null, null, oCollectionParams, iStartPos, iPageSize ] ); // при получении данных выборки.        CallServerMethod( 'ms_tools', 'eval_remote_action_step', [ iRemoteActionID, oParams ] ); // при выполнении кода удаленного действия.        CallServerMethod( 'tools', 'call_code_library_method', [ sLibCode, sLibMethod, [ aMethodParams ] ] ); // при выполнении функции (метода) библиотеки программного кода.        CallServerMethod( sLibName, sMethodName, [ aMethodParams ] ] ); // при выполнении функции (метода) системной библиотеки._`  
  
Другие примеры:  
     `_oRes = CallServerMethod( 'tools', 'call_code_library_method', ['libTalentPool', 'GetPersonWOCareerReserveReport', [ tools.cur_user_id, tools_app.get_cur_application().id, oFilters ]]);        sFilePath = CallServerMethod('tools', 'call_code_library_method', ['libAssessmentPdpExt', 'printReport', [ ArraySelectAll( Ps.set_columns.print_columns ), arrDataPrint ]] );        oData = CallServerMethod( 'tools_web', 'get_user_data', [ 'publish_record_' + XQueryLiteral( iEventID ) ] );_`

---

