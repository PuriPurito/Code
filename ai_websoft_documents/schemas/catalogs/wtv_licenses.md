# Схема: wtv_licenses.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=2c7tfen6wm | ✅ |  |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=c_object_name |  |  |
| computer_name | string |  |  |  |
| domain_name | string |  |  |  |
| domain_short_name | string |  |  |  |
| user_name | string |  |  |  |
| is_temporary | bool | ##'Временная'## |  |  |
| status_id | string | const=c_status |  | common.status_in_knowledge_map_types |
| sale_contract_id | integer |  |  | sale_contracts |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=3bywib72ya |  |  |
| maintaince_date | date | ##'Даты действия технической поддержки'## |  |  |
| users_num | integer | const=3bywib72ya |  |  |
| demo | bool |  |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
