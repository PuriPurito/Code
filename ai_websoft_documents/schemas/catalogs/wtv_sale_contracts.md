# Схема: wtv_sale_contracts.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| state_id | integer | const=c_status |  | contract_states |
| is_agent_contract | bool | ##'Агентский договор'## |  |  |
| agent_org_id | integer | ##'Организация-агент'## |  | orgs |
| org_id | integer | const=c_org |  | orgs |
| client_org_id | integer | const=klient |  | orgs |
| client_manager_id | integer | const=klient |  | collaborators |
| manager_id | integer | const=menedzher |  | collaborators |
| parent_sale_contract_id | integer | const=sxncvgx1gh |  | sale_contracts |
| number | string | const=fnxaxirsmo |  |  |
| serial_number | string | const=poryadkovyynomer |  |  |
| date_signature | date | const=datapodpisaniya |  |  |
| finish_date | date | const=3bywib72ya |  |  |
| client_legal | string | ##'Юридическое лицо (клиент)'## |  |  |
| provider_legal | string | ##'Юридическое лицо (поставщик)'## |  |  |
| client_legal_name | string | ##'Юридическое лицо (клиент)'## |  |  |
| provider_legal_name | string | ##'Юридическое лицо (поставщик)'## |  |  |
| bad_debt | bool | ##'Безнадежный долг'## |  |  |
| contract_cost | real | const=c_cost |  |  |
| currency_type_id | string | const=c_currency_type | ✅ | lists.currency_types |
| contract_signature | string | ##'Подписывается договор у контрагента'## |  |  |
| prev_contract_id | integer |  |  | sale_contracts |
| contract_type | integer |  |  | sale_contract_types |
| sent_date | date | const=3jiyog2nf0 |  |  |
| recipient | string | const=poluchatel |  |  |
| consignment_document_number | string | Номер транспортной накладной |  |  |
| is_received | bool |  |  |  |
| received_date | date | Дата получения |  |  |
| docs_comment | string | Комментарий к состоянию документа |  |  |
| creation_date | date | const=c_create_date |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
