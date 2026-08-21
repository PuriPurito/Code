# Схема: wtv_policys.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| person_position_name | string | const=c_position |  |  |
| person_org_name | string | const=c_org | ✅ |  |
| person_subdivision_name | string | const=c_subd |  |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| number | string | const=fnxaxirsmo |  |  |
| policy_type_id | integer | Тип полиса |  | policy_types |
| state_id | string | const=vppb_state |  | common.budget_state_types |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
