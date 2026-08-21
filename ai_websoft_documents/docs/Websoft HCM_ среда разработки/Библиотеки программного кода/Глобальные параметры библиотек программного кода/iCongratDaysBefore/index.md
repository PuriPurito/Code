## iCongratDaysBefore

Глобальный параметр **iCongratDaysBefore** определяет количество дней перед днем рождения сотрудника для поздравления.  
Параметр связан с библиотекой программного кода персонала  **libStaff**.  
Часто используется совместно с параметром **iBDCongatDaysAfter**.   
  
Является служебным параметром (т.е. может использоваться для настройки объектов, но не будет передаваться (и принимать новые значения) при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libStaff');  
      var iDaysBefore = libParam.GetOptProperty("iCongratDaysBefore", \[<arg1>\]);**

_Аргументы параметра GetOptProperty:_  
     _<arg1>_ - количество дней перед днем рождения сотрудника для поздравления по умолчанию (целое число) (Если аргумент _<arg1>_ не задан, то значение по умолчанию равно 1).

_Возвращаемое значение:_  
      Тип: **Целое число (integer)**. Глобальный параметр, указывающий количество дней перед днем рождения сотрудника для поздравления. 

_Примеры (типовой код применения):_

   `_var libParam = tools.get_params_code_library('libStaff');_`  
   `_var iDaysBefore = libParam.GetOptProperty("iCongratDaysBefore", 1);      var iDaysAfter = libParam.GetOptProperty("iBDCongatDaysAfter", 5);_`

---

