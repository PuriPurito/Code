# Схема: wtv_benefit_items.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name | ✅ |  |
| status | string | const=c_status | ✅ | common.benefit_item_statuses |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| benefit_id | integer | Тип привилегий | ✅ | benefits |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
