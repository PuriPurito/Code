# Схема: wtv_successor.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| name | string | const=c_name |  |  |
| key_position_id | integer | const=klyuchevayadolzhno |  | key_positions |
| person_id | integer | const=c_coll |  | collaborators |
| person_id | integer | const=c_coll |  | collaborators |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| readiness_level_id | integer | const=urovengotovnos |  | readiness_levels |
| development_potential_id | integer | const=potencialrazvi_9 |  | development_potentials |
| efficiency_estimation_id | integer | const=ocenkaeffektiv |  | efficiency_estimations |
| request_id | integer | const=c_request |  | requests |
| status | string | const=c_status |  | common.successor_status_types |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| access | string | const=bmlkskx7us |  |  |
