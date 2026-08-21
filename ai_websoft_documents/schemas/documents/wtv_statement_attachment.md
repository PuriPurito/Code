# Схема: wtv_statement_attachment.xmd

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
| doc_info | doc_info_base |  |  |  |
