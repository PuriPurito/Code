# Схема: wtv_cl_courses.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| author_id | integer |  | ✅ | collaborators |
| localization_id | integer |  |  | cl_localizations |
| tag_id | integer | const=pe82k7en9s |  | tags |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| platform | string | Платформа |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
