# Схема: wtv_kpi_plan.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| kpi_id | integer | const=kpe |  | kpis |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| responsible_id | integer | const=c_tutor_main |  | collaborators |
| start_date | date | const=c_start_date |  |  |
| end_date | date | const=c_finish_date |  |  |
| title | string |  |  |  |
| type | string |  |  | common.spxml_types |
| value | string |  |  |  |
| threshold | string | const=ht1rxphn56 |  |  |
| threshold_text | string |  |  |  |
| threshold_value | real |  |  |  |
| challenge | string | const=ywcib7im60 |  |  |
| challenge_text | string |  |  |  |
| challenge_value | real |  |  |  |
| plan | string | const=vkb_plan_value |  |  |
| plan_text | string |  |  |  |
| plan_value | real |  |  |  |
| object_catalog | string | const=katalogobektov |  | common.exchange_object_types |
| object_id | integer | const=3n53mh73le |  | DefaultDb.GetOptCatalog(object_catalog+'s') |
| object_name | string | const=c_object_name |  |  |
| expert_id | integer |  |  | collaborators |
| id | string |  |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| workflow_matching_type | string | const=c136i4h31q |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| selector | string |  |  |  |
