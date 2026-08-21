# Схема: wtv_forum_entry.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| name | string | const=c_name |  |  |
| create_date | date | const=vdb_aim_date |  |  |
| closed | bool | const=vfb_end_discus |  |  |
| pinned | bool | const=vfb_theme_pinned |  |  |
| how2show | string | const=vfeb_view_type |  | common.forum_person_info_types |
| user_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| forum_id | integer | const=vfb_forum |  | forums |
| parent_forum_entry_id | integer | const=oejhs4rwog |  | forum_entrys |
| main_forum_entry_id | integer | const=8xzb0pt5ro |  | forum_entrys |
| text_area | string | const=vbecb_body |  |  |
| remote_ip | string | Удаленный IP |  |  |
| collaborator_id | integer |  |  | collaborators |
| person_fullname | string |  |  |  |
| is_moder_approved | bool | const=g2lhfs1hpk |  |  |
| last_create_date | date | Предыдущая дата создания |  |  |
| child_num | integer | Количество дочерних |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| last_parent_forum_entry_id | integer |  |  |  |
