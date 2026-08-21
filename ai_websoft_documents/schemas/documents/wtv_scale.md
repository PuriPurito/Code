# Схема: wtv_scale.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| max_limit | real | const=ogranichenie |  |  |
| min_limit | real | const=ogranichenie |  |  |
| status | string | const=c_status |  | common.kpi_states |
| id | string |  |  |  |
| name | string |  |  |  |
| type | string |  |  |  |
| min | real |  |  |  |
| max | real |  |  |  |
| result | real |  |  |  |
| desc | string |  |  |  |
| desc_required | bool |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
