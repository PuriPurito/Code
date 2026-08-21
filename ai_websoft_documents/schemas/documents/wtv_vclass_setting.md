# Схема: wtv_vclass_setting.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| event_id | integer | const=c_event |  | events |
| conversation_id | integer | ##'Разговор'## |  | conversations |
| programs | string | const=ds8zf9kyta |  |  |
| id | integer |  |  |  |
| name | string | const=c_name |  |  |
| parent_progpam_id | integer | const=ydtscdg3zk |  |  |
| duration | integer | const=ij926v78io |  |  |
| person_num | integer | const=vocwacfpan |  |  |
| type | string | const=c_type |  |  |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| object_code | string | const=c_code |  |  |
| catalog_name | string |  |  | common.learning_catalogs |
| delay_days | integer | const=2kaidfx9na |  |  |
| days | integer | const=2kaidfx9na |  |  |
| weight | integer | const=2p3ne4mjnp |  |  |
| start_type | string |  |  |  |
| required | bool | const=vceb_is_mandatory |  |  |
| comment | string | const=vkpb_comment |  |  |
| completed_parent_programs | string | const=vceb_completed_parent_parts |  |  |
| program_id | integer |  |  | Parent.Parent.Parent.Parent.programs |
| part_index | integer |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
