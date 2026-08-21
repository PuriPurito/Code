# Схема: wtv_knowledge_profile.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| resource_id | integer | const=c_resource |  | resources |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| knowledge_part_id | integer |  |  | knowledge_parts |
| name | string |  |  |  |
| target_level_id | string | ##'Целевой уровень'## |  |  |
| target_level_index | integer | ##'Индекс целевого уровня'## |  |  |
| target_level_name | string | ##'Целевой уровень'## |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| comment | string | const=vkpb_comment |  |  |
| selector | string |  |  |  |
