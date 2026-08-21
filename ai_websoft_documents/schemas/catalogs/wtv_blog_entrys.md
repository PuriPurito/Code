# Схема: wtv_blog_entrys.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| name | string | const=c_name | ✅ |  |
| type | string | const=c_type |  |  |
| create_date | date | const=c_create_date | ✅ |  |
| allow_comment | bool | const=m2koi3tmrj |  |  |
| blocked | bool | const=zablokirovano |  |  |
| labels | string | const=9cfy4glyfb |  |  |
| person_id | integer | const=vfb_author | ✅ | collaborators |
| person_fullname | string | const=27yeo2gz3r | ✅ |  |
| blog_id | integer | const=c_blog | ✅ | blogs |
| feed_item_id | string | ID статьи в ленте | ✅ |  |
| object_id | integer | const=c_object | ✅ |  |
| comment_num | integer | const=8ndbe2lr2o |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
