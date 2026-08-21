# Схема: wtv_statement_component.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| path | string | ##'Путь'## |  |  |
| property_name | string | ##'Название свойства'## |  | common.statement_component_propertys |
| component_id | string | ##'ID компоненты'## |  |  |
| statement_id | integer | ##'Сообщение учебной активности'## | ✅ | statements |
| doc_info | doc_info_base |  |  |  |
