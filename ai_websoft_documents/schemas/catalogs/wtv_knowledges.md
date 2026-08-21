# Схема: wtv_knowledges.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ##'ID'## | ✅ | DefaultDb.GetOptCatalog('knowledge_' + type + 's') |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| type | string | const=c_type | ✅ |  |
| knowledge_classifier_id | integer | const=vkpb_classifier |  | knowledge_classifiers |
| parent_object_id | integer | const=vkpb_parent_value | ✅ |  |
| parent_catalog | string | ##'Тип родительского объекта'## |  |  |
| has_experts | bool | ##'Есть эксперты'## |  |  |
