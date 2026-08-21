# Схема: wtv_career_plans.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| resource_id | integer | const=c_resource |  | resources |
| start_date | date | const=qpltbj1sg1 |  |  |
| status | string |  |  | common.career_reserve_status_types |
| budget_period_id | integer |  |  | budget_periods |
| typical_career_plan_id | integer | ##'Типовой карьерный план'## | ✅ | career_plans |
| object_type | string |  |  | common.exchange_object_types |
| object_id | integer |  |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| role_id | integer | const=4egocnh7uc |  | roles |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
