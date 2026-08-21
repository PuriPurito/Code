# Схема: wtv_activity_states.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name |  |  |
| agent_json_str | string | Текст Агента | ✅ |  |
| create_date | date | const=c_create_date | ✅ |  |
| activity_id | integer | const=tipuchebnoyakti | ✅ | activitys |
| activity_code | string | const=c_code | ✅ |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| registration | string | Строка регистрации | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
