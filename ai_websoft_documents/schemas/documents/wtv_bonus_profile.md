# Схема: wtv_bonus_profile.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| calc_type | integer | const=c_type |  |  |
| kpis | string | KPI |  |  |
| kpi_id | integer | KPI |  | kpis |
| weight | real | const=ques_score |  |  |
| kpi_groups | string | Группа KPI |  |  |
| kpi_group_id | integer | Группа KPI |  | kpi_groups |
| weight | real | const=ques_score |  |  |
| script | string |  |  |  |
| url | string | const=gwdslrn9x8 |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| selector | string |  |  |  |
