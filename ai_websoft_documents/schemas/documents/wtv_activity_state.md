# Схема: wtv_activity_state.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| create_date | date | const=c_create_date |  |  |
| activity_id | integer | const=tipuchebnoyakti |  | activitys |
| activity_code | string |  |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| registration | string |  |  |  |
| content_type | string |  |  |  |
| json_str | string |  |  |  |
| agent_json_str | string |  |  |  |
| agent | actor_base | Агент |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
