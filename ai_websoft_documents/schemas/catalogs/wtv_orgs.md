# Схема: wtv_orgs.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=2c7tfen6wm | ✅ |  |
| disp_name | string | const=org_disp_name | ✅ |  |
| account_id | integer | const=dwym57yfvr | ✅ | accounts |
| kpi_profile_id | integer | const=ass_kpi_profile |  | kpi_profiles |
| kpi_profiles_id | integer | const=ass_kpi_profiles |  | kpi_profiles |
| bonus_profile_id | integer | const=629saq8h6f |  | bonus_profiles |
| place_id | integer | const=c_place |  | places |
| region_id | integer | const=vrb_region |  | regions |
| tags | string | ##'ID тегов'## |  |  |
| tag_id | integer | const=pe82k7en9s | ✅ | tags |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
