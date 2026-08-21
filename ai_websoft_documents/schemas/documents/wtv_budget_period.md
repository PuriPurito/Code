# Схема: wtv_budget_period.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| parent_id | integer | const=4ijstawxov |  | budget_periods |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| period_type | string |  |  | common.perioditys |
| date | date | const=c_date |  |  |
| type | string | const=c_type |  | common.day_types |
| region_id | integer | const=vrb_region |  | regions |
| comment | string | const=c_comment |  |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
