# Схема: wtv_tagged_objects.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| catalog | string |  | ✅ | common.exchange_object_types |
| object_id | integer |  | ✅ | DefaultDb.GetOptCatalog(catalog + 's') |
| object_name | string |  |  |  |
| doc_create_date | date |  |  |  |
| require_acknowledgement | bool |  |  |  |
| tag_id | integer |  | ✅ | tags |
| tag_name | string |  |  |  |
