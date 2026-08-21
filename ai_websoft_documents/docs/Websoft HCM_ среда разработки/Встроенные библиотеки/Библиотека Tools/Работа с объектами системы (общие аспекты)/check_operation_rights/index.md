## check_operation_rights

Проверяет, есть ли операция, привязанная к переданному в параметрах функции действию (_action_), в списке переданных операций.

_Синтаксис:_  
      **tools.check\_operation\_rights (<arrOperationsParam>, <teCurUserParam>, <sActionParam>)**

_Аргументы:_  
     <arrOperationsParam> (обязательный)  
     Тип: **Массив**. Массив каталожных записей операций (operations).  
     <teCurUserParam> (обязательный)  
     Тип: **TopElem**. TopElem сотрудника. Если передан не пустой атрибут и не null и если роль доступа - _Администратор_, то функция всегда будет возвращать _true_.  
     <sActionParam> (обязательный)  
     Тип: **Строка**. Код действия, к которому должна быть привязана операция.

_Возвращаемое значение:_  
      Тип: **Булево**. Значение _true_ демонстрирует, что в функцию передан _TopElem_ сотрудника с ролью _Администратор_ или в массиве найдена операция с указанным кодом действия. В противном случае возвращается значение _false_.

_Пример:_  
      `_xarrOperations = tools.get_object_relative_operations ( curUserID, curObjectID, curObject.Name );         bRez1 = tools.check_operation_rights ( xarrOperations, curUser, 'group_change_right' );         bRez2 = tools.check_operation_rights ( xarrOperations, curUser, 'group_change_users_right' );_`

---

