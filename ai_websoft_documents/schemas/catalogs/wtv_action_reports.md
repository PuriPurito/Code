# Схема: wtv_action_reports.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| type | string | const=c_type |  | common.action_report_types |
| status | string | const=c_status |  | common.action_status_types |
| completed | bool | const=2uuz9x5nni |  |  |
| exchange_server_id | integer | const=orw34vhadx | ✅ | exchange_servers |
| object_id | integer | const=c_object | ✅ |  |
| data_file_url | string | const=c_file |  |  |
| last_upload_date | date | const=gxzdbjg2zl |  |  |
| create_date | date | const=vdb_aim_date | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
