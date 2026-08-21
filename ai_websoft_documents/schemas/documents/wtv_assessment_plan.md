# Схема: wtv_assessment_plan.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| assessment_appraise_id | integer | const=c_ass_appraise |  | assessment_appraises |
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
| boss_id | integer | const=c_boss |  | collaborators |
| department_id | integer | const=c_subd |  |  |
| department_name | string | const=uf_depart_name |  |  |
| flag_appraise_department | bool |  |  |  |
| assessment_object_type | string | const=okpdszkyxr |  |  |
| assessment_appraise_type | string | const=sl2aikjg0w |  | common.assessment_appraise_types |
| status | string |  |  | common.assessment_appraise_participants |
| is_done | bool | const=2uuz9x5nni |  |  |
| integral_mark | real | const=ass_integral_mark |  |  |
| flag_is_processed | bool |  |  |  |
| assessment_result_recommends | string | const=ass_recommendations |  |  |
| assessment_result_recommend_id | integer |  |  | assessment_result_recommends |
| assessment_result_recommend_name | string |  |  |  |
| workflow_person_id | integer | const=c_coll | ✅ | collaborators |
| workflow_end_date | date | const=7vupl5i3sj |  |  |
| assessment_appraise_matrix_id | integer | const=ywp7wznkrl |  | assessment_appraise_matrixs |
| period_id | string |  |  |  |
| period_name | string |  |  |  |
| is_done | bool |  |  |  |
| custom_comments | string | const=c_comments |  |  |
| person_id | integer |  |  | collaborators |
| workflow_state | string |  |  |  |
| comment | string |  |  |  |
| comment_date | date |  |  |  |
| custom_experts | string | const=ass_custom_experts |  |  |
| person_id | integer |  |  | collaborators |
| person_type | integer |  |  |  |
| is_done | bool |  |  |  |
| responsible | bool |  |  |  |
| expert_code | string |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| comment | string | const=vkpb_comment |  |  |
| temp | string |  |  |  |
| fire_wf_action | string |  |  |  |
| selector | string |  |  |  |
| flag_count | integer |  |  |  |
| pa_id | integer |  |  | pas |
| participant_id | integer |  |  |  |
| pa_id | integer |  |  | pas |
| expert_person_id | integer |  |  | collaborators |
| expert_person_fullname | string |  |  |  |
| status | string |  |  | common.assessment_appraise_participants |
| assessment_appraise_type | string |  |  | common.assessment_appraise_types |
| is_done | bool |  |  |  |
| is_ready | bool |  |  |  |
| flag_expert_select | bool |  |  |  |
| person_id | integer |  |  | collaborators |
| status | string |  |  | common.assessment_appraise_participants |
| is_custom | bool |  |  |  |
| name | string | const=c_name |  |  |
| value | string |  |  |  |
| index | integer |  |  |  |
| start_date | date |  |  |  |
| end_date | date |  |  |  |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| period_start | date |  |  |  |
| period_end | date |  |  |  |
