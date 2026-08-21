# Схема: wtv_groups.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| resource_id | integer | const=c_resource |  | resources |
| person_num | integer | const=vtmb_coll_num |  |  |
| forum_id | integer | const=vfb_forum |  | forums |
| is_dynamic | bool | const=z4mv1s9prn |  |  |
| is_educ | bool | const=1nigiuctfg |  |  |
| is_hidden | bool | const=skrytayagruppa |  |  |
| allow_social_post | bool | const=vozmozhnoostavl |  |  |
| join_mode | string | const=vstuplenievgru |  | common.join_mode_types |
| kpi_profile_id | integer | const=ass_kpi_profile |  | kpi_profiles |
| kpi_profiles_id | integer | const=ass_kpi_profiles |  | kpi_profiles |
| bonus_profile_id | integer | const=629saq8h6f |  | bonus_profiles |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| tags | string | ##'ID тегов'## |  |  |
| tag_id | integer | const=pe82k7en9s | ✅ | tags |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
