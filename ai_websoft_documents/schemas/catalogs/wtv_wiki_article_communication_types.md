# Схема: wtv_wiki_article_communication_types.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| resource_id | integer | const=c_resource |  | resources |
| wiki_communication_type_id | string | ##'Способ связи'## |  | common.wiki_communication_types |
| base_wiki_article_type_id | integer | ##'Тип родительской wiki статьи'## |  | wiki_article_types |
| child_wiki_article_type_id | integer | ##'Тип дочерней wiki статьи'## |  | wiki_article_types |
| is_mandatory | bool | const=7df3q17dhk |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
