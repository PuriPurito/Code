# Схема: wtv_kpi_values.xmd

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
| fact | real | const=vkb_fact |  |  |
| fact_text | string | const=vkb_facttext |  |  |
| fact_value | real | const=vkb_factreal |  |  |
| value | real | const=c_value |  |  |
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
