# Схема: wtv_subscription.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| create_date | date | const=c_create_date |  |  |
| type | string | const=c_type |  | common.exchange_object_types |
| document_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( type + 's' ) |
| include_subdocs | bool | const=cbftundnsd |  |  |
| date_to | date | ##'Действует до'## |  |  |
| date_last_action | date | const=dataposlednego_5 |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| comment | string | const=vkpb_comment |  |  |
| selector | string |  |  |  |
