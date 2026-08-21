# Схема: wtv_event_type.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| custom_web_template_id | integer | ##'Шаблон карточки на портале'## |  | custom_web_templates |
| simpl_custom_web_template_id | integer | ##'Шаблон упрощенной карточки на портале'## |  | custom_web_templates |
| online | bool | ##'Мероприятие online'## |  |  |
| auto_start | bool | ##'Автоматический запуск мероприятия при входе'## |  |  |
| can_use_camera | bool |  |  |  |
| can_use_microphone | bool |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| changed | bool | const=izmenennyy |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
