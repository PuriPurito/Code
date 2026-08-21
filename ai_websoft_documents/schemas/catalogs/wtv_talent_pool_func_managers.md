# Схема: wtv_talent_pool_func_managers.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| catalog | string | const=c_object_type | ✅ | common.exchange_object_types |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( catalog + 's' ) |
| object_name | string | const=c_object_name | ✅ |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| is_native | bool | const=func_is_native |  |  |
| boss_type_id | integer | const=bzl22hevr5 | ✅ | boss_types |
