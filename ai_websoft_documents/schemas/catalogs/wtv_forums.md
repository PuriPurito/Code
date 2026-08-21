# Схема: wtv_forums.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| resource_id | integer | const=c_resource |  | resources |
| permit_subscription | bool | const=igih9gq2ts |  |  |
| closed | bool | const=9twlu70n3d |  |  |
| allow_anonymous_message | bool | const=q3wfufdw8l |  |  |
| allow_create_closed_theme | bool | const=xt16i1oi6f |  |  |
| allow_user_delete | bool | const=vfeb_can_del_mess |  |  |
| disp_user_status | bool | const=la9hb7w3sn |  |  |
| need_moder_approval | bool | const=odb7pejwm8 | ✅ |  |
| course_id | integer | const=c_course | ✅ | courses |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
