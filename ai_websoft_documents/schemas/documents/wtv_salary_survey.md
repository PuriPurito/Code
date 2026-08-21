# Схема: wtv_salary_survey.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| position_common_id | integer | const=c_position_common |  | position_commons |
| position_name | string | const=g89skt4yui |  |  |
| position_level_id | integer | const=c_position_level |  | position_levels |
| salary_survey_source_id | integer | const=c_salary_survey_source |  | salary_survey_sources |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| region_id | integer | const=vrb_region |  | regions |
| min_salary | real | const=22tzi47k55 |  |  |
| max_salary | real | const=0v3de7521w |  |  |
| avg_salary | real | Средняя зарплата |  |  |
| currency | string | const=c_currency_type |  | lists.currency_types |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
