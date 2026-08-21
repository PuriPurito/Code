# Схема: wtv_bonus_items.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| name | string | const=c_name |  |  |
| assessment_appraise_id | integer | const=vppb_procedure |  | assessment_appraises |
| budget_period_id | integer |  |  | budget_periods |
| person_id | integer |  |  | collaborators |
| period_start | date |  |  |  |
| period_end | date |  |  |  |
| result | real | const=c_result |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
