# Схема: wtv_assessment_plans.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| assessment_appraise_id | integer | const=c_ass_appraise | ✅ | assessment_appraises |
| person_id | integer | const=ass_estimated_person | ✅ | collaborators |
| person_fullname | string | const=cktioenppl | ✅ |  |
| person_position_name | string | const=gt1vsgiqrc |  |  |
| person_position_id | integer | const=gt1vsgiqrc |  | positions |
| person_position_parent_id | integer | const=c_subd |  | subdivisions |
| expert_person_id | integer | const=mkwzmalbrv | ✅ | collaborators |
| expert_person_fullname | string | const=c3gsppu8ck | ✅ |  |
| expert_person_position_name | string | const=c17myt0ete |  |  |
| expert_person_position_id | integer | const=c_position |  | positions |
| expert_person_position_parent_id | integer | const=c_subd |  | subdivisions |
| custom_experts | string | const=ass_custom_experts |  |  |
| custom_experts_array | integer | const=ass_custom_experts | ✅ | collaborators |
| is_custom_experts | bool | const=ass_custom_experts | ✅ |  |
| department_id | integer | const=c_subd |  |  |
| department_name | string | const=uf_depart_name |  |  |
| flag_appraise_department | bool | const=nr7j4zxnrm |  |  |
| is_done | bool | const=xvgwmop0bf |  |  |
| assessment_appraise_type | string | const=ass_type |  | common.assessment_appraise_types |
| status | string | const=c_status |  | common.assessment_appraise_participants |
| boss_id | integer | const=c_boss | ✅ | collaborators |
| integral_mark | real | const=vx314disrh |  |  |
| workflow_id | integer | const=vw_title |  | workflows |
| workflow_state | string | const=hzte1f3376 |  |  |
| workflow_state_name | string | const=ld9m4gsmfn |  |  |
| workflow_state_last_date | date | const=c_finish_date |  |  |
| is_workflow_init | bool | const=doinicializiro |  |  |
| flag_is_processed | bool | const=y7vmgz1wnd |  |  |
| workflow_person_id | integer | const=c_coll | ✅ | collaborators |
| workflow_end_date | date | const=7vupl5i3sj |  |  |
| index | integer | const=c_index |  |  |
| start_date | date | const=c_start_date |  |  |
| end_date | date | const=c_finish_date |  |  |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| period_start | date | const=vppb_from |  |  |
| period_end | date | const=mkly6lmeds |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
