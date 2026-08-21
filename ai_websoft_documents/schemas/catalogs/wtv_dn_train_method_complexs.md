# Схема: wtv_dn_train_method_complexs.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| faculty_id | integer | const=shy9bk42vy |  | subdivisions |
| chair_id | integer |  |  | subdivisions |
| discipline_id | integer |  | ✅ | dn_disciplines |
| program_discipline_id | integer |  | ✅ | dn_program_discipls |
| program_discipline_name | string |  | ✅ |  |
| lector_id | integer | const=c_lector | ✅ | lectors |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
