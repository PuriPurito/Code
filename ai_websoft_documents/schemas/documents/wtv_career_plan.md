# Схема: wtv_career_plan.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| start_date | date | const=qpltbj1sg1 |  |  |
| status | string |  |  | common.career_reserve_status_types |
| budget_period_id | integer |  |  | budget_periods |
| typical_career_plan_id | integer | ##'Типовой карьерный план'## |  | career_plans |
| object_type | string |  |  | common.exchange_object_types |
| object_id | integer |  |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| id | string |  |  |  |
| name | string |  |  |  |
| career_transition_direction | string | Направление должностного перемещения |  | common.career_transition_direction_types |
| position_common_id | integer |  |  | position_commons |
| check_requirements | bool | ##'Проверять требования при согласовании'## |  |  |
| plan_date | date | const=kkf50pe6qe |  |  |
| fact_date | date | const=t22y39jexg |  |  |
| status | string |  |  | common.career_reserve_status_types |
| position_id | integer |  |  | positions |
| budget_period_id | integer |  |  | budget_periods |
| stipulation | string | const=dopolnitelnyeu_1 |  |  |
| comment | string | const=vkpb_comment |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| access | string | const=bmlkskx7us |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
| part_index | integer |  |  |  |
| temp_role_id | integer |  |  |  |
