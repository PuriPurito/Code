# Схема: wtv_interval_schedules.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| presence_state_id | integer | ##'Тип присутствия/отсутствия'## |  | presence_states |
| status_id | string | const=vppb_state |  | common.agreement_status_types |
| create_date | date | const=c_create_date | ✅ |  |
| workflow_id | integer | const=vw_title |  | workflows |
| workflow_state | string | const=c136i4h31p | ✅ |  |
| workflow_state_name | string | const=ld9m4gsmfn | ✅ |  |
| workflow_type | string | ##'Тип документооборота на согласовании'## |  |  |
| change_start_date | date | ##'Новая дата начала'## |  |  |
| change_finish_date | date | ##'Новая дата завершения'## |  |  |
| workflow_person_id | integer | const=c_coll | ✅ | collaborators |
| workflow_matching_type | string | const=c136i4h31q |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
