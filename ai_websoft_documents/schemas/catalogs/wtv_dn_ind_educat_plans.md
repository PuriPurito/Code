# Схема: wtv_dn_ind_educat_plans.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| student_id | integer |  |  | dn_students |
| discipline_id | integer |  |  | dn_disciplines |
| prog_discipl_id | integer |  |  | dn_program_discipls |
| control_form_id | integer | const=formaitogovogo |  | dn_control_forms |
| is_course_work | string | const=c_type |  | common.work_types |
| theme_course_work | string |  |  |  |
| chair_id | integer |  |  | subdivisions |
| lector_id | integer | const=c_lector |  | lectors |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
