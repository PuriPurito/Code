# Схема: wtv_goods.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| good_type_id | integer | const=tiptovara |  | good_types |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( type + 's' ) |
| state_id | string | const=vppb_state |  | common.good_states |
| is_cant_chose | bool | ##'Не доступно для выбора в магазине'## | ✅ |  |
| cost_desc | string | const=63f56qb92a |  |  |
| bonus_shop_cost | real | ##'Стоимость в Магазине призов'## |  |  |
| currency_type_ids | string | const=c_currency_type |  | lists.currency_types |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| delivery_type | string |  |  | common.delivery_types |
| comment | string | const=vkpb_comment |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
