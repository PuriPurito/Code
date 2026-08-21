# Схема: wtv_project_participants.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| catalog | string | const=c_object_type | ✅ | common.exchange_object_types |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( catalog + 's' ) |
| object_name | string | const=c_object_name | ✅ |  |
| person_id | integer | const=c_coll |  | collaborators |
| boss_type_id | integer | const=tipuchastnikapr | ✅ | boss_types |
| project_id | integer | const=c_project | ✅ | projects |
| participant_roles_id | integer | ##'Роли участников проекта'## |  | project_participant_roles |
| is_excluded | bool | ##'Исключен из проекта'## |  |  |
| start_date | date | ##'Дата начала участия'## |  |  |
| finish_date | date | ##'Дата окончания участия'## |  |  |
| plan_load | integer | ##'Плановая загрузка (в часах)'## |  |  |
| percent_plan_load | integer | ##'Плановая загрузка от рабочего времени (в процентах)'## |  |  |
| status_id | string | const=vppb_state |  | common.agreement_status_types |
| workflow_id | integer | const=vw_title |  | workflows |
| workflow_state | string | const=c136i4h31p | ✅ |  |
| workflow_state_name | string | const=ld9m4gsmfn | ✅ |  |
| workflow_person_id | integer | const=c_coll | ✅ | collaborators |
| workflow_matching_type | string | const=c136i4h31q |  |  |
| experts | string | const=vkpb_experts |  |  |
| tags | string | ##'ID тегов'## |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
