# Схема: wtv_knowledge_objects.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| catalog | string |  | ✅ | common.exchange_object_types |
| object_id | integer |  | ✅ | DefaultDb.GetOptCatalog(catalog + 's') |
| object_name | string |  | ✅ |  |
| object_status | string |  |  | common.status_in_knowledge_map_types |
| object_start_date | date |  |  |  |
| object_end_date | date |  |  |  |
| doc_create_date | date |  |  |  |
| knowledge_part_id | integer |  | ✅ | knowledge_parts |
| knowledge_part_name | string |  |  |  |
| current_level_id | string | ##'Текущий уровень'## |  |  |
| current_level_name | string | ##'Текущий уровень'## |  |  |
| current_level_index | integer | ##'Индекс текущего уровня'## |  |  |
| target_level_id | string | ##'Целевой уровень'## |  |  |
| target_level_name | string | ##'Целевой уровень'## |  |  |
| target_level_index | integer | ##'Индекс целевого уровня'## |  |  |
| require_acknowledgement | bool |  |  |  |
| knowledge_part_level_id | integer |  | ✅ | knowledge_part_levels |
| acquaint_time | integer |  |  |  |
