# Схема: wtv_request_collaborators.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| request_id | integer | const=c_request | ✅ | requests |
| code | string | const=c_code |  |  |
| type | string | const=c_object_type | ✅ | common.exchange_object_types |
| request_type_id | integer | const=5rrpn7n7gm |  | request_types |
| status_id | string | const=c_status |  | common.request_status_types |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| person_org_name | string | const=yp7n0n4b8o |  |  |
| is_group | bool | const=32qypb03vz |  |  |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| workflow_id | integer | const=vw_title |  | workflows |
| create_date | date | const=c_create_date |  |  |
