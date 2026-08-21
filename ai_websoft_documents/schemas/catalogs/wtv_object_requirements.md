# Схема: wtv_object_requirements.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=c_object_name |  |  |
| requirement_type | string | ##'Тип требования'## |  |  |
| requirement_object_id | integer | ##'Требуемый объект согласования'## |  | DefaultDb.GetOptCatalog( requirement_object_type + 's' ) |
| requirement_object_type | string | ##'Тип требуемого объекта согласования'## |  | common.exchange_object_types |
| sec_requirement_object_id | integer | ##'Дополнительный объект согласования'## |  | DefaultDb.GetOptCatalog( sec_requirement_object_type + 's' ) |
| sec_requirement_object_type | string | ##'Тип дополнительного объекта согласования'## |  | common.exchange_object_types |
| obligatory | bool | const=7df3q17dhk |  |  |
| requirement_value | string | ##'Требуемое значение'## |  |  |
| additional_param | string | ##'Дополнительный параметр'## |  |  |
