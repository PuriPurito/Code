# Схема: wtv_knowledge_part.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| resource_id | integer | const=c_resource |  | resources |
| parent_object_id | integer | const=vkpb_parent_value |  | DefaultDb.GetOptCatalog( 'knowledge_parts' ) |
| knowledge_classifier_id | integer | const=vkpb_classifier |  | knowledge_classifiers |
| confirmation_type | string | ##'Тип подтверждения'## |  | common.confirmation_types |
| text_area | string | const=c_desc |  |  |
| require_acknowledgement | bool | const=fd8oxa9zk3 |  |  |
| levels | string | const=jaw754vpm1 |  |  |
| level | string | const=jaw754vpm1 |  |  |
| id | string | ID |  |  |
| name | string | const=c_name |  |  |
| desc | string | const=c_desc |  |  |
| expertise_level | bool | ##'Уровень экспертизы'## |  |  |
| confirmation_type | string | ##'Тип подтверждения'## |  | common.confirmation_types |
| access | string | const=bmlkskx7us |  |  |
| doc_info | doc_info_base |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| id | integer |  |  |  |
| name | string |  |  |  |
| object_type | string |  |  |  |
| object_type_name | string |  |  |  |
| knowledge_part_type_id | integer |  |  | knowledge_part_types |
| selector | string |  |  |  |
| catalog_type | string |  |  |  |
| sel_all_objects | bool |  |  |  |
