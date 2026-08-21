# Схема: wtv_dn_control_events.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name |  |  |
| date_event | date | const=vdb_aim_date |  |  |
| status_id | string | const=2uivot368w |  | common.lesson_states |
| faculty_id | integer | const=shy9bk42vy | ✅ | subdivisions |
| chair_id | integer |  | ✅ | subdivisions |
| discipl_id | integer |  |  | dn_disciplines |
| lector_id | integer | const=c_lector |  | lectors |
| control_form_id | integer | const=formaitogovogo |  | dn_control_forms |
| lesson_id | integer |  |  | dn_lessons |
| stream_id | integer |  |  | dn_streams |
| stud_group_id | integer | const=xg7kvxmhyi |  | dn_stud_groups |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
