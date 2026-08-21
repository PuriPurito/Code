# Схема: wtv_pay_stage.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| org_id | integer | const=c_org |  | orgs |
| client_org_id | integer | ##'Организация клиента'## |  | orgs |
| sale_contract_id | integer | const=sxncvgx1gh |  | sale_contracts |
| agent_contract_id | integer | ##'Договор с клиентом партнёра'## |  | sale_contracts |
| is_agent_sale_contract | bool | ##'Агентский договор'## |  |  |
| agent_org_id | integer | ##'Организация-партнёр'## |  | orgs |
| is_prepayment | bool | ##'Предоплата'## |  |  |
| type_id | string | const=c_type |  |  |
| closing_method | string | ##'Способ закрытия'## |  |  |
| cost_center_id | integer | const=c_cost_center |  | cost_centers |
| cost_type | string | ##'Тип стоимости этапа'## |  |  |
| is_autoclosing | bool | ##'Автозакрытие'## |  |  |
| autoclosing_period | integer | ##'Срок автозакрытия (дней)'## |  |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=3bywib72ya |  |  |
| cost | string | const=c_cost |  |  |
| min | string | const=lqxmsp3132 |  |  |
| value | real | const=c_cost |  |  |
| date | date | const=vdb_aim_date |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| rate | real |  |  |  |
| max | string | const=lqxmsp3132 |  |  |
| value | real | const=c_cost |  |  |
| date | date | const=vdb_aim_date |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| rate | real |  |  |  |
| fact | string | ##'Фактическая стоимость'## |  |  |
| value | real | const=c_cost |  |  |
| date | date | const=vdb_aim_date |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| rate | real |  |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| access | string | const=bmlkskx7us |  |  |
