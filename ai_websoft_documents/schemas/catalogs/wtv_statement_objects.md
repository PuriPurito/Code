# Схема: wtv_statement_objects.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| path | string | ##'Путь'## |  |  |
| object_id | string | ##'ID объекта'## |  |  |
| object_type | string | ##'Тип объекта'## |  |  |
| statement_id | integer | ##'Сообщение учебной активности'## | ✅ | statements |
| definition_type | string | ##'Тип активности'## |  |  |
| definition_more_info | string | ##'Информация об активности'## |  |  |
| definition_interaction_type | string | ##'Тип взаимодействия'## |  |  |
| context_activity_type | string | ##'Тип активности в контексте'## |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
