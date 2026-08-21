# Схема: wtv_sales.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| create_date | date |  |  |  |
| status_id | integer | const=c_status |  | sale_statuss |
| number | string | const=8vx1rruccx |  |  |
| org_id | integer | const=c_org |  | orgs |
| client_org_id | integer | 'Организация клиента' |  | orgs |
| project_id | integer | const=c_project |  | projects |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| client_manager_id | integer | const=klient |  | collaborators |
| manager_id | integer | const=menedzher |  | collaborators |
| cost | integer | const=c_cost |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
