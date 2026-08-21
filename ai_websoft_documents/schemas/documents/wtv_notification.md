# Схема: wtv_notification.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| recipients | string | const=zksmtam6fe |  |  |
| recipient_type | string | const=c_type |  | common.recipient_types |
| func_manager_type_id | integer | const=c_manager_type |  | boss_types |
| eval_str | string |  |  |  |
| eval_ids_str | string |  |  |  |
| notification_template_id | integer | const=l7y3l5h2nb |  | notification_templates |
| field_recipient_type | string |  |  |  |
| notification_system_id | integer |  |  | notification_systems |
| active | bool | const=7je8z5lelv |  |  |
| active_chatbot_script | bool | ##'Активный сценарий бота'## |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| notification_template_id | integer | const=l7y3l5h2nb |  | notification_templates |
| date_shift_selector | integer |  |  |  |
| date_shift | real |  |  |  |
| sender_selector | integer |  |  |  |
| sender_email | string |  |  |  |
| chatbot_id | integer | ##'Прикрепленный сценарий'## |  | chatbots |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| selector | string |  |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
