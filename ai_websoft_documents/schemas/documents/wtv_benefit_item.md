# Схема: wtv_benefit_item.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  | common.benefit_item_statuses |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| benefit_id | integer | const=c_benefit |  | benefits |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
