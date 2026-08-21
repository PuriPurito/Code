# Схема: wtv_dn_register.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| control_event_id | integer | ms_tools.get_const('kontrolnoemero') |  | dn_control_events |
| type_id | string | const=c_type |  | common.registr_types |
| faculty_id | integer | const=shy9bk42vy |  | subdivisions |
| chair_id | integer | ms_tools.get_const('kafedra') |  | subdivisions |
| discipl_id | integer | ms_tools.get_const('disciplina') |  | dn_disciplines |
| lector_id | integer | const=c_lector |  | lectors |
| date_event | date | const=vdb_aim_date |  |  |
| contr_form_id | integer |  |  | dn_control_forms |
| stud_group_id | integer | const=xg7kvxmhyi |  | dn_stud_groups |
| stud_id | integer | ms_tools.get_const('siwbxij6vi') |  | dn_students |
| mark_id | string |  |  | common.type_marks |
| mark_name | string |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| stud_id | integer |  |  | dn_students |
