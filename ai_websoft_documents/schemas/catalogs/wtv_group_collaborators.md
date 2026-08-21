# Схема: wtv_group_collaborators.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| group_id | integer | const=c_group | ✅ | groups |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| forum_id | integer | const=vfb_forum |  | forums |
| tutor_id | integer |  |  | collaborators |
| tutor_fullname | string |  |  |  |
| is_dynamic | bool | const=z4mv1s9prn |  |  |
| is_hidden | bool | const=skrytayagruppa |  |  |
| allow_social_post | bool | const=vozmozhnoostavl |  |  |
| collaborator_id | integer | const=c_coll | ✅ | collaborators |
| collaborator_fullname | string | const=lhbyv18qkm |  |  |
| position_id | integer |  |  | positions |
