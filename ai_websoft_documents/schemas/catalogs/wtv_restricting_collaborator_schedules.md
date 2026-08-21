# Схема: wtv_restricting_collaborator_schedules.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| budget_period_id | integer | const=c_period |  | budget_periods |
| restriction_type_id | integer | ##'Тип ограничения'## |  | restricting_types |
| state_id | string | const=vppb_state |  | common.agreement_status_types |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
