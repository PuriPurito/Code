# Схема: wtv_wiki_bases.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| wiki_base_type_id | string | const=c_type |  | common.wiki_base_types |
| status | string | const=c_status |  | common.wiki_base_statuses |
| resource_id | integer | const=c_resource |  | resources |
| previous_version_object_id | integer |  |  | wiki_bases |
| status_in_knowledge_map | string | const=c_status |  | common.status_in_knowledge_map_types |
| copy_access_in_new_article | bool | ##'При создании новой статьи копировать права доступа из wiki базы'## |  |  |
| process_embedding | bool | ##'Обрабатывается семантическим поиском'## |  |  |
| wiki_rag_indexes | integer | ##'Индексы поиска RAG'## |  | wiki_rag_indexs |
| tags | string | ##'ID тегов'## |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| experts | string | const=vkpb_experts |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
