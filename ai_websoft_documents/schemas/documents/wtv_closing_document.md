# Схема: wtv_closing_document.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| pay_stage_id | integer | ##'Этап договора'## |  | pay_stages |
| type_id | string | const=c_type |  | common.payment_types |
| cost | real | const=c_cost |  |  |
| currency_type_id | string | const=c_currency_type | ✅ | lists.currency_types |
| number | string | const=fnxaxirsmo |  |  |
| expense_create_date | date | const=c_create_date |  |  |
| is_formed | bool | const=sformirovan |  |  |
| expenses | string | const=scheta |  |  |
| expense_id | integer | const=mn62xy3jdw |  | expenses |
| sent_date | date |  |  |  |
| sent_type | string |  |  | common.document_sent_types |
| recipient | string |  |  |  |
| consignment_document_number | string |  |  |  |
| sent_messenger_service_id | integer |  |  | messenger_services |
| back_sent_type | string |  |  | common.document_sent_types |
| back_sent_messenger_service_id | integer |  |  | messenger_services |
| is_received | bool | const=polucheno |  |  |
| receiving_status_id | integer |  |  | closing_document_statuss |
| received_date | date | ##'Дата получения'## |  |  |
| docs_comment | string | const=vkpb_comment |  |  |
| comment | string | const=c_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
