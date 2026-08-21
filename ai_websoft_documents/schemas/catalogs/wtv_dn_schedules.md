# Схема: wtv_dn_schedules.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| faculty | integer | const=shy9bk42vy |  | subdivisions |
| chair | integer | ms_tools.get_const('kafedra') |  | subdivisions |
| academ_year_id | integer |  |  | dn_academ_years |
| term_id | integer | ms_tools.get_const('semestr') |  | dn_terms |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
