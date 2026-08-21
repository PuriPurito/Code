# Схема: wtv_position_commons.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| status | string | const=c_status |  | common.position_common_statuss |
| min_salary | real | const=pos_min_salary |  |  |
| max_salary | real | const=pos_max_salary |  |  |
| currency | string | const=c_currency_type |  | lists.currency_types |
| position_familys | string | const=re7n9mti11 |  |  |
| allow_outstaff | bool | const=mozhnoprivlekat |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| kpi_profile_id | integer | const=ass_kpi_profile |  | kpi_profiles |
| kpi_profiles_id | integer | const=ass_kpi_profiles |  | kpi_profiles |
| bonus_profile_id | integer | const=629saq8h6f |  | bonus_profiles |
| knowledge_profile_id | integer | const=syqx4l4uo1 |  | knowledge_profiles |
| parent_position_common_id | integer |  | ✅ | position_commons |
| grade_ids | integer | const=351hlc1f2m | ✅ | grades |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
