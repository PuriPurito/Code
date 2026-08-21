# Схема: wtv_closing_documents.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| pay_stage_id | integer | ##'Этап договора'## |  | pay_stages |
| type_id | string | const=c_type |  | common.payment_types |
| cost | real | const=c_cost |  |  |
| currency_type_id | string | const=c_currency_type | ✅ | lists.currency_types |
| number | string | const=fnxaxirsmo |  |  |
| expense_create_date | date | const=c_create_date |  |  |
| is_formed | bool | const=sformirovan |  |  |
| sent_date | date | const=3jiyog2nf0 |  |  |
| recipient | string | const=poluchatel |  |  |
| consignment_document_number | string | Номер транспортной накладной |  |  |
| is_received | bool |  |  |  |
| receiving_status_id | integer |  |  | closing_document_statuss |
| received_date | date | Дата получения |  |  |
| docs_comment | string | Комментарий к состоянию документа |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
