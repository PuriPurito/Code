# Схема: wtv_project.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| org_id | integer | const=c_org |  | orgs |
| subdivision_id | integer | const=c_subd |  | subdivisions |
| group_id | integer | const=c_group |  | groups |
| contract_id | integer | const=sxncvgx1gh |  | contracts |
| resource_type_id | integer | const=tipresursabazy |  | resource_types |
| project_type_id | integer | const=tipproekta |  | project_types |
| sale_contract_id | integer | const=sxncvgx1gh |  | sale_contracts |
| workflow_id | integer | const=o1ivkrztmb |  | workflows |
| status | string | const=c_status |  | common.project_status_types |
| is_model | bool | const=etalonnyyproekt |  |  |
| plan_labor_costs | integer | ##'Плановые трудозатраты'## |  |  |
| fact_labor_costs | integer | ##'Фактические трудозатраты'## |  |  |
| percent_complete | integer | ##'Процент выполнения'## |  |  |
| team_selected | bool | ##'Команда подобрана'## |  |  |
| allow_assessment | bool | ##'Разрешить оценку участников после завершения проекта'## |  |  |
| text_result | string | ##'Результаты'## |  |  |
| join_mode | string | const=tipvstupleniya |  | common.join_mode_types |
| default_request_type_id | integer | const=veb_default_request_type |  | request_types |
| start_date_plan | date | const=planiruemayadat_4 |  |  |
| end_date_plan | date | const=planiruemayadat_1 |  |  |
| start_date_fact | date | const=fakticheskayadat_1 |  |  |
| end_date_fact | date | const=fakticheskayadat |  |  |
| all_participant_view_task | bool | ##'Все участники могут видеть все задачи проекта'## |  |  |
| allow_assigning_tasks_to_all | bool | ##'Разрешать назначать задачи не участникам проекта'## |  |  |
| participant_type_id | integer | const=c_manager_type |  | boss_types |
| participant_type_name | string | const=c_manager_type |  |  |
| id | integer |  |  |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| is_required | bool | const=7df3q17dhk |  |  |
| participant_role_id | integer | ##'Роль участника проекта'## |  | project_participant_roles |
| visibility | string |  |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
| access | string | const=bmlkskx7us |  |  |
| tab_selector | string |  |  |  |
| participant_catalog | string |  |  | common.exchange_object_types |
| rows | variant |  |  |  |
| row_disp_elem | string |  |  |  |
| row_list_field | string |  |  |  |
| row_key_field | string |  |  |  |
| list_variant | variant |  |  |  |
