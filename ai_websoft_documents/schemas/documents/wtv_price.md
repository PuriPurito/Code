# Схема: wtv_price.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string |  |  |  |
| name | string |  |  |  |
| create_date | date |  |  |  |
| state_id | string |  |  | common.successor_status_types |
| start_date | date |  |  |  |
| finish_date | date |  |  |  |
| code | string | const=c_code |  |  |
| provider_id | integer |  |  | providers |
| cost_value | integer |  |  |  |
| type_id | string |  |  | common.service_provider_types |
| start_date | date |  |  |  |
| finish_date | date |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
