# Схема: wtv_application_instance.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  | common.progress_types |
| application_id | integer | Приложение |  | applications |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
