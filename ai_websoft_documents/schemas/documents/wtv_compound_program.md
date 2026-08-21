# Схема: wtv_compound_program.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| desc | string | const=c_desc |  |  |
| min_person_num | integer | const=o37af2zthb |  |  |
| allow_self_assignment | bool | ##'Разрешить самоназначение'## |  |  |
| programs | string | const=ds8zf9kyta |  |  |
| id | integer |  |  |  |
| name | string | const=c_name |  |  |
| parent_progpam_id | integer | const=ydtscdg3zk |  |  |
| education_program_id | integer | const=c_edu_prog |  | education_programs |
| education_method_id | integer | const=c_edu_method |  | education_methods |
| start_learning_tasks | string | const=vceb_completed_parent_parts |  |  |
| learning_task_id | integer |  |  | learning_tasks |
| start_assessments | string | const=vceb_completed_parent_parts |  |  |
| assessment_id | integer |  |  | assessments |
| finish_learning_tasks | string | const=vceb_completed_parent_parts |  |  |
| learning_task_id | integer |  |  | learning_tasks |
| finish_assessments | string | const=vceb_completed_parent_parts |  |  |
| assessment_id | integer |  |  | assessments |
| finish_notifiation | string | ##'Пост-рассылка'## |  |  |
| notification_template_id | integer | const=l7y3l5h2nb |  | 'notification_templates' |
| subject | string | const=vfb_subject |  |  |
| body | string | const=7zen195nnp |  |  |
| body_type | string | const=formatsoobsheniya |  |  |
| edit_notification | bool | ##'Редактировать уведомление'## |  |  |
| start_notifiation | string | ##'Пред-рассылка'## |  |  |
| notification_template_id | integer | const=l7y3l5h2nb |  | 'notification_templates' |
| subject | string | const=vfb_subject |  |  |
| body | string | const=7zen195nnp |  |  |
| body_type | string | const=formatsoobsheniya |  |  |
| edit_notification | bool | ##'Редактировать уведомление'## |  |  |
| duration | integer | const=ij926v78io |  |  |
| person_num | integer | const=vocwacfpan |  |  |
| type | string | const=c_type |  |  |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| object_code | string | const=c_code |  |  |
| catalog_name | string |  |  | common.learning_catalogs |
| subject | string | const=vfb_subject |  |  |
| body | string | const=7zen195nnp |  |  |
| body_type | string | const=formatsoobsheniya |  |  |
| edit_notification | bool | ##'Редактировать уведомление'## |  |  |
| delay_days | integer | const=2kaidfx9na |  |  |
| days | integer | const=2kaidfx9na |  |  |
| weight | integer | const=2p3ne4mjnp |  |  |
| start_type | string |  |  |  |
| required | bool | const=vceb_is_mandatory |  |  |
| comment | string | const=vkpb_comment |  |  |
| completed_parent_programs | string | const=vceb_completed_parent_parts |  |  |
| program_id | integer |  |  | Parent.Parent.Parent.Parent.programs |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| comment | string | const=vkpb_comment |  |  |
| part_index | integer |  |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
