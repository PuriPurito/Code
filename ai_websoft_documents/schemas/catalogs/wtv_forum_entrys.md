# Схема: wtv_forum_entrys.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| name | string | const=c_name | ✅ |  |
| create_date | date | const=c_create_date | ✅ |  |
| closed | bool | const=9twlu70n3d |  |  |
| pinned | bool | const=vfb_theme_pinned |  |  |
| how2show | string | const=vfeb_view_type |  | common.forum_person_info_types |
| author_info | string | Информация об авторе |  |  |
| user_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| forum_id | integer | const=vfb_forum | ✅ | forums |
| parent_forum_entry_id | integer | const=oejhs4rwog | ✅ | forum_entrys |
| main_forum_entry_id | integer | const=8xzb0pt5ro | ✅ | forum_entrys |
| is_moder_approved | bool | const=g2lhfs1hpk |  |  |
| last_create_date | date | Предыдущая дата создания |  |  |
| child_num | integer | Количество дочерних |  |  |
| remote_ip | string | Удаленный IP |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
