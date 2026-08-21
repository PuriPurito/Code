## DefaultHighEffectivenessSuccessorMinNum

Глобальный параметр DefaultHighEffectivenessSuccessorMinNum указывает минимально необходимое количество высокоэффективных преемников для закрытия ключевой должности. Значение по умолчанию – **1**.  
Параметр связан с общей библиотекой программного кода  **libMain**.  
  
Не является служебным параметром (т.е. может использоваться для настройки объектов, а также может передаваться и принимать новые значения при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libMain');  
      libParam.GetOptProperty("DefaultHighEffectivenessSuccessorMinNum", <arg1>);**

_Аргументы параметра GetOptProperty:_  
     _<arg1>_ \- минимально необходимое количество высокоэффективных преемников по умолчанию (Если аргумент _<arg1>_ не задан, то принимается значение дочернего параметра по умолчанию).

_Возвращаемое значение:_  
      Тип: **Целое число (integer)**. Минимально необходимое количество высокоэффективных преемников для закрытия ключевой должности.  

_Примеры (типовой код применения):_

   `_var libParam = tools.get_params_code_library('libMain');      var DefaultHighEffectivenessSuccessorMinNum1 = libParam.GetOptProperty("DefaultHighEffectivenessSuccessorMinNum", 2);_`

---

