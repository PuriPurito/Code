# Схема: wtv_task.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| task_type_id | integer | const=c_type |  | task_types |
| parent_task_id | integer | const=roditelskayazad |  | tasks |
| translated_task_id | integer | const=istochniktransl |  | tasks |
| translated_target_type | string | const=tippoluchatelyat |  | common.exchange_object_types |
| translated_target_id | integer | const=poluchateltrans |  | DefaultDb.GetOptCatalog(translated_target_type + 's') |
| assigner_id | integer | const=naznachivshiyzad |  | collaborators |
| executor_type | string | const=tipotvetstvenn |  | common.exchange_object_types |
| executor_id | integer | const=otvetstvennyyz_2 |  | DefaultDb.GetOptCatalog(executor_type + 's') |
| executor_plan | real | ##'Плановые трудозатраты исполнителя'## |  |  |
| expert_id | integer |  |  | collaborators |
| person_id | integer | const=c_coll |  | collaborators |
| person_plan | real | ##'Плановые трудозатраты ответственного'## |  |  |
| role_id | string |  |  |  |
| source_object_type | string | const=tipobektaistoch |  | common.exchange_object_types |
| source_object_id | integer | const=obektistochnik |  | DefaultDb.GetOptCatalog(source_object_type + 's') |
| pay_stage_id | integer |  |  | pay_stages |
| target_object_type | string | const=tipobektaceli |  | common.exchange_object_types |
| target_object_id | integer | const=obektceli |  | DefaultDb.GetOptCatalog(target_object_type + 's') |
| fact_object_type | string | const=tipfakticheskog |  | common.exchange_object_types |
| fact_object_id | integer | const=fakticheskiyobe |  | DefaultDb.GetOptCatalog(fact_object_type + 's') |
| date_period_type | string |  |  | common.perioditys |
| date_plan | date | const=fakticheskayadat_1 |  |  |
| date_fact | date | const=fakticheskayadat |  |  |
| plan_labor_costs | integer | ##'Плановые трудозатраты'## |  |  |
| fact_labor_costs | integer | ##'Фактические трудозатраты'## |  |  |
| plan_budget_period_id | integer | const=c_budget_period |  | budget_periods |
| fact_budget_period_id | integer | const=c_budget_period |  | budget_periods |
| priority | integer | Приоритет |  |  |
| start_date_plan | date | const=planiruemayadat_4 |  |  |
| end_date_plan | date | const=planiruemayadat_1 |  |  |
| delayed_start | real |  |  |  |
| plan_duraion | real |  |  |  |
| plan | string | ##'Плановый результат'## |  |  |
| plan_value | real | ##'План в кличественном измерении'## |  |  |
| fact | string | ##'Фактический результат'## |  |  |
| fact_value | real | ##'Факт в кличественном измерении'## |  |  |
| custom_state_id | string | ##'Настраиваемый статус'## |  |  |
| status | string | const=c_status |  | common.task_statuses |
| value | real | const=ass_mark |  |  |
| readiness_percent | real | const=c_readiness_percent |  |  |
| conversation_id | integer | ##'Разговор'## |  | conversations |
| id | string |  |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| type | string |  |  |  |
| is_main | bool |  |  |  |
| workflow_matching_type | string | const=c136i4h31q |  |  |
| name | string | const=c_name |  |  |
| value | string |  |  |  |
| visibility | string |  |  |  |
| update_block | bool |  |  |  |
| user_id | integer | ID |  | collaborators |
| access | string | const=bmlkskx7us |  |  |
| desc | string |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| person_id | integer |  |  | collaborators |
| workflow_state | string |  |  |  |
| comment | string |  |  |  |
| comment_date | date |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| status | string | const=c_status |  |  |
| custom_state_id | string | ##'Настраиваемый статус'## |  |  |
| initial_status | string |  |  |  |
| selector | string |  |  |  |
| workflow_state | string |  |  |  |
| workflow_action_result | variant |  |  |  |
| workflow_create_break | bool |  |  |  |
| error_code | integer |  |  |  |
| error_text | string |  |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
