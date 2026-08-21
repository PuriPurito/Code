# Схема: wtv_response_types.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| object_type | string | const=c_object_type | ✅ | common.exchange_object_types |
| access_block_type | string | const=ij5l10yndc |  | access_blocks |
| basic_desc_field | string | ##'Основное поле с описанием'## |  |  |
| basic_score_field | string | ##'Основное поле с оценкой'## |  |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
