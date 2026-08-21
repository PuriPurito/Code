# Схема: wtv_active_test_learnings.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| assessment_id | integer | const=c_test | ✅ | assessments |
| assessment_name | string | const=gzidm72pii | ✅ |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| person_position_name | string | const=c_position |  |  |
| person_org_name | string | const=c_org | ✅ |  |
| person_subdivision_name | string | const=c_subd |  |  |
| person_instance_id | string | const=d9rrkwvlo6 |  |  |
| person_current_state | string | const=cloqadyou3 | ✅ |  |
| event_id | integer | const=c_event | ✅ | events |
| group_id | integer | const=c_group | ✅ | groups |
| proctor_prefer_id | integer | 'Предпочтительный проктор' |  | collaborators |
| testing_link | string | 'Ссылка на внешнюю сессию тестирования' |  |  |
| start_usage_date | date | const=c_act_date | ✅ |  |
| start_learning_date | date | const=c_start_learning_date | ✅ |  |
| last_usage_date | date | const=vtlpb_last_use | ✅ |  |
| max_end_date | date | const=vkmb_max_end_date | ✅ |  |
| score | real | const=c_score | ✅ |  |
| state_id | integer | const=vppb_state | ✅ | common.learning_states |
| time | integer | const=xewzx7569a |  |  |
| use_proctoring | bool | ##'Использовать прокторинг'## |  |  |
| is_self_enrolled | bool | const=40z0829cbn |  |  |
| max_score | real | const=c_max_score |  |  |
| assessment_appraise_id | integer | const=c_ass_appraise |  | assessment_appraises |
| education_plan_id | integer | const=je8frfv2u9 |  | education_plans |
| creation_date | date | const=c_create_date | ✅ |  |
| creation_user_id | integer | const=wrm4ebg7c9 |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| modification_user_id | integer | const=wrm4ebg7c9 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
