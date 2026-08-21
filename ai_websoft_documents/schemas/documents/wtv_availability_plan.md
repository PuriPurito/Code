# Схема: wtv_availability_plan.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| catalog_name | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( catalog_name + 's' ) |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| start_hour | integer |  |  |  |
| finish_hour | integer |  |  |  |
| periods | string | const=55b09z3b3p |  |  |
| id | string | ID |  |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| comment | string | const=vkpb_comment |  |  |
| desc | string | const=c_desc |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| comment | string | const=vkpb_comment |  |  |
| periods | string | const=55b09z3b3p |  |  |
| start_date | date | const=c_start_date |  |  |
| hour | integer |  |  |  |
| checked | bool |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| checked | bool |  |  |  |
