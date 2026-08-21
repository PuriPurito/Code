## cur_user_groups

Свойство. Список каталожных записей из групп, в состав которых входит текущий пользователь Webtutor Administrator.

_Синтаксис:_  
      **tools.cur\_user\_groups.Object**

_Возвращаемое значение:_  
      Тип: **Массив**. Список каталожных записей из групп, в состав которых входит текущий пользователь Webtutor Administrator.

_Пример:_     `_cugs = tools.cur_user_groups.Object;        count = ArrayCount (cugs);        alert (count); // возвращает количество групп, в которые входит администратор        for ( cug in cugs )         {            alert ( cug.Name ); // возвращает тип переменной ('group')            alert ( cug.name ); // возвращает название группы        }_`

---

