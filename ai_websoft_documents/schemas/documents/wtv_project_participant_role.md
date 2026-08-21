# Схема: wtv_project_participant_role.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| project_id | integer | const=c_project |  | projects |
| participant_num | integer | ##'Количество участников'## |  |  |
| provider_id | integer | ##'Продукт/услуга(CRM)'## |  | providers |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| access | string | const=bmlkskx7us |  |  |
