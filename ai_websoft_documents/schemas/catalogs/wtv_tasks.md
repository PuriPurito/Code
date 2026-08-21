# Схема: wtv_tasks.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| task_type_id | integer | const=c_type |  | task_types |
| parent_task_id | integer | const=roditelskayazad |  | tasks |
| translated_task_id | integer | const=istochniktransl |  | tasks |
| translated_target_type | string | const=tippoluchatelyat |  | common.exchange_object_types |
| translated_target_id | integer | const=poluchateltrans |  | DefaultDb.GetOptCatalog(translated_target_type + 's') |
| assigner_id | integer | const=naznachivshiyzad |  | collaborators |
| executor_type | string | const=tipotvetstvenn |  | common.exchange_object_types |
| executor_id | integer | const=otvetstvennyyz_2 |  | DefaultDb.GetOptCatalog(executor_type + 's') |
| status | string | const=c_status |  | common.task_statuses |
| custom_state_id | string | ##'Настраиваемый статус'## |  |  |
| plan | string | const=vkb_plan_value |  |  |
| fact | string | const=vkb_fact |  |  |
| plan_value | real | const=vkb_plan_value_real |  |  |
| fact_value | real | const=vkb_factreal |  |  |
| value | real | const=ass_mark |  |  |
| readiness_percent | real | const=c_readiness_percent |  |  |
| priority | integer | Приоритет |  |  |
| source_object_type | string | const=tipobektaistoch |  | common.exchange_object_types |
| source_object_id | integer | const=obektistochnik |  | DefaultDb.GetOptCatalog(source_object_type + 's') |
| pay_stage_id | integer | ##'Этап договора'## |  | pay_stages |
| target_object_type | string | const=tipobektaceli |  | common.exchange_object_types |
| target_object_id | integer | const=obektceli |  | DefaultDb.GetOptCatalog(target_object_type + 's') |
| fact_object_type | string | const=tipfakticheskog |  | common.exchange_object_types |
| fact_object_id | integer | const=fakticheskiyobe |  | DefaultDb.GetOptCatalog(fact_object_type + 's') |
| expert_id | integer | const=vkpb_experts |  | collaborators |
| date_plan | date | const=fakticheskayadat_1 |  |  |
| date_fact | date | const=fakticheskayadat |  |  |
| start_date_plan | date | const=planiruemayadat_4 |  |  |
| end_date_plan | date | const=planiruemayadat_1 |  |  |
| plan_budget_period_id | integer | const=c_budget_period |  | budget_periods |
| fact_budget_period_id | integer | const=c_budget_period |  | budget_periods |
| plan_labor_costs | integer | ##'Плановые трудозатраты'## |  |  |
| fact_labor_costs | integer | ##'Фактические трудозатраты'## |  |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| workflow_id | integer | const=vw_title |  | workflows |
| workflow_state | string | const=c136i4h31p | ✅ |  |
| workflow_state_name | string | const=ld9m4gsmfn | ✅ |  |
| workflow_person_id | integer | const=c_coll | ✅ | collaborators |
| workflow_matching_type | string | const=c136i4h31q |  |  |
| conversation_id | integer | ##'Разговор'## |  | conversations |
| preparation_id | integer | const=c_coll | ✅ | collaborators |
| has_files | bool | ##'К задаче прикреплены файлы'## |  |  |
| read_by_users | integer | const=c_coll | ✅ | collaborators |
| tags | string | ##'ID тегов'## |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
