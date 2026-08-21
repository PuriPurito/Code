# Схема: wtv_profiling_records.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| start_date | date |  | ✅ |  |
| ticks | integer |  |  |  |
| url | string |  |  |  |
| sid | string |  |  |  |
| duration | integer |  |  |  |
| template_type | string |  |  |  |
| template_id | integer |  | ✅ | DefaultDb.GetOptCatalog( template_type + 's' ) |
| parent_template_type | string |  |  |  |
| parent_template_id | integer |  | ✅ | DefaultDb.GetOptCatalog( parent_template_type + 's' ) |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
