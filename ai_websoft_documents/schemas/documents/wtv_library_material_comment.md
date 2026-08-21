# Схема: wtv_library_material_comment.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| is_admin_approved | bool |  |  |  |
| material_id | integer |  |  | library_materials |
| user_id | integer |  |  | collaborators |
| create_date | date |  |  |  |
| parent_object_id | integer |  |  | library_material_comments |
| how2show | string |  |  |  |
| last_create_date | date |  |  |  |
| is_closed | bool |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
