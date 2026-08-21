## bChangeSuccessorKeyPosition

Глобальный параметр **BossRights.bChangeSuccessorKeyPosition** определяет, разрешено ли руководителю добавлять и изменять преемников при создании/редактировании ключевой должности. Значение по умолчанию – разрешено.  
Параметр связан с библиотекой программного кода плана преемственности  **libSuccession**  и является дочерним по отношению к параметру **BossRights**.

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libSuccession');  
      var BossRights.bChangeSuccessorKeyPosition1 = libParam.GetOptProperty("BossRights.bChangeSuccessorKeyPosition", \[<arg1>\]);**

_Аргументы параметра GetOptProperty:_  
     _<arg1>_ \- флаг разрешения руководителю добавлять и изменять преемников при создании/редактировании ключевой должности (булево, или _0/1_) (Если аргумент _<arg1>_ не задан, то принимается значение глобального параметра по умолчанию).

_Возвращаемое значение:_  
      Тип: **Булево (bool)**. Глобальный параметр, указывающий, разрешено ли руководителю добавлять и изменять преемников при создании/редактировании ключевой должности. 

_Примеры (типовой код применения):_

   `_var libParam = tools.get_params_code_library('libSuccession');      var bChangeSuccessorKeyPosition1 = libParam.GetOptProperty("BossRights.bChangeSuccessorKeyPosition", true);_`

---

