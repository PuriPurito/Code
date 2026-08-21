# Схема: wtv_statement_actor.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| path | string | ##'Путь'## |  |  |
| name | string | const=c_name |  |  |
| object_type | string | ##'Тип объекта'## |  |  |
| statement_id | integer | ##'Сообщение учебной активности'## | ✅ | statements |
| mbox | string | ##'Адрес электронной почты'## |  |  |
| mbox_sha1sum | string | ##'Хэш адреса электронной почты'## |  |  |
| openid | string | ##'OpenID агента'## |  |  |
| account_home_page | string | ##'Адрес системы хранящей учетную запись'## |  |  |
| account_name | string | ##'Уникальное название учетной записи'## |  |  |
| doc_info | doc_info_base |  |  |  |
