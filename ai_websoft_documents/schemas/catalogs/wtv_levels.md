# Схема: wtv_levels.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| prev_level_id | integer | 'Предыдущий уровень' |  | levels |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| min_value | real |  |  |  |
| max_value | real |  |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
