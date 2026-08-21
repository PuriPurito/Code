# Схема: wtv_outstaff_order_execution.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  | common.order_status_types |
| formed_date | date | const=dataformirovan |  |  |
| paid_date | date | const=dataoplaty |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| collaborator_fullname | string | const=04c9fb17ay |  |  |
| outstaff_provider_id | integer | const=provaydervreme |  | outstaff_providers |
| outstaff_contract_id | integer | const=kontraktnavrem |  | outstaff_contracts |
| outstaff_contract_name | string | const=kontraktnavrem |  |  |
| outstaff_order_id | integer | const=zakaznavremenn |  | outstaff_contracts |
| subdivision_id | integer | const=c_subd |  | subdivisions |
| subdivision_name | string | const=c_subd |  |  |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| position_common_id | integer | const=c_position_common |  | position_commons |
| position_common_name | string | const=c_position_common |  |  |
| stage_num | integer |  |  |  |
| id | string |  |  |  |
| parent_stage_id | string | const=g16k2jyil5 |  |  |
| collaborator_id | integer | const=c_coll |  | collaborators |
| provider_person_fullname | string | const=c_coll |  |  |
| date | date | const=c_date |  |  |
| fact_date | date | const=c_date |  |  |
| hour_num | integer |  |  |  |
| hours_worked | integer |  |  |  |
| is_assist | bool | const=veresb_exist |  |  |
| outstaff_order_execution_status_type | string | const=c_status |  | common.outstaff_order_execution_status_types |
| comment | string | const=vkpb_comment |  |  |
| access | string | const=bmlkskx7us |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
