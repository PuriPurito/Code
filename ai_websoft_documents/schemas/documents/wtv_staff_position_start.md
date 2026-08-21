# Схема: wtv_staff_position_start.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| subdivision_id | integer | const=c_subd |  | subdivisions |
| subdivision_name | string | const=uf_depart_name |  |  |
| position_id | integer | const=c_position |  | positions |
| position_name | string | const=g89skt4yui |  |  |
| staff_position_id | integer | Позиция штатного рассписания |  | staff_positions |
| position_date | date | const=datavstupleniya |  |  |
| document | string | Нормативный документ |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
