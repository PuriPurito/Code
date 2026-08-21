## BossRequestRights

Структура глобальных параметров **BossRequestRights** определяет набор прав руководителя на создание заявок.  
Параметр связан с библиотекой программного кода плана преемственности  **libSuccession**.  
  
Является служебной структурой параметров (т.е. ее элементы могут использоваться для настройки объектов, но не будут передаваться (и принимать новые значения) при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libSuccession');  
      var BossRequestRightsChildParam1 = libParam.GetOptProperty("BossRequestRights.<ChildParam>", \[<arg1>\]);**

_Аргументы параметра GetOptProperty:_  
     _<ChildParam>_ \- название дочернего параметра.  
     _<arg1>_ \- значение дочернего параметра (Если аргумент _<arg1>_ не задан, то принимается значение дочернего параметра по умолчанию).

_Возвращаемое значение:_  
      Тип: **Заголовок структуры (heading)**. Глобальный параметр, определяющий набор прав руководителя на создание заявок.   
      Доступные разрешения:  
      - _bRequestKeyPositionCreate_ - разрешение руководителю подавать заявки на создание ключевых должностей.  
      - _bRequestAddSuccessor_ - разрешение руководителю подавать заявки на добавление преемников.  
      - _bRequestSuccessorStatusChange_ - разрешение руководителю подавать заявки на смену статусов преемников.  
      - _bRequestAddPersonalReserve_ - разрешение руководителю подавать заявки на включение подчиненного в кадровый резерв.  
      - _bRequestPersonalReserveStatusChange_ - разрешение руководителю подавать заявки на смену статусов кадрового резерва (резервиста).

_Примеры (типовой код применения):_

   `_var libParam = tools.get_params_code_library('libSuccession');      var bRequestKeyPositionCreate1 = libParam.GetOptProperty("BossRequestRights.bRequestKeyPositionCreate", true);_`

---

