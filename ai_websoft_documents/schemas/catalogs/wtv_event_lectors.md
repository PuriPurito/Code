# Схема: wtv_event_lectors.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| event_id | integer | const=c_events | ✅ | events |
| is_model | bool |  |  |  |
| place_id | integer | const=c_place | ✅ | places |
| lector_id | integer | const=c_lector | ✅ | lectors |
| type | string | const=c_type |  | common.lector_types |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=bgjgk81nh4 |  |  |
| lector_fullname | string | const=bgjgk81nh4 |  |  |
| hours | integer | const=bos75mgjh5 |  |  |
| is_tutor | bool | const=veb_is_lector |  |  |
| is_collaborator | bool | const=r0pdnwxus9 |  |  |
| is_preparation | bool | const=n8wp47yzv5 |  |  |
