# Схема: wtv_statement_pattern.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| path | string | ##'Путь'## |  |  |
| value | string | ##'Паттерн правильного ответа'## |  |  |
| statement_id | integer | ##'Сообщение учебной активности'## | ✅ | statements |
| doc_info | doc_info_base |  |  |  |
