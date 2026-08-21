## EffectivenessPeriod

Глобальный параметр **EffectivenessPeriod** указывает количество дней, по истечению которых результаты оценки считаются устаревшими и игнорируются.  
Параметр связан с общей библиотекой программного кода  **libMain** и является дочерним по отношению к параметру **DefaultHighEffectivenessLevel**.  
  
Не является служебным параметром (т.е. может использоваться для настройки объектов, а также может передаваться и принимать новые значения при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libMain');  
     libParam.GetOptProperty("EffectivenessPeriod", <arg1>);**

_Аргументы параметра GetOptProperty:_  
       _<arg1>_ \- период действия оценки по умолчанию (целое число) (Если аргумент _<arg1>_ не задан, то значение по умолчанию равно **365**).

_Возвращаемое значение:_  
      Тип: **Целое число (integer)**. Период действия оценки. 

_Пример (типовой код применения):_  
   `_var libParam = tools.get_params_code_library('libMain');      var iEffectivenessPeriod = libParam.GetOptProperty("EffectivenessPeriod", 365);_`

---

