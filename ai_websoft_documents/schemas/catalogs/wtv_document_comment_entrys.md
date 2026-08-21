# Схема: wtv_document_comment_entrys.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| name | string | const=c_name | ✅ |  |
| create_date | date | const=c_create_date | ✅ |  |
| deleted | bool | ms_tools.get_const('vdceb_comment_del') |  |  |
| how2show | string |  |  | common.forum_person_info_types |
| author_info | string |  |  |  |
| user_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| portal_doc_id | integer | const=vfb_forum | ✅ | documents |
| parent_document_entry_id | integer | const=oejhs4rwog | ✅ | document_comment_entrys |
| last_create_date | date |  |  |  |
| child_num | integer |  |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
