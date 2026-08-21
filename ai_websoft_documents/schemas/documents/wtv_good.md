# Схема: wtv_good.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| good_type_id | integer | const=tiptovara |  | good_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( type + 's' ) |
| state_id | string | const=vppb_state |  | common.good_states |
| is_cant_chose | bool | ##'Не доступно для выбора в магазине'## |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| sum | real |  |  |  |
| limit | real |  |  |  |
| cost_desc | string | const=63f56qb92a |  |  |
| bonus_shop_cost | real | ##'Стоимость в Магазине призов'## |  |  |
| delivery_type | string |  |  | common.delivery_types |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| access | string | const=bmlkskx7us |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
