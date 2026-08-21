## set_cur_application_instance

Установка нового объекта процесса приложения в качестве текущего.  
Функция возможна к использованию только в интерфейсе администратора.  
В целом служит для внутреннего использования внутри библиотеки. Для внешних вызовов не используется, поскольку все остальные функции, связанные с процессами, сами устанавливают определенный процесс в качестве текущего (как раз через вызов описываемой функции).

_Синтаксис:_  
      **tools\_app.set\_cur\_application\_instance (<iApplicationInstanceIDParam>, <teApplicationInstanceParam>)**

_Аргументы:_  
     <iApplicationInstanceIDParam> (обязательный)  
     Тип: **Целое число**. ID объекта процесса приложения.  
     <teApplicationInstanceParam> (обязательный)  
     Тип: **TopElem**. TopElem объекта процесса, указанного в аргументе iApplicationInstanceIDParam.

_Возвращаемое значение:_  
      Тип: **TopElem**. TopElem текущего объекта процесса приложения. 

_Пример:_  
      `_tools_app.set_cur_application_instance ( docApplicationInstance.DocID, docApplicationInstance.TopElem );         tools_app.set_cur_application_instance ( iApplicationInstanceIDParam, null );_`

---

