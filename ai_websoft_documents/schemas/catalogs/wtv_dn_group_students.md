# Схема: wtv_dn_group_students.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| student_id | integer |  | ✅ | dn_students |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| special_id | integer |  |  | dn_specials |
| specialization_id | integer |  |  | dn_specializations |
| status_id | string | const=2uivot368w |  | common.student_states |
| main_group_id | integer |  |  | dn_stud_groups |
| group_id | integer |  |  | dn_stud_groups |
