# Схема: wtv_dn_program_discipls.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string |  | ✅ |  |
| name | string |  | ✅ |  |
| status_id | string |  |  | common.prog_discipl_states |
| faculty_id | integer |  |  | subdivisions |
| chair_id | integer |  |  | subdivisions |
| discipline_id | integer |  | ✅ | dn_disciplines |
| academ_year_id | integer |  | ✅ | dn_academ_years |
| all_laboriousn_audit | integer |  | ✅ |  |
| all_laboriousn_indep | integer |  | ✅ |  |
| control_form | integer |  | ✅ | dn_control_forms |
| educat_form_id | integer |  |  | dn_educat_forms |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
