# Схема: wtv_level.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| prev_level_id | integer | 'Предыдущий уровень' |  | levels |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| min_value | real |  |  |  |
| max_value | real |  |  |  |
| currency_types | string | const=c_currency_type |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| min_value | real |  |  |  |
| max_value | real |  |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
