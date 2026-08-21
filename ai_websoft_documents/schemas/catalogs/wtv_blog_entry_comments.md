# Схема: wtv_blog_entry_comments.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| create_date | date | const=c_create_date | ✅ |  |
| blog_entry_id | integer | const=c_blog_entry | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=j2xkyixyrs |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| creator_name | string | const=88cnbbrh3a | ✅ |  |
| message | string | const=7zen195nnp |  |  |
| parent_id | integer | const=hkjvnjrkci | ✅ | blog_entry_comments |
| like_id | integer | const=ass_mark |  | likes |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
