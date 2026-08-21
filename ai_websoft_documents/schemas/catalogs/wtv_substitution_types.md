# Схема: wtv_substitution_types.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name |  |  |
| object_type | string | Тип объекта | ✅ |  |
| operation_codes | string | Коды операций |  |  |
| operation_id | integer | const=4egocnh7uc | ✅ | operations |
| remote_action_codes | string | Коды удаленных действий |  |  |
| remote_action_id | integer | Действия | ✅ | remote_actions |
| data_str | string | Нестандартные права (строка или JSON с информацией о правах) |  |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| is_active | bool | Действует | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
