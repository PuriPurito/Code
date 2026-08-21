# Схема: wtv_accounts.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name |  |  |
| balance | real | const=c_balance | ✅ |  |
| status | string | const=c_status |  | common.account_status_types |
| object_type | string | const=c_object_type | ✅ | common.exchange_object_types |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_name |  |  |
| currency_type_id | string | const=c_currency_type | ✅ | lists.currency_types |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
