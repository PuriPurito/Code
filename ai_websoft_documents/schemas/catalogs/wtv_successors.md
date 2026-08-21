# Схема: wtv_successors.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| key_position_id | integer | const=klyuchevayadolzhno | ✅ | key_positions |
| key_person_id | integer | const=c_coll | ✅ | collaborators |
| key_person_fullname | string | const=sotrudniknaklyu | ✅ |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=preemnik | ✅ |  |
| person_position_name | string | const=eli0ttzxol |  |  |
| budget_period_id | integer | const=c_budget_period | ✅ | budget_periods |
| readiness_level_id | integer | const=urovengotovnos | ✅ | readiness_levels |
| development_potential_id | integer | const=potencialrazvi_9 | ✅ | development_potentials |
| efficiency_estimation_id | integer | const=ocenkaeffektiv | ✅ | efficiency_estimations |
| request_id | integer | const=c_request | ✅ | requests |
| status | string | const=c_status | ✅ | common.successor_status_types |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
