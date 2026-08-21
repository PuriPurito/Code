# Схема: wtv_object_data.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| object_data_type_id | integer | Тип данных объектов |  | object_data_types |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| status_id | string | const=c_status |  | common.request_status_types |
| create_date | date | const=c_create_date |  |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| sec_object_type | string | ##'Тип связанного объекта'## |  | common.exchange_object_types |
| sec_object_id | integer | ##'Связанный объект'## | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| sec_object_name | string | ##'Название связанного объекта'## | ✅ |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| data_str | string | ##'Данные в каталог'## |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| comment | string | const=vkpb_comment |  |  |
| desc | string | const=c_desc |  |  |
| selector | string |  |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
