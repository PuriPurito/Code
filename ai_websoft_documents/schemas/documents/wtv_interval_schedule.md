# Схема: wtv_interval_schedule.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| presence_state_id | integer | ##'Тип присутствия/отсутствия'## |  | presence_states |
| status_id | string | const=vppb_state |  | common.agreement_status_types |
| workflow_type | string | ##'Тип документооборота на согласовании'## |  |  |
| id | string |  |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| workflow_matching_type | string | const=c136i4h31q |  |  |
| name | string | const=c_name |  |  |
| value | string |  |  |  |
| comment | string | const=c_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| workflow_state | string |  |  |  |
| workflow_action_result | variant |  |  |  |
| workflow_create_break | bool |  |  |  |
| status_id | string | const=vppb_state |  | common.agreement_status_types |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
