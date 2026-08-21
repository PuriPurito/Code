# Схема: wtv_dn_lesson.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| faculty_id | integer | const=shy9bk42vy |  | subdivisions |
| chair_id | integer | ms_tools.get_const('kafedra') |  | subdivisions |
| discipline_id | integer | ms_tools.get_const('disciplina') |  | dn_disciplines |
| lesson_date | date | const=vdb_aim_date |  |  |
| status_id | string | const=2uivot368w |  | common.lesson_states |
| lector_id | integer | const=c_lector |  | lectors |
| educat_event_form_id | integer |  |  | dn_educat_events |
| auditorium_id | integer | ms_tools.get_const('auditoriya') |  | dn_auditoriums |
| stream_id | integer | ms_tools.get_const('potok') |  | dn_streams |
| stud_groups | string | const=urrno1dqhy |  |  |
| group_id | integer | const=xg7kvxmhyi |  | dn_stud_groups |
| deliv_date | date |  |  |  |
| work_id | string |  |  |  |
| student_id | integer | ms_tools.get_const('siwbxij6vi') |  | dn_students |
| work_state_id | string |  |  | common.stud_work_states |
| work_date | date |  |  |  |
| mark | integer | ms_tools.get_const('vdb_aim_value') |  |  |
| stud_id | integer | ms_tools.get_const('siwbxij6vi') |  | dn_students |
| is_presence | bool |  |  |  |
| mark | integer | ms_tools.get_const('vdb_aim_value') |  |  |
| lector_comment | string | ms_tools.get_const('kommentariypre') |  |  |
| student_id | integer |  |  | dn_students |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
