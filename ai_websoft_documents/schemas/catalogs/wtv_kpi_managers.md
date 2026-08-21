# Схема: wtv_kpi_managers.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| object_type | string | const=c_object_type | ✅ | common.exchange_object_types |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| manager_type | string | const=c_object_type | ✅ | common.exchange_object_types |
| manager_id | integer | const=c_coll | ✅ | DefaultDb.GetOptCatalog( manager_type + 's' ) |
| manager_name | string | const=lhbyv18qkm |  |  |
| is_owner | bool |  |  |  |
| boss_type_id | integer | const=bzl22hevr5 | ✅ | boss_types |
