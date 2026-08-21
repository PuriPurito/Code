# Схема: wtv_policy.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| number | string | const=fnxaxirsmo |  |  |
| policy_type_id | integer | Тип полиса |  | policy_types |
| state_id | string | const=vppb_state |  | common.budget_state_types |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| doc_info | doc_info_base |  |  |  |
