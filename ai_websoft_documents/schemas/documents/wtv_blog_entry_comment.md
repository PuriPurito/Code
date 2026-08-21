# Схема: wtv_blog_entry_comment.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| create_date | date | const=vdb_aim_date |  |  |
| blog_entry_id | integer | const=c_blog_entry |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=j2xkyixyrs |  |  |
| person_id | integer | const=vfb_author |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| name | string | const=c_name |  |  |
| parent_id | integer | const=hkjvnjrkci |  | blog_entry_comments |
| like_id | integer | const=ass_mark |  | likes |
| message | string | const=7zen195nnp |  |  |
| access | string | const=bmlkskx7us |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| type | string | const=c_type |  |  |
