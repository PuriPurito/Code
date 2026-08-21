# Схема: wtv_blogs.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| name | string | const=c_name | ✅ |  |
| type | string | ##'Тип блога'## | ✅ | common.blog_types |
| channel_provider_id | integer | ##'Провайдер канала'## | ✅ | channel_provider |
| permit_subscription | bool | const=lxutg3p3vw |  |  |
| allow_anonymous_comment | bool | const=x4ysmyobgg |  |  |
| creator_id | integer | const=kkikj2yphc |  | collaborators |
| creator_full_info | string | const=fgpru2pbby |  |  |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=j2xkyixyrs |  |  |
| authors_num | integer | const=els39989wi |  |  |
| authors | string | const=vbbo_authors |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
