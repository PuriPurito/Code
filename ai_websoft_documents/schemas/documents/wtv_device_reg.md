# Схема: wtv_device_reg.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| device_id | string |  |  |  |
| device_desc | string |  |  |  |
| pc | string |  |  |  |
| voippc | string |  |  |  |
| last_access_date | date |  |  |  |
| mobile_app_config_id | integer |  |  | mobile_app_configs |
| person_id | integer |  |  | collaborators |
| config_id | integer |  |  | workspace_configs |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| selector | string |  |  |  |
| id | integer |  |  |  |
| status | string |  |  |  |
| creation_date | date |  |  |  |
| expiration_date | date |  |  |  |
