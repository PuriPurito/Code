# Схема: wtv_credential.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| type | string | const=c_type |  |  |
| login | string | const=uf_login |  |  |
| password | string | const=veb_pass |  |  |
| remote_security_profile_id | integer | Профиль безопасности |  | remote_security_profiles |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
