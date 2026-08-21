# Схема: wtv_event_assessment_plan.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| event_id | integer | const=c_event |  | events |
| expert_person_id | integer | const=ass_estimating_person |  | collaborators |
| date_start | date |  |  |  |
| assessment_type | string | const=ass_type |  |  |
| assessment_type_id | string | const=qh5b7m87q2 |  |  |
| status | string | const=rg6sc9dnea |  | common.assessment_appraise_participants |
| is_done | bool | const=xvgwmop0bf |  |  |
| competences | string | const=ass_competences |  |  |
| competence_id | integer | const=ass_competence |  | competences |
| plan | string | const=vkb_plan_value |  |  |
| mark | string | const=vdb_aim_value |  |  |
| weight | real | const=ques_score |  |  |
| exercises | string | const=5z3iuqumsa |  |  |
| exercise_id | integer | const=p41advdk80 |  | exercises |
| mark | string | const=vdb_aim_value |  |  |
| indicators | string | const=c_indicators |  |  |
| indicator_id | integer | const=ass_indicator |  | indicators |
| plan | string | const=m7xz4bwolj |  |  |
| mark | string | const=vdb_aim_value |  |  |
| weight | real | const=ques_score |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| comment | string | const=vkpb_comment |  |  |
| temp | string |  |  |  |
| file_name | string |  |  |  |
| file_url | string |  |  |  |
| selector | string |  |  |  |
| temp_id | integer |  |  |  |
| flag_mark | bool |  |  |  |
| id | string |  |  |  |
| name | string |  |  |  |
| percent | integer |  |  |  |
| event_result_type_id | integer |  |  | event_result_types |
