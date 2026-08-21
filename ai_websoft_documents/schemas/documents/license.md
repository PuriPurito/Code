# Схема: license.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| version_min | string |  |  |  |
| version_max | string |  |  |  |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=c_object_name |  |  |
| name | string |  |  | common.exchange_object_types |
| max_records_num | integer |  |  |  |
| checked | bool |  |  |  |
| id | string |  |  | common.access_block_types |
| additional_keys | string | #'Дополнительные ключи'# |  |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=3bywib72ya |  |  |
| type_id | string | const=c_type |  |  |
| ident | string |  |  |  |
| public_key | string |  |  |  |
| maintaince_date | date | ##'Даты действия технической поддержки'## |  |  |
| inventory | bool |  |  |  |
| computer_name | string |  |  |  |
| domain_dns_name | string |  |  |  |
| domain_short_name | string |  |  |  |
| user_name | string |  |  |  |
| end_date | date |  |  |  |
| demo | bool |  |  |  |
