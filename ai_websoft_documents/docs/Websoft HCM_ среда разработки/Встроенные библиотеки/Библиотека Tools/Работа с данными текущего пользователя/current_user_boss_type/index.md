## current_user_boss_type

Свойство. Содержит ссылку на каталожную запись типа руководителя с кодом current\_user (см. каталог boss\_type).

_Синтаксис:_  
      **tools.current\_user\_boss\_type**

_Возвращаемое значение:_  
      Тип: **Строка**. Ссылка на каталожную запись типа руководителя.

_Пример 1:_  
      `_cubt = tools.current_user_boss_type;          alert ( cubt.Name ); // возвращает тип переменной 'current_user_boss_type'         alert ( cubt.HasValue ); // сообщает о наличии значения переменной_`

_Пример 2:_  
      `_if ( ! tools.current_user_boss_type.HasValue )              tools.current_user_boss_type = ArrayOptFirstElem( XQuery( 'for $elem in boss_types where $elem/code = \'current_user\' return $elem' ) );_`

---

