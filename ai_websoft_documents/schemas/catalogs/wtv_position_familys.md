# Схема: wtv_position_familys.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| parent_position_family_id | integer | Родительское семейство должностей | ✅ | position_familys |
| is_dynamic | bool | const=iqord0ntqc |  |  |
| bonus_profile_id | integer | const=629saq8h6f |  | bonus_profiles |
| competence_profile_id | integer | const=ass_competence_profile |  | competence_profiles |
| kpi_profile_id | integer | const=ass_kpi_profile |  | kpi_profiles |
| kpi_profiles_id | integer | const=ass_kpi_profiles |  | kpi_profiles |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| subdivision_group_id | integer | const=1akgrp8ook |  | subdivision_groups |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
