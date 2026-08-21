# Схема: wtv_likes.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| name | string | const=c_name |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| type_id | string | ##'Тип реакции'## |  | common.reaction_types |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=c_object_name |  |  |
| sec_object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( sec_object_type + 's' ) |
| sec_object_type | string | const=c_object_type |  | common.exchange_object_types |
| reaction | string | ##'Реакция'## |  |  |
| message_id | string | ##'Сообщение'## |  |  |
| weight | real | const=ques_score |  |  |
| create_date | date | const=vdb_aim_date | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
