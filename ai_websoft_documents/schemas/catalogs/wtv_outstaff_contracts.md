# Схема: wtv_outstaff_contracts.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| date | date |  |  |  |
| status | string | const=c_status |  | common.order_status_types |
| type_id | string | const=c_type |  | common.outstaff_contract_types |
| number | string | const=8vx1rruccx |  |  |
| contract_type_id | integer | const=169scjwqby | ✅ | contract_types |
| start_date | date | const=vkmb_start_action_date |  |  |
| finish_date | date | const=j87phjbjvh |  |  |
| outstaff_provider_id | integer | const=provaydervreme | ✅ | outstaff_providers |
| disp_name | string | const=org_disp_name | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
