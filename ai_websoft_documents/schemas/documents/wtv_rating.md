# Схема: wtv_rating.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| date | date | const=vdb_aim_date |  |  |
| expert_person_id | integer | const=mkwzmalbrv |  | collaborators |
| status | bool | const=c_status |  |  |
| objects | string | const=whqdx78mre |  |  |
| object_id | integer |  |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
