## bRequestSuccessorStatusChange

Глобальный параметр **BossRequestRights.bRequestSuccessorStatusChange** определяет, разрешена ли руководителю подача заявок на смену статусов преемников. Значение по умолчанию – разрешено.  
Параметр связан с библиотекой программного кода плана преемственности  **libSuccession**  и является дочерним по отношению к параметру **BossRequestRights**.

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libSuccession');  
      var bRequestSuccessorStatusChange1 = libParam.GetOptProperty("BossRequestRights.bRequestSuccessorStatusChange", \[<arg1>\]);**

_Аргументы параметра GetOptProperty:_  
     _<arg1>_ \- флаг разрешения руководителю подавать заявки на смену статусов преемников (Если аргумент _<arg1>_ не задан, то принимается значение дочернего параметра по умолчанию).

_Возвращаемое значение:_  
      Тип: **Булево (bool)**. Глобальный параметр, указывающий, разрешена ли руководителю подача заявок на смену статусов преемников.

_Примеры (типовой код применения):_

   `_var libParam = tools.get_params_code_library('libSuccession');      var bRequestSuccessorStatusChange1 = libParam.GetOptProperty("BossRequestRights.bRequestSuccessorStatusChange", true);_`

---

