# Схема: wtv_skill.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| parent_id | integer | const=roditelskiyele |  | skills |
| skill_type_id | integer | 'Тип навыка' |  | skill_types |
| use_parent_levels | bool | const=ispolzovaturov |  |  |
| levels | string | const=urovnivladeniya |  |  |
| id | string |  |  |  |
| name | string | const=c_name |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
