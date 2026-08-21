# Схема: wtv_recruitment_plans.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| state | string | const=c_status |  | common.recruitment_plan_state_types |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| subdivision_id | integer | ms_tools.get_const('c_subd') |  | subdivisions |
| subdivision_group_id | integer | ms_tools.get_const('1akgrp8ook') |  | subdivision_groups |
| position_family_id | integer | ms_tools.get_const('re7n9mti11') |  | position_familys |
| position_type | string | ms_tools.get_const('tipdolzhnosti') |  |  |
| position_common_id | integer | ms_tools.get_const('c_position') |  | position_commons |
| position_name | string | ms_tools.get_const('c_position') |  |  |
| vacancy_type_id | integer | ms_tools.get_const('tipvakansiy') |  | vacancy_types |
| quantity | integer | ms_tools.get_const('obshayachislennos') |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
