# Схема: wtv_basket.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| good_id | integer |  |  | goods |
| number | integer |  |  |  |
| reserved_date | date |  |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
