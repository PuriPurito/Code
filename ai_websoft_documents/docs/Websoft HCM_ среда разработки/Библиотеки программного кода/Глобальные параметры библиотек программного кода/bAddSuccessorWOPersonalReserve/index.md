## bAddSuccessorWOPersonalReserve

Глобальный параметр **bAddSuccessorWOPersonalReserve** определяет возможность выбора преемников из подчиненных, не состоящих в кадровом резерве. Значение по умолчанию – выбор разрешен.  
Параметр связан с библиотекой программного кода плана преемственности  **libSuccession**.  
  
Является служебным параметром (т.е. может использоваться для настройки объектов, но не будет передаваться (и принимать новые значения) при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libSuccession');  
      var bAddSuccessorWOPersonalReserve1 = libParam.GetOptProperty("bAddSuccessorWOPersonalReserve", \[<arg1>\]);**

_Аргументы параметра GetOptProperty:_  
     _<arg1>_ \- флаг допустимости выбора преемников из подчиненных, не состоящих в кадровом резерве (Если аргумент _<arg1>_ не задан, то принимается значение дочернего параметра по умолчанию).

_Возвращаемое значение:_  
      Тип: **Булево (bool)**. Глобальный параметр, определяющий возможность выбора преемников из подчиненных, не состоящих в кадровом резерве. 

_Примеры (типовой код применения):_

   `_var libParam = tools.get_params_code_library('libSuccession');      var bAddSuccessorWOPersonalReserve1 = libParam.GetOptProperty("bAddSuccessorWOPersonalReserve", true);_`

---

