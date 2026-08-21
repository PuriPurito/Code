# Схема: wtv_payment.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  | common.project_status_types |
| pay_date | date | Дата выплаты |  |  |
| start_date | date | Дата начала | ✅ |  |
| end_date | date | Дата завершения | ✅ |  |
| sum | real | const=c_sum |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| person_id | integer | const=c_coll |  | collaborators |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| payment_type_id | integer | Тип выплат |  | payment_types |
| budget_id | integer | const=c_budget |  | budgets |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
