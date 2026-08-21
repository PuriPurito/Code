# Схема: wtv_object_resources.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| type | string | const=c_type |  | lists.object_resource_types |
| state_id | string | const=c_state |  | common.object_resource_states |
| place_id | integer | const=c_place | ✅ | places |
| collaborator_id | integer | const=c_coll |  | collaborators |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
