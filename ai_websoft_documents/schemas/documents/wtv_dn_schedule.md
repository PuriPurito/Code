# Схема: wtv_dn_schedule.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| faculty | integer | const=shy9bk42vy |  | subdivisions |
| chair | integer | ms_tools.get_const('kafedra') |  | subdivisions |
| academ_year_id | integer |  |  | dn_academ_years |
| term_id | integer | ms_tools.get_const('semestr') |  | dn_terms |
| elem_id | string |  |  |  |
| week_day_id | integer |  |  | common.week_days |
| time | string | const=c_time |  |  |
| periodic_type_id | string |  |  | common.periodicity_types |
| discipl_id | integer |  |  | dn_disciplines |
| edu_event_form_id | integer |  |  | dn_educat_events |
| lector_id | integer | const=c_lector |  | lectors |
| stream_id | integer | ms_tools.get_const('potok') |  | dn_streams |
| stud_group_id | integer | const=xg7kvxmhyi |  | dn_stud_groups |
| auditor_id | integer | ms_tools.get_const('auditoriya') |  | dn_auditoriums |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
