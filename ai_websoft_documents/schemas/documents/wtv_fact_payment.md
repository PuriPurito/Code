# Схема: wtv_fact_payment.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| name | string | const=c_name |  |  |
| org_id | integer | const=c_org |  | orgs |
| client_org_id | integer | const=klient |  | orgs |
| agent_org_id | integer | ##'Организация-партнер'## |  | orgs |
| client_legal | string | ##'Юридическое лицо (клиент)'## |  |  |
| provider_legal | string | ##'Юридическое лицо (поставщик)'## |  |  |
| agent_legal | string | ##'Юридическое лицо (партнер)'## |  |  |
| client_legal_name | string | ##'Юридическое лицо (клиент)'## |  |  |
| provider_legal_name | string | ##'Юридическое лицо (поставщик)'## |  |  |
| agent_legal_name | string | ##'Юридическое лицо (партнер)'## |  |  |
| cost_currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| cost_value | real | const=c_sum |  |  |
| date | date | const=c_date |  |  |
| expense_id | integer | const=mn62xy3jdw |  | expenses |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
