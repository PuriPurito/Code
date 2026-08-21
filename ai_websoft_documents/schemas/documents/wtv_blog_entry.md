# Схема: wtv_blog_entry.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| name | string | const=c_name |  |  |
| type | string | const=c_type |  |  |
| create_date | date | const=c_create_date |  |  |
| date_modified | date | const=dataredaktirov |  |  |
| allow_comment | bool | const=wp20volfqx |  |  |
| blocked | bool | const=zablokirovano |  |  |
| text_area | string | const=vbecb_body |  |  |
| labels | string | const=9cfy4glyfb |  |  |
| person_id | integer | const=vfb_author |  | collaborators |
| blog_id | integer | const=c_blog |  | blogs |
| feed_item_id | string | ID статьи в ленте |  |  |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=j2xkyixyrs |  |  |
| comment_num | integer | const=7vo185dsbf |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| access | string | const=bmlkskx7us |  |  |
