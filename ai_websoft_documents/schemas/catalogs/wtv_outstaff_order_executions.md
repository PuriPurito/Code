# Схема: wtv_outstaff_order_executions.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| status | string | const=c_status | ✅ | common.order_status_types |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| collaborator_fullname | string | const=lhbyv18qkm | ✅ |  |
| position_common_id | integer | const=c_position_common | ✅ | position_commons |
| position_common_name | string | const=c_position_common | ✅ |  |
| subdivision_id | integer | const=c_subd | ✅ | subdivisions |
| subdivision_name | string | const=c_subd | ✅ |  |
| budget_period_id | integer | const=c_budget_period | ✅ | budget_periods |
| outstaff_contract_id | integer | const=kontraktnavrem | ✅ | outstaff_contracts |
| outstaff_contract_name | string | const=kontraktnavrem | ✅ |  |
| formed_date | date | const=dataformirovan | ✅ |  |
| paid_date | date | const=dataoplaty | ✅ |  |
| start_date | date | const=c_start_date | ✅ |  |
| finish_date | date | const=c_finish_date | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
