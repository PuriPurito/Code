# Схема: wtv_expenses.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string |  |  |  |
| name | string |  |  |  |
| pay_stage_id | integer |  |  | pay_stages |
| cost | real | const=c_cost |  |  |
| currency_type_id | string | const=c_currency_type | ✅ | lists.currency_types |
| number | string |  |  |  |
| expense_create_date | date |  |  |  |
| is_formed | bool |  |  |  |
| payment_plan_date | date |  |  |  |
| is_paid | bool | const=2czyaog3ri |  |  |
| payment_fact_date | date | const=dataoplaty |  |  |
| bad_debt | bool | ##'Безнадежный долг'## |  |  |
| comment | string |  |  |  |
| sent_date | date | const=3jiyog2nf0 |  |  |
| recipient | string | const=poluchatel |  |  |
| consignment_document_number | string | Номер транспортной накладной |  |  |
| is_received | bool |  |  |  |
| received_date | date | Дата получения |  |  |
| docs_comment | string | Комментарий к состоянию документа |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
