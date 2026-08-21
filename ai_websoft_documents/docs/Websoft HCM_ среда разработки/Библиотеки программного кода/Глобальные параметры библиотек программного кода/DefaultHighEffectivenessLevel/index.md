## DefaultHighEffectivenessLevel

Глобальный параметр **DefaultHighEffectivenessLevel** указывает уровень, выше которого сотрудник считается высокоэффективным.  
Параметр связан с общей библиотекой программного кода  **libMain**.  
  
Не является служебным параметром (т.е. может использоваться для настройки объектов, а также может передаваться и принимать новые значения при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libMain');  
      libParam.GetOptProperty("DefaultHighEffectivenessLevel", <arg1>);**

_Аргументы парамера GetOptProperty:_  
     _<arg1>_ \- уровень высокой эффективности сотрудника по умолчанию (целое число) (Если аргумент _<arg1>_ не задан, то значение по умолчанию равно **85**).

_Возвращаемое значение:_  
      Тип: **Целое число (integer)**. Уровень высокой эффективности сотрудника. 

_Пример (типовой код применения):_  
   `_var libParam = tools.get_params_code_library('libMain');      var iHighEffectivenessLevel = libParam.GetOptProperty("DefaultHighEffectivenessLevel", 80);_`

---

