# Схема: wtv_wiki_article.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| resource_id | integer | const=c_resource |  | resources |
| wiki_base_id | integer | ##'Wiki база'## |  | wiki_bases |
| wiki_article_type_id | integer | ##'Тип wiki статьи'## |  | wiki_article_types |
| content_type | string | ##'Тип контента'## |  |  |
| status_id | string | const=c_status |  | common.status_in_knowledge_map_types |
| acquaint_type_id | string | ##'Тип ознакомления'## |  | common.acquaint_types |
| create_date | date | const=c_create_date | ✅ |  |
| publicate_date | date | const=datapublikacii | ✅ |  |
| critical_publicate_date | date | ##'Дата публикации критичных изменений'## | ✅ |  |
| critical_change | bool | ##'Критичное изменение'## |  |  |
| position | integer | const=7kjcb43w9b |  |  |
| authors | string | const=vbbo_authors |  |  |
| author_id | integer | const=vfb_author |  | collaborators |
| boss_type_id | integer | const=c_type |  | boss_types |
| adding_objects | string | ##'Добавляемые объекты'## |  |  |
| need_adding | bool | ##'Необходимо добавлять/удалять объекты'## |  |  |
| wiki_article_communications | string | ##'Связи wiki статей'## |  |  |
| id | string | ##'ID'## |  |  |
| wiki_article_communication_id | integer | ##'Связь wiki статьи'## |  | wiki_article_communications |
| wiki_article_comm_type_id | integer | ##'Тип связи wiki статьи'## |  | wiki_article_communication_types |
| base_wiki_article_id | integer | ##'Родительская wiki статья'## |  | wiki_articles |
| child_wiki_article_id | integer | ##'Дочерняя wiki статья'## |  | wiki_articles |
| position | integer | const=7kjcb43w9b |  |  |
| questions | string | const=c_questions |  |  |
| id | string | const=c_question |  |  |
| is_custom | bool |  |  |  |
| item_id | integer | const=c_question |  | items |
| type_id | string | const=wn6qh2maou |  | common.acquaint_question_types |
| title | string | const=c_heading |  |  |
| correct_answer | string | const=vieb_correct |  |  |
| grading_option_id | string |  |  | common.grading_option_types |
| sentence_option_id | string |  |  | common.sentence_option_types |
| value | string |  |  |  |
| entries | string | const=5ed2971r62 |  |  |
| id | string |  |  |  |
| value | string | const=c_value |  |  |
| is_correct | bool | const=vieb_correct |  |  |
| acquaint_groups | string | ##'Группы для ознакомления'## |  |  |
| group_id | integer | ##'Группы для ознакомления'## |  | groups |
| annotation | string | const=c_annatatsiya |  |  |
| longread | string | ##'Лонгрид'## |  |  |
| text_area | string | const=c_desc |  |  |
| access | string | const=bmlkskx7us |  |  |
| doc_info | doc_info_base |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| set_article | string |  |  |  |
