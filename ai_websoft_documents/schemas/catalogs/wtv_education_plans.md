# Схема: wtv_education_plans.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| group_id | integer | const=c_group | ✅ | groups |
| compound_program_id | integer | const=c_compound_prog | ✅ | compound_programs |
| type | string | const=c_type |  | common.exchange_object_types |
| person_id | integer | const=c_coll |  | collaborators |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| person_org_name | string | const=c_org | ✅ |  |
| event_id | integer | const=c_event | ✅ | events |
| update_status_and_activity | bool | ##'Обновлять статусы и активности онлайн'## |  |  |
| create_date | date | const=c_create_date | ✅ |  |
| finish_date | date | const=c_finish_date |  |  |
| fact_finish_date | date | ##'Фактическая дата завершения'## |  |  |
| plan_date | date | const=u6lvp7f029 |  |  |
| last_activity_date | date | ##'Последняя активность'## |  |  |
| mark | integer | const=ass_mark |  |  |
| state_id | integer | const=c_status |  | common.education_learning_states |
| readiness_percent | integer | const=c_readiness_percent |  |  |
| development_plan_id | integer | const=c_development_plan |  | development_plans |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| assessment_appraise_id | integer | const=vppb_procedure |  | assessment_appraises |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
