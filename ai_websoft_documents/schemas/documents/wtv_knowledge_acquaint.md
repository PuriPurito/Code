# Схема: wtv_knowledge_acquaint.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| knowledge_part_id | integer | const=c_knowledge_part |  | knowledge_parts |
| knowledge_part_name | string | const=c_knowledge_part |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| level_id | string | const=ela6vna8le |  |  |
| level_index | integer | ##'Индекс уровня'## |  |  |
| level_name | string | const=ela6vna8le |  |  |
| sec_object_type | string | ##'Тип связанного объекта'## |  | common.exchange_object_types |
| sec_object_id | integer | ##'Связанный объект'## | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| sec_object_name | string | ##'Название связанного объекта'## | ✅ |  |
| state_id | string | const=c_status |  | common.knowledge_acquaint_states |
| type_id | string | const=c_type |  | common.knowledge_acquaint_types |
| confirmation_date | date | ##'Дата подтверждения'## |  |  |
| finish_date | date | const=j87phjbjvh |  |  |
| confirmation_type | string | ##'Тип подтверждения'## |  | common.acquaint_confirmation_types |
| access | string | const=bmlkskx7us |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| desc | string | const=c_desc |  |  |
