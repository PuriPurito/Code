# Схема: wtv_site_owner_objects.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| site_id | integer |  | ✅ | sites |
| object_id | integer |  | ✅ | XQuery( catalog_name + 's' ) |
| catalog_name | string | const=s5j056rnbt |  | common.exchange_object_types |
