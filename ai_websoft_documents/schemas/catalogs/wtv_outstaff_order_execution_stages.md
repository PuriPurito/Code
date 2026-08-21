# Схема: wtv_outstaff_order_execution_stages.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| outstaff_order_execution_id | integer | const= | ✅ | outstaff_order_executions |
| status | string | const=c_status |  | common.order_status_types |
| formed_date | date | const=dataformirovan |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| outstaff_provider_id | integer | const=provaydervreme |  | outstaff_providers |
| outstaff_contract_id | integer | const=kontraktnavrem |  | outstaff_contracts |
| outstaff_order_id | integer | const=zakaznavremenn |  | outstaff_contracts |
| subdivision_id | integer | const=c_subd |  | subdivisions |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| position_common_id | integer | const=c_position_common |  | position_commons |
| stage_id | string | const=c_phase | ✅ |  |
| stage_parent_id | string | const=g16k2jyil5 |  |  |
| stage_collaborator_id | integer | const=c_coll |  | collaborators |
| stage_date | date | const=c_date |  |  |
| stage_fact_date | date | const=c_date |  |  |
| stage_hour_num | integer |  |  |  |
| stage_hours_worked | integer |  |  |  |
| stage_is_assist | bool | const=veresb_exist |  |  |
| stage_status_type | string | const=c_status |  | common.outstaff_order_execution_status_types |
