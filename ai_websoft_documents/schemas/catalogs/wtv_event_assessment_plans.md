# Схема: wtv_event_assessment_plans.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| event_id | integer | const=c_event | ✅ | events |
| person_id | integer | const=ass_estimated_person | ✅ | collaborators |
| person_fullname | string | const=cktioenppl |  |  |
| person_position_name | string | const=gt1vsgiqrc |  |  |
| expert_person_id | integer | const=mkwzmalbrv |  | collaborators |
| expert_person_fullname | string | const=c3gsppu8ck |  |  |
| expert_person_position_name | string | const=c17myt0ete |  |  |
| date_start | date | const=vdb_aim_date |  |  |
| is_done | bool | const=xvgwmop0bf |  |  |
| assessment_type | string | const=ass_type |  |  |
| assessment_type_id | string | const=qh5b7m87q2 |  |  |
| status | string | const=c_status |  | common.assessment_appraise_participants |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
