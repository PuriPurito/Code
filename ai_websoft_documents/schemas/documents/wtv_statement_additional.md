# Схема: wtv_statement_additional.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| path | string | ##'Путь'## |  |  |
| name | string | const=c_name |  |  |
| value | string | ##'Значение'## |  |  |
| statement_id | integer | ##'Сообщение учебной активности'## | ✅ | statements |
| doc_info | doc_info_base |  |  |  |
