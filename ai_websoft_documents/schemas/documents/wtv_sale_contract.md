# Схема: wtv_sale_contract.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| state_id | integer | const=c_status |  | contract_states |
| org_id | integer | const=c_org |  | orgs |
| is_agent_contract | bool | ##'Агентский договор'## |  |  |
| agent_org_id | integer | ##'Организация-агент'## |  | orgs |
| client_org_id | integer | const=klient |  | orgs |
| client_manager_id | integer | const=klient |  | collaborators |
| manager_id | integer | const=menedzher |  | collaborators |
| parent_sale_contract_id | integer | const=sxncvgx1gh |  | sale_contracts |
| number | string | const=fnxaxirsmo |  |  |
| serial_number | string | const=poryadkovyynomer |  |  |
| date_signature | date | const=datapodpisaniya |  |  |
| finish_date | date | const=3bywib72ya |  |  |
| subject_contract | string | const=kohtmfrhrf |  |  |
| prev_contract_id | integer |  |  | sale_contracts |
| contract_type | integer |  |  | sale_contract_types |
| contract_signature | string | ##'Подписывается договор у контрагента'## |  |  |
| client_legal | string | const=sxncvgx1gh |  |  |
| provider_legal | string | const=sxncvgx1gh |  |  |
| client_legal_name | string | ##'Юридическое лицо (клиент)'## |  |  |
| provider_legal_name | string | ##'Юридическое лицо (поставщик)'## |  |  |
| bad_debt | bool | ##'Безнадежный долг'## |  |  |
| contract_cost | real | const=c_cost |  |  |
| currency_type_id | string | const=c_currency_type | ✅ | lists.currency_types |
| id | string | ID |  |  |
| cost_currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| cost_value | real |  |  |  |
| id | string | ID |  |  |
| price_id | integer | ##'Прайс'## |  | prices |
| id | string | ID |  |  |
| cost | real | Сумма |  |  |
| cost_currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| start_date | date |  |  |  |
| end_date | date |  |  |  |
| sent_date | date |  |  |  |
| sent_type | string |  |  | common.document_sent_types |
| recipient | string |  |  |  |
| consignment_document_number | string |  |  |  |
| sent_messenger_service_id | integer |  |  | messenger_services |
| back_sent_type | string |  |  | common.document_sent_types |
| back_sent_messenger_service_id | integer |  |  | messenger_services |
| is_received | bool | const=polucheno |  |  |
| received_date | date | ##'Дата получения'## |  |  |
| docs_comment | string | const=vkpb_comment |  |  |
| access | string | const=bmlkskx7us |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
