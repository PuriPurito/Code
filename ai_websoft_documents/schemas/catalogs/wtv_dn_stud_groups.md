# Схема: wtv_dn_stud_groups.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| stream_id | integer | ms_tools.get_const('potok') |  | dn_streams |
| status_id | string | const=2uivot368w |  | common.stud_group_states |
| academ_year_id | integer |  |  | dn_academ_years |
| special_id | integer |  |  | dn_specials |
| specialization_id | integer |  |  | dn_specializations |
| qualification_id | integer | const=c_qualification |  | qualifications |
| faculty | integer | const=shy9bk42vy |  | subdivisions |
| group_size | integer |  |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
