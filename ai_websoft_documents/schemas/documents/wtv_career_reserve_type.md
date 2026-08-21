# Схема: wtv_career_reserve_type.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| tasks | string | const=397hjh1uib |  |  |
| id | string |  |  |  |
| name | string | const=c_name |  |  |
| type | string | const=c_type |  | common.career_reserve_type_tasks_types |
| due_date | integer |  |  |  |
| desc | string | const=c_desc |  |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| auto_appoint_learning | bool | const=eou5pv4psc |  |  |
| add_exist_appraise | bool |  |  |  |
| person_id | integer |  |  | collaborators |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| access | string | const=bmlkskx7us |  |  |
| part_index | integer |  |  |  |
