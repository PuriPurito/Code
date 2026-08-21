# Схема: wtv_sale.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string |  |  |  |
| name | string |  |  |  |
| create_date | date |  |  |  |
| status_id | integer | const=c_status |  | sale_statuss |
| number | string | const=8vx1rruccx |  |  |
| org_id | integer | const=c_org |  | orgs |
| client_org_id | integer | ##'Организация клиента'## |  | orgs |
| project_id | integer | const=c_project |  | projects |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| client_manager_id | integer | const=klient |  | collaborators |
| manager_id | integer | const=menedzher |  | collaborators |
| cost | integer | const=c_cost |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| id | string |  |  |  |
| name | string |  |  |  |
| sent_by_us | bool |  |  |  |
| sent_date | date |  |  |  |
| sent_type | string |  |  | common.document_sent_types |
| sent_messenger_service_id | integer |  |  | messenger_services |
| back_sent_date | date |  |  |  |
| back_sent_type | string |  |  | common.document_sent_types |
| back_sent_messenger_service_id | integer |  |  | messenger_services |
| comment | string |  |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
