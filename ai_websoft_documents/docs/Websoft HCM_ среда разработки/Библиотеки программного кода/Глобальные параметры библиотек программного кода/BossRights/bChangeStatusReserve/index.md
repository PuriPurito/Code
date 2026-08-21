## bChangeStatusReserve

Глобальный параметр **BossRights.bChangeStatusReserve** определяет, разрешено ли руководителю изменять статус кадрового резерва.  
Параметр связан с библиотекой программного кода плана преемственности  **libSuccession**  и является дочерним по отношению к параметру **BossRights**.  
  
Является служебным параметром (т.е. может использоваться для настройки объектов, но не будет передаваться (и принимать новые значения) при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libSuccession');  
      var BossRights.bChangeStatusReserve1 = libParam.GetOptProperty("BossRights.bChangeStatusReserve", \[<arg1>\]);**

_Аргументы параметра GetOptProperty:_  
     _<arg1>_ \- флаг разрешения руководителю изменять статус кадрового резерва (булево, или _0/1_) (Если аргумент _<arg1>_ не задан, то принимается значение глобального параметра по умолчанию).

_Возвращаемое значение:_  
      Тип: **Булево (bool)**. Глобальный параметр, указывающий, разрешено ли руководителю изменять статус кадрового резерва..

_Примеры (типовой код применения):_

   `_var libParam = tools.get_params_code_library('libSuccession');      var bChangeStatusReserve1 = libParam.GetOptProperty("BossRights.bChangeStatusReserve", true);_`

---

