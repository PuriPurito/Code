# Схема: wtv_request_types.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| object_type | string | const=c_object_type | ✅ | common.exchange_object_types |
| object_query_qual | string | ##'Условия для отбора объекта'## |  |  |
| is_group | bool | const=32qypb03vz |  |  |
| forbid_rejection | bool | const=zapretitotklon |  |  |
| workflow_id | integer | const=o1ivkrztmb |  | workflows |
| access_block_type | string | const=ij5l10yndc |  | access_blocks |
| remote_action_id | integer | const=udalennoedeyst |  | remote_actions |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
