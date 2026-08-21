# Схема: wtv_personnel_events.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| event_status | string | const=statussobytiya |  | common.personnel_event_status_types |
| personnel_event_type_id | integer | const=c_personnel_event_type | ✅ | personnel_event_types |
| creation_date | date | const=c_create_date_event |  |  |
| date_processed | date | const=c_process_date_event |  |  |
| date_cancel | date | const=c_cancel_date_event |  |  |
| date_delete | date | const=78j2v2xgru |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
