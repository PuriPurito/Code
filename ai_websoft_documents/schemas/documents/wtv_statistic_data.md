# Схема: wtv_statistic_data.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string |  |  |  |
| statistic_rec_id | integer | const=vkb_index |  | statistic_recs |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| value | real | const=c_value |  |  |
| value_str | string | const=strokovoeznache |  |  |
| value_date | date | const=znachenievvided |  |  |
| value_desc | string | const=c_desc |  |  |
| statistic_date | date | const=vdb_aim_date |  |  |
| additinal_info | string | const=vnrqm9djn5 |  |  |
| period_type | string | const=tipperioda | ✅ | common.perioditys |
| period_minute | integer | const=minuty |  |  |
| period_hour | integer | const=chasy |  |  |
| period_day | integer | const=w6n76t3f75 |  |  |
| period_month | integer | const=tm5jxtl2m3 |  |  |
| period_quarter | integer | const=kvartal |  |  |
| period_year | integer | const=god |  |  |
| flag | integer | ##'System flag'## |  |  |
| comment | string |  |  |  |
| doc_info | doc_info_base |  |  |  |
