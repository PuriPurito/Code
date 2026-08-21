# Схема: wtv_region.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| parent_object_id | integer | ms_tools.get_const('roditelskiyreg') |  | regions |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
