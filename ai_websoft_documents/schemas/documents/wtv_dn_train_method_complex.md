# Схема: wtv_dn_train_method_complex.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| facult_id | integer | const=shy9bk42vy |  | subdivisions |
| chair_id | integer | ms_tools.get_const('kafedra') |  | subdivisions |
| discipline_id | integer | ms_tools.get_const('disciplina') |  | dn_disciplines |
| program_discipline_id | integer | ms_tools.get_const('programmadisci') |  | dn_program_discipls |
| program_discipline_name | string |  |  |  |
| lector_id | integer | const=c_lector |  | lectors |
| control_forms | string | ms_tools.get_const('formakontrolya') |  |  |
| form_id | integer |  |  | dn_control_forms |
| term_id | integer |  |  | dn_terms |
| form_id | integer |  |  | dn_educat_events |
| hours | string |  |  |  |
| term_id | integer |  |  | dn_terms |
| hours_week | string |  |  |  |
| course_id | integer |  |  | courses |
| assessm_id | integer |  |  | assessments |
| item_id | integer |  |  | items |
| doc_info | doc_info_base |  |  |  |
