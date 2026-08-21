# Схема: wtv_order.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  | common.order_status_types |
| person_id | integer | const=c_coll |  | collaborators |
| good_id | integer |  |  | goods |
| name | string | const=c_name |  |  |
| code | string | const=c_code |  |  |
| number | integer | const=c_num |  |  |
| reserved_date | date | const=datarezervirov |  |  |
| good_instance_id | integer |  |  | good_instances |
| name | string | const=c_name |  |  |
| code | string | const=c_code |  |  |
| cost | real | const=c_cost |  |  |
| reserved_date | date | const=datarezervirov |  |  |
| status | string | const=c_status |  | common.good_instance_status_types |
| request_id | integer | const=c_request |  | requests |
| delivery_type | string |  |  | common.delivery_types |
| cost | real | const=c_cost |  |  |
| sum | string | const=63f56qb92a |  |  |
| hier_expanded | bool |  |  |  |
| status | string | const=c_status |  | common.order_status_types |
| request_id | integer | const=c_request |  | requests |
| sum | string | const=63f56qb92a |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| formed_date | date | const=dataformirovan |  |  |
| paid_date | date | const=dataoplaty |  |  |
| issue_date | date | const=c_delivery_date |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
