# Схема: wtv_dn_academ_debt.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| faculty_id | integer | const=shy9bk42vy |  | subdivisions |
| chair_id | integer | ms_tools.get_const('kafedra') |  | subdivisions |
| state_id | string | const=2uivot368w |  | common.academ_debt_states |
| stream_id | integer | ms_tools.get_const('potok') |  | dn_streams |
| stud_group_id | integer | const=xg7kvxmhyi |  | dn_stud_groups |
| student_id | integer | ms_tools.get_const('siwbxij6vi') |  | dn_students |
| discipl_id | integer | ms_tools.get_const('disciplina') |  | dn_disciplines |
| contr_form_id | integer |  |  | dn_control_forms |
| latest_date | date |  |  |  |
| liquid_date | date |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
