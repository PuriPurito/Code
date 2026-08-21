# Схема: wtv_typical_development_program.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| status | string | const=c_status |  | common.typical_development_program_statuss |
| desc | string | const=c_desc |  |  |
| tasks | string | const=397hjh1uib |  |  |
| id | string |  |  |  |
| position | integer | const=c_pos_num |  |  |
| name | string | const=c_name |  |  |
| type | string | const=c_type |  | common.career_reserve_tasks_types |
| due_date | integer |  |  |  |
| start_edit_days | integer |  |  |  |
| parent_task_id | string | const=roditelskayazad |  |  |
| duration_days | integer | const=5rzibdkx3s |  |  |
| desc | string | const=c_desc |  |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| auto_appoint_learning | bool | const=eou5pv4psc |  |  |
| auto_appoint_task | bool | const=eou5pv4psc |  |  |
| auto_appoint_appraise | bool | const=eou5pv4psc |  |  |
| add_exist_appraise | bool | ##'Добавлять в существующую процедуру'## |  |  |
| auto_appoint_poll | bool | const=eou5pv4psc |  |  |
| type_document | string |  |  | common.career_reserve_material_types |
| link_document | string | const=vcrb_doc_link |  |  |
| forbid_task_portal_edit | bool | const=zapretitredakt |  |  |
| person_id | integer |  |  | collaborators |
| subdivision_id | integer |  |  | subdivisions |
| subdivision_name | string |  |  |  |
| flag_expanded | bool |  |  |  |
| person_id | integer |  |  | collaborators |
| role_id | integer | const=4egocnh7uc |  | roles |
| doc_info | doc_info_base |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| part_index | integer |  |  |  |
| position_expr | bool |  |  |  |
