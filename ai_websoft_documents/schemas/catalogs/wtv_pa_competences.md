# Схема: wtv_pa_competences.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| pa_id | integer | const=nuzikvfqcy | ✅ | pas |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  | common.assessment_appraise_participants |
| assessment_appraise_id | integer | const=c_ass_appraise | ✅ | assessment_appraises |
| event_id | integer | const=c_ass_appraise | ✅ | events |
| person_id | integer | const=ass_estimated_person | ✅ | collaborators |
| person_fullname | string | const=cktioenppl | ✅ |  |
| person_position_name | string | const=gt1vsgiqrc |  |  |
| expert_person_id | integer | const=mkwzmalbrv | ✅ | collaborators |
| expert_person_fullname | string | const=c3gsppu8ck | ✅ |  |
| expert_person_position_name | string | const=c17myt0ete |  |  |
| assessment_appraise_type | string | const=ass_type |  | common.assessment_appraise_types |
| is_done | bool | const=xvgwmop0bf |  |  |
| competence_id | integer | const=ass_competence | ✅ | competences |
| plan | string | const=vkb_plan_value |  |  |
| mark | string | const=vdb_aim_value |  |  |
| weight | real | const=ques_score |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
