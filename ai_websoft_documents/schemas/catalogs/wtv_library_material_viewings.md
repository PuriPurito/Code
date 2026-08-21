# Схема: wtv_library_material_viewings.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| material_id | integer | const=materialbiblio |  | library_materials |
| material_name | string | const=nazvaniemateri |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| state_id | string | const=vppb_state | ✅ | common.viewing_states |
| duration | integer | const=prodolzhitelnos_4 |  |  |
| start_viewing_date | date | const=nachaloprosmotra |  |  |
| last_viewing_date | date | const=vremyaposledneg |  |  |
| finish_viewing_date | date | const=vremyapolnogopr |  |  |
| education_plan_id | integer | const=je8frfv2u9 |  | education_plans |
| creation_date | date | const=c_create_date | ✅ |  |
| creation_user_id | integer | const=wrm4ebg7c9 |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| modification_user_id | integer | const=wrm4ebg7c9 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
