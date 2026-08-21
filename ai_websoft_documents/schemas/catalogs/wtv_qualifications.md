# Схема: wtv_qualifications.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| join_mode | string | const=tipvstupleniya |  | common.join_mode_types |
| parent_id | integer | const=o84zb0274j | ✅ | qualifications |
| status | string | const=c_status |  | common.qualification_statuss |
| yourself_start | bool | const=razreshitsamost_1 |  |  |
| qualification_id | integer | const=1uiriherzp |  |  |
| level_id | integer | const=ela6vna8le |  | levels |
| is_reward | bool |  |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| role_id | integer | const=4egocnh7uc |  | roles |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
