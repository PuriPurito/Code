# Схема: wtv_dn_ind_educat_plan.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| student_id | integer |  |  | dn_students |
| discipline_id | integer |  |  | dn_disciplines |
| prog_discipl_id | integer |  |  | dn_program_discipls |
| control_form_id | integer | const=formaitogovogo |  | dn_control_forms |
| is_course_work | string | const=c_type |  | common.work_types |
| theme_course_work | string |  |  |  |
| chair_id | integer |  |  | subdivisions |
| lector_id | integer | const=c_lector |  | lectors |
| event_id | string |  |  |  |
| theme_id | integer | const=vfb_subject |  | dn_subject_plans |
| period | date | const=vdb_aim_date |  |  |
| kind_term_event | integer | const=vidkontrolnogo |  | dn_control_forms |
| form_term_event | integer | const=c_event_form |  | dn_educat_events |
| mark_min | integer | const=kolichestvoball |  |  |
| mark_max | integer | const=kolichestvoball_1 |  |  |
| doc_info | doc_info_base |  |  |  |
