# Схема: wtv_active_test_learning.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| activation_code | string |  |  |  |
| name | string | const=c_name |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| person_current_state | string | const=cloqadyou3 |  |  |
| event_id | integer | const=c_event |  | events |
| event_name | string | const=e5i74i7omp |  |  |
| event_start_date | date | const=laddyafkjs |  |  |
| education_plan_id | integer | const=je8frfv2u9 |  | education_plans |
| group_id | integer | const=c_group |  | groups |
| proctor_prefer_id | integer | 'Предпочтительный проктор' |  | collaborators |
| duration | integer | const=grs8t4g2f3 |  |  |
| attempts_num | integer | const=c_attempt_num |  |  |
| state_id | integer | const=c_status |  | common.learning_states |
| lesson_location | string |  |  |  |
| score | real | const=c_score |  |  |
| score_str | string |  |  |  |
| core_lesson | string | const=wld9ubaejx |  |  |
| lesson_report | string | const=vpb_report |  |  |
| start_usage_date | date | const=c_act_date |  |  |
| start_learning_date | date | const=c_start_learning_date |  |  |
| last_usage_date | date | const=vtlpb_last_use |  |  |
| max_end_date | date | const=vkmb_max_end_date |  |  |
| time | integer | const=xewzx7569a |  |  |
| max_score | real | const=c_max_score |  |  |
| assessment_appraise_id | integer | const=c_ass_appraise |  | assessment_appraises |
| question_num | integer |  |  |  |
| no_encoding_core_lesson | bool |  |  |  |
| use_proctoring | bool | ##'Использовать прокторинг'## |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| testing_link | string | 'Ссылка на внешнюю сессию тестирования' |  |  |
| old_assessment_id | integer |  |  | assessments |
| old_person_id | integer |  |  | collaborators |
| never_saved | bool |  |  |  |
| assessment_object | variant |  |  |  |
