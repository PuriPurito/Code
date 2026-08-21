# Схема: wtv_wiki_article_communications.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| resource_id | integer | const=c_resource |  | resources |
| wiki_article_comm_type_id | integer | ##'Тип связи'## |  | wiki_article_communication_types |
| base_wiki_article_id | integer | ##'Родительская wiki статья'## |  | wiki_articles |
| child_wiki_article_id | integer | ##'Дочерняя wiki статья'## |  | wiki_articles |
| position | integer | const=7kjcb43w9b |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
