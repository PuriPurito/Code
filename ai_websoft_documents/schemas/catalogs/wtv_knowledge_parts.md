# Схема: wtv_knowledge_parts.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| resource_id | integer | const=c_resource |  | resources |
| parent_object_id | integer | const=vkpb_parent_value | ✅ | DefaultDb.GetOptCatalog( 'knowledge_parts' ) |
| knowledge_classifier_id | integer | const=vkpb_classifier | ✅ | knowledge_classifiers |
| experts | string | const=vkpb_experts |  |  |
| require_acknowledgement | bool | const=fd8oxa9zk3 |  |  |
| previous_version_object_id | integer |  |  | DefaultDb.GetOptCatalog( 'knowledge_parts' ) |
| status_in_knowledge_map | string | const=c_status |  | common.status_in_knowledge_map_types |
| knowledge_part_type_id | integer |  |  | knowledge_part_types |
| confirmation_type | string | ##'Тип подтверждения'## |  | common.confirmation_types |
| expertise_level_index | integer | ##'Индекс уровня экспертизы'## |  |  |
| tags | string | ##'ID тегов'## |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
