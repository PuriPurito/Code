# Схема: wtv_collaborator_schedules.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| date | date | const=c_date |  |  |
| start_time | string | const=c_start_date |  |  |
| finish_time | string | const=3bywib72ya |  |  |
| presence_state_id | integer |  |  | presence_states |
| schedule_day_id | integer | const=vcrb_graph |  | schedule_days |
| interval_schedule_id | integer | ##'Интервал графика'## |  | interval_schedules |
| schedule_type_id | integer | ##'Тип графика'## |  | schedule_types |
| state_id | string | const=vppb_state |  | common.agreement_status_types |
| approval_date | date | ##'Дата согласования'## |  |  |
| approval_person_id | integer | ##'Согласующий'## |  | collaborators |
| budget_period_id | integer | const=c_period |  | budget_periods |
| rest_collaborator_schedule_id | integer | ##'Ограничения'## |  | restricting_collaborator_schedules |
| reason_comment | string | ##'Комментарий причины согласования/отмены'## |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
