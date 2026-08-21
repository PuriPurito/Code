## cur_user

Свойство. Возвращает TopElem текущего пользователя Webtutor Administrator.  
См. также cur\_user\_id, get\_cur\_user.

_Синтаксис:_  
      **tools.cur\_user.Object**

_Возвращаемое значение:_  
      Тип: **TopElem**. TopElem текущего пользователя Webtutor Administrator.

_Пример 1:_  
      `_cu_te = tools.cur_user.Object;         alert (cu_te.Name); // возвращает тип переменной ('collaborator')         alert (cu_te.fullname); // возвращает ФИО текущего пользователя Webtutor Administrator         alert (cu_te.id); // возвращает ID текущего пользователя Webtutor Administrator_`

_Пример 2:_  
      `_return tools.cur_user.Object;_`

---

