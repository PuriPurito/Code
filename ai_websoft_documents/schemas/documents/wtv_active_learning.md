# Схема: wtv_active_learning.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| course_id | integer | const=c_course |  | courses |
| course_name | string | const=a74bhtte55 |  |  |
| course_code | string | const=cz4823o9d1 |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| person_current_state | string | const=cloqadyou3 |  |  |
| event_id | integer | const=c_event |  | DefaultDb.GetOptCatalog('events') |
| event_name | string | const=e5i74i7omp |  |  |
| event_start_date | date | const=laddyafkjs |  |  |
| group_id | integer | const=c_group |  | groups |
| start_usage_date | date | const=c_act_date |  |  |
| start_learning_date | date | const=c_start_learning_date |  |  |
| is_self_enrolled | bool | const=40z0829cbn |  |  |
| duration | integer | const=ij926v78io |  |  |
| max_end_date | date | const=vkmb_max_end_date |  |  |
| attempts_num | integer | const=c_attempt_num |  |  |
| base_url | string | const=ff58twxqbg |  |  |
| education_plan_id | integer | const=je8frfv2u9 |  | education_plans |
| parts | string | const=n6ycg6sa3w |  |  |
| is_mandatory | bool | const=vceb_is_mandatory |  |  |
| score_factor | real | const=vceb_factor |  |  |
| dynamic_status | string |  |  |  |
| events | string | const=c_events |  |  |
| event_id | integer | const=c_event |  | events |
| score | real | const=c_score |  |  |
| last_usage_part_code | string | const=0igifv22po |  |  |
| last_usage_date | date | const=vtlpb_last_use |  |  |
| max_score | real | const=c_max_score |  |  |
| score_sum_eval | string | const=zclzjifiya |  |  |
| score | real | const=c_score |  |  |
| calc_score | string | const=c_score |  |  |
| state_id | integer | const=vppb_state |  | common.learning_states |
| time | integer | const=vremyamoduley |  |  |
| no_encoding_core_lesson | bool | const=7pk2kf379q |  |  |
| logging | bool | const=loggirovaniepr |  |  |
| commenting | bool | const=kommentirovanie |  |  |
| proctor_prefer_id | integer | 'Предпочтительный проктор' |  | collaborators |
| use_proctoring | bool | ##'Использовать прокторинг'## |  |  |
| device_disp_type | string | Тип устройства |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=zhoi4m132s |  |  |
| old_course_id | integer |  |  | courses |
| old_person_id | integer |  |  | collaborators |
| never_saved | bool |  |  |  |
| part_index | integer |  |  |  |
| course_object | variant |  |  |  |
| result_tab_selector | string |  |  |  |
