# Схема: wtv_recruitment_plan.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| position_type | string | ms_tools.get_const('tipdolzhnosti') |  |  |
| position_common_id | integer | ms_tools.get_const('c_position') |  | position_commons |
| position_name | string | ms_tools.get_const('c_position') |  |  |
| comment | string | const=vkpb_comment |  |  |
| state | string | const=c_status |  | common.recruitment_plan_state_types |
| budget_period_id | integer | const=c_budget_period |  | FindOptCatalog('budget_periods') |
| subdivision_id | integer | ms_tools.get_const('c_subd') |  | subdivisions |
| subdivision_group_id | integer | ms_tools.get_const('1akgrp8ook') |  | subdivision_groups |
| position_family_id | integer | ms_tools.get_const('re7n9mti11') |  | position_familys |
| grade_id | integer | ms_tools.get_const('hadn53sf2d') |  | grades |
| vacancy_type_id | integer | ms_tools.get_const('tipvakansiy') |  | vacancy_types |
| quantity | integer | ms_tools.get_const('obshayachislennos') |  |  |
| budget_periods | string | ms_tools.get_const('55b09z3b3p') |  |  |
| budget_period_id | integer |  |  | budget_periods |
| budget_period_name | string | ms_tools.get_const('c_name') |  |  |
| quantity | integer | ms_tools.get_const('chislennost') |  |  |
| comment | string | ms_tools.get_const('c_comment') |  |  |
| recruitment_methods | string | ms_tools.get_const('sposobypodbora') |  |  |
| recruitment_method_id | integer |  |  | recruitment_methods |
| candidate_sources | string | ms_tools.get_const('istochnikikandi') |  |  |
| candidate_source_id | integer |  |  | candidate_sources |
| coordinators | string | const=5wdhewcbmb |  |  |
| person_id | integer |  |  | collaborators |
| is_native | bool | const=gbw97zyx5g |  |  |
| boss_type_id | integer | const=c_manager_type |  | boss_types |
| is_responsible | bool | const=41yw4tp759 |  |  |
| comment | string |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| access | string | const=bmlkskx7us |  |  |
