# Схема: wtv_personnel_reserve.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| name | string | const=c_name |  |  |
| start_date | date |  |  |  |
| include_reserve_date | date |  |  |  |
| finish_date | date | const=dataisklyucheniya |  |  |
| status | string | const=c_status |  | common.personnel_reserve_status_types |
| career_reserve_type_id | integer | const=tipkadrovogore |  | career_reserve_types |
| exclusion_reason_id | integer | const=osnovaniedlyais |  | exclusion_reasons |
| nomination_id | integer | const=sposobvydvizhen |  | talent_pool_nominations |
| development_potential_id | integer | const=potencialrazvi_9 |  | development_potentials |
| efficiency_estimation_id | integer | const=ocenkaeffektiv |  | efficiency_estimations |
| id | string |  |  |  |
| name | string |  |  |  |
| type | string |  |  | common.career_reserve_type_tasks_types |
| status | string |  |  | common.personnel_reserve_task_status_types |
| plan_date | date | const=kkf50pe6qe |  |  |
| fact_date | date | const=t22y39jexg |  |  |
| desc | string |  |  |  |
| score | real | const=vdb_aim_value |  |  |
| comment | string |  |  |  |
| object_type | string |  |  | common.exchange_object_types |
| object_id | integer |  |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| active_test_learning_id | integer |  |  | active_test_learnings |
| assessment_appraise_id | integer |  |  | assessment_appraises |
| assessment_appraise_result_id | integer |  |  | assessment_appraises |
| add_exist_appraise | bool |  |  |  |
| poll_result_id | integer |  |  | poll_results |
| poll_procedure_id | integer |  |  | poll_procedures |
| person_id | integer |  |  | collaborators |
| overall_comment | string |  |  |  |
| access | string | const=bmlkskx7us |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| part_index | integer |  |  |  |
| person_id | integer | const=c_coll |  | collaborators |
