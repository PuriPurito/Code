# Схема: wtv_channel_provider.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| code_library_id | integer | ##'Библиотека программного кода'## |  | code_library |
| root_function_name | string | ##'Имя функции получения ленты'## |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
