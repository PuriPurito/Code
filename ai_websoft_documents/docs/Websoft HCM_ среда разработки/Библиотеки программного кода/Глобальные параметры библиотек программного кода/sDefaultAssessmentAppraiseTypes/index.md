## sDefaultAssessmentAppraiseTypes

Глобальный параметр **sDefaultAssessmentAppraiseTypes** указывает тип форм оценки, который используется в данном экземпляре системы для получения данных по целям сотрудника (подразделения, организации).  
Параметр связан с общей библиотекой программного кода **libMain**.  
  
Не является служебным параметром (т.е. может использоваться для настройки объектов, а также может передаваться и принимать новые значения при вызове из внешнего окружения (API, конструктор интерфейсов и т.п.)).

_Синтаксис:_  
      **var libParam = tools.get\_params\_code\_library('libMain');  
      tools\_web.parse\_multiple\_parameter( libParam.GetOptProperty("sDefaultAssessmentAppraiseTypes", "\[\]"));**

_Аргументы параметра GetOptProperty:_  
          Для реализации данного параметра аргументы не обязательны. Может быть использован пустой массив аргументов.

_Возвращаемое значение:_  
      Тип: **Список с множественным выбором (list)**. Типы форм оценки.   
      Доступные типы форм:  
      - _activity\_appraisal_ \- оценка деятельности (выбор по умолчанию);  
      - _staffrating_ \- оценка целей.

_Пример (типовой код применения):_  
   `_var libParam = tools.get_params_code_library('libMain');      var arrAssessmentAppraiseTypes = tools_web.parse_multiple_parameter( libParam.GetOptProperty("sDefaultAssessmentAppraiseTypes", "[]"));          if(!IsArray(arrAssessmentAppraiseTypes) || ArrayOptFirstElem(arrAssessmentAppraiseTypes) == undefined) // определение значения по умолчанию           arrAssessmentAppraiseTypes = ['activity_appraisal'];_`

---

