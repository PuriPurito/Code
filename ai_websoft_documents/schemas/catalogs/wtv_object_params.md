# Схема: wtv_object_params.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| is_enabled | bool | const=7je8z5lelv |  |  |
| start_date | date | const=c_begin |  |  |
| sec_object_code | string | ##'Дополнительный идентификатор'## |  |  |
| base_object_type | string | ##'Тип базового объекта'## |  | common.exchange_object_types |
| base_object_id | integer | ##'ID базового объекта'## | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| base_object_name | string | ##'Название связанного объекта'## | ✅ |  |
