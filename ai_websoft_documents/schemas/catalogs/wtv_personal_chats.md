# Схема: wtv_personal_chats.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| name | string | const=c_name |  |  |
| chat_id | integer | const=c_event | ✅ | chats |
| person_id | integer | ms_tools.get_const('c_coll') | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| confirmed | bool | ms_tools.get_const('85uwftslkz') |  |  |
| prohibited | bool | ms_tools.get_const('zapretilobshenie') |  |  |
| partner_id | integer | ms_tools.get_const('sobesednik') | ✅ | collaborators |
| partner_fullname | string | const=lhbyv18qkm |  |  |
| partner_confirmed | bool | ms_tools.get_const('sobesednikpodt') |  |  |
| partner_prohibited | bool | ms_tools.get_const('sobesednikzapr') |  |  |
| last_message_date | date | ms_tools.get_const('dataposlednego_4') |  |  |
| last_view_date | date | ms_tools.get_const('vtlpb_last_use') |  |  |
| last_message_text | string | ms_tools.get_const('posledneesoobsh') |  |  |
| last_message_sender_id | integer | ms_tools.get_const('otpravitelposl') | ✅ | collaborators |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
