# Схема: wtv_active_learnings.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| course_id | integer | const=c_course | ✅ | courses |
| course_name | string | const=a74bhtte55 | ✅ |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| person_position_name | string | const=c_position |  |  |
| person_org_name | string | const=c_org | ✅ |  |
| person_subdivision_name | string | const=c_subd |  |  |
| person_instance_id | string | const=d9rrkwvlo6 |  |  |
| person_current_state | string | const=cloqadyou3 | ✅ |  |
| event_id | integer | const=c_event |  | events |
| event_name | string | const=e5i74i7omp | ✅ |  |
| event_start_date | date | const=laddyafkjs |  |  |
| group_id | integer | const=c_group | ✅ | groups |
| start_usage_date | date | const=c_act_date | ✅ |  |
| start_learning_date | date | const=c_start_learning_date | ✅ |  |
| last_usage_date | date | const=vtlpb_last_use | ✅ |  |
| last_usage_part_code | string | const=rivl9mmsl3 |  |  |
| max_end_date | date | const=vkmb_max_end_date | ✅ |  |
| max_score | real | const=c_max_score |  |  |
| score | real | const=c_score | ✅ |  |
| state_id | integer | const=vppb_state | ✅ | common.learning_states |
| time | integer | const=vremyamoduley |  |  |
| education_plan_id | integer | const=je8frfv2u9 |  | education_plans |
| is_self_enrolled | bool | const=40z0829cbn |  |  |
| creation_date | date | const=c_create_date | ✅ |  |
| creation_user_id | integer | const=wrm4ebg7c9 |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| modification_user_id | integer | const=wrm4ebg7c9 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| proctor_prefer_id | integer | 'Предпочтительный проктор' |  | collaborators |
| use_proctoring | bool | ##'Использовать прокторинг'## |  |  |
