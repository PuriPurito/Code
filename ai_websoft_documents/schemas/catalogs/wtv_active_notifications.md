# Схема: wtv_active_notifications.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| notification_id | integer | const=rg97wyr0hm |  | notifications |
| object_id | integer | const=gbjbbuq9rz |  |  |
| subject | string | const=vfb_subject |  |  |
| create_date | date | const=c_create_date | ✅ |  |
| last_send_date | date | const=s4a6pbfybx |  |  |
| send_date | date | const=ejkrnbdzkc | ✅ |  |
| recipient_person_id | integer | const=zksmtam6fe |  | collaborators |
| is_custom | bool | const=hf9g9rkh3r |  |  |
| status | string | const=c_status | ✅ | common.active_notification_status_types |
| send_counter | integer | const=c_attempt_num |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
