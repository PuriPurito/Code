## get_cur_user

Возвращает TopElem текущего пользователя WebTutor Administrator на основании свойств cur\_user и cur\_user\_id.   
Кроме того, при первом запуске данная функция устанавливает значения переменных cur\_user и cur\_user\_id.

_Синтаксис:_  
      **tools.get\_cur\_user ()**

_Аргументы:_  
      Функция вызывается без аргументов.

_Возвращаемое значение:_  
      Тип: **TopElem**. TopElem текущего пользователя.

_Пример 1:_  
      `_str = '';         curUser = tools.get_cur_user ();         str = str + ' - ' + curUser.Name + '\n'; // возвращает тип переменной ('collaborator')         str = str + ' - ' + curUser.fullname + '\n'; // возвращает ФИО текущего пользователя Webtutor Administrator         str = str + ' - ' + curUser.id + '\n'; // возвращает ID текущего пользователя Webtutor Administrator         str = str + ' - ' + curUser.access.access_role + '\n'; // возвращает роль доступа текущего пользователя Webtutor Administrator         alert ( str );_`  

_Пример 2:_  
      `_curUser = tools.get_cur_user ();         fldAccessRole = tools.get_cur_user().access.access_role;_`

---

