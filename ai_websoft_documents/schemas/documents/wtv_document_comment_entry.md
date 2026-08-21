# Схема: wtv_document_comment_entry.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| name | string | const=c_name |  |  |
| create_date | date | const=vdb_aim_date |  |  |
| deleted | bool | ms_tools.get_const('vdceb_comment_del') |  |  |
| how2show | string |  |  | common.forum_person_info_types |
| user_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| portal_doc_id | integer | const=vfb_forum |  | documents |
| parent_document_entry_id | integer | const=x402q9fxgy |  | document_comment_entrys |
| text_area | string | const=vbecb_body |  |  |
| last_create_date | date |  |  |  |
| child_num | integer |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| last_parent_document_entry_id | integer |  |  |  |
