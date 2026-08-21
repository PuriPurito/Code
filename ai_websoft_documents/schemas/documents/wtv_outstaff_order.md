# Схема: wtv_outstaff_order.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  | common.order_status_types |
| formed_date | date | const=dataformirovan |  |  |
| paid_date | date | const=dataoplaty |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| outstaff_provider_id | integer | const=provaydervreme |  | outstaff_providers |
| outstaff_contract_id | integer | const=kontraktnavrem |  | outstaff_contracts |
| budget_period_id | integer | const=c_budget_period | ✅ | budget_periods |
| subdivision_id | integer | const=c_subd |  | subdivisions |
| position_common_id | integer | const=c_position_common |  | position_commons |
| region_id | integer | const=vrb_region |  | regions |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| period_type | string |  |  |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| id | string |  |  |  |
| name | string |  |  |  |
| start_hour | integer |  |  |  |
| finish_hour | integer |  |  |  |
| hour_num | integer |  |  |  |
| full_time | bool |  |  |  |
| person_num | integer |  |  |  |
| cost_hour | real | const=p7kssz5oz1 |  |  |
| cost_sum | real | const=c_cost |  |  |
| currency | string | const=c_currency_type |  | lists.currency_types |
| agreement_person_id | integer | const=vw_reconciler |  | collaborators |
| access | string | const=bmlkskx7us |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| last_status | string |  |  |  |
