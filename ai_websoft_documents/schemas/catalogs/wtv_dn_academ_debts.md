# Схема: wtv_dn_academ_debts.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| faculty_id | integer | const=shy9bk42vy | ✅ | subdivisions |
| chair_id | integer | ms_tools.get_const('kafedra') | ✅ | subdivisions |
| state_id | string | const=2uivot368w |  | common.academ_debt_states |
| stream_id | integer | ms_tools.get_const('potok') |  | dn_streams |
| stud_group_id | integer | const=xg7kvxmhyi |  | dn_stud_groups |
| student_id | integer | ms_tools.get_const('siwbxij6vi') |  | dn_students |
| discipl_id | integer | ms_tools.get_const('disciplina') |  | dn_disciplines |
| contr_form_id | integer |  |  | dn_control_forms |
| latest_date | date |  |  |  |
| liquid_date | date |  |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
