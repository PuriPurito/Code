# Схема: wtv_pay_stages.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| org_id | integer | const=c_org | ✅ | orgs |
| client_org_id | integer | ##'Организация клиента'## | ✅ | orgs |
| sale_contract_id | integer | const=sxncvgx1gh | ✅ | sale_contracts |
| agent_contract_id | integer | ##'Договор с клиентом партнёра'## | ✅ | sale_contracts |
| is_agent_sale_contract | bool | ##'Агентский договор'## |  |  |
| agent_org_id | integer | ##'Организация-партнёр'## | ✅ | orgs |
| start_date | date | const=c_start_date | ✅ |  |
| finish_date | date | const=3bywib72ya | ✅ |  |
| is_prepayment | bool | ##'Предоплата'## |  |  |
| cost_type | string | ##'Тип стоимости этапа'## |  |  |
| min_cost | real | ##'Минимальная сумма'## |  |  |
| max_cost | real | ##'Максимальная сумма'## |  |  |
| fact_cost | real | ##'Фактическая сумма'## |  |  |
| type_id | string | const=c_type |  |  |
| closing_method | string | ##'Способ закрытия'## |  |  |
| cost_center_id | integer | const=c_cost_center | ✅ | cost_centers |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| is_autoclosing | bool | ##'Автозакрытие'## |  |  |
| autoclosing_period | integer | ##'Срок автозакрытия (дней)'## |  |  |
