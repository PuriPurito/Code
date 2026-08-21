# Схема: wtv_kpi_plans.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| kpi_id | integer | const=kpe |  | kpis |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| responsible_id | integer | const=c_tutor_main |  | collaborators |
| start_date | date | const=c_start_date |  |  |
| end_date | date | const=c_finish_date |  |  |
| threshold | string | const=ht1rxphn56 |  |  |
| threshold_text | string | const=ht1rxphn56text |  |  |
| threshold_value | real | const=ht1rxphn56real |  |  |
| challenge | string | const=ywcib7im60 |  |  |
| challenge_text | string | const=ywcib7im60text |  |  |
| challenge_value | real | const=ywcib7im60real |  |  |
| plan | string | const=vkb_plan_value |  |  |
| plan_text | string | const=vkb_plan_value_text |  |  |
| plan_value | real | const=vkb_plan_value_real |  |  |
| object_catalog | string | const=katalogobektov |  | common.exchange_object_types |
| object_id | integer | const=3n53mh73le |  | DefaultDb.GetOptCatalog(object_catalog+'s') |
| object_name | string | const=c_object_name |  |  |
| expert_id | integer | const=vkpb_experts |  | collaborators |
| workflow_id | integer | const=vw_title |  | workflows |
| workflow_state | string | const=c136i4h31p | ✅ |  |
| workflow_state_name | string | const=ld9m4gsmfn | ✅ |  |
| workflow_person_id | integer | const=c_coll | ✅ | collaborators |
| workflow_matching_type | string | const=c136i4h31q |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
