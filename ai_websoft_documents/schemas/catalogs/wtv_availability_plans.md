# Схема: wtv_availability_plans.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=5uitfcok9y |  |  |
| name | string | const=c_name |  |  |
| catalog_name | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( catalog_name + 's' ) |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
