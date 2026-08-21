# Схема: wtv_budgets.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name | ✅ |  |
| is_approved | bool | const=utverzhden |  |  |
| type_id | integer | const=tipbyudzheta |  | budget_types |
| state | string | const=c_status |  | common.budget_state_types |
| cost_center_id | integer | const=c_cost_center | ✅ | cost_centers |
| budget_period_id | integer | const=c_budget_period | ✅ | budget_periods |
| expense_item_id | integer | const=c_expense_item | ✅ | expense_items |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
