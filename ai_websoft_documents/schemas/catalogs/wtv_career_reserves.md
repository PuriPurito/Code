# Схема: wtv_career_reserves.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| status | string | const=c_status | ✅ | common.career_reserve_status_types |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| person_position | string | const=qbmk0k5672 | ✅ |  |
| start_date | date | const=y6ls8xn0ca | ✅ |  |
| plan_readiness_date | date | const=c_plan_readiness_date | ✅ |  |
| finish_date | date | const=datafaktichesko | ✅ |  |
| readiness_percent | integer | const=c_readiness_percent | ✅ |  |
| personnel_reserve_id | integer | const=ntdvwhol72 | ✅ | personnel_reserves |
| successor_id | integer | const=preemnik | ✅ | successors |
| career_plan_id | integer | ##'Карьерный план'## | ✅ | career_plans |
| position_type | string | const=oj5205cyx8 | ✅ |  |
| position_name | string | const=vsb_purpose | ✅ |  |
| position_id | integer | const=vcrb_target_position | ✅ | positions |
| position_common_id | integer | const=vcrb_target_position_common | ✅ | position_commons |
| subdivision_id | integer | const=c_action_place | ✅ | subdivisions |
| task_object_ids | integer | ##'Объекты разделов этапа'## |  |  |
| development_programs_id | integer | const=f89jhp79yo |  | typical_development_programs |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
