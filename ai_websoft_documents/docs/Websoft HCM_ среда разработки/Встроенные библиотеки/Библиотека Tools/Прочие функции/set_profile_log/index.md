## set_profile_log

Создает запись в журнале profiling.log. Строка вида sIDParam + '\\t' + GetCurTicks() + '\\t' + Request.Session.GetOptProperty( 'sid', '' ) + '\\t' + Request.Url + '\\t' + sTypeParam

Входные параметры:  
sIDParam (string) строка идентификатор события.  
Request (Request)- объект Request.  
sTypeParam (string) строка с текстом события.

Возвращаемый результат - нет.

Пример вызова.

---

