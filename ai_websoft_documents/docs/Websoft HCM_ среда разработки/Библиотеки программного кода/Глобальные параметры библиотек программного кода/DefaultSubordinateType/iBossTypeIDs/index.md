## iBossTypeIDs

Глобальный параметр **iBossTypeIDs** указывает типы руководителей, по которым отбираются функциональные подчиненные.  
Параметр связан с общей библиотекой программного кода  **libMain** и является дочерним по отношению к параметру **DefaultSubordinateType**.  
  
Не является служебным параметром (т.е. может использоваться для настройки объектов, а также может передаваться и принимать новые значения при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libMain');  
      var iBossTypeIDs = libParam.GetOptProperty("iBossTypeIDs", "\[\]");  
      var arrBossTypesID = tools\_web.parse\_multiple\_parameter(iBossTypeIDs);**

_Аргументы параметра GetOptProperty:_  
       Для реализации данного параметра аргументы не обязательны. Может быть использован пустой массив аргументов.

_Возвращаемое значение:_  
      Тип: **Ссылки на каталог (foreign\_elem)**. Ссылки на каталог **boss\_type** (типы руководителей). 

_Примеры (типовой код применения):_

   `_var libParam = tools.get_params_code_library('libMain');      var iBossTypeIDs = libParam.GetOptProperty("iBossTypeIDs", "[]");      var arrBossTypesID = tools_web.parse_multiple_parameter(iBossTypeIDs);      …_`  
 

   `_libParam.GetOptProperty("iBossTypeIDs");_`

---

