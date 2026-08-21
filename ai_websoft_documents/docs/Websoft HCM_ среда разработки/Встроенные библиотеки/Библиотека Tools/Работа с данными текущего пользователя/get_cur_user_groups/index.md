## get_cur_user_groups

Возвращает список каталожных записей групп текущего пользователя WebTutor Adminictrator на основании свойства cur\_user\_groups.  
Кроме того, при первом запуске данная функция устанавливает значение переменной cur\_user\_groups.

_Синтаксис:_  
      **tools.get\_cur\_user\_groups ()**

_Аргументы:_  
      Функция вызывается без аргументов.

_Возвращаемое значение:_  
      Тип: **Массив**. Список каталожных записей групп текущего пользователя.

_Пример 1:_  
`_arrGroups = tools.get_cur_user_groups();   count = ArrayCount (arrGroups);   if (count > 0)   {        str = 'Текущий пользователь является членом следующих групп: \n';        for ( group in arrGroups ) // выполнение действий для всех групп текущего пользователя        {             str = str + ' - ' + group.name + '\n';        }        alert ( str );   }   else        alert ( 'Текущий пользователь не является членом ни одной группы' );_`  

_Пример 2:_

      `_for ( _group in tools.get_cur_user_groups ()) // выполнение действий для всех групп текущего пользователя         {              _child = _source_conditions.AddChild();              _child.field = 'user_group_id';              _child.value = _group.id;              _child.type = 'integer';              _child.and_or = 'or';              _counter++;         }_`

      `_if (ArrayOptFindByKey( tools.get_cur_user_groups(), teObjectParam.user_group_id, 'id' ) == undefined )_`

---

