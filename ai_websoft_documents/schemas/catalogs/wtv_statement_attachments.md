# Схема: wtv_statement_attachments.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| path | string | ##'Путь'## |  |  |
| usage_type | string | ##'ID использования'## |  |  |
| content_type | string | ##'Тип содержимого'## |  |  |
| length | string | ##'Длина данных'## |  |  |
| file_hash | string | ##'Хэш данных'## |  |  |
| file_url | string | ##'Адрес данных'## |  |  |
| statement_id | integer | ##'Сообщение учебной активности'## | ✅ | statements |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
