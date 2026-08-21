# Схема: wtv_dn_subject_plans.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| subject | string | const=vfb_subject |  |  |
| program_discipline_id | integer |  |  | dn_program_discipls |
| prog_disc_append_id | integer | const=prilozheniekpro |  | dn_prog_disc_appends |
| educat_event_id | integer | const=c_event_form |  | dn_educat_events |
| hours | integer |  |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
