# Схема: wtv_dn_control_event.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| date_event | date | const=vdb_aim_date |  |  |
| status_id | string |  |  | common.lesson_states |
| faculty_id | integer |  |  | subdivisions |
| chair_id | integer |  |  | subdivisions |
| discipl_id | integer |  |  | dn_disciplines |
| lector_id | integer | const=c_lector |  | lectors |
| control_form_id | integer |  |  | dn_control_forms |
| lesson_id | integer |  |  | dn_lessons |
| desc | string | const=c_desc |  |  |
| control_assessms | string | const=c_tests |  |  |
| assessm_id | integer |  |  | assessments |
| stream_id | integer |  |  | dn_streams |
| stud_group_id | integer |  |  | dn_stud_groups |
| participants | string | const=c_members |  |  |
| student_id | integer |  |  | dn_students |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
