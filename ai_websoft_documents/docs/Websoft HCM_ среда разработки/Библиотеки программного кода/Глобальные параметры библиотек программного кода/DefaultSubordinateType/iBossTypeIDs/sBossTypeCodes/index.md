## sBossTypeCodes

Глобальный параметр **sBossTypeCodes** указывает коды типов руководителей, по которым отбираются функциональные подчиненные.   
Параметр связан с общей библиотекой программного кода  **libMain** и является дочерним по отношению к параметру **iBossTypeIDs**.  
  
Не является служебным параметром (т.е. может использоваться для настройки объектов, а также может передаваться и принимать новые значения при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libMain');  
      libParam.GetOptProperty("sBossTypeCodes", "");**

_Аргументы парамера GetOptProperty:_  
           Для реализации данного параметра аргументы не обязательны. Может быть использован пустой массив аргументов.

_Возвращаемое значение:_  
      Тип: **Строка (string)**. Коды типов руководителей. 

_Пример (типовой код применения):_  
   `_var libParam = tools.get_params_code_library('libMain');      var iBossTypeIDs = libParam.GetOptProperty("iBossTypeIDs", "[]");       arrBossTypesID = tools_web.parse_multiple_parameter(iBossTypeIDs);      if( ArrayOptFirstElem(arrBossTypesID) == undefined)      {            var sBossTypeCodes = Trim("" + libParam.GetOptProperty("sBossTypeCodes", ""));      }_`

---

