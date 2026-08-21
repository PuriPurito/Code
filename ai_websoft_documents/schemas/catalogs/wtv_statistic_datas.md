# Схема: wtv_statistic_datas.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| statistic_rec_id | integer | const=vkb_index | ✅ | statistic_recs |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| value | real | const=c_value |  |  |
| value_str | string | const=strokovoeznache |  |  |
| value_date | date | const=znachenievvided |  |  |
| statistic_date | date | const=vdb_aim_date |  |  |
| additinal_info | string | const=vnrqm9djn5 |  |  |
| period_type | string | const=tipperioda | ✅ | common.perioditys |
| period_minute | integer | const=minuty |  |  |
| period_hour | integer | const=chasy |  |  |
| period_day | integer | const=w6n76t3f75 |  |  |
| period_month | integer | const=tm5jxtl2m3 |  |  |
| period_quarter | integer | const=kvartal |  |  |
| period_year | integer | const=god |  |  |
| creation_date | date | const=c_create_date | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
