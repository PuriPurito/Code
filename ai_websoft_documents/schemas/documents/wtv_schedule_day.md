# Схема: wtv_schedule_day.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| schedule_type_id | integer | ##'Тип графика'## |  | schedule_types |
| schedule_type_name | string | ##'Тип графика'## |  |  |
| rest_collaborator_schedule_id | integer | ##'Ограничения'## |  | restricting_collaborator_schedules |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| subdivision_id | integer | const=c_subd |  | subdivisions |
| date | date | const=c_date |  |  |
| start_time | string | const=c_start_date |  |  |
| finish_time | string | const=3bywib72ya |  |  |
| doc_info | doc_info_base |  |  |  |
