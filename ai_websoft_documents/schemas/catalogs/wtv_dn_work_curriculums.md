# Схема: wtv_dn_work_curriculums.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name |  |  |
| status_id | string | const=2uivot368w |  | common.prog_discipl_states |
| type | string | const=c_type |  | common.curriculum_types |
| student_id | integer |  |  | dn_students |
| academ_year_id | integer |  |  | dn_academ_years |
| faculty_id | integer | const=shy9bk42vy |  | subdivisions |
| chair_id | integer |  |  | subdivisions |
| special_id | integer |  |  | dn_specials |
| specialization_id | integer |  |  | dn_specializations |
| qualification_id | integer | const=c_qualification |  | qualifications |
| educat_form_id | integer |  |  | dn_educat_forms |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
