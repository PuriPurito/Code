# Схема: wtv_library_material_viewing.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| material_id | integer | const=materialbiblio |  | library_materials |
| material_name | string | const=nazvaniemateri |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| duration | integer | const=prodolzhitelnos_4 |  |  |
| location | integer |  |  |  |
| page_id | string |  |  |  |
| viewed | bool |  |  |  |
| state_id | string | const=vppb_state |  | common.viewing_states |
| current_page_id | string | const=tekushayastranica |  |  |
| education_plan_id | integer | const=je8frfv2u9 |  | education_plans |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| start_viewing_date | date | const=nachaloprosmotra |  |  |
| last_viewing_date | date | const=vremyaposledneg |  |  |
| finish_viewing_date | date | const=vremyapolnogopr |  |  |
