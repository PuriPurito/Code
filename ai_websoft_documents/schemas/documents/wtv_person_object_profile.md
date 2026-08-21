# Схема: wtv_person_object_profile.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| object_catalog | string |  |  | common.exchange_object_types |
| all_can_create | bool |  |  |  |
| all_can_edit | bool |  |  |  |
| all_can_delete | bool |  |  |  |
| max_amount | integer |  |  |  |
| max_total_size | integer |  |  |  |
| max_object_size | integer |  |  |  |
| object_id | integer |  |  | DefaultDb.GetOptCatalog(Parent.Parent.object_catalog+'s') |
| object_name | string |  |  |  |
| can_edit | bool |  |  |  |
| can_delete | bool |  |  |  |
| access_level | integer | const=c_access_level |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
