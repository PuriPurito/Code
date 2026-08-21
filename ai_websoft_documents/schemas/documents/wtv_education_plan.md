# Схема: wtv_education_plan.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| group_id | integer | const=c_group |  | groups |
| compound_program_id | integer | const=c_compound_prog |  | compound_programs |
| type | string | const=c_type |  | common.exchange_object_types |
| person_id | integer | const=c_coll |  | collaborators |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| tutor_id | integer | const=c_tutor_main |  | collaborators |
| update_status_and_activity | bool | ##'Обновлять статусы и активности онлайн'## |  |  |
| strong_date_control | bool | ##'Строгий контроль дат начала обучения'## |  |  |
| create_date | date | const=c_create_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| fact_finish_date | date | ##'Фактическая дата завершения'## |  |  |
| last_activity_date | date | 'Последняя активность' |  |  |
| plan_date | date | const=u6lvp7f029 |  |  |
| mark | integer | const=vx314disrh |  |  |
| event_id | integer | const=c_event |  | events |
| readiness_percent | integer | const=c_readiness_percent |  |  |
| state_id | integer | const=c_status |  | common.education_learning_states |
| last_state_id | integer | const=c_status |  | common.education_learning_states |
| programs | string | const=d1upb1a8zi |  |  |
| id | integer |  |  |  |
| name | string | const=c_name |  |  |
| parent_progpam_id | integer | const=z8hssxjy56 |  |  |
| education_method_id | integer | const=c_edu_method |  | education_methods |
| education_program_id | integer | const=c_edu_prog |  | education_programs |
| start_learning_tasks | string | const=vceb_completed_parent_parts |  |  |
| learning_task_id | integer |  |  | learning_tasks |
| start_assessments | string | const=vceb_completed_parent_parts |  |  |
| assessment_id | integer |  |  | assessments |
| finish_learning_tasks | string | const=vceb_completed_parent_parts |  |  |
| learning_task_id | integer |  |  | learning_tasks |
| finish_assessments | string | const=vceb_completed_parent_parts |  |  |
| assessment_id | integer |  |  | assessments |
| finish_notifiation | string | ##'Пост-рассылка'## |  |  |
| notification_template_id | integer | const=l7y3l5h2nb |  | 'notification_templates' |
| subject | string | const=vfb_subject |  |  |
| body | string | const=7zen195nnp |  |  |
| body_type | string | const=formatsoobsheniya |  |  |
| edit_notification | bool | ##'Редактировать уведомление'## |  |  |
| start_notifiation | string | ##'Пред-рассылка'## |  |  |
| notification_template_id | integer | const=l7y3l5h2nb |  | 'notification_templates' |
| subject | string | const=vfb_subject |  |  |
| body | string | const=7zen195nnp |  |  |
| body_type | string | const=formatsoobsheniya |  |  |
| edit_notification | bool | ##'Редактировать уведомление'## |  |  |
| type | string | const=c_type |  |  |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( ( type == 'material' ? catalog_name : type ) + 's' ) |
| object_name | string | const=c_object_name |  |  |
| object_code | string | const=c_code |  |  |
| object_start_date | date |  |  |  |
| catalog_name | string |  |  | common.learning_catalogs |
| subject | string | const=vfb_subject |  |  |
| body | string | const=7zen195nnp |  |  |
| body_type | string | const=formatsoobsheniya |  |  |
| edit_notification | bool | ##'Редактировать уведомление'## |  |  |
| delay_days | integer | const=2kaidfx9na |  |  |
| days | integer | const=2kaidfx9na |  |  |
| create_date | date | const=c_create_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| plan_date | date | const=u6lvp7f029 |  |  |
| result_type | string | const=xpbpsanwaw |  | common.exchange_object_types |
| result_object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( result_type + 's' ) |
| result_object_name | string | const=c_object_name |  |  |
| result_object_code | string | const=c_code |  |  |
| result_object_start_date | date |  |  |  |
| result_object_finish_date | date |  |  |  |
| result_objects | string | ##'Результаты'## |  |  |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( ( type == 'material' ? catalog_name : type ) + 's' ) |
| result_type | string | const=xpbpsanwaw |  | common.exchange_object_types |
| result_object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( result_type + 's' ) |
| state_id | integer | const=c_status |  | common.education_learning_states |
| tutor_id | integer | const=c_tutor_main |  | collaborators |
| weight | integer | const=2p3ne4mjnp |  |  |
| readiness_percent | integer | const=c_readiness_percent |  |  |
| start_type | string |  |  |  |
| mark | integer | const=ass_mark |  |  |
| result_object_type | string | const=xpbpsanwaw |  | common.exchange_object_types |
| result_object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( result_object_type + 's' ) |
| active_learning_id | integer | const=s6zzm6z621 |  | active_learnings |
| learning_id | integer | const=c_course |  | learnings |
| request_id | integer |  |  | requests |
| comment | string | const=vkpb_comment |  |  |
| required | bool | const=vceb_is_mandatory |  |  |
| completed_parent_programs | string | const=vceb_completed_parent_parts |  |  |
| program_id | integer |  |  | Parent.Parent.Parent.Parent.programs |
| program_results | string | ##'Результаты этапа'## |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| type | string |  |  |  |
| date | date | const=c_create_date |  |  |
| development_plan_id | integer | const=c_development_plan |  | development_plans |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| assessment_appraise_id | integer | const=vppb_procedure |  | assessment_appraises |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| comment | string | const=vkpb_comment |  |  |
| part_index | integer |  |  |  |
