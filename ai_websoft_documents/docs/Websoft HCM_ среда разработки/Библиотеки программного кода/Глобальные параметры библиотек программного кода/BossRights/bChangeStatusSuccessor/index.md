## bChangeStatusSuccessor

Глобальный параметр **BossRights.bChangeStatusSuccessor** определяет, разрешено ли руководителю изменять статус преемников. Значение по умолчанию – разрешено.  
Параметр связан с библиотекой программного кода плана преемственности  **libSuccession**  и является дочерним по отношению к параметру **BossRights**.  
  
Является служебным параметром (т.е. может использоваться для настройки объектов, но не будет передаваться (и принимать новые значения) при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libSuccession');  
      var BossRights.bChangeStatusSuccessor1 = libParam.GetOptProperty("BossRights.bChangeStatusSuccessor", \[<arg1>\]);**

_Аргументы параметра GetOptProperty:_  
     _<arg1>_ \- флаг разрешения руководителю изменять статус преемников (булево, или _0/1_) (Если аргумент _<arg1>_ не задан, то принимается значение глобального параметра по умолчанию).

_Возвращаемое значение:_  
      Тип: **Булево (bool)**. Глобальный параметр, указывающий, разрешено ли руководителю изменять статус преемников. По умолчанию изменение статуса разрешено. 

_Примеры (типовой код применения):_

   `_var libParam = tools.get_params_code_library('libSuccession');      var bChangeStatusSuccessor1 = libParam.GetOptProperty("BossRights.bChangeStatusSuccessor", true);_`

---

