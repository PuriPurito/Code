# Схема: wtv_dn_lessons.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| faculty_id | integer | const=shy9bk42vy | ✅ | subdivisions |
| chair_id | integer | ms_tools.get_const('kafedra') | ✅ | subdivisions |
| discipline_id | integer | ms_tools.get_const('disciplina') | ✅ | dn_disciplines |
| lesson_date | date |  |  |  |
| status_id | string | const=2uivot368w |  | common.lesson_states |
| lector_id | integer | const=c_lector |  | lectors |
| educat_event_form_id | integer |  |  | dn_educat_events |
| auditorium_id | integer | ms_tools.get_const('auditoriya') |  | dn_auditoriums |
| stream_id | integer | ms_tools.get_const('potok') |  | dn_streams |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
