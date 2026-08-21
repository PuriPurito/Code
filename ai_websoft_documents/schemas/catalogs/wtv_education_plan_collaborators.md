# Схема: wtv_education_plan_collaborators.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| program_id | integer | const=z8hssxjy56 |  |  |
| parent_progpam_id | integer | const=z8hssxjy56 |  |  |
| position | integer | const=c_position |  |  |
| education_plan_id | integer | const=je8frfv2u9 | ✅ | education_plans |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| compound_program_id | integer | const=c_compound_prog |  | compound_programs |
| education_program_id | integer | const=c_edu_prog |  | education_programs |
| education_method_id | integer | const=c_edu_method | ✅ | education_methods |
| development_plan_id | integer | const=c_development_plan | ✅ | development_plans |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| type | string | const=c_type |  |  |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| object_code | string | const=oemfe2rslq |  |  |
| object_start_date | date | const=c_start_date |  |  |
| state_id | integer | const=c_status |  | common.learning_states |
| plan_date | date | const=u6lvp7f029 |  |  |
| result_type | string | const=xpbpsanwaw |  | common.exchange_object_types |
| result_object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( result_type + 's' ) |
| result_object_name | string | const=c_object_name |  |  |
| result_object_code | string | const=c_code |  |  |
| result_object_start_date | date |  |  |  |
| result_object_finish_date | date |  |  |  |
| weight | integer | const=ques_score |  |  |
| create_date | date | const=c_create_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| readiness_percent | integer | const=c_readiness_percent |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=xwyxbks6xk |  |  |
| person_position | string | const=xwx93pdy7v |  |  |
| person_org_name | string | const=ttwtf6vsfk |  |  |
| person_subdivision_name | string | const=uf_depart_name |  |  |
| is_collaborator | bool | const=r0pdnwxus9 |  |  |
| is_tutor | bool | const=veb_is_lector |  |  |
