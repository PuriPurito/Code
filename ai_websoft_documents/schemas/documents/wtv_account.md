# Схема: wtv_account.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| balance | real | const=c_balance |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| status | string | const=c_status |  | common.account_status_types |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
