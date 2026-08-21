# Схема: wtv_wiki_base.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| wiki_base_type_id | string | const=c_type |  | common.wiki_base_types |
| status | string | const=c_status |  | common.wiki_base_statuses |
| resource_id | integer | const=c_resource |  | resources |
| base_wiki_article_types | string | ##'Родительский тип wiki статьи'## |  |  |
| name | string | const=c_name |  |  |
| base_wiki_article_type_id | integer | ##'Тип wiki статьи'## |  | wiki_article_types |
| wiki_article_types | string | ##'Типы wiki статей'## |  |  |
| wiki_article_type_id | integer | ##'Тип wiki статьи'## |  | wiki_article_types |
| need_confirm | bool | const=vkpb_need_request |  |  |
| free_access_edit | bool | ##'Разрешить создание/редактирование статей всем сотрудникам'## |  |  |
| exclude_from_tree | bool | ##'Исключить из иерархии'## |  |  |
| all_managers_can_confirm | bool | ##'Всем функциональным руководителям доступно редактирование'## |  |  |
| repositorium_id | integer | const=repozitoriy |  | repositoriums |
| requires_comment | bool | ##'Требуется заполнения комментария при создании/редактировании статьи'## |  |  |
| free_access_edit | bool | ##'Разрешить создание/редактирование статей всем сотрудникам'## |  |  |
| copy_access_in_new_article | bool | ##'При создании новой статьи копировать права доступа из wiki базы'## |  |  |
| text_area | string | const=c_desc |  |  |
| process_embedding | bool | ##'Обрабатывается семантическим поиском'## |  |  |
| wiki_rag_indexes | string | ##'Индексы поиска RAG'## |  |  |
| wiki_rag_index_id | integer | ##'Индекс поиска RAG'## |  | wiki_rag_indexs |
| access | string | const=bmlkskx7us |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
| doc_info | doc_info_base |  |  |  |
| comment | string | const=vkpb_comment |  |  |
