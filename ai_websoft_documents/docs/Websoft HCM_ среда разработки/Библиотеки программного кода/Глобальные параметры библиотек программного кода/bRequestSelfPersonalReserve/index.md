## bRequestSelfPersonalReserve

Глобальный параметр **bRequestSelfPersonalReserve** определяет, разрешена ли сотрудникам подача заявок на включение себя в кадровый резерв. Значение по умолчанию – разрешено.  
Параметр связан с библиотекой программного кода плана преемственности  **libSuccession**.  
  
Не является служебным параметром (т.е. может использоваться для настройки объектов, а также может передаваться и принимать новые значения при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libSuccession');  
      var bRequestSelfPersonalReserve1 = libParam.GetOptProperty("bRequestSelfPersonalReserve", \[<arg1>\]);**

_Аргументы параметра GetOptProperty:_  
     _<arg1>_ \- флаг разрешения сотрудникам подавать заявки на включение себя в кадровый резерв (Если аргумент _<arg1>_ не задан, то принимается значение дочернего параметра по умолчанию).

_Возвращаемое значение:_  
      Тип: **Булево (bool)**. Глобальный параметр, указывающий, разрешена ли сотрудникам подача заявок на включение себя в кадровый резерв.

_Примеры (типовой код применения):_

   `_var libParam = tools.get_params_code_library('libSuccession');      var bRequestSelfPersonalReserve1 = libParam.GetOptProperty("bRequestSelfPersonalReserve", true);_`

---

