# Схема: wtv_social_entrys.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer |  | ✅ |  |
| name | string |  |  |  |
| catalog_name | string | const=c_object_type |  | common.exchange_object_types |
| create_date | date | const=c_create_date | ✅ |  |
| parent_id | integer |  | ✅ |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_blog_entry | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| like_id | integer |  |  | likes |
