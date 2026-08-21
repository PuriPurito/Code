# Схема: wtv_dn_registers.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| control_event_id | integer | ms_tools.get_const('kontrolnoemero') |  | dn_control_events |
| type_id | string | const=c_type |  | common.registr_types |
| faculty_id | integer | const=shy9bk42vy |  | subdivisions |
| chair_id | integer | ms_tools.get_const('kafedra') |  | subdivisions |
| discipl_id | integer | ms_tools.get_const('disciplina') |  | dn_disciplines |
| lector_id | integer | const=c_lector |  | lectors |
| date_event | date |  |  |  |
| contr_form_id | integer |  |  | dn_control_forms |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
