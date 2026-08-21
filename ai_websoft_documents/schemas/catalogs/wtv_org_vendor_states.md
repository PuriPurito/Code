# Схема: wtv_org_vendor_states.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| vendor_status_id | integer | const=statusvendora |  | vendor_states |
| education_org_id | integer | const=8ep5fzi6uu |  | education_orgs |
| org_id | integer | const=c_org |  | orgs |
| vendor_status_type_id | string | const=vppb_state |  | common.vendor_status_types |
| start_date | date | const=c_start_date |  |  |
| recertification_date | date | const=c_finish_date |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
