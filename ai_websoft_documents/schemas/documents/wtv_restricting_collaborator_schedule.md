# Схема: wtv_restricting_collaborator_schedule.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| budget_period_id | integer | const=c_period |  | budget_periods |
| restriction_type_id | integer | ##'Тип ограничения'## |  | restricting_types |
| state_id | string | const=vppb_state |  | common.agreement_status_types |
| comment | string | const=c_comment |  |  |
| doc_info | doc_info_base |  |  |  |
