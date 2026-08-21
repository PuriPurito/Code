# Схема: wtv_outstaff_orders.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| status | string | const=c_status | ✅ | common.order_status_types |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| budget_period_id | integer | const=c_budget_period | ✅ | budget_periods |
| subdivision_id | integer | const=c_subd |  | subdivisions |
| position_common_id | integer | const=c_position_common |  | position_commons |
| region_id | integer | const=vrb_region |  | regions |
| agreement_person_id | integer | const=vw_reconciler |  | collaborators |
| cost_hour | real | const=p7kssz5oz1 |  |  |
| cost_sum | real | const=c_cost |  |  |
| formed_date | date | const=dataformirovan | ✅ |  |
| paid_date | date | const=dataoplaty | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
