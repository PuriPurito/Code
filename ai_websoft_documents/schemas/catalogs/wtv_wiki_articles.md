# Схема: wtv_wiki_articles.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| resource_id | integer | const=c_resource |  | resources |
| wiki_base_id | integer | ##'Wiki база'## |  | wiki_bases |
| content_type | string | ##'Тип контента'## |  |  |
| wiki_article_type_id | integer | ##'Тип wiki статьи'## |  | wiki_article_types |
| acquaint_type_id | string | ##'Тип ознакомления'## |  | common.acquaint_types |
| status_id | string | const=c_status |  | common.status_in_knowledge_map_types |
| create_date | date | const=c_create_date | ✅ |  |
| author_id | integer | ##'Авторы'## |  | collaborators |
| author_boss_type_id | integer | ##'Типы руководителей авторов'## |  | collaborators |
| position | integer | const=7kjcb43w9b |  |  |
| publicate_date | date | const=datapublikacii | ✅ |  |
| critical_publicate_date | date | ##'Дата публикации критичных изменений'## | ✅ |  |
| acquaint_group_ids | integer | ##'Группы для ознакомления'## |  | groups |
| annotation | string | const=c_annatatsiya |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| files_id | integer | const=vdb_files |  | resources |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| access_group_ids | integer | ##'Группы прав доступа'## |  | groups |
| enable_anonymous_access | bool | const=anonimnyydostup |  |  |
