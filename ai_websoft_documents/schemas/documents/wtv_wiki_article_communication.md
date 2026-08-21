# Схема: wtv_wiki_article_communication.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| name_value | string | const=c_name |  |  |
| resource_id | integer | const=c_resource |  | resources |
| wiki_article_communication_type_id | integer | ##'Тип связи'## |  | wiki_article_communication_types |
| wiki_article_comm_type_id | integer | ##'Тип связи'## |  | wiki_article_communication_types |
| base_wiki_article_id | integer | ##'Родительская wiki статья'## |  | wiki_articles |
| child_wiki_article_id | integer | ##'Дочерняя wiki статья'## |  | wiki_articles |
| position | integer | const=7kjcb43w9b |  |  |
| text_area | string | const=c_desc |  |  |
| access | string | const=bmlkskx7us |  |  |
| doc_info | doc_info_base |  |  |  |
| comment | string | const=vkpb_comment |  |  |
