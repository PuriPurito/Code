# Схема: wtv_object_data_types.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| object_type | string | const=c_object_type | ✅ | common.exchange_object_types |
| sec_object_type | string | ##'Тип связанного объекта'## | ✅ | common.exchange_object_types |
| access_block_type | string | const=ij5l10yndc |  | access_blocks |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
