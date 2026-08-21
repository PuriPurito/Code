# Схема: wtv_orders.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| status | string | const=c_status | ✅ | common.order_status_types |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| sum | real | const=63f56qb92a |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| formed_date | date | const=dataformirovan | ✅ |  |
| paid_date | date | const=dataoplaty | ✅ |  |
| issue_date | date | const=c_delivery_date | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
