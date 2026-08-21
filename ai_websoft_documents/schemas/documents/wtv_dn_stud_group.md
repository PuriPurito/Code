# Схема: wtv_dn_stud_group.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| stream_id | integer | ms_tools.get_const('potok') |  | dn_streams |
| status_id | string | const=2uivot368w |  | common.stud_group_states |
| academ_year_id | integer | ms_tools.get_const('godzachisleniya') |  | dn_academ_years |
| special_id | integer | ms_tools.get_const('specialnost') |  | dn_specials |
| specialization_id | integer | ms_tools.get_const('specializaciya') |  | dn_specializations |
| qualification_id | integer | const=c_qualification |  | qualifications |
| faculty | integer | const=shy9bk42vy |  | subdivisions |
| subfac_id | integer |  |  | subdivisions |
| group_size | integer | ms_tools.get_const('chislennostgrup') |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
