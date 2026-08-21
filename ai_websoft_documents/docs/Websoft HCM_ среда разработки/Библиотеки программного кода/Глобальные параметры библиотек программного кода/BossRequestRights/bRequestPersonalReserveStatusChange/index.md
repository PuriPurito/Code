## bRequestPersonalReserveStatusChange

Глобальный параметр **BossRequestRights.bRequestPersonalReserveStatusChange** определяет, разрешена ли руководителю подача заявок на смену статусов кадрового резерва (резервиста). Значение по умолчанию – разрешено.  
Параметр связан с библиотекой программного кода плана преемственности  **libSuccession**  и является дочерним по отношению к параметру **BossRequestRights**.  
  
Является служебным параметром (т.е. может использоваться для настройки объектов, но не будет передаваться (и принимать новые значения) при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libSuccession');  
      var bRequestPersonalReserveStatusChange1 = libParam.GetOptProperty("BossRequestRights.bRequestPersonalReserveStatusChange", \[<arg1>\]);**

_Аргументы параметра GetOptProperty:_  
     _<arg1>_ \- флаг разрешения руководителю подавать заявки на смену статусов кадрового резерва (резервиста) (Если аргумент _<arg1>_ не задан, то принимается значение дочернего параметра по умолчанию).

_Возвращаемое значение:_  
      Тип: **Булево (bool)**. Глобальный параметр, указывающий, разрешена ли руководителю подача заявок на смену статусов кадрового резерва (резервиста). 

_Примеры (типовой код применения):_

   `_var libParam = tools.get_params_code_library('libSuccession');      var bRequestPersonalReserveStatusChange1 = libParam.GetOptProperty("BossRequestRights.bRequestPersonalReserveStatusChange", true);_`

---

