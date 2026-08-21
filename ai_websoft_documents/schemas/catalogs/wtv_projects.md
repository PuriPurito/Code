# Схема: wtv_projects.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| org_id | integer | const=c_org | ✅ | orgs |
| subdivision_id | integer | const=c_subd | ✅ | subdivisions |
| group_id | integer | const=c_group | ✅ | groups |
| contract_id | integer | const=sxncvgx1gh | ✅ | contracts |
| project_type_id | integer | const=tipproekta | ✅ | project_types |
| sale_contract_id | integer | const=sxncvgx1gh | ✅ | sale_contracts |
| status | string | const=c_status | ✅ | common.project_status_types |
| is_model | bool | const=etalonnyyproekt | ✅ |  |
| workflow_id | integer | const=o1ivkrztmb |  | workflows |
| plan_labor_costs | integer | ##'Плановые трудозатраты'## |  |  |
| fact_labor_costs | integer | ##'Фактические трудозатраты'## |  |  |
| percent_complete | integer | ##'Процент выполнения'## |  |  |
| team_selected | bool | ##'Команда подобрана'## |  |  |
| start_date_plan | date | const=planiruemayadat_4 | ✅ |  |
| end_date_plan | date | const=planiruemayadat_1 | ✅ |  |
| start_date_fact | date | const=fakticheskayadat_1 | ✅ |  |
| end_date_fact | date | const=fakticheskayadat | ✅ |  |
| allow_assessment | bool | ##'Разрешить оценку участников после завершения проекта'## |  |  |
| join_mode | string | const=vstuplenievgru |  | common.join_mode_types |
| resource_type_id | integer | const=tipresursabazy |  | resource_types |
| all_participant_view_task | bool | ##'Все участники могут видеть все задачи проекта'## |  |  |
| allow_assigning_tasks_to_all | bool | ##'Разрешать назначать задачи не участникам проекта'## |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
