# Схема: wtv_personnel_reserves.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status | ✅ | common.personnel_reserve_status_types |
| career_reserve_type_id | integer | const=tipkadrovogore | ✅ | career_reserve_types |
| exclusion_reason_id | integer | const=osnovaniedlyais | ✅ | exclusion_reasons |
| nomination_id | integer | const=sposobvydvizhen | ✅ | talent_pool_nominations |
| development_potential_id | integer | const=potencialrazvi_9 | ✅ | development_potentials |
| efficiency_estimation_id | integer | const=ocenkaeffektiv | ✅ | efficiency_estimations |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| person_position_name | string | const=ixr5rs3b76 | ✅ |  |
| start_date | date | const=y6ls8xn0ca | ✅ |  |
| include_reserve_date | date | const=datavklyucheniyav | ✅ |  |
| finish_date | date | const=c_close_date | ✅ |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
