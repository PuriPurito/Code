# Схема: wtv_pa.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| fullname | string | const=lhbyv18qkm |  |  |
| position_name | string | const=g89skt4yui |  |  |
| position_id | integer | const=c_position |  | positions |
| position_parent_name | string | const=uf_depart_name |  |  |
| position_parent_id | integer | const=c_subd |  | subdivisions |
| org_name | string | const=rne3a8laso |  |  |
| is_dismiss | bool | const=3i9j58qey7 |  |  |
| expert_person_id | integer | const=ass_estimating_person |  | collaborators |
| fullname | string | const=lhbyv18qkm |  |  |
| position_name | string | const=g89skt4yui |  |  |
| position_id | integer | const=c_position |  | positions |
| position_parent_name | string | const=uf_depart_name |  |  |
| position_parent_id | integer | const=c_subd |  | subdivisions |
| org_name | string | const=rne3a8laso |  |  |
| is_dismiss | bool | const=3i9j58qey7 |  |  |
| restrict_by_group | integer | const=gey5iiwoj0 |  | group |
| department_id | integer | const=c_subd |  |  |
| department_name | string | const=uf_depart_name |  |  |
| flag_appraise_department | bool | const=kev9tg2neo |  |  |
| assessment_object_type | string | const=okpdszkyxr |  |  |
| assessment_appraise_id | integer | const=c_ass_appraise |  | assessment_appraises |
| assessment_plan_id | integer | const=planyocenki |  | assessment_plans |
| status | string | const=c_status |  | common.assessment_appraise_participants |
| is_done | bool | const=2uuz9x5nni |  |  |
| is_ready | bool | const=76yzv8pehf |  |  |
| is_final | bool | const=edmsm7nat6 |  |  |
| flag_is_processed | bool |  |  |  |
| assessment_appraise_type | string | const=sl2aikjg0w |  | common.assessment_appraise_types |
| competence_profile_id | integer | const=ass_competence_profile |  | competence_profiles |
| competence_codes | string | const=3noejxhnb0 |  |  |
| kpi_profile_id | integer | const=ass_kpi_profile |  | kpi_profiles |
| id | integer | const=ass_kpi_profile |  | kpi_profiles |
| period_type_id | string |  |  | common.perioditys |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| comment | string | const=c_comment |  |  |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| bonus_profile_id | integer | const=629saq8h6f |  | bonus_profile |
| salary | real |  |  |  |
| cash | real |  |  |  |
| currency | string |  |  | lists.currency_types |
| standard_hours | integer |  |  |  |
| tenure | integer |  |  |  |
| work_hours | integer |  |  |  |
| position_id | integer |  |  | positions |
| position_common_id | integer |  |  | position_commons |
| subdivision_id | integer |  |  | subdivisions |
| boss_treat | string |  |  |  |
| revised_value | real |  |  |  |
| workflow_person_id | integer | const=c_coll | ✅ | collaborators |
| workflow_end_date | date | const=7vupl5i3sj |  |  |
| assessment_appraise_matrix_id | integer | const=ywp7wznkrl |  | assessment_appraise_matrixs |
| competences | string | const=ass_competences |  |  |
| competence_id | integer |  |  | competences |
| plan | string | const=vkb_plan_value |  |  |
| plan_text | string |  |  |  |
| plan_value | real |  |  |  |
| mark | string | const=vdb_aim_value |  |  |
| mark_text | string |  |  |  |
| mark_value | real |  |  |  |
| weight | real | const=ques_score |  |  |
| comment | string |  |  |  |
| type | string |  |  | lists.competence_types |
| exercises | string | const=5z3iuqumsa |  |  |
| exercise_id | integer |  |  | exercises |
| mark | string | const=vdb_aim_value |  |  |
| indicators | string | const=c_indicators |  |  |
| indicator_id | integer |  |  | indicators |
| plan | string | const=vkb_plan_value |  |  |
| plan_text | string |  |  |  |
| plan_value | real |  |  |  |
| mark | string | const=vdb_aim_value |  |  |
| mark_text | string |  |  |  |
| mark_value | real |  |  |  |
| weight | real | const=ques_score |  |  |
| comment | string |  |  |  |
| period_start | date |  |  |  |
| period_end | date |  |  |  |
| kpis | string | const=ass_competence_profile |  |  |
| kpi_id | integer |  |  | kpis |
| threshold | real | const=vkb_limit |  |  |
| plan | string | const=vkb_plan_value |  |  |
| challenge | real | const=vkb_call |  |  |
| fact | string | const=vkb_actual_value |  |  |
| mark | string | const=vdb_aim_value |  |  |
| weight | real | const=ques_score |  |  |
| source_pa_id | integer |  |  | pas |
| kpi_value_id | integer |  |  | kpi_values |
| kpi_plan_id | integer |  |  | kpi_plans |
| position | integer |  |  |  |
| parent_kpi_id | integer |  |  | kpis |
| projects | string | const=159pmteyyz |  |  |
| project_id | string |  |  |  |
| name | string | const=c_name |  |  |
| threshold | real | const=vkb_limit |  |  |
| plan | string | const=vcpb_plan |  |  |
| challenge | real | const=vkb_call |  |  |
| fact | string | const=vkb_fact |  |  |
| mark | real | const=vdb_aim_value |  |  |
| weight | real | const=ques_score |  |  |
| standard_project_id | integer |  |  | kpis |
| objectives | string | const=vsb_purposes |  |  |
| objective_id | string |  |  |  |
| name | string | const=c_name |  |  |
| weight | real | const=ques_score |  |  |
| mark | real | const=vdb_aim_value |  |  |
| plan_budget_period_id | integer | const=c_budget_period |  | budget_periods |
| fact_budget_period_id | integer | const=c_budget_period |  | budget_periods |
| subobjectives | string | const=4qexks0g7d |  |  |
| name | string | const=c_name |  |  |
| plan | string | const=vcpb_plan |  |  |
| date | date | const=vdb_aim_date |  |  |
| fact | string | const=vkb_fact |  |  |
| mark | real | const=vdb_aim_value |  |  |
| plan_budget_period_id | integer | const=c_budget_period |  | budget_periods |
| fact_budget_period_id | integer | const=c_budget_period |  | budget_periods |
| task_id | integer |  |  | tasks |
| weight | real | const=ques_score |  |  |
| position | integer |  |  |  |
| value_text | string |  |  |  |
| value | real | const=vdb_aim_value |  |  |
| parent_task_id | integer |  |  | tasks |
| custom_experts | string | const=ass_custom_experts |  |  |
| person_id | integer |  |  | collaborators |
| person_type | integer |  |  |  |
| is_done | bool |  |  |  |
| responsible | bool |  |  |  |
| expert_code | string |  |  |  |
| person_id | integer |  |  | collaborators |
| workflow_state | string |  |  |  |
| comment | string |  |  |  |
| comment_date | date |  |  |  |
| overall | real |  |  |  |
| appraise_date | date |  |  |  |
| temp | string |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| comment | string | const=vkpb_comment |  |  |
| file_name | string |  |  |  |
| file_url | string |  |  |  |
| index | integer |  |  |  |
| selector | string |  |  |  |
| flag_mark | bool |  |  |  |
| id | string |  |  |  |
| name | string |  |  |  |
| percent | integer |  |  |  |
| last_data | string | const=sohranennyedan |  |  |
| is_done | bool | const=2uuz9x5nni |  |  |
| workflow_state | string |  |  |  |
| career_plan_type | string |  |  |  |
| career_plan_id | integer | ##'Карьерный план'## |  | career_plans |
| id | string |  |  |  |
| name | string |  |  |  |
| career_transition_direction | string | Направление должностного перемещения |  | common.career_transition_direction_types |
| position_common_id | integer |  |  | position_commons |
| check_requirements | bool | ##'Проверять требования при согласовании'## |  |  |
| plan_date | date | const=kkf50pe6qe |  |  |
| fact_date | date | const=t22y39jexg |  |  |
| status | string |  |  | common.career_reserve_status_types |
| position_id | integer |  |  | positions |
| budget_period_id | integer |  |  | budget_periods |
| stipulation | string | const=dopolnitelnyeu_1 |  |  |
| comment | string | const=vkpb_comment |  |  |
| name | string | const=c_code |  |  |
| title | string | const=c_name |  |  |
| value | string |  |  |  |
