# Схема: wtv_project_participant.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| catalog | string | const=c_object_type | ✅ | common.exchange_object_types |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( catalog + 's' ) |
| object_name | string | const=c_object_name | ✅ |  |
| boss_type_id | integer | const=tipuchastnikapr |  | boss_types |
| project_id | integer | const=c_project |  | projects |
| participant_roles_id | integer | ##'Роли участников проекта'## |  | project_participant_roles |
| status_id | string | const=vppb_state |  | common.agreement_status_types |
| id | string |  |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| workflow_matching_type | string | const=c136i4h31q |  |  |
| name | string | const=c_name |  |  |
| value | string |  |  |  |
| knowledge_part_id | integer | const=c_knowledge_part |  | knowledge_parts |
| current_level_id | string | ##'Текущий уровень'## |  |  |
| comment | string |  |  |  |
| is_excluded | bool | ##'Исключен из проекта'## |  |  |
| start_date | date | ##'Дата начала участия'## |  |  |
| finish_date | date | ##'Дата окончания участия'## |  |  |
| plan_load | integer | ##'Плановая загрузка (в часах)'## |  |  |
| percent_plan_load | integer | ##'Плановая загрузка от рабочего времени (в процентах)'## |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| access | string | const=bmlkskx7us |  |  |
| workflow_state | string |  |  |  |
| workflow_action_result | variant |  |  |  |
| workflow_create_break | bool |  |  |  |
| knowledge_part_id | integer | const=c_knowledge_part |  | knowledge_parts |
| knowledge_part_name | string |  |  |  |
| title | string |  |  |  |
| value | string |  |  |  |
