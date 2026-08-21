# Схема: wtv_dn_discipline.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| desc | string | const=c_desc |  |  |
| faculty_id | integer | const=shy9bk42vy |  | subdivisions |
| chair_id | integer | ms_tools.get_const('kafedra') |  | subdivisions |
| block_id | integer |  |  | dn_discipline_blocks |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
