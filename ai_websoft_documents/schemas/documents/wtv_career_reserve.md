# Схема: wtv_career_reserve.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| start_date | date | const=qpltbj1sg1 |  |  |
| plan_readiness_date | date | const=c_plan_readiness_date |  |  |
| finish_date | date | const=datafaktichesko |  |  |
| readiness_percent | integer | const=c_readiness_percent | ✅ |  |
| autocalculate_readiness_percent | bool | Автовычисление готовности этапа |  |  |
| personnel_reserve_id | integer | const=ntdvwhol72 |  | personnel_reserves |
| successor_id | integer | const=preemnik |  | successors  |
| career_plan_id | integer | ##'Карьерный план'## |  | career_plans  |
| status | string | const=c_status |  | common.career_reserve_status_types |
| position_type | string | const=c_type |  |  |
| position_name | string | const=g89skt4yui |  |  |
| position_id | integer |  |  | positions |
| name | string |  |  |  |
| basic_collaborator_id | integer |  |  | collaborators |
| basic_collaborator_fullname | string |  |  |  |
| position_common_id | integer | const=c_position_common |  | position_commons |
| name | string |  |  |  |
| staff_position_id | integer |  |  | staff_position |
| name | string |  |  |  |
| subdivision_id | integer | const=c_action_place |  | subdivisions |
| tutors | string | const=5wdhewcbmb |  |  |
| person_id | integer |  |  | collaborators |
| is_native | bool | const=gbw97zyx5g |  |  |
| boss_type_id | integer | const=c_manager_type |  | boss_types |
| is_responsible | bool | const=41yw4tp759 |  |  |
| comment | string |  |  |  |
| current_competence_profile_id | integer | const=vcrb_begin_competence_profile |  | competence_profiles |
| target_competence_profile_id | integer | const=vcrb_target_competence_profile |  | competence_profiles |
| development_plan_id | integer | const=c_development_plan |  | development_plans |
| forbid_tasks_edit | bool | const=zapretitizmene |  |  |
| id | string |  |  |  |
| name | string |  |  |  |
| type | string |  |  | common.career_reserve_tasks_types |
| status | string |  |  | common.career_reserve_status_types |
| parent_task_id | string | const=roditelskayazad |  |  |
| start_date | date | const=qpltbj1sg1 |  |  |
| plan_date | date | const=kkf50pe6qe |  |  |
| fact_date | date | const=t22y39jexg |  |  |
| start_edit_date | date | const='Дата начала редактирования' |  |  |
| typical_development_program_id | integer | const=f89jhp79yo |  | typical_development_programs |
| typical_development_program_task_id | string | ##'ID задачи типовой программы развития'## |  |  |
| tutor_id | integer |  |  | Doc.TopElem.tutors |
| competence_id | integer |  |  | competences |
| desc | string |  |  |  |
| score | real | const=vdb_aim_value |  |  |
| person_comment | string |  |  |  |
| tutor_comment | string |  |  |  |
| object_type | string |  |  | common.exchange_object_types |
| object_id | integer |  |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| active_test_learning_id | integer |  |  | active_test_learnings |
| event_id | integer |  |  | events |
| event_result_id | integer |  |  | event_results |
| education_plan_id | integer |  |  | education_plan |
| active_learning_id | integer |  |  | active_learnings |
| assessment_appraise_id | integer |  |  | assessment_appraises |
| assessment_appraise_result_id | integer |  |  | assessment_appraises |
| add_exist_appraise | bool | ##'Добавлять в существующую процедуру'## |  |  |
| poll_result_id | integer |  |  | poll_results |
| poll_procedure_id | integer |  |  | poll_procedures |
| type_document | string |  |  | common.career_reserve_material_types |
| link_document | string |  |  |  |
| task_id | integer |  |  | tasks |
| learning_task_result_id | integer |  |  | learning_task_results |
| forbid_task_portal_edit | bool | const=zapretitredakt |  |  |
| person_id | integer |  |  | collaborators |
| score | real | const=vdb_aim_value |  |  |
| comment | string |  |  |  |
| position | integer | const=c_pos_num |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| access | string | const=bmlkskx7us |  |  |
| position_expr | bool |  |  |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| part_index | integer |  |  |  |
| tab_page | string |  |  |  |
| dev_tab_page | string |  |  |  |
| tutors | string | const=5wdhewcbmb |  |  |
| person_id | integer |  |  | collaborators |
