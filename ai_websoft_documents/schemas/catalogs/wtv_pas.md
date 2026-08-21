# Схема: wtv_pas.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ | pas |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| assessment_appraise_id | integer | const=c_ass_appraise | ✅ | assessment_appraises |
| assessment_plan_id | integer | const=planyocenki | ✅ | assessment_plans |
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
| department_id | integer | const=c_subd | ✅ |  |
| department_name | string | const=uf_depart_name |  |  |
| flag_appraise_department | bool | const=nr7j4zxnrm |  |  |
| competence_profile_id | integer | const=ass_competence_profile |  | competence_profiles |
| kpi_profile_id | integer | const=ass_kpi_profile |  | kpi_profiles |
| kpi_profiles_id | integer | const=ass_kpi_profile |  | kpi_profiles |
| bonus_profile_id | integer | const=629saq8h6f |  | bonus_profiles |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| period_start | date | const=vppb_from |  |  |
| period_end | date | const=mkly6lmeds |  |  |
| assessment_appraise_type | string | const=ass_type | ✅ | common.assessment_appraise_types |
| is_done | bool | const=xvgwmop0bf |  |  |
| is_ready | bool | const=76yzv8pehf |  |  |
| is_final | bool | const=edmsm7nat6 |  |  |
| status | string | const=c_status | ✅ | common.assessment_appraise_participants |
| overall | real | const=ebr1sna976 |  |  |
| appraise_date | date | const=dataposlednego_3 |  |  |
| index | integer | const=poryadkovyynomer |  |  |
| workflow_id | integer | const=vw_title |  | workflows |
| workflow_state | string | const=hzte1f3376 |  |  |
| workflow_state_name | string | const=ld9m4gsmfn |  |  |
| workflow_state_last_date | date | const=c_finish_date |  |  |
| is_workflow_init | bool | const=doinicializiro |  |  |
| flag_is_processed | bool | const=y7vmgz1wnd |  |  |
| workflow_person_id | integer | const=c_coll | ✅ | collaborators |
| workflow_end_date | date | const=7vupl5i3sj |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
