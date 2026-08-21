# Схема: wtv_like.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| type_id | string | ##'Тип реакции'## |  | common.reaction_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=c_object_name |  |  |
| sec_object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( sec_object_type + 's' ) |
| sec_object_type | string | const=c_object_type |  | common.exchange_object_types |
| reaction | string | ##'Реакция'## |  |  |
| message_id | string | ##'Сообщение'## |  |  |
| weight | real | const=ques_score |  |  |
| create_date | date | const=vdb_aim_date |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
