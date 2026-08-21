## DefaultSubordinateType

Глобальный параметр **DefaultSubordinateType** указывает тип выбора подчиненных по умолчанию.  
Параметр связан с общей библиотекой программного кода  **libMain**.  
  
Является служебным параметром (т.е. может использоваться для настройки объектов, но не будет передаваться (и принимать новые значения) при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libMain');  
      libParam.GetOptProperty("DefaultSubordinateType", <arg1>);**

_Аргументы параметра GetOptProperty:_  
      <arg1> - тип выбора подчиненных по умолчанию (строка) (см. ниже – **Доступные типы выбора**).

_Возвращаемое значение:_  
      Тип: **Комбинированный список(combo)**, позволяющий ввести значение вручную или выбрать из раскрывающегося списка. Тип выбора подчиненных.   
      Доступные типы выбора:  
      - _all\_subordinates_ \- непосредственные и функциональные подчиненные с иерархией (выбор по умолчанию);  
      - _main\_subordinates_ \- непосредственные подчиненные;  
      - _subordinates_ \- непосредственные подчиненные с иерархией;  
      - _func\_subordinates_ \- функциональные подчиненные с иерархией.

_Пример (типовой код применения):_   `_var libParam = tools.get_params_code_library('libMain');      var sTypeSubordinate = libParam.GetOptProperty("DefaultSubordinateType", "all_subordinates");       switch(sTypeSubordinate)      {            case "func_subordinates":            case "all_subordinates":            {                     // код, выполняемый при значениях "func_subordinates" и "all_subordinates"                     break;            }      }_`

---

